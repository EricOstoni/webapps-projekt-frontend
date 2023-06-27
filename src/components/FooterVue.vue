<template>
  <nav class="footer">
    <a href="https://www.facebook.com/" class="fab fa-facebook"></a>
    <a href="https://www.instagram.com/" class="fab fa-instagram"></a>
    <a href="https://github.com/EricOstoni" class="fab fa-github"></a>
  </nav>
</template>

<script>
export default {
  name: "FooterVue",
};
</script>

<style scoped>
.footer a {
  cursor: pointer;
  color: white;
  align-items: center;
  margin: auto;
  text-decoration: none;
}

.footer {
  padding: 25px;
  background-color: rgb(103, 118, 23);
  display: flex;
  width: auto;
}
</style>
