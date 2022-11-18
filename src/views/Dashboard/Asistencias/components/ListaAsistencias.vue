<script>
import {
  MagnifyingGlassIcon,
  PlusIcon,
  TableCellsIcon,
} from "@heroicons/vue/24/solid";
export default {
  data: () => ({
    table: [],
  }),
  methods: {},
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
      >
        <option value="">Semestre</option>
      </select>
      <select
        class="bg-gray-100 focus:outline-none rounded-lg px-4 py-2 text-sm"
      >
        <option value="" class="bg-blue-50">Ciclo</option>
      </select>
      <button
        class="text-white text-sm whitespace-nowrap rounded-lg px-4 bg-green-600 py-2"
      >
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
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Fecha Del Viernes</th>
          <th>Código</th>
          <th>¿Asistió?</th>
        </tr>
      </thead>
      <br />
      <tbody>
        <tr v-for="a in table">
          <td>{{ a.id }}</td>
          <td>{{ a.nombre }}</td>
          <td>{{ a.apellido }}</td>
          <td>{{ a.fecha }}</td>
          <td>{{ a.codigo == true ? "SI" : "NO" }}</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
