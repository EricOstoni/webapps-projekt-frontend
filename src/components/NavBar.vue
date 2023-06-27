<template>
  <nav>
    <a class="logo">Oil Shop Ostoni</a>
    <a class="first" @click="scrollTo('about-us')">About us</a>
    <a class="second" @click="scrollTo('products')">Our products</a>
    <a @click="scrollTo('contact')">Contact</a>
    <button class="btn-navbar" @click="toShop">WEBSHOP</button>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    toShop() {
      this.$router.push("/shop");
    },
    scrollTo(section) {
      this.$emit("navigate", section);
    },
  },
};
</script>

<style scoped>
@import "../assets/style.css";
</style>
