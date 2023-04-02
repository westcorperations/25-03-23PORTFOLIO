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
    <section class=" mb-10 lg:mb-20   ">
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
                <img :src="project.image" alt="work1" class="w-full  object-cover object-center" loading="lazy">
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
              <img src="@/assets/images/logos/vue.svg" class="img-fluid grayscale px-6 md:px-12" alt="vue - logo"
                loading="lazy" />

            </div>

            <div class="mb-12 lg:mb-0">
              <img src="@/assets/images/logos/laravel.png" class="img-fluid grayscale px-6 md:px-12" alt="laravel - logo"
                loading="lazy" />

            </div>

            <div class="mb-12 lg:mb-0">
              <img src="@/assets/images/logos/tailwind.svg" class="img-fluid grayscale px-6 md:px-12"
                alt="tailwind - logo" loading="lazy" />

            </div>

            <div class="mb-12 lg:mb-0">
              <img src="@/assets/images/logos/bootstrap.svg" class="img-fluid grayscale px-6 md:px-12"
                alt="bootstrap - logo" loading="lazy" />

            </div>
          </div>
        </div>
      </div>
    </section>



    <!-- about -->

    <section class=" mb-5 lg:mb-10">
      <div class="px-6  md:px-12 text-gray-800 text-center">
        <div class="container mx-auto xl:px-32">
          <div data-aos="zoom-in" data-aos-delay="50" class="flex  flex-col justify-center 
                                 items-center rounded ">
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
    <section class="mb-5 text-gray-800 text-center">
      <div class="px-6 md:px-12 text-gray-800 text-center">
        <div class="container mx-auto xl:px-32">
          <div data-aos="zoom-in" data-aos-delay="50" class="flex  flex-col justify-center 
                                 items-center rounded ">
            <h2 class="text-5xl font-bold tracking-tight leading-tight my-12">
              Let's stay in touch <br />
              <span class="text-blue-600">Contact me through</span>
            </h2>
            <div class="flex flex-wrap justify-center md:space-x-2">
              <!-- Facebook -->
              <a href="https://facebook.com/profile.php?id=100008512481849" target="_blank"> <button type="button"
                  data-mdb-ripple="true" data-mdb-ripple-color="light"
                  class=" py-2.5 px-6 mb-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                  style="background-color: #1877f2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="w-4 h-4 mr-2">
                    <path fill="currentColor"
                      d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                  </svg>
                  Facebook
                </button>
              </a>

              <!-- Twitter -->
              <a href="tel:+2348141836706"> <button type="button" data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  class=" py-2.5 px-6 mb-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                  style="background-color: #1da1f2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg>
                Phone
                </button>
              </a>

              <!-- Google -->
              <a href="mailto: abc@example.com"><button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light"
                  class=" py-2.5 px-6 mb-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                  style="background-color: #ea4335">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
</svg>
                 Email
                </button>
              </a>

              <!-- whatsapp -->
              <a href="https://wa.link/yb9ry1"><button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light"
                  class=" py-2.5 px-6 mb-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                  style="background-color: green">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
</svg>
                 Whatsapp
                </button>
              </a>
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
}
</style>