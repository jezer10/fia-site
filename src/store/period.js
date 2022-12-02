import { defineStore } from "pinia";
import { client } from "@/api/client";
export const usePeriodStore = defineStore("period", {
  state: () => ({
    semesters: [],
    cycles: [],
    selectedSemester: {},
    selectedCycle: {},
  }),
  actions: {
    setSemester(semester) {
      this.selectedSemester = semester;
    },
    setCycle(cycle) {
      this.selectedCycle = cycle;
    },
    async setSemesters() {
      const {
        data: { data },
      } = await client.get("academic/get-semesters");
      this.semesters = data;
      console.log(this.semesters);
    },
    async setCycles(semesterId) {
      this.selectedCycle = {};
      this.cycles = [];
      const {
        data: { data },
      } = await client.get(`academic/get-cycles/${semesterId}`);
      this.cycles = data;
    },
  },
  getters: {},
});
