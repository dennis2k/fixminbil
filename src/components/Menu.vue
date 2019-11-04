<template>
    <div class="fixed w-full top-0">
        <div class="flex relative items-center mx-auto font-medium text-yellow-100 z-10 bg-gray-800 py-4 px-10" style="max-width: 1200px">
            <div>
                <img src="../assets/logo.png" class="w-8" />
            </div>
            <div class="w-200 ml-6">
                <div>E. Johansen</div>
                <div>Autoelektro</div>
            </div>
            <div class="ml-6 flex-1 md:flex text-2xl justify-center hidden">
                <div class="pr-16 menu-item hover:text-blue-400">Services</div>
                <div class="pr-16 menu-item hover:text-blue-400">Kontakt</div>
                <div class="menu-item hover:text-blue-400">Om</div>
            </div>
            <div class="w-200 md:block hidden text-right">
                <div>Hverdage 08 - 16.30</div>
                <div class="hover:text-blue-400"><i class="fas fa-phone-alt mr-3"></i><a href="tel:75320566">75 32 05 66</a></div>
            </div>
            <div class="flex justify-end flex-1 text-3xl md:hidden">
                <i class="fas fa-bars"></i>
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