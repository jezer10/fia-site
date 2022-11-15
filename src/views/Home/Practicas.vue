<template>

    <div class="h-screen w-screen pt-20 fixed inset-0 bg-gray-100">
        <div class="h-full grid lg:grid-cols-2 md:grid-cols-1">
            <div class="hidden lg:flex flex-col">
                <div class="h-1/5 flex justify-center">
                    <div class="w-60"></div>
                    <div class="w-8"></div>
                    <div class="bg-blue-gray w-60 h-full rounded-br-[50px]"></div>
                </div>
                <div class="h-8"></div>
                <div class="h-3/5">
                    <div class="flex justify-center h-full">
                        <div class="w-60 relative">
                            <div class="bg-secondary absolute w-60 h-full rounded-tl-[50px] rounded-br-[50px]">
                            </div>
                            <div class="bg-gray-100 absolute w-60 h-5/6 rounded-tl-[50px] rounded-br-[50px]">
                            </div>
                            <div class="bg-white absolute w-60 h-4/5 rounded-tl-[50px] rounded-br-[50px]">
                            </div>
                        </div>
                        <div class="w-8"></div>
                        <div class="w-60 relative">
                            <div class="bg-intense-blue absolute w-60 h-[68%] rounded-tr-[50px]"></div>
                            <div
                                class="bg-gray-100 absolute w-60 h-60 rounded-full bottom-0 flex justify-center items-center">
                                <div
                                    class="bg-white w-48 h-48 rounded-full right-[15px] bottom-[135px] flex justify-center items-center">
                                    <img class="w-24 h-24" src="@/assets/images/ea-logo.png">
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="h-8"></div>
                <div class="h-1/5 flex justify-center">
                    <div class="bg-light-pink w-60 h-full rounded-tr-[50px]"></div>
                    <div class="w-8"></div>
                    <div class="w-60"></div>

                </div>
            </div>
            <div class="flex flex-col justify-center">
                <span class="mx-1 text-7xl text-center font-bold font-vidaloka">Prácticas Pre Profesionales</span>
                <span class="text-justify text-sm mt-5 px-32">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ea cupiditate
                    necessitatibus tempora,
                    totam iste
                    hic temporibus ipsa voluptatem laborum a nesciunt labore veniam vero laboriosam aliquid sit esse
                    eaque?
                    Fuga!</span>
                <button class="mx-28 mt-12 py-6 px-4 bg-secondary hover:bg-secondary text-white font-bold  rounded-xl">
                    Participar
                </button>
            </div>
        </div>



    </div>

</template>