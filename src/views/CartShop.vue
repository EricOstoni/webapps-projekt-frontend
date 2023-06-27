<template>
  <NavCart />
  <div>
    <div class="page-wrap">
      <h1>Shopping Cart</h1>
      <div v-if="cart.length > 0">
        <div
          v-for="product in cart"
          :key="product.product._id"
          class="cart-item"
        >
          <img class="product-image" :src="product.product.img" />
          <div class="details-wrap">
            <h3>{{ product.product.name }}</h3>
            <p>${{ product.product.price }}</p>
          </div>
          <button
            class="remove-button"
            v-on:click="removeFromCart(product.product._id)"
          >
            Remove From Cart
          </button>
        </div>
      </div>
      <p v-else>You haven't added anything to your cart yet!</p>
      <h3 id="total-price">Total: ${{ totalPrice }}</h3>
    </div>

    <form @submit.prevent="createOrder">
      <label>
        Address:
        <input v-model="orderForm.address.street" required />
      </label>
      <label>
        City:
        <input v-model="orderForm.address.city" required />
      </label>
      <label>
        Zip:
        <input v-model="orderForm.address.zip" required />
      </label>
      <label>
        Card Name:
        <input v-model="orderForm.payment.cardName" required />
      </label>
      <label>
        Card Number:
        <input v-model="orderForm.payment.cardNumber" required />
      </label>
      <label>
        Card Expiry:
        <input v-model="orderForm.payment.cardExpiry" required />
      </label>
      <label>
        Card CVV:
        <input v-model="orderForm.payment.cardCVV" required />
      </label>
      <button type="submit">Create Order</button>
    </form>
  </div>
</template>

<script>
import NavCart from "@/components/NavCart.vue";
import axios from "axios";

export default {
  name: "CartShop",
  components: { NavCart },
  data() {
    return {
      cart: [],
      orderForm: {
        address: {
          street: "",
          city: "",
          zip: "",
        },
        payment: {
          cardName: "",
          cardNumber: "",
          cardExpiry: "",
          cardCVV: "",
        },
      },
    };
  },
  methods: {
    async createOrder() {
      const items = this.cart.map((item) => ({
        product: item.product._id,
        quantity: item.quantity,
      }));
      const order = { ...this.orderForm, items };
      console.log(order);

      try {
        const response = await axios.post(
          "https://oilshop-backend.onrender.com/orders/",
          order,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        if (response.status === 200) {
          this.cart = [];
          window.alert("Order created successfully!");
          this.$router.push("/shop");
        } else {
          console.error(response.data);
        }
      } catch (error) {
        if (error.response) {
          console.error(error.response.data);
        } else {
          console.error(error);
        }
      }
    },
    async removeFromCart(productId) {
      try {
        const response = await axios.delete(
          "https://oilshop-backend.onrender.com/users/remove",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            data: {
              productId,
            },
          }
        );

        if (response.status === 200) {
          this.cart = this.cart.filter(
            (item) => item.product._id !== productId
          );
        } else {
          console.error(response.data);
        }
      } catch (error) {
        if (error.response) {
          console.error(error.response.data);
        } else {
          console.error(error);
        }
      }
    },
  },
  computed: {
    totalPrice() {
      return this.cart.reduce((total, item) => total + item.product.price, 0);
    },
  },
  async created() {
    try {
      const response = await axios.get(
        "https://oilshop-backend.onrender.com/users/cart",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      this.cart = response.data.filter((item) => item.product);
    } catch (error) {
      console.error(error);
    } finally {
      this.isLoading = false;
    }
  },
};
</script>

<style scoped>
div {
  width: 50%;
  margin: auto;
  font-family: "Helvetica Neue", Arial, sans-serif;
  color: #333;
}

.page-wrap h1 {
  border-bottom: 1px solid black;
  margin: 0;
  margin-top: 16px;
  padding: 16px;
}

.cart-item {
  align-content: center;
  border-bottom: 1px solid #ddd;
  display: flex;
  padding: 16px;
  width: 100%;
}

.cart-item .product-image {
  flex: 1;
  height: 100px;
  max-width: 100px;
}

.cart-item .details-wrap h3 {
  font-size: 1.2em;
  color: #212529;
}

.cart-item .details-wrap {
  padding: 0 16px;
  flex: 3;
}

#total-price {
  padding: 16px;
  text-align: right;
}

.cart-item .remove-button {
  flex: 1;
  margin: auto;
}
form {
  margin-top: 30px;
  padding: 20px;
  background-color: #f8f9fa;
  border: 1px solid #e2e6ea;
  border-radius: 5px;
}

label {
  display: block;
  font-size: 1.1em;
  margin-top: 20px;
  color: #495057;
}

input {
  width: 100%;
  padding: 10px;
  font-size: 1.1em;
  border: 1px solid #ced4da;
  border-radius: 5px;
  color: #495057;
}

button {
  display: block;
  width: 100%;
  padding: 15px;
  margin-top: 30px;
  font-size: 1.2em;
  color: #fff;
  background-color: rgb(103, 118, 23);
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: rgb(122, 140, 22);
  cursor: pointer;
}
</style>
