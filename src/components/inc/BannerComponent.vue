<template>
    <div>
        <section class="grid lg:grid-cols-2  mt-4 mb-10  px-4">

            <div class="flex flex-col justify-center ">
                <div class="mb-3">
                   
  
                        <h2 class="md:text-4xl text-xl font-bold leading-7  text-primary-100 mb-0">I'M A</h2>
                           <h2 class="md:text-4xl text-xl font-bold leading-7  text-primary-100 mb-0"> <span class="typed-text">{{ typeValue }}</span>
                            <span class="blinking-cursor md:text-4xl text-xl text-primary-100">|</span>
                            <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
                           </h2>

                      
                    
                    <h2 class="md:text-4xl text-xl leading-7 font-bold text-primary-100 ">HIRE ME</h2>
                </div>

                <div class="mb-3">
                    <p class="text-base  tracking-wide font-bold  text-secondary-100 ">
                        Lets work Together,

                    </p>
                    <p class="text-base font-bold text-secondary-100  tracking-wide leading-7">
                        Building Beautiful and Functional Webapps.

                    </p>
                </div>
                <div class="my-3">
                    <button
                        class="bg-primary-100 text-white rounded-md hover:bg-primary-50 hover:shadow-md hover:shadow-secondary-50 px-20 py-2">Resume</button>
                </div>

            </div>
            <div class="border-y border-l bg-secondary-50 rounded-sm  border-primary-50">
                <img src="@/assets/images/img1.jpg" alt="banner">
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