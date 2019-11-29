<template>
    <div class="fixed w-full top-0 z-20 font-medium text-white z-10 bg-gray-800">
        <div class="flex relative justify-between items-center mx-auto py-2  md:py-4 px-4 md:px-10 max-w-full md:max-w-1200p">
            <div class="flex">
                <div>
                    <img src="../assets/logo.png" class="w-8" />
                </div>
                <div class="w-200 ml-6">
                    <div>E. Johansens</div>
                    <div>Autoelektro</div>
                </div>
            </div>
            <div class="ml-6 flex-1 md:flex text-2xl justify-center hidden">
                <a href="#service-desktop" class="pr-16 menu-item hover:text-blue-400">Services</a>
                <a href="#contact-desktop" class="pr-16 menu-item hover:text-blue-400">Kontakt</a>
                <a href="#about-desktop" class="menu-item hover:text-blue-400">Om</a>
            </div>
            <div class="w-200 md:block hidden text-right">
                <div>Hverdage 08 - 16.30</div>
                <div class="hover:text-blue-400"><i class="fas fa-phone-alt mr-3"></i><a href="tel:75320566">75 32 05 66</a></div>
            </div>
            <div class="flex justify-end text-sm md:hidden w-50">
                <div class="flex flex-col">
                    <a href="#service-mobile" class="menu-item hover:text-blue-400">Services</a>
                    <a href="#contact-mobile" class="menu-item hover:text-blue-400">Kontakt</a>
                    <a href="#about-mobile" class="menu-item hover:text-blue-400">Om</a>
                </div>
            </div>
        </div>
        <div class="w-full flex justify-between py-2 px-4 bg-gray-900 md:hidden">
            <div>Hverdage 08 - 16.30</div>
            <div>
                <i class="fas fa-phone-alt mr-3"></i><a href="tel:75320566">75 32 05 66</a>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue } from "vue-property-decorator";
import Component from "vue-class-component";

@Component({
    name: "Menu"
})
export default class Menu extends Vue {
}
</script>
<style lang="less" scoped>
.menu-item {
    cursor: pointer;
    transition: all 0.2s ease-in;
}
</style>