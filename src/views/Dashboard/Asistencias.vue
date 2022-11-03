<template>
  <div class="grid gap-4">
    <div
      class="rounded-lg bg-gray-100 shadow py-4 text-2xl font-bold text-secondary text-center"
    >
      Activate Sistemas
    </div>
    <div class="flex justify-between items-center w-full">
      <div class="flex gap-4">
        <select class="form-control w-36" v-model="form.semestre">
          <option value="">Semestre</option>
          <option v-for="s in semestres" :value="s.id">
            {{ s.name }}
          </option>
        </select>
        <select class="form-control w-36" v-model="form.ciclo">
          <option value="" hidden>Ciclo</option>
          <option v-for="c in ciclos" :value="c.id">
            {{ c.name }}
          </option>
        </select>
      </div>
      <button
        class="bg-secondary text-white rounded-lg px-4 py-2 shadow whitespace-nowrap"
      >
        Nuevo Registro
      </button>
    </div>
    <div class="w-full overflow-x-auto">
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Fecha Del Viernes</th>
                    <th>Correo</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Jezer Gabriel</td>
                    <td>Rázuri Pichén</td>
                    <td>Martes</td>
                    <td>jezerrazuri@upeu.edu.oe</td>
                    <td>
                       Eliminar
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    form: {
      semestre: "",
      ciclo: "",
    },
    semestres: [
      { id: 1, name: "Semestre 1" },
      { id: 2, name: "Semestre 2" },
      { id: 3, name: "Semestre 3" },
      { id: 4, name: "Semestre 4" },
      { id: 5, name: "Semestre 5" },
      { id: 6, name: "Semestre 6" },
      { id: 7, name: "Semestre 7" },
      { id: 8, name: "Semestre 8" },
      { id: 9, name: "Semestre 9" },
      { id: 10, name: "Semestre 10" },
    ],
    ciclos: [
      {
        id: 1,
        name: "Ciclo 1",
      },
      {
        id: 2,
        name: "Ciclo 2",
      },
    ],
  }),
};
</script>
