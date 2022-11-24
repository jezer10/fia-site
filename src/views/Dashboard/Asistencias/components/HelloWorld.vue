<template>

    <div>
        {{saludo}}
    </div>
    <button @click="hello()">
        Mostrar Saludo
    </button>
</template>

<script>
export default {
    data(){
        return {
            saludo:"Hel"
        }
    },
    methods: {
        hello(){
            console.log("Hello")
        }
    }
}
</script>

<style>


</style>