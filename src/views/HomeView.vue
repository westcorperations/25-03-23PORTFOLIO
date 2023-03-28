<template>
    <div class="max-w-full px-5 md:px-16">

        <!-- service section -->
        <section class=" my-10 lg:my-20  ">

            <h2 class="text-2xl leading-6 md:text-4xl text-primary-100 tracking-widest font-bold  text-center">My Services
            </h2>
            <p class="text-secondary-100 md:text-base text-sm p-2  font-semibold tracking-wider text-center">I am specialized in the
                following skills</p>
            <div class="grid lg:grid-cols-2   ">



                <div class="my-20"   data-aos="zoom-in" data-aos-delay="50">
                    <img src="@/assets/images/img2.jpg" alt="serviceimg" class="w-full object-cover">
                </div>


                <div class="flex flex-col justify-evenly gap-y-10 items-center ">

                    <div class="flex  md:flex-row flex-col justify-center my-4 items-center"
                    
                      v-for="skill in skills" 
                      :key="skill.id"
                      data-aos="fade-right"
                      data-aos-delay="150">
                        
                        <div class=" rounded-3xl shadow shadow-primary-100 p-6 ">
                        <img :src="skill.icon" alt="vueimg" class="w-full object-cover object-center h-auto">
                        </div>
                        <div class=" text-center md:text-start px-16">
                            <h4 class="text-primary-100 text-base font-light md:text-base md:leading-loose leading-2  tracking-wide">{{  skill.title }}
                               </h4>
                            
                            <p class="text-secondary-100 text-xs md:text-sm tracking-normal  ">
                                {{ skill.desc }}

                            
                        
                              
                                    {{ skill.technology1 }} <br> {{ skill.technology2 }}
                                
                            
                            </p>
                           
                        </div>
                    </div>
                   
                   

                   




                </div>



            </div>





        </section>


        <!-- projects section -->
        <section class=" my-10 lg:my-20  ">
            <h2 class="text-2xl leading-6 md:text-4xl text-primary-100 tracking-widest font-bold  text-center">My Projects
            </h2>
            <p class="text-secondary-100  md:text-base text-sm font-semibold tracking-wider text-center">Heres my recent project</p>
            <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 my-6">
                <div v-for="project in paginatedProjects" :key="project.id"
                 class="flex  flex-col justify-center items-center rounded shadow-lg shadow-secondary-50">
                    <div class="border-b rounded-b-3xl border-secondary-50 ">
                    <img :src="project.image" alt="work1" class="w-full object-cover object-center">
                    </div>
                    <div class="text-center text-sm md:text-base p-3">
                    <p class="">{{ project.description }}</p>
                    </div>
                    <div class="p-4">
                    <button class="rounded border border-primary-100 hover:bg-primary-100 hover:text-white text-primary-100 px-6 py-1">View</button>
                    </div>
                </div>
            </div>

            <VuePaginate
  :page-count="Math.ceil(projects.length / perPage)"
  :click-handler="page => currentPage = page"
  :prev-text="'Prev'"
  :next-text="'Next'"
  :container-class="'pagination'"
  :page-class="'page-item'"  class="flex " />




            
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
          image: '../src/assets/images/projects/xpressfixing.png',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus dignissimos doloribus eum!'
        },
        {
          id: 2,
          title: 'Caoni',
          image: '../src/assets/images/projects/caoni.png',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus dignissimos doloribus eum!'
        },
        {
          id: 3,
          title: 'Lecheene',
          image: '../src/assets/images/projects/lecheene.png',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus dignissimos doloribus eum!'
        },
        {
          id: 4,
          title: 'ServerX',
          image: '../src/assets/images/projects/serverx.png',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus dignissimos doloribus eum!'
        },
        {
          id: 5,
          title: 'Bunker',
          image: '../src/assets/images/projects/bunker.png',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus dignissimos doloribus eum!'
        }
      ],
      skills: [
       { id: 1,
        title:'Frontend Development',
        icon: '@/assets/images/ux.png',
        desc: ' Building responsive UI for websites,  web applications and consumption af REST APIs',
        technology1: ' Vuejs,Tailwind,Bootsrap',
        technology2: ' HTMl,CSS,Javascript,Jquery.'
      },
       { id: 2,
        title:'Backend Development',
        icon: '@/assets/images/backend.png',
        desc: '  converting logic into secured and maintainable code, for building, Web applications and  REST APIs',
        technology1: 'Laravel,php,MySql.',
        technology2: ''
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