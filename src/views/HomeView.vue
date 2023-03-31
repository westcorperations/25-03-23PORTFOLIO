<template>
  <div class="max-w-full px-5 md:px-16">

    <!-- service section -->
    <section class=" my-10 lg:my-20  ">

      <h2 class="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight leading-6  text-primary-100    text-center">My
        Services
      </h2>
      <p class=" md:text-lg text-base p-2  font-semibold tracking-wider text-center">I am specialized in
        the
        following skills</p>
      <div class="px-6 py-12 md:px-12 text-gray-800 text-center lg:text-left">
        <div class="container mx-auto xl:px-32">
          <div class="grid lg:grid-cols-2   ">



            <div class="my-5" data-aos="zoom-in" data-aos-delay="50">
              <img src="@/assets/images/img2.jpg" alt="serviceimg" class="w-full object-cover" loading="lazy">
            </div>


            <div class="flex flex-col justify-evenly gap-y-5 items-center py-4">

              <div class="flex  md:flex-row flex-col justify-center pt-10 md:py-2 items-center" v-for="skill in skills"
                :key="skill.id" data-aos="zoom-in" data-aos-delay="50">

                <div class=" rounded-3xl shadow shadow-primary-100 p-6 ">
                  <img :src="skill.icon" alt="vueimg" class="w-full object-cover object-center h-auto" loading="lazy">
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
        </div>
      </div>




    </section>


    <!-- projects section -->
    <section class=" mb-10 lg:mb-20   px-4">
      <div class="px-6 py-12 md:px-12 text-gray-800 text-center lg:text-left">
        <div class="container mx-auto xl:px-32">
          <h2 class="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight leading-6  text-primary-100 text-center">My
            Projects
          </h2>
          <p class="md:text-lg text-base p-2  font-semibold tracking-wider  text-center">Heres my recent project
          </p>
          <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 my-6">
            <div v-for="project in currentPageProjects " :key="project.id" data-aos="zoom-in" data-aos-delay="50" class="flex  
              flex-col justify-center 
                               items-center rounded shadow-lg" style="background: hsla(0, 0%, 100%, 0.55); ">
              <div class="border-b rounded-b-3xl border-secondary-50 ">
                <img :src="project.image" alt="work1" class="w-full object-cover object-center" >
              </div>
              <div class="text-center text-sm md:text-base p-3">
                <h2 class="text-primary-100 tracking-wide">{{ project.title }}</h2>
                <p class="">{{ project.description }}</p>
              </div>
              <div class="p-4">
                <button class="rounded border
                           border-primary-100 hover:bg-primary-100
                            hover:text-white text-primary-100 px-6 py-1">
                  <a :href="project.link" target="_blank"> View </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <vue-awesome-paginate v-model="currentPage" :items-per-page="perPage" :total-items="projects.length"
        :on-click="onClickHandler" :max-pages-shown="perPage" />



    </section>

    <!-- logos display -->
    <section class=" mb-10 lg:mb-20   px-4">
      <div class="px-6 py-12 md:px-12 text-gray-800 text-center lg:text-left">
        <div class="container mx-auto xl:px-32">
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
      <div class="mb-12 lg:mb-0">
        <img
          src="@/assets/images/logos/vue.svg"
          class="img-fluid grayscale px-6 md:px-12"
          alt="vue - logo"
        loading="lazy"
        />

      </div>

      <div class="mb-12 lg:mb-0">
        <img
          src="@/assets/images/logos/laravel.png"
          class="img-fluid grayscale px-6 md:px-12"
          alt="laravel - logo"
        loading="lazy"
        />

      </div>

      <div class="mb-12 lg:mb-0">
        <img
          src="@/assets/images/logos/tailwind.svg"
          class="img-fluid grayscale px-6 md:px-12"
          alt="tailwind - logo"
        loading="lazy"
        />

      </div>

      <div class="mb-12 lg:mb-0">
        <img
          src="@/assets/images/logos/bootstrap.svg"
          class="img-fluid grayscale px-6 md:px-12"
          alt="bootstrap - logo"
        loading="lazy"
        />

      </div>
    </div>
</div>
</div>
</section>



    <!-- about -->

    <section class=" mb-10 lg:mb-20   px-4">
      <div class="px-6 py-12 md:px-12 text-gray-800 text-center">
        <div class="container mx-auto xl:px-32">
          <div data-aos="zoom-in" data-aos-delay="50" class="flex  flex-col justify-center 
                               items-center rounded " >
            <h2
              class="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight leading-6 py-4 text-primary-100 text-center">
              About Me
            </h2>
            <p class="text-xs md:text-base lg:text-lg text-secondary-100 tracking-tight">
              Hello, and welcome to my portfolio website! My name is Onwusione Ejike,
              and I am a full stack web developer with a passion for creating user-friendly and innovative websites and
              web
              applications.
              I have 2years of experience in the industry, and I love what I do.
            </p>

            <p class="text-xs md:text-base lg:text-lg text-secondary-100 tracking-tight">
              Throughout my career, I have had the opportunity to work on a variety of projects,
              ranging from small business websites to large-scale web applications.
              I have experience working with a wide range of technologies,
              including [Vuejs Laravel Tailwind,
              Bootsrap scss Html Css Javascript Jquery].
              I enjoy keeping up-to-date with the latest trends and tools in web development,
              and I am always eager to learn more.</p>


            <p class="text-xs md:text-base lg:text-lg text-secondary-100 tracking-tight">
              In this portfolio, you will find examples of some of my past work, as well as more information about my
              skills,
              experience, and approach to web development. I hope you enjoy browsing my website,
              and please don't hesitate to get in touch if you have any questions or would like to discuss a potential
              project.
            </p>

          </div>
        </div>
      </div>



    </section>

    <!-- contact me -->
    <section class="mb-32 text-gray-800 text-center">
      <div class="px-6 py-12 md:px-12 text-gray-800 text-center">
        <div class="container mx-auto xl:px-32">
          <div data-aos="zoom-in" data-aos-delay="50" class="flex  flex-col justify-center 
                               items-center rounded ">
            <h2 class="text-5xl font-bold tracking-tight leading-tight my-12">
              Let's stay in touch <br />
              <span class="text-blue-600">Join our social media</span>
            </h2>
            <div class="flex flex-wrap justify-center md:space-x-2">
              <!-- Facebook -->
              <button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light"
                class=" py-2.5 px-6 mb-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                style="background-color: #1877f2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="w-4 h-4 mr-2">
                  <path fill="currentColor"
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                </svg>
                Facebook
              </button>

              <!-- Twitter -->
              <button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light"
                class=" py-2.5 px-6 mb-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                style="background-color: #1da1f2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 mr-2">
                  <path fill="currentColor"
                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                </svg>
                Twitter
              </button>

              <!-- Google -->
              <button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light"
                class=" py-2.5 px-6 mb-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                style="background-color: #ea4335">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" class="w-4 h-4 mr-2">
                  <path fill="currentColor"
                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                </svg>
                Google
              </button>

              <!-- Instagram -->
              <button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light"
                class=" py-2.5 px-6 mb-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                style="background-color: #c13584">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-4 h-4 mr-2">
                  <path fill="currentColor"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
                Instagram
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Section: Design Block -->


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
    image: 'https://i.ibb.co/6mRrCw6/xpressfixing.png',
    description: 'An Ecormerce that sells and swap phones and accessories  using laravel and mysql',
    link: 'https://shop.xpressfixing.com.ng'
  },
  {
    id: 2,
    title: 'Caoni',
    image: 'https://i.ibb.co/FnHyYjF/caoni.png',
    description: 'A Hotel management system and online booking with point of sales and inventory system for kitchen and bar using laravel and mysql',
    link: 'https://caonihotel.com.ng'
  },
  {
    id: 3,
    title: 'Lecheene',
    image: 'https://i.ibb.co/0h74b2L/lecheene.png',
    description: 'A Fashion brand ecormerce with crm dashboard and bespock feature point of sale system in the admin made with laravel and mysql',
    link: 'https://lecheene.com'
  },
  {
    id: 4,
    title: 'ServerX',
    image: 'https://i.ibb.co/93rBGJH/serverx.png',
    description: 'A Landing page for servax coin made using Vuejs and bootsrap clent server crashed so im using my netlify version',
    link: 'https://servax-test.netlify.app'
  },
  {
    id: 5,
    title: 'Bunker',
    image: 'https://i.ibb.co/bdyvc0f/bunker.png',
    description: 'An ongoing Ecomerce project for selling groceries made with Vuejs , Tailwindcss and axios for consuming the api',
    link: 'https://hellobunker.com'
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
ul#componentContainer {
  display: flex !important;
  justify-content: center;
}

.pagination-container {
  display: flex;
  column-gap: 10px;
  justify-content: center;
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
}</style>