<template>
  <div class="h-full w-full relative">
    <p class="flex flex-col text-gray-600 h-16 absolute">
      <span class="font-bold text-3xl">Programar Proyección Social</span>
      <span class="font-light text-sm">Crear Nueva Convocatoria</span>
    </p>
    <div class="h-full pt-16">
      <div class="flex gap-16 h-full">
        <div class="w-1/2 h-full flex flex-col gap-6">
          <div class="grid grid-cols-2 gap-x-6 gap-y-4">
            <div class="flex flex-col col-span-2">
              <label for="" class="text-sm font-bold text-gray-600"
                >Lugar del evento</label
              >
              <input
                class="rounded-lg placeholder:text-sm placeholder:font-light bg-gray-200 w-full px-4 focus:outline-none py-2"
                type="text"
                placeholder="Ingrese Nombre de Lugar del evento"
              />
            </div>
            <div class="flex flex-col">
              <label for="" class="text-sm font-bold text-gray-600">
                Semestre
              </label>
              <select
                class="rounded-lg placeholder:text-sm placeholder:font-light bg-gray-200 w-full px-4 focus:outline-none py-2"
              >
                <option value="">Seleccionar</option>
              </select>
            </div>
            <div class="flex flex-col">
              <label for="" class="text-sm font-bold text-gray-600">
                Ciclo
              </label>
              <select
                class="rounded-lg placeholder:text-sm placeholder:font-light bg-gray-200 w-full px-4 focus:outline-none py-2"
              >
                <option value="">Seleccionar</option>
              </select>
            </div>
            <div class="flex flex-col col-span-2">
              <label for="" class="text-sm font-bold text-gray-600"
                >Fecha del evento</label
              >
              <input
                class="rounded-lg placeholder:text-sm placeholder:font-light bg-gray-200 w-full px-4 focus:outline-none py-2"
                type="date"
                placeholder="Ingrese Nombre de Lugar del evento"
              />
            </div>
            <div class="flex flex-col">
              <label for="" class="text-sm font-bold text-gray-600"
                >Hora Inicio</label
              >
              <input
                class="rounded-lg placeholder:text-sm placeholder:font-light bg-gray-200 w-full px-4 focus:outline-none py-2"
                type="date"
                placeholder="Ingrese Nombre de Lugar del evento"
              />
            </div>
            <div class="flex flex-col">
              <label for="" class="text-sm font-bold text-gray-600"
                >Hora Fin</label
              >
              <input
                class="rounded-lg placeholder:text-sm placeholder:font-light bg-gray-200 w-full px-4 focus:outline-none py-2"
                type="date"
                placeholder="Ingrese Nombre de Lugar del evento"
              />
            </div>
          </div>
          <div class="grid grid-cols-2 gap-6">
            <button
              class="rounded-lg w-full bg-gray-600 py-3 text-sm text-white"
            >
              Cancelar
            </button>
            <button
              class="rounded-lg w-full bg-secondary py-3 text-sm text-white"
            >
              Registrar Evento
            </button>
          </div>
        </div>
        <div
          class="w-1/2 h-full flex flex-col justify-center items-center gap-4"
        >
          <div class="flex flex-col text-center">
            <span class="font-bold text-gray-600 text-lg">Subir Archivos</span>
            <span class="font-light text-gray-600 text-sm"
              >Adjuntar .rar, .pdf, .doc, .mp3, .mp4</span
            >
          </div>
          <div
            class="w-full text-center border border-dashed border-primary-light bg-primary/10 rounded-lg p-4 flex flex-col justify-center items-center gap-1"
          >
            <folder-icon class="w-12 h-12 text-primary-light" />
            <span class="text-xs text-gray-400 font-light w-full truncate"
              >Seleccionar Archivos del escritorio</span
            >
          </div>

          <div class="flex flex-col w-full">
            <span class="font-bold text-sm text-gray-600">
              Archivos Subidos
            </span>
            <div class="grid gap-4">
              <div class="flex gap-2">
                <DocumentIcon class="w-6 h-6 text-gray-400" />
                <div class="w-full">
                  <span class="relative">
                    <span
                      class="text-gray-600 font-bold text-sm w-full truncate"
                    >
                      Archivo_ejemplo.pdf
                    </span>
                    <span class="right-0 text-xs text-gray-400">100%</span>
                  </span>
                  <div class="w-full h-1 bg-primary rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { FolderIcon, DocumentIcon } from "@heroicons/vue/24/solid";
export default {
  components: { FolderIcon, DocumentIcon },
};
</script>
