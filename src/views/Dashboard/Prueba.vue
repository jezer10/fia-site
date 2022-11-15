<script>
import { client } from "@/api/client";

export default {
  data: () => ({
    saludo: "Holaaaa",
  }),
  mounted() {
    this.saludar();
  },
  methods: {
    async saludar() {
      const response = await client.get("users/get-all");
      console.log(response);
    },
  },
};
</script>

<template>
  <div class="bg-primary inline text-white px-4 py-2 rounded">Hello World</div>
</template>

<style></style>
