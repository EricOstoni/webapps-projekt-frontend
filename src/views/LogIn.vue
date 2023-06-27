<template>
  <div class="login-container">
    <div class="login-header">
      <h2>Login</h2>
    </div>
    <form @submit.prevent="Login">
      <div class="input-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="input-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
      <router-link to="/signup"><button>Sign Up</button></router-link>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async Login() {
      if (!this.email || !this.password) {
        alert("Please fill in both fields");
        return;
      }

      try {
        let res = await axios.post(
          "https://oilshop-backend.onrender.com/auth/login",
          {
            email: this.email,
            password: this.password,
          }
        );

        localStorage.setItem("token", res.data.token);
        this.$router.push("/shop");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  width: 320px;
  margin: 50px auto;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.1);
  background: white;
}

.login-header {
  background-color: #556b2f;
  padding: 20px 20px;
}

.login-header h2 {
  color: white;
  text-align: center;
  margin: 0;
}

form {
  padding: 20px;
}

.input-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #666;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
}

button {
  width: 100%;
  padding: 10px;
  background-color: #556b2f;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #424;
}
</style>
