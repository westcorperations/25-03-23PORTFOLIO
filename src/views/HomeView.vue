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
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAOwAAADsAEnxA+tAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAFW5JREFUeJztnXl8VdW1x79r75MAItoiCsGBDDih1g7WViUBHPqstbUK3GDV2taqfb5Or6217RM8Tq120Npn60fbvrZOwA2I1latVQkRtK3SyZFK7g0qYbKCCgSSu/d6f9xMQHKH5CY3w/1+PnzgnrP3Outwf/ecPay9NhQoUKBAgQIFChQoUKBAgWGE5NuBQcsDL48paiou98aUg+6v6L4IIwyyt6J7o1IEINCEsMMrW1B2CroVzFpnNcZeiThnHLozn7dREEA6omqLzJr3OPVTxfMhRCYD5cD+ObCuIGtBY4iswusKZ/1TzKp4JQe2M6IggC4oisbf61Q/LiJTgROAMf3swnrgKVWW+UAfYGb5mr66UEEAbSyOTQq8uUhVzyP5Cx9AyLMq/k7fbO/mvEmbc2o5l8YGI0FNw4mqegVwJmDy7U8amlDudGp/wJxD6nNhcPgKIBo73CI3AWfk25Xs0QTC7U6L5hE5+M3eWBp+AlAVU9PwZYEbgRH5dqeXbET18666/MGeGhheAoi+UGx1r98gzMm3KzlERbkmUV0W9qTyQH/n5Y5QjWXUvUPsywcQFa4yNfFv9qTysBGAObLhKyAz8+1HXyHK94KahhOzrTc8BPCr+EgR5ubbjT7GqOp3s67UF54MNIK9/FTg3fn2ox+oYkn8XdlUGBYCUGRsvn3oJ4QWyUroQdoStz9bxLvHlgfKeNDiHrvWzxgrG5tnlf8TwFpedj7fHvUL78C2te2fli4NmDEjkapC993ABfWHWWOvBD0L2CdnLvYbsshFSme3fbLRhmdAj8unR/3AbS5SdlnbBxuNN4DUOfz1RMpXdVWhy1eAXRi72BrzHOgFDMovf0+Md5cBzfn2ow9Z5xLN83Y7Ngb0Aov83dbEPt9VpT0EYBc2fA6RO4BB87jPhJY5Fc+AfBZw+falD9hiMB/nU4e/0c35kajcYaPxz+x+YlcBLI5NQvSnfeDggMBFSu9F9WzgrXz7kkPqrTFTWyKTVqYpJ8CtROsP6XxwFwFYJ1cAI3PsYN456OTrDqS1veOqyx90jvcCT+TXq17jUfmFG7Hzfc2zJr0AsP/0cO93n3rDvinqjA4wX+t8oEMAqgKc3Seu5hnvEjMnVIXzDzrhplEAnFvW4CJlp6AyS+ClPLvXE54w3n/YVZdezFlHvANJkQeeZSOamg9KVVF3+447BDD/X/sBE/rC24GAQLUrevuxA6eGh7Udc9WlixMvlh6NyEzQxwHNo4vp2ImyQJATXaTslGSbJsmEqvAMl0g8C7w/AzuHcPcr7Q37jnGAoGi/nLo7MDlRDc9PqApvGmkIG2rDHYTiHdwH3MeCVyuMTZyLykyB9+bbWZIN1mUqstjbYCHnHPTvzifHVV5fUkTLjcAFWVm1wVjgbegsACPCMBgsUSgSuGKnY87Eyqt/xHb9ZePKcDsAcw6p93AdcB3zVx9sbVCJ+BNVpVLgaPp+5HQn6LMisly9rnBStKKrgI+JVdcdrJr4KtJyCbB31lex0j7+k34kcKgiTFL0J4xm3sRp4W1G7V2v183tiMY9d/JrDu4l+Qei9fsGyPEemWyQMsWXK1IuyfjBVA2vrtgAxIGYqMTUaEyQVYnRLSu7DxMPTck0c5KovwgSn0Io6sFd78HwFUAH41SZ63BzS6rCZxHme8f9G5aHsV1KRSreSsAfgT/u8aB86JURbC7ei5FuHxwji7B7q/gxqE8IQVMLLW9hdQc7irdRdMjbRCSzsYjZUVuy6cX3iRJRpRr1h+S6kZKlAHSxc8GX8dqUspiRUTZwN6NEurQCX/WJ5nvQkb0alAkCpqj4B8ndTN9xKMcZw49KKsM1ItR6eCLAPv36+MNj1ES69jf5q90JbAZo6eHFS6eHI3fC0TimqjBDNrxYBbyrL1umWQlAMD/j3EMaMyi6WWpityrSlQB2+tmlP0Gk1/eVgBU22vA46Kze2toDYZLChQIXOhwlG15sYlr4oijPg7ykqmvVyFpRs77FFb/+xoor3snE7PgTwwMIzHjBH2xExoOWqTIFOGanpwKwSP/F6mUlAIUvsLjhJXbIjpQFi/wI9VzWzV2MMNGGL/n7Xr+Hpt7N0QVFeoSiJ/fGRhaMQvmAwgeSC3pAVAFHkW2ipCoE2EKyK9n2N0ARyYZa29/Q2tpWzX+vM9tXwGzrmE1RBo6nkLAIt9hEyy29bcZk/N/n8f30k2oLxshb8IlYyepHNVwCQtbl24d+QkcYl9W9DgsBjLD6OJC64To0eLKhNtySTYVhIYCG2nCLwPfz7Ucfo2L4n2wrDQsBADRuK7meZD9+aCJc2VgbLs+22rARACsvbfEjR58t8Pt8u5JjVODqdcvCrEPCYTgJANjw6OXbGsdPOUuQb0nPx2sGEm8IfLKxLgx7amBYCKCkMjx/wrSrZwBQE3GNdVfdCOZDwJP59azHeOAO1eIpjXXhb9sOllRd/ZWJ08MjsjE0EATggF+DPNZXFxDDWFF9ZGLV1Re1HWusm/e3dXVhFYaPAnV9de0c04xylxiOWlcXXrr+ye9sguQQ8oSq8JegP/YtxmZjsK8mg1qABDAqXUFBb0lEyr/eumz7bwLH7lbkbXITmVys6C9KqsJz1PBf62vDBoB1teEjwCMlJ183SRJujkc/LzA5B9fLHcJKVO7yCZ2/4alwY+dTEyqvmbbT+9sEjuyJ6b4QwJ8dPsI2s9GOlgdBT01ZWnkAABGVaHy3vrrOdpHyRXZh7PzWSOW0gsqAM8TzwoTKq28YafV/2/rN6564cg3JnAHfL5l2zVTUnwFUAh+k/yOkt4iw3HupC6wueb02XL17gZKqa49UcfNEfa9WO+dWACJ3u616MZ+t2AGg0dijgqQQgGxNyPY/AfDAy2PYyQc6nVS3TX4H4KrL7y6KrnnJo/eDpox5y5C9RPSanZ7LJ1aFd4jhx2trw9fbrrtu2bwnaW0fHHTCTaMSwdbjMX6awDEo5QIVmn0MQHesB+oFVqOyUlTq1i73z0HY5ZDuxMprTvLivwnuTNHev8JzJQCvwrf97NKOwZbFa8rF+ctS1AH8MiJHNQPYHcXTdwtyEDtafuBC/Qqh+JbIpJVE4x+0sBjIehl0N4xR+Lp6/rukKnwapEaM3tNYG7bH17/+9NeagGWtf9qZOD0c5xKmwlotV3SMetkXGInoaIF9RRipkFBPE8J2UXkLtAnDdvFsNBBrGTW6fsOjl29L52TJyddNIuE+CXqh4t+Xy2mNXAjgHYQL/OyyB9qN1sQq1flFwAGpKirSaWDGnLbn9I5+0U5pmOyWxM/l7LItRMrWu4deOdluC36G8rkc+N5+ceAk0JPUc2NJZbhUDEu9p3b9hCkru4oDaBXJG8Cfc+gHAONOunFMYJsqDcxQOJlEIpNgzx7RWwHUW2POaotLB7DR+CWq3Arp5/oCYx5rW6sloqd1M7t3etDCXxILGs5iTulLnHHoTgcX2Wj8z5DZdbJkBMLpqpwuAiUbXnybyvAvCM8L8rxXfS7hR72U6fx/OsZVXl9SbFuOUifHqOjRIhyLNh0LBP0xWdwbAdQ5ErPcrEM3AbB0aWA3ld0M+sUM6zc2zzzkRQCirx2oJLrtvyocao3+iYWx89sSIrlI2R1BTaxBVRbQt9Ov+yCcCpyqKCK0zf+/DawVWK/CWvVsRthuhGZUtqnSrBAYwSj6LgWRpJ9t4fcHAiXQMkI9IJqcse7nEIGeCuAOt/nfX+TS45KjafeuGmc3FdeATs/YgvJYW1SQlcRHMrjxfRBZYhbG/8dXl90IkJhd/ijR1ccH2AcUpvTkRnrBPsA+CkfS+u0CJGM8WgNG6Pg+B2o2rmxbkc2oXuIiZZe2fflFCxreb4PivwLTs7Ik2jHw4/WUDGtZEW6wNfFf86t4cglbZPLqBP5E4KFdi+roThfLyeN6MGDEJ+81udJrr7Tls7C9TVRPc9XlP287YKPxam/0SeDgLP1UZ81j7Y5Kqq5iV7W50I5mKYsbSgCIVLzlKP0Eyu0dRWhfBOlUns3Sv0GJQmPjcpLd2ZqG8WSwzjNzAYgsSVSXtw+Z2pr4HGA+GahsT0flBWaWrgMoXhw/BhifrQ3gw9bpU0RfSMbZRcQ5IWx3F6Ywf/XBABvq5j0nsLQH1xhUiMqtbeMHVvmPTOpkLgDVqdy7alzbRzeuYZHAT7L2EjDa8fhPqDmtJzaATSL6aSJHbW23K5zV6bwEQXBx+ydn/5NksOZQ5Zmxb+qPgNanKpdmUimbV0CpDYr/XLxg9dEAzJiRSETKvorKRSRj4jOmc/9fNM1QcZf1+buz+sHE7PLkbJ6qmIWxuaLctks51a+1rYdvXDF3lRrOBoZee0B4IWH4xAsvhMlBtZqGCMk092nJthFY7ox9ytbE239prrr0/0TkZJJDmpnQ7GRb8lXy0CsjgKrsXJBFfseoqe059O9cP9rWrFkoItewZ2N7tMXUtF6H9bVhrWCmiZKTTNsDhIdGCFM31YbJ//9F9YdCR1soHT0ZSx6DsiSoid9AqAYgMbv0KUdwHPBMmroAT7c9toN3ik4k8zaEinCje3FSNZ+ekBw+jb52oB25oxZ0dop6x9utwZK2XkNj3by/NftR72t9WgzmdDGbVeSydXXhme2BoItjk6w3D5PFPEVPJxNElSvslDULuHN9srsVOXitI5iGMD9VRe3c/TM+w8e/bEU5JzG77FuEybj3IFo/1ZL4a4aZvz5qR/MI98bGA7yx4op3Gp8MLzPefAB4gIGdF2B3tiPcLIbD1i+76jZafQ+iDSdYJyuAimyM9XI2SWebkU3LWRybBEDk4CY3q/Q8hW9D14vNresI/FCVTBqAMesTJ7jqsvvbbdTEPq+Yx0kz17Ab02wgfw2i8dPbDqxdPu8f6+rCT3rDexBuJvPXWL8j8JyqfNMnKFu3LPxa+4TV0qWBicYuV7SW5OhitnZbWRQ/wvoep0vZKKKz2htlgK2pPxM1C4BOAzJscZSOIyKO6GtjLYmNQKoIlmUuKJrZnhhh6dLAbiy7CdEv9dDPJELUJbiCc8sadjk+PQwmqJwmqucDHyX/6WXjKEuMmjvXLp/3j91PBtH4NA+3dBFEkxKHlBMpjUPuBADJHHxfcpGyO9odXBgPVbiqU5klLlJ2DoCNxmaB1KSwpy4o2r/9y4++NtbSEgXJdNQwvb/Kr5y4HxKZvEfABcD4qWG5sZyKZyrCNDoNLvURMZQVGJZ7tX/cUDc33lWhIBqfpsiVaYNtuqGzAHIZEFIM3G4Xxo51W978Kpce16KiB3XWmHaOy1c5Nc0AuRQndk5shn8XL1pzlPOJB0Cyer+l9Ve41GIvJhr/A8jP3TZ9mM+WtS98bc0RcEfrHyZUfnd/tc0VxkuFilYYpVyVCoS9Sc4NjCYZtdQ5hK1tseh2hSYR3kJ5E6jXZCBIzHhT3xz4+k214Va6495V44wdUY3wBUWPzlWzJZdPgM5GVymyCXTqbmfOcZHSJaiKrWmoB8rSmHoT9GmQGfRgxLEHvJUMUdPfOyl6rDf78ew/Pdx731FjW1Y//OWebwy54NUKY9xHBM4CPQUkJz/YvnoFpEXgZUXnosxAJE20UN5xIH9DeRrhT87oX/HbY20RTDnn7lf2KSouPtSJfki8fgjhJLJs0WdK3gQwBHDAa6D1qKxWdLXAqyLmDTFsbhF5C+e302J2/dWblr2xjCjCjFWVdyu6v0KZIJMRJpOMQs6mR9PLm+ibNsBwwAKlIKUIp0jr70dR1INtey8X7d4DTnZ0PLT+5CRN86f/GAgLQwrkkYIAhjkFAQxzCgIY5hQEMMwpCGCYUxDAMCfbcYBNAr/02nexdUb0AMVcAtpVFuwGEbnLe025nk6EScBFZL+q1yH8Rj3/SukjjEKYo3B4F6d3gvxcVV/v4lzfYjCiehLIxzKtkm2iyMsSkfJF2fqVDR4w0firAj/e/ZxBq1tml/0lEzvBwvg7KmS3obJyp4uUXZSumAdY8Opd1rg9ZhEF/WEiUnZlVtfNJd3nWeiS7F4BImN65FS2iHZ5HRWb8fVVyN7XLO6vyLhuykr2+ftzSW2tNVlMnGU7F9CEcD/al5G1uh9wVjczX1tQfouQOlcxeiDIGfRoRZY8BhpLU6gY+Biwf1cXB34H5CU7qcLx6XY76c1cwCiUc3vsXUak/M7ehfDpXtpIQ8+CLHa7+Md7aaNXF8+GQi9gmFMQwDCnIIBhTkEAw5yCAIY5BQEMc7LtBv7BeveN5qKi7b26aksiCKy9WFW/0U2J+xxmLjZdfz//BM4fpnAPMLa7Mgp/t8Zf3CJBt1HGRc7v4+GnpEqBp9zuRG/G2m4TXduEHoHoPXRsX5OSrAaCBDklESnNza7bD70ywm4Nmuii62owx2WwHfqAwdbEf5kybZ3qJZ0zq3RrZ2HDTES7HWp3gRvPOZM3dne+3U604U7QbreT7TwQlNUrQEXPa1tq3StCNXabvYBuxi1U/fnc/myu07/1DfPjpSipVyuJzOq8YXOXPNi4F0J1qiLG2c8Q1dTJoBevKQdmpCzT2bX2fxXCwocNPX4CFBh6FAQwzOkQgB8A21gW6B9cx3fdIYDAb86LMwX6H5do7452COCfFW/Quvt1gSHNes4/9O22Dx0CCMWjPJgXlwr0H207tLSySyPQWb4Hmuhfjwr0I81O3A87H9i1FzCr7GVVcxUFhiSqXL57Opw9uoE+Mul7AtcwuFKnFUiNV+E7vrpsj9S+3YaQBdH6qYq5lmQmz8J4weDEgSw1Rq9smVXW5dY26WMI742NDwJzlIrfL+fuFegzxJs3EtLyPJHWHV0KFChQYA8GSqqanDP+Iz8YbXdse1yld3mQRGlhG6c0rgx7FwQzQBmyAgAoqQwfRjg9fcnuEfh9Y114Zq58GmgM6da9Gvlt+lJpbAi9tjGQGdICEDW1vbaRsMvSlxq8DGkBrKtzq4DevLu3Na6YmzJXwGBnSAsAQq/QZSbwDPkXQ3xEdIgLAExyg+ee0pu6g4IhLwAPabdnT8GQ7Pp1ZsgLgN6lmU+78+ZgZ8gLQFKs2MmA3tQdFAx5AZBMxd4jBA7LpSMDkSEtgANOvrYCepAsqhWFfcdXXZtuV5NBzZAWQNDiMl4i1R1W/PQcuDJgGdICwOyymXSPUNVe2xjIDMbJIBk/9ZrjbeBTPtq9p1hgCdlnC92dZoWzjSHlXkHe8fb6J8NnGGQDR4NOABMrw6tVmJdvP7pC4OrGujDMtx/ZMOheAd4M3Ja5ly5zBw9oBt2mUVa43CsbSG7QOJBossIP0xcrUKBAgQIFChQoUKBAgQIF8sb/Ayna3DT3Rzg6AAAAAElFTkSuQmCC',
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