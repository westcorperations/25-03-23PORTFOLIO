<template>
    <div>
        <header class=" bg-white md:my-10 md:mr-0 md:ml-8 shadow-md shadow-secondary-50">
            <nav class="flex justify-between items-center ">
                <div class="logo w-40 py-2 "><img src="@/assets/images/logos/cover.png " class="object-cover" alt="logo" />
                </div>
                <div class="hidden lg:flex justify-start py-2">
                    <a href="#" class="px-4 text-secondary-100 font-semibold text-base">Home</a>
                    <a href="#" class="px-4 text-secondary-100 font-semibold text-base">Service</a>
                    <a href="#" class="px-4 text-secondary-100 font-semibold text-base">Portfolio</a>
                    <a href="#" class="px-4 text-secondary-100 font-semibold text-base">About</a>
                    <a href="#" class="px-4 text-secondary-100 font-semibold text-base">Contact</a>
                </div>
                <div class="block lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                        class="bi bi-justify-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M6 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                    </svg>
                </div>
            </nav>
            <section class="grid lg:grid-cols-2 md:px-20 px-10  ">

                <div class="flex flex-col justify-center ">
                    <div class="mb-3">
                        <h2 class="md:text-5xl text-2xl font-extrabold text-primary-100 ">I'M A FULLSTACK DEVELOPER</h2>
                        <h2 class="md:text-5xl text-2xl font-extrabold text-primary-100 ">HIRE ME</h2>
                    </div>
                    <div class="mb-3">
                        <p class="text-base font-bold text-secondary-100 ">
                            Lets work Together,

                        </p>
                        <p class="text-base font-bold text-secondary-100 ">
                            Building Beautiful and Functional Webapps.

                        </p>
                    </div>
                    <div class="mb-3">
                        <button
                            class="bg-primary-100 text-white rounded-md hover:bg-primary-50 hover:shadow-md hover:shadow-secondary-50 px-20 py-2">Resume</button>
                    </div>

                </div>
                <div class="border-t border-l rounded-sm  border-primary-100">
                    <img src="@/assets/images/img1.jpg" alt="banner">
                </div>

            </section>
        </header>


    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>