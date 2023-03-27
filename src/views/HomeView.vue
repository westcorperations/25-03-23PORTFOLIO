<template>
    <div class=" ">

        <!-- service section -->
        <section class=" my-10 lg:my-20  lg:px-20 ">

            <h2 class="text-2xl leading-6 md:text-4xl text-primary-100 tracking-widest font-bold  text-center">My Services
            </h2>
            <p class="text-secondary-100 text-base font-semibold tracking-wider text-center">I am specialized in the
                following skills</p>
            <div class="grid lg:grid-cols-2   ">



                <div class="my-20"   data-aos="zoom-in" data-aos-delay="50">
                    <img src="@/assets/images/img2.jpg" alt="serviceimg" class="">
                </div>


                <div class="flex flex-col justify-evenly gap-y-10 items-center">

                    <div class="flex  lg:flex-row flex-col justify-center my-4 items-center" data-aos="fade-right" data-aos-delay="150">
                        
                        <div class=" rounded-3xl shadow shadow-primary-100 p-6 ">
                        <img src="@/assets/images/backend.png" alt="vueimg" class="w-32 h-auto">
                        </div>
                        <div class=" text-center md:text-start px-16">
                            <h4 class="text-secondary-100 text-2xl font-light leading-loose tracking-wide">Frontend
                                Development</h4>
                            
                            <p class="text-secondary-100 text-sm tracking-normal  ">
                                Building responsive UI for websites, <br> web applications and consumption af REST APIs

                            </p>
                            <p class="text-secondary-100 text-sm tracking-normal ">
                                <span class="text-secondary-100 underline ">Technologies:</span> </p>
                                <p class="text-secondary-100 text-sm tracking-normal ">
                                Vuejs,Tailwind,Bootsrap,<br>HTML,CSS,Javascript,Jquery.
                                </p>
                           
                        </div>
                    </div>
                    <div class="flex  lg:flex-row flex-col justify-center my-4 items-center" data-aos="fade-right" data-aos-delay="150">
                        
                        <div class=" rounded-3xl shadow shadow-primary-100 p-6 ">
                        <img src="@/assets/images/ux.png" alt="vueimg" class="w-32 h-auto">
                        </div>
                        <div class=" text-center md:text-start px-16">
                            <h4 class="text-secondary-100 text-2xl font-light leading-loose tracking-wide">Backend
                                Development</h4>
                            
                            <p class="text-secondary-100 text-sm tracking-normal  ">
                                converting logic into secured and maintainable <br> for building,  Web applications and  REST APIs

                            </p>
                            <p class="text-secondary-100 text-sm tracking-normal ">
                                <span class="text-secondary-100 underline ">Technologies:</span> </p>
                                <p class="text-secondary-100 text-sm tracking-normal ">
                                Laravel,php,MySql.
                                </p>
                           
                        </div>
                    </div>
                   

                   




                </div>



            </div>





        </section>


        <!-- projects section -->
        <section class=" my-10 lg:my-20 lg:px-20 px-8 ">
            <h2 class="text-2xl leading-6 md:text-4xl text-primary-100 tracking-widest font-bold  text-center">My Projects
            </h2>
            <p class="text-secondary-100 text-base font-semibold tracking-wider text-center">Heres my recent project</p>
            <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 my-6">
                <div v-for="project in paginatedProjects" :key="project.id" class="flex p-6 flex-col justify-center items-center rounded shadow-lg shadow-secondary-50">
                    <div class="border-b rounded-b-3xl border-secondary-50 ">
                    <img :src=project.image alt="work1">
                    </div>
                    <div class="text-center p-4">
                    <p class="">{{ project.description }}</p>
                    </div>
                    <div class="p-4">
                    <button class="rounded bg-primary-100 text-white px-6 py-1">View</button>
                    </div>
                </div>
            </div>

            <vue-paginate
  :page-count="Math.ceil(projects.length / perPage)"
  :click-handler="page => currentPage = page"
  :prev-text="'Prev'"
  :next-text="'Next'"
  :container-class="'pagination'"
  :page-class="'page-item'" />




            
        </section>


    </div>
</template>

<script setup>
import { onMounted } from "vue";
import AOS from "aos";


onMounted(() => {
    AOS.init();
})

</script>

<script>
import VuePaginate from 'vue-paginate'
export default {
  components: {
    VuePaginate
  },
  data () {
    return {
      currentPage: 1,
      perPage: 3,
      projects: [
        {
          id: 1,
          title: 'Xpressfixing',
          image: '/src/assets/images/projects/xpressfixing.png',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus dignissimos doloribus eum!'
        },
        {
          id: 2,
          title: 'Caoni',
          image: '/src/assets/images/projects/caoni.png',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus dignissimos doloribus eum!'
        },
        {
          id: 3,
          title: 'Lecheene',
          image: '/src/assets/images/projects/lecheene.png',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus dignissimos doloribus eum!'
        },
        {
          id: 4,
          title: 'ServerX',
          image: '/src/assets/images/projects/serverx.png',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus dignissimos doloribus eum!'
        },
        {
          id: 5,
          title: 'Bunker',
          image: '/src/assets/images/projects/bunker.png',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus dignissimos doloribus eum!'
        }
      ]
    }
  },
  computed: {
    paginatedProjects () {
      const start = (this.currentPage - 1) * this.perPage
      const end = start + this.perPage
      return this.projects.slice(start, end)
    }
  },

}

</script>

<style lang="scss" scoped></style>