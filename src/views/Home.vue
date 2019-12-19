<template>
  <div class="w-full flex flex-col bg-white">
    <!-- Menu -->
    <Menu />
    <!-- Splash text -->
    <div class="w-full mt-28 md:mt-0 home bg-cover md:h-1080 md:overflow-hidden">
      <div class="md:py-300p py-10 w-full max-w-container flex justify-center mx-auto">
        <div class="md:text-7xl text-3xl font-semibold">
          <transition name="fade-drop" appear="">
            <div>
              <h2 class="text-blue-400">Service og reparation</h2>
              <div class="text-white" id="service-mobile">af alle bilmærker</div>
              <div class="text-white text-xl md:text-4xl uppercase pt-4 italic">- 40 års erfaring</div>
            </div>
          </transition>
        </div>
      </div>
    </div>

    <!-- Services mobile -->
    <div style="margin-top: -20px"></div>
    <div class="block md:hidden py-6 w-full">
      <div class="text-3xl w-full text-center">Services</div>
      <div
        class="py-4 px-4"
      >E. Johansens Autoelektro er din specialiserede mekaniker i Grindsted og omegn. Her får du fuld service og diagnose af bilens elektronik med avanceret testudstyr. Vi fixer også ethvert mekanisk problem – selv de lidt mere komplicerede af slagsen.</div>
      <div class="py-4 px-4">
        <div
          v-for="(item, index) in services"
          :key="item"
          :id="index === services.length -2 ? 'contact-mobile' : 'a'+index"
        >
          <i class="fa fa-check text-green-400 mr-4" />
          {{item}}
        </div>
      </div>
    </div>

    <!-- Kontakt Mobile -->
    <div
      class="w-full md:bg-cover contact grayscale flex items-center sm:hidden"
      :class="{'darken': isContactInFocus}"
    >
      <div class="w-full items-center justify-center px-6">
        <div class="bg-white p-6 w-full my-8">
          <div class="text-3xl">Kontakt</div>
          <div class="mb-2 mt-2">
            Hvis du ønsker at vide en pris på opgaven på din bil, så kontakt Flemming allerede i dag, og få et uforpligtende tilbud. Du kan bestille tid på telefon
            <a
              class="text-blue-700"
              href="tel:+4575320566"
            >75320566</a> eller udfyld kontaktformularen.
          </div>
          <div class="w-full">
            <div class>
              <div class="input-container mt-8" :class="{'-not-empty': name}">
                <div class="relative">
                  <input
                    name="name"
                    type="text"
                    class="outline-none border border-gray-400"
                    v-model="name"
                    required="required"
                  />
                  <label>Navn</label>
                </div>
              </div>
              <div class="input-container mt-8" :class="{'-not-empty': phone}">
                <div class="relative">
                  <input
                    name="phone"
                    type="text"
                    class="outline-none border border-gray-400"
                    v-model="phone"
                    required="required"
                  />
                  <label>Telefon / Email</label>
                </div>
              </div>
              <div class="input-container mt-8" :class="{'-not-empty': body}">
                <div class="relative">
                  <textarea
                    v-model="body"
                    name="whatiswrong"
                    class="outline-none w-full border border-gray-400"
                    style="height: 100px; padding: 12px"
                    required="required"
                  ></textarea>
                  <label>Problem</label>
                </div>
              </div>
              <div class="w-full flex justify-end">
                <div class="pr-2 flex-1" v-if="successMessage || errorMessage">
                  <div v-if="successMessage" class="text-green-600">{{successMessage}}</div>
                  <div v-if="errorMessage" class="text-red-600">{{errorMessage}}</div>
                </div>
                <button
                  class="px-4 py-2 bg-blue-600 text-white mt-4 hover:bg-blue-400"
                  @click="sendMail"
                >Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- About mobile -->
    <div class="w-full flex flex-col items-center pt-20p pb-40p md:hidden">
      <div class="text-3xl" id="about-mobile">Om</div>
      <div class="pt-3 px-4 w-full">
        Hvis du er på udkig efter en mekaniker med erfaring, og ønsker at din bil er i trygge hænder, så kig forbi E. Johansens Autoelektro i Grindsted.
        <br />Indehaveren af E. Johansens Autoelektro, Flemming Kristensen, har mere end 40 års erfaring som mekaniker.
        <br />Han udfører alle typer opgaver – uanset bilmærke. Få fixet din bil hos E. Johansens Autoelektro og bliv godt kørende med en kvalitetsbevidst og professionel service af din bil.
      </div>
      <div class="pt-2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10680.076639074025!2d8.971584964698524!3d55.75486211407749!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2db25eb9fc047884!2sE.%20Johansens%20Autoelektro%20v%2FFlemming%20Kristensen!5e0!3m2!1sen!2ses!4v1575067667119!5m2!1sen!2ses"
          width="320"
          height="300"
          frameborder="0"
          style="border:0;"
          allowfullscreen
        ></iframe>
      </div>
    </div>

    <!-- Boxes - desktop -->
    <div
      class="max-w-container flex flex-col justify-center items-center mx-auto w-full py-24 hidden md:block"
    >
      <div class="w-full flex justify-center image-zoom-container">
        <div
          class="h-300p w-300p bg-blue-900 text-white flex flex-col items-center justify-center p-6 text-4xl text-center"
        >
          <div>Aircondition service</div>
          <div class="uppercase text-xl pt-6 italic tracking-wider">Keep it cool</div>
        </div>
        <div class="h-300p w-300p img-hover-zoom--quick-zoom overflow-hidden">
          <img
            src="https://res.cloudinary.com/dv6mzgcxx/image/upload/c_fit,h_300,w_300/v1576755636/croppedflemming_ppqs0r.jpg"
            class="w-300p h-300p"
          />
        </div>
        <div
          class="h-300p w-300p bg-blue-400 text-white flex flex-col items-center justify-center p-6 text-4xl text-center"
        >
          <div>Igang siden 1999</div>
          <div class="uppercase text-xl pt-6 italic tracking-wider">Work work work</div>
        </div>
      </div>
      <div class="w-full flex justify-center image-zoom-container">
        <div class="h-300p w-300p img-hover-zoom--quick-zoom overflow-hidden">
          <img src="../assets/wheel.png" class="w-300p h-300p" />
        </div>
        <div
          class="h-300p w-300p bg-gray-800 text-white flex flex-col items-center justify-center p-6 text-4xl text-center"
        >
          <div>Høj kvalitet</div>
          <div class="uppercase text-xl pt-6 italic tracking-wider">til en venlig pris!</div>
        </div>
        <div class="h-300p w-300p img-hover-zoom--quick-zoom overflow-hidden">
          <img
            src="https://res.cloudinary.com/dv6mzgcxx/image/upload/c_fit,h_300,w_300/v1576756092/hands_dlr7nr.jpg"
            class="w-300p h-300p"
          />
        </div>
      </div>
    </div>
    <!-- Kontakt desktop -->
    <div
      id="contact-desktop"
      class="w-full bg-contain md:bg-cover services grayscale md:flex items-center hidden"
      :class="{'darken': isContactInFocus}"
      style="height: 800px"
    >
      <div class="max-w-container flex flex-col mx-auto w-full items-center justify-center">
        <div
          class="bg-white p-40p w-700p"
          @mouseenter="isContactInFocus = true"
          @mouseleave="isContactInFocus = false"
        >
          <div class="text-3xl">Kontakt</div>
          <div class="mb-10 mt-6">
            Hvis du ønsker at vide en pris på opgaven på din bil, så kontakt Flemming allerede i dag, og få et uforpligtende tilbud. Du kan bestille tid på telefon
            <a
              class="text-blue-700"
              href="tel:+4575320566"
            >75320566</a> eller udfyld kontaktformularen.
          </div>
          <div class="w-full">
            <div class>
              <div class="input-container mt-2" :class="{'-not-empty': name}">
                <div class="relative">
                  <input
                    name="name"
                    type="text"
                    class="outline-none border border-gray-400"
                    v-model="name"
                  />
                  <label>Navn</label>
                </div>
              </div>
              <div class="input-container mt-10" :class="{'-not-empty': phone}">
                <div class="relative">
                  <input
                    name="phone"
                    type="text"
                    class="outline-none border border-gray-400"
                    v-model="phone"
                  />
                  <label>Telefon / Email</label>
                </div>
              </div>
              <div class="input-container mt-10" :class="{'-not-empty': body}">
                <div class="relative">
                  <textarea
                    v-model="body"
                    name="whatiswrong"
                    class="outline-none w-full border border-gray-400"
                    style="height: 100px; padding: 12px"
                  ></textarea>
                  <label>Problem</label>
                </div>
              </div>
              <div class="w-full flex justify-end items-center">
                <div class="flex-1" v-if="successMessage || errorMessage">
                  <div v-if="successMessage" class="text-green-600">{{successMessage}}</div>
                  <div v-if="errorMessage" class="text-red-600">{{errorMessage}}</div>
                </div>
                <button
                  class="px-4 py-2 bg-blue-600 text-white mt-4 hover:bg-blue-400"
                  @click="sendMail"
                >Send</button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Services Desktop -->
    <div class="w-full md:flex flex-col items-center py-40p hidden" id="service-desktop">
      <div class="text-7xl mb-20p">Services</div>
      <div
        class="py-4 px-4 w-1100p mx-auto text-lg"
      >E. Johansens Autoelektro er din specialiserede mekaniker i Grindsted og omegn. Her får du fuld service og diagnose af bilens elektronik med avanceret testudstyr. Vi fixer også ethvert mekanisk problem – selv de lidt mere komplicerede af slagsen.</div>
      <div class="pt-4 px-4 text-xl flex flex-wrap w-1100p justify-center">
        <div v-for="item in services" :key="item" class="w-500p px-50p">
          <i class="fa fa-check text-green-400 mr-4" />
          {{item}}
        </div>
      </div>
    </div>

    <!-- About Desktop -->
    <div class="w-full md:flex flex-col items-center py-40p hidden">
      <div class="text-7xl mb-20p" id="about-desktop">Om</div>
      <div class="py-4 px-4 w-1100p mx-auto text-lg">
        Hvis du er på udkig efter en mekaniker med erfaring, og ønsker at din bil er i trygge hænder, så kig forbi E. Johansens Autoelektro i Grindsted.
        <br />Indehaveren af E. Johansens Autoelektro, Flemming Kristensen, har mere end 40 års erfaring som mekaniker.
        <br />Han udfører alle typer opgaver – uanset bilmærke. Få fixet din bil hos E. Johansens Autoelektro og bliv godt kørende med en kvalitetsbevidst og professionel service af din bil.
      </div>
      <div class="pt-2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10680.076639074025!2d8.971584964698524!3d55.75486211407749!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2db25eb9fc047884!2sE.%20Johansens%20Autoelektro%20v%2FFlemming%20Kristensen!5e0!3m2!1sen!2ses!4v1575067667119!5m2!1sen!2ses"
          width="600"
          height="450"
          frameborder="0"
          style="border:0;"
          allowfullscreen
        ></iframe>
      </div>
    </div>

    <!-- Footer mobile -->
    <div class="w-full flex justify-between py-2 px-4 bg-gray-900 md:hidden text-white">
      <div>Hverdage 08 - 16.30</div>
      <div>
        <i class="fas fa-phone-alt mr-3"></i>
        <a href="tel:+4575320566">75 32 05 66</a>
      </div>
    </div>

    <!-- Footer desktop -->

    <div class="w-full hidden md:flex flex-col py-2 px-4 bg-gray-800 text-white py-6">
      <div class="w-1100p mx-auto flex justify-between">
        <div>Hverdage 08 - 16.30</div>
        <div>
          <i class="fas fa-phone-alt mr-3"></i>
          <a href="tel:+4575320566">75 32 05 66</a>
        </div>
      </div>
      <div class="w-1100p mx-auto">Heimdalsvej 22, 7200 Grindsted, Denmark</div>
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
  name = "";
  phone = "";
  body = "";
  isContactInFocus = false;
  pendingDelay = true;
  errorMessage = "";
  successMessage = "";

  services = [
    "Serviceeftersyn",
    "Støddæmper",
    "Kobling",
    "Bremser",
    "Udstødning",
    "El & Elektronik",
    "Benzinindsprøjtning",
    "Dieselindsprøjtning",
    "Rudeskift & stenslag ",
    "Klargøring til syn",
    "Udstødningstest benzin & diesel",
    "Pladeværksted",
    "Aircondition",
    "Bilvarmere",
    "Auto HiFi",
    "Navigationssystemer",
    "Mobiltelefoner",
    "Tilkøb af biltilbehør og reservedele. "
  ];

  async mounted() {
    await timerService.wait(200);
    this.pendingDelay = false;
  }

  async sendMail() {
    try {
      this.successMessage = "";
      this.errorMessage = "";

      if (!this.name.trim() || !this.phone.trim() || !this.body.trim()) {
        this.errorMessage = "Udfyld venligst alle felter";
        return;
      }

      const response = await fetch(
        "http://app.easylocalizer.com/api/v1/custom_send_email",
        {
          method: "POST",
          body: JSON.stringify({
            name: this.name,
            contact: this.phone,
            body: this.body
          }),
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      this.phone = "";
      this.name = "";
      this.body = "";
      const result = await response.json();
      if (result.status === "OK") {
        this.successMessage =
          "Din forespørgsel er modtaget - du bliver kontakt så hurtigt som muligt :)";
      } else {
        this.errorMessage =
          "Der skete en fejl - prøv igen, eller ring til 75320566";
      }
    } catch (error) {
      this.errorMessage =
        "Der skete en fejl - prøv igen, eller ring til 75320566";
    }
  }
}
</script>
<style lang="less">
.home {
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url("https://res.cloudinary.com/dv6mzgcxx/image/upload/e_grayscale/v1576764122/IMG_5526_ygwj6a.jpg");
  background-repeat: no-repeat;
}

.services {
  transition: background-image 0.3s ease;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://res-console.cloudinary.com/dv6mzgcxx/thumbnails/transform/v1/image/upload//v1576758068/SU1HXzU1MjVfY2xvb3Ro/drilldown");
  background-repeat: no-repeat;

  &.darken {
    background-image: -webkit-gradient(
        from(rgba(0, 0, 0, 0.5)),
        to(rgba(0, 0, 0, 0.8))
      ),
      url("https://res-console.cloudinary.com/dv6mzgcxx/thumbnails/transform/v1/image/upload//v1576758068/SU1HXzU1MjVfY2xvb3Ro/drilldown");
  }
}

.contact {
  transition: background-image 0.3s ease;
  height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://res.cloudinary.com/dv6mzgcxx/image/upload/c_scale,w_1920/v1576756182/IMG_5525_clooth.jpg");
  background-repeat: no-repeat;
  background-size: cover;

  &.darken {
    background-image: -webkit-gradient(
        from(rgba(0, 0, 0, 0.5)),
        to(rgba(0, 0, 0, 0.8))
      ),
      url("https://res.cloudinary.com/dv6mzgcxx/image/upload/c_scale,w_1920/v1576756182/IMG_5525_clooth.jpg");
  }
}

/* Quick-zoom Container */
.img-hover-zoom--quick-zoom img {
  transform-origin: 50% 50%;
  transition: 0.5s ease-in-out;
}

/* The Transformation */
.image-zoom-container :hover img {
  transform: scale(1.2);
}

.input-container {
  label {
    position: absolute;
    left: 14px;
    top: 0;
    transition: 0.3s;
    z-index: 10;
    transform: translateY(11px);
    pointer-events: none;
  }
  input {
    padding: 10px;
    width: 100%;
  }
  input:focus ~ label,
  textarea:focus ~ label,
  &.-not-empty label {
    transform: translate(-7px, -25px);
  }
}
</style>
