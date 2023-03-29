<template>
  <div class="max-w-full px-5 md:px-16">

    <!-- service section -->
    <section class=" my-10 lg:my-20  ">

      <h2 class="text-2xl leading-6 md:text-4xl text-primary-100 tracking-widest font-bold  text-center">My Services
      </h2>
      <p class="text-secondary-100 md:text-base text-sm p-2  font-semibold tracking-wider text-center">I am specialized in
        the
        following skills</p>
      <div class="grid lg:grid-cols-2   ">



        <div class="my-5" data-aos="zoom-in" data-aos-delay="50">
          <img src="@/assets/images/img2.jpg" alt="serviceimg" class="w-full object-cover">
        </div>


        <div class="flex flex-col justify-evenly gap-y-5 items-center ">

          <div class="flex  md:flex-row flex-col justify-center  items-center" v-for="skill in skills" :key="skill.id"
            data-aos="fade-right" data-aos-delay="50">

            <div class=" rounded-3xl shadow shadow-primary-100 p-6 ">
              <img :src="skill.icon" alt="vueimg" class="w-full object-cover object-center h-auto">
            </div>
            <div class=" text-center md:text-start ">
              <h4
                class="text-primary-100 text-base px-12 font-light md:text-base md:leading-loose leading-2  tracking-wide">
                {{ skill.title }}
              </h4>

              <p class="text-secondary-100 text-xs md:text-sm tracking-normal px-12 py-1 ">
                {{ skill.desc }}




                {{ skill.technology1 }} <br> {{ skill.technology2 }}


              </p>

            </div>
          </div>








        </div>



      </div>





    </section>


    <!-- projects section -->
    <section class=" my-10 lg:my-20   px-4">
      <h2 class="text-2xl leading-6 md:text-4xl 
              text-primary-100 tracking-widest font-bold  text-center">My Projects
      </h2>
      <p class="text-secondary-100  md:text-base text-sm font-semibold tracking-wider text-center">Heres my recent project
      </p>
      <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 my-6">
        <div v-for="project in currentPageProjects " :key="project.id" class="flex  flex-col justify-center 
                   items-center rounded shadow-md shadow-primary-50">
          <div class="border-b rounded-b-3xl border-secondary-50 ">
            <img :src="project.image" alt="work1" class="w-full object-cover object-center">
          </div>
          <div class="text-center text-sm md:text-base p-3">
            <p class="">{{ project.description }}</p>
          </div>
          <div class="p-4">
            <button
              class="rounded border border-primary-100 hover:bg-primary-100 hover:text-white text-primary-100 px-6 py-1">View</button>
          </div>
        </div>
      </div>

      <vue-awesome-paginate
      v-model="currentPage"
      :items-per-page="perPage"
      :total-items="projects.length"
      :on-click="onClickHandler"
      :max-pages-shown ="perPage"
      
    />



    </section>


  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { ref, computed } from 'vue';


import AOS from "aos";



const projects = [
  {
    id: 1,
    title: 'Xpressfixing',
    image: 'https://drive.google.com/uc?export=download&id=1QWMQtWs2yB6lI7-UrT3nCm0iQD0fIOw_',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus dignissimos doloribus eum!'
  },
  {
    id: 2,
    title: 'Caoni',
    image: 'https://drive.google.com/uc?export=download&id=1PM1ngt20UbY_OL5onKWVGLPQZKtSy039',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus dignissimos doloribus eum!'
  },
  {
    id: 3,
    title: 'Lecheene',
    image: 'https://drive.google.com/uc?export=download&id=1g834GBc1GoS2htw05q2ioLmJJrKZF_3G',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus dignissimos doloribus eum!'
  },
  {
    id: 4,
    title: 'ServerX',
    image: 'https://drive.google.com/uc?export=download&id=1mYcfn5q3qhyHDqhBrP4R1ae-72Dwtzrn',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus dignissimos doloribus eum!'
  },
  {
    id: 5,
    title: 'Bunker',
    image: 'https://drive.google.com/uc?export=download&id=1kvVR1XTyv1FViYp7mDzQpXiIAaWS62gH',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus dignissimos doloribus eum!'
  }
]
const skills = [
  {
    id: 1,
    title: 'Frontend Development',
    icon: 'https://drive.google.com/uc?export=download&id=1LlhHkZSVE5LvKlDtefP_ySL3faKVCxz5',
    desc: ' Building responsive UI for websites,  web applications and consumption af REST APIs',
    technology1: ' Vuejs,Tailwind,Bootsrap',
    technology2: ' HTMl,CSS,Javascript,Jquery.'
  },
  {
    id: 2,
    title: 'Backend Development',
    icon: 'https://drive.google.com/uc?export=download&id=1Po8Db9sdz9nLN6ABI1gRI1ZRtm5k9JIE',
    desc: '  converting logic into secured and maintainable code, for building, Web applications and  REST APIs',
    technology1: 'Laravel,php,MySql.',
    technology2: ''
  }
]
// define your per page items
const perPage = 3

// define current page state
const currentPage = ref(1)



const currentPageProjects = computed(() => {
  const startIndex = (currentPage.value - 1) * perPage
  const endIndex = startIndex + perPage
  return projects.slice(startIndex, endIndex)
})
const onClickHandler = (page) => {
    console.log(page);
  };

onMounted(() => {
  AOS.init();
})

</script>



<style>
ul#componentContainer{
  display:flex;
}
  .pagination-container {
    display: flex;
    column-gap: 10px;
    justify-content:center;
  }
  .paginate-buttons {
    height: 40px;
    width: 40px;
    border-radius: 20px;
    cursor: pointer;
    background-color: rgb(242, 242, 242);
    border: 1px solid rgb(217, 217, 217);
    color: black;
  }
  .paginate-buttons:hover {
    background-color: #d8d8d8;
  }
  .active-page {
    background-color: #3498db;
    border: 1px solid #3498db;
    color: white;
  }
  .active-page:hover {
    background-color: #2988c8;
  }

</style>