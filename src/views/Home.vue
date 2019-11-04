<template>
  <div class="w-full flex flex-col bg-yellow-100">
    <Menu />
    <div class="w-full mt-20 md:mt-0 home bg-contain md:bg-cover md:h-900p md:overflow-hidden">
      <div class="md:py-300p py-24 w-full max-w-container flex justify-center mx-auto">
        <div class="md:text-7xl text-4xl font-semibold">
          <h2 class="text-blue-400">Service og reparation</h2>
          <div class="text-yellow-100">af alle mærker</div>
        </div>
      </div>
    </div>
    <div class="max-w-container flex flex-col justify-center items-center mx-auto w-full py-24">
      <div class="w-900p flex justify-center">
        <div
          class="h-300p w-300p bg-blue-900 text-white flex flex-col items-center justify-center p-6 text-4xl text-center"
        >
          <div>Aircondition service</div>
          <div class="uppercase text-xl pt-6 italic tracking-wider">Keep it cool</div>
        </div>
        <div class="h-300p w-300p">
          <img src="../assets/frontcar.png" class="w-300p h-300p" />
        </div>
        <div
          class="h-300p w-300p bg-blue-400 text-white flex flex-col items-center justify-center p-6 text-4xl text-center"
        >
          <div>Igang siden 1999</div>
          <div class="uppercase text-xl pt-6 italic tracking-wider">Work work work</div>
        </div>
      </div>
      <div class="w-900p flex">
        <div class="h-300p w-300p">
          <img src="../assets/wheel.png" class="w-300p h-300p" />
        </div>
        <div
          class="h-300p w-300p bg-gray-800 text-white flex flex-col items-center justify-center p-6 text-4xl text-center"
        >
        <div>Høj kvalitet</div>
          <div class="uppercase text-xl pt-6 italic tracking-wider">til en venlig pris!</div>
        </div>
        <div class="h-300p w-300p">
          <img src="../assets/hands.png" class="w-300p h-300p" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Component, Vue } from "vue-property-decorator";
import Menu from "@/components/Menu.vue";
import { timerService } from "../core/timer.service";
@Component({
  name: "Home",
  components: {
    Menu
  }
})
export default class Home extends Vue {
  pendingDelay = true;

  async mounted() {
    await timerService.wait(200);
    this.pendingDelay = false;
  }
}
</script>
<style>
.home {
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../assets/car-service.jpg");
  background-repeat: no-repeat;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  transform: translateY(0);
  opacity: 1;
}

.slide-up-enter,
.slide-up-leave-to {
  transform: translateY(20%);
  opacity: 0;
}
</style>
