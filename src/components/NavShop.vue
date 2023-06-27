<template>
  <nav class="navbar">
    <div class="shop-name">
      <router-link to="/">
        <h1>Oil Shop</h1>
      </router-link>
    </div>
    <div class="icons">
      <router-link to="/cart">
        <i class="fa fa-shopping-cart"></i>
      </router-link>
      <!-- <router-link to="/signup">
        <i class="fa fa-user"></i>
      </router-link> -->
    </div>
    <p></p>
  </nav>
</template>

<script>
export default {
  name: "NavShop",
};
</script>

<style scoped>
.navbar {
  display: inline-flex;

  padding: 10px;
  background-color: rgb(103, 118, 23);
}

.shop-name h1 {
  background-color: rgb(103, 118, 23);
  font-size: 1.5em;
}

.shop-name a {
  text-decoration: none;
  color: black;
}

.icons {
  display: flex;
  flex-direction: row;
  position: relative;
  right: 0;
  margin-left: auto;
  width: 50px;
  background-color: rgb(103, 118, 23);
  gap: 15px;
}

.icons a {
  color: #333;
  text-decoration: none;
}

.icons a:hover {
  color: white;
}
</style>
