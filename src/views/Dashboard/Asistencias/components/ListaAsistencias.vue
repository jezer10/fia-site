<script>
import {
  MagnifyingGlassIcon,
  PlusIcon,
  TableCellsIcon,
} from "@heroicons/vue/24/solid";

import { client } from "@/api/client";

import exportXlsFile from "export-from-json";

export default {
  data: () => ({
    table: [],
    semestreAll: [],
    cycles: [],
    studentReport: [],
    fechasActivate: [],
    attendancesAll: [],
    arreglo: [],
  }),

  mounted() {
    this.getListAllSemestre();
  },

  methods: {
    async getAsistenciasActivate(code, cycle) {
      const response = await client.get(
        `/students/personal-report/${code}/${cycle}`
      );

      const { data } = response;

      const {
        id,
        code: codeStudent,
        names,
        idCycle,
        numAttendance,
        numFouls,
        numExcuses,
        attendances,
      } = data;
    },

    async getListAllSemestre() {
      const response = await client.get(`/academic/get-semesters`);

      const { data } = response.data;

      this.semestreAll = data;
    },

    async getListAllCycles(idSemestre) {
      const response = await client.get(`/academic/get-cycles/${idSemestre}`);

      const { data } = response.data;

      this.cycles = data;
    },

    async getReportStudent(idCycle) {
      const {
        data: { data },
      } = await client.get(`/students/reports-by-cycle/${idCycle}`);

      const attendances = [
        ...new Set(
          data
            .reduce((a, b) => {
              return [...a, ...b.attendances];
            }, [])
            .map((e) => e.date)
        ),
      ];
      this.fechasActivate = attendances;

      this.studentReport = data;
      const parsedDate = data.map(
        ({ id, idCycle, attendances, code, names }) => {
          const parsedDates = attendances.reduce((a, { date, attended }) => {
            const rto = {};
            rto[date] =
              attended == 1
                ? "Asistió"
                : attended == 2
                ? "Falta"
                : attended == 3
                ? "Justificado"
                : "";
            return { ...a, ...rto };
          }, {});

          return {
            "CODIGO ESTUDIANTE": code,
            "NOMBRE ESTUDIANTE": names,
            ...parsedDates,
          };
        }
      );

      this.arreglo = parsedDate;
    },

    async exportExcelStudentsAttendance() {
      const data = this.arreglo;
      const fileName = "Reporte Activate Sistemas";
      const exportType = exportXlsFile.types.xls;
      exportXlsFile({
        data,
        fileName,
        exportType,
      });
    },
  },
  emits: ["openRegister"],
  components: { MagnifyingGlassIcon, PlusIcon, TableCellsIcon },
};
</script>

<template>
  <div class="flex justify-between items-center gap-4 w-full overflow-x-auto">
    <div class="flex gap-4 items-center">
      <div class="relative flex items-center">
        <input
          type="text"
          class="bg-gray-100 focus:outline-none rounded-lg px-4 py-2 pr-10 text-sm"
          placeholder="Buscar "
        />
        <MagnifyingGlassIcon class="w-4 h-4 text-gray-600 absolute right-4" />
      </div>
      <select
        class="bg-gray-100 focus:outline-none rounded-lg px-4 py-2 text-sm"
        @change="getListAllCycles($event.target.value)"
      >
        <option value="">Semestre</option>
        <option :value="x.id" v-for="x in semestreAll">{{ x.semester }}</option>
      </select>
      <select
        class="bg-gray-100 focus:outline-none rounded-lg px-4 py-2 text-sm"
        @change="getReportStudent($event.target.value)"
      >
        <option value="" class="bg-blue-50">Ciclo</option>
        <option :value="c.id" v-for="c in cycles">{{ c.cycle }}</option>
      </select>

      <button
        v-if="studentReport.length > 0"
        class="flex gap-2 text-white text-sm whitespace-nowrap rounded-lg px-4 bg-green-600 py-2"
        @click="exportExcelStudentsAttendance()"
      >
        <span> Exportar Excel </span>
        <TableCellsIcon class="w-4" />
      </button>
    </div>
    <button
      @click="$emit('openRegister')"
      class="flex gap-2 rounded-lg text-sm bg-secondary px-4 py-2 text-white items-center"
    >
      <PlusIcon class="w-4 h-4" /><span>Registrar</span>
    </button>
  </div>
  <div class="w-full overflow-x-auto">
    <table>
      <thead class="border-dashed border-b-2">
        <tr>
          <th>Codigo</th>
          <th>Nombres y Apellido</th>
          <th v-for="f in fechasActivate">{{ f }}</th>
        </tr>
      </thead>
      <br />
      <tbody>
        <tr v-for="a in studentReport">
          <td>{{ a.code }}</td>
          <td>{{ a.names }}</td>
          <td v-for="at in a.attendances">
            <img
              v-if="at.attended == 1"
              class="w-2 h-2"
              src="@/assets/svg/asistio.svg"
            />
            <img
              v-if="at.attended == 2"
              class="w-2 h-2"
              src="@/assets/svg/falto.svg"
            />
            <img
              v-if="at.attended == 3"
              class="w-2 h-2"
              src="@/assets/svg/justificado.svg"
            />
          </td>
          <!-- <td>{{ a.codigo == true ? "SI" : "NO" }}</td> -->
        </tr>
      </tbody>
    </table>
  </div>
</template>
