<template>
  <nav class="navbar">
    <div class="shop-name">
      <a href="/">
        <h1>Oil Shop</h1>
      </a>
    </div>
    <div class="icons">
      <a href="/cart">
        <i class="fa fa-shopping-cart"></i>
      </a>
      <a href="/signup">
        <i class="fa fa-user"></i>
      </a>
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
