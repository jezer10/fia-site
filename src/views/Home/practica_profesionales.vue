<template>
    <div class="h-screen w-screen pt-20 fixed inset-0 bg-gray-100">
        <div class="h-38 w-full flex justify-center mt-12">
            <div class="h-36 w-11/12 bg-blue-900 rounded-xl flex justify-center content-center text-white relative items-center overflow-hidden hola">
                <img class="imgPPP opacity-25"
                src="../../assets/images/ppp.jpg" alt="">
                <span class="absolute text-5xl font-bold">Practicas Pre Profesionales</span>
            </div>
        </div>
        <div class="h-full grid lg:grid-cols-3 md:grid-cols-1 flex relative justify-center items-center">
            <div class="w-9/12 bg-black h-4/6 mb-52 ml-12 bg-gray-300 rounded-3xl">
                <div>
                    <span>Dirección</span>
                </div>
                <div>
                    <span>Responsable</span>
                </div>
                <div>
                    <img src="" alt="">
                </div>
                <div>
                    <div>
                        <span>Mg. Benjamin David Reyna Barreto</span>
                    </div>
                    <div>
                        <span>Area: </span>
                        <span>Coord. Practicas Pre Profesioanles</span>
                    </div>
                    <div>
                        <span>Celular: </span>
                        <span>987654321</span>
                    </div>
                    <div>
                        <span>Correo: </span>
                        <span>correo@upeu.edu.pe</span>
                    </div>
                </div>
            </div>
            <div class="w-9/12 bg-black h-4/6 mb-52 ml-12 bg-gray-300 rounded-3xl">
                <div>
                    <span>Postular</span>
                </div>
                <div>
                    <span>
                        Enviar documentos necesarios
                    </span>
                </div>
            </div>
            <div class="w-9/12 bg-black h-4/6 mb-52 ml-12 bg-gray-300 rounded-3xl">
                <div>
                    <span>
                        Mis Horas
                    </span>
                </div>
                <div>
                    <span>
                        Consulta tus horas de PPP
                    </span>
                </div>
                <div>
                    <input type="number" id="codigo" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ingrese su codigo Universitario" required>
                </div>
                <div>
                    <span>Total de horas: </span>
                    <span>0</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style>

.hola {

    width: 91.666667%;
    height: 144px;
    overflow: hidden;
    margin: 10px;
    position: relative;
}

.hola > .imgPPP {
    position: absolute;
    left: -100%;
    right: -100%;
    top: -100%;
    bottom: 200%;
    margin: auto;
    min-height: 100%;
    min-width: 100%;
}

</style>
