<template>
    <div>
        <section class="grid lg:grid-cols-2 items-center ">

            <div class="md:mt-12 lg:mt-0 lg:mb-0 ">
                <div class="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14"
                style="background: hsla(0, 0%, 100%, 0.55); backdrop-filter: blur(30px);">
                <div class="">
                   
  
                        <h2 class="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight   mb-0">I'M A</h2>
                           <h2 class="md:text-5xl text-4xl font-bold xl:text-6xl leading-7  text-primary-100 mb-0"> <span class="typed-text">{{ typeValue }}</span>
                            <span class="blinking-cursor md:text-5xl text-4xl xl:text-6xl text-primary-100">|</span>
                            <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
                        </h2>

                      
                    
                    <h2 class="text-4xl md:text-5xl xl:text-6x leading-7 font-bold text-primary-100 ">HIRE ME</h2>
                </div>

                <div class="mb-3">
                    <p class="text-lg  md:text-3xl xl:text-4xl tracking-wide font-bold   ">
                        Lets work Together,

                    </p>
                    <p class="text-lg md:text-3xl xl:text-4xl font-bold   tracking-wide leading-7">
                        Building Beautiful and Functional Webapps.

                    </p>
                </div>
                <div class="my-3">
                  <a class="inline-block px-7  py-3 mb-2 md:mb-0 md:mr-2 bg-primary-100 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-secondary-100 hover:shadow-lg focus:bg-secondary-100 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-50 active:shadow-lg transition duration-150 ease-in-out"
                  data-mdb-ripple="true" data-mdb-ripple-color="light" href="/resume.pdf" download="OnwusioneEjike"
                   target="_blank" type="application/octet-stream" role="button">Resume</a>
                  <a class="inline-block px-7 py-3 mb-2 md:mb-0 md:mr-2 bg-secondary-100 text-white
                   font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-primary-100 hover:shadow-lg focus:bg-primary-100 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-50 active:shadow-lg transition duration-150 ease-in-out"
                  data-mdb-ripple="true" data-mdb-ripple-color="light" href="https://github.com/westcorperations" target="_blank" role="button">Github</a>
                </div>
                </div>
            </div>
            <div class="  md:mb-12 lg:mb-0">
                <img src="@/assets/images/westlove.png" alt="banner" class="w-full rounded-b-2xl lg:rounded-b-lg shadow-lg" loading="lazy">
            </div>

        </section>
    </div>
</template>

<script>
export default {
  
  data: () => {
    return {
      typeValue: "",
      typeStatus: false,
      displayTextArray: ["Backend Developer", "Frontend Developer"],
      typingSpeed: 100,
      erasingSpeed: 100,
      newTextDelay: 2000,
      displayTextArrayIndex: 0,
      charIndex: 0,
    };
  },
  props: {},
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
  methods: {
    typeText() {
      if (this.charIndex < this.displayTextArray[this.displayTextArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.displayTextArray[this.displayTextArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.displayTextArray[this.displayTextArrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.displayTextArrayIndex += 1;
        if (this.displayTextArrayIndex >= this.displayTextArray.length)
          this.displayTextArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
};
</script>


<style lang="scss" scoped>
.blinking-cursor {
  // font-size:1.25rem;
  // color: gray;
  -webkit-animation: 1s blink step-end infinite;
  -moz-animation: 1s blink step-end infinite;
  -ms-animation: 1s blink step-end infinite;
  -o-animation: 1s blink step-end infinite;
  animation: 1s blink step-end infinite;
}
@keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #021b35;
  }
}
@-moz-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #021b35;
  }
}
@-webkit-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #021b35;
  }
}
@-ms-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #021b35;
  }
}
@-o-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #021b35;
  }
}


</style>