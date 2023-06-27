<template>
  <div>
    <NavBar @navigate="scrollToSection" />
  </div>

  <div class="main-content">
    <h1>OSTONI OIL</h1>
    <h2>more than extra virgin oil</h2>
  </div>

  <div ref="about-us" class="about-us">
    <div class="container">
      <h1>About us</h1>
      <p>
        OPG Ostoni is a family farm specialized in growing olives and producing
        high quality extra virgin olive oil. Currently we cultivate 10 hectars
        of olive groves in the area of Vodnjan with more than 1300 olive trees
        at an altitude of 80 – 180 m.a.s.l. Visit us for a free olive oil
        tasting in our olive mill located in olive grooves just outside the old
        medieval town of Vodnjan or book one of our guided olive oil tasting
        tours and discover why our extra virgin olive oil is frequently
        proclaimed among the best olive oils in prestigious international
        competitions.
      </p>
      <div class="list-maslina-1"></div>
      <div class="list-maslina-2"></div>
      <div class="list-maslina-3"></div>
      <div class="list-maslina-4"></div>
      <div class="list-maslina-5"></div>
    </div>
  </div>

  <h1 class="products-h1">Our products</h1>

  <div ref="products" class="products">
    <img
      href="/shop"
      src="../assets/batch_Romano-velika.png"
      alt=""
      @click="goToShop"
    />
    <img src="../assets/batch_Istra-veliko.png" alt="" @click="goToShop" />
    <img src="../assets/batch_Mlado-velika.png" alt="" @click="goToShop" />
    <img src="../assets/batch_Organic-velika.png" alt="" @click="goToShop" />
  </div>

  <div class=""></div>

  <div ref="contact" class="contact">
    <GoogleMap />
  </div>

  <div class="footer">
    <FooterVue />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import GoogleMap from "@/components/GoogleMaps.vue";
import FooterVue from "@/components/FooterVue.vue";

export default {
  name: "HomeView",
  components: { NavBar, GoogleMap, FooterVue },
  methods: {
    scrollToSection(section) {
      this.$refs[section].scrollIntoView({ behavior: "smooth" });
    },
    goToShop() {
      this.$router.push("/shop");
    },
  },
};
</script>

<style>
@import url("../assets/style.css");
</style>
