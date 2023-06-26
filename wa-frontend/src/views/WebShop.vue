<template>
  <div>
    <NavShop />
    <div class="products-grid">
      <div v-for="product in products" :key="product._id" class="product-card">
        <img
          class="product-image"
          :src="product.img"
          alt="Product Image"
          width="200"
          height="200"
        />

        <h2>{{ product.name }}</h2>
        <p>{{ product.desc }}</p>
        <p>{{ product.price }} €</p>
        <button @click="addToCart(product._id)">Add to Cart</button>
      </div>
    </div>
  </div>

  <div class="footer">
    <FooterVue />
  </div>
</template>

<script>
import NavShop from "@/components/NavShop.vue";
import axios from "axios";
import FooterVue from "@/components/FooterVue.vue";

export default {
  name: "WebShop",
  components: {
    NavShop,
    FooterVue,
  },
  data() {
    return {
      products: [],
    };
  },
  beforeRouteEnter(to, from, next) {
    if (!localStorage.getItem("token")) {
      next("/login");
    } else {
      next();
    }
  },
  created() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      axios
        .get("https://oilshopostoni.onrender.com/products/product")
        .then((response) => {
          this.products = response.data.map((product) => {
            return {
              ...product,
              img: product.img,
            };
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addToCart(productId) {
      const token = localStorage.getItem("token");
      axios
        .post(
          `https://oilshopostoni.onrender.com/users/add`,
          {
            productId: productId,
            quantity: 1,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.products-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin: 45px;
}

h2 {
  margin-bottom: 5px;
}

.product-card {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.product-image {
  max-width: 100%;
  height: auto;
}
.footer {
  margin-top: 50px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: white;
  color: #556b2f;
  border: 1px;
  border-radius: 6px;
  cursor: pointer;
  border-color: #556b2f;
  border-style: solid;
  margin-top: 10px;
  transition: background-color 0.3s ease;
}
</style>
