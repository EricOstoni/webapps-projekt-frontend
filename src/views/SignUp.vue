<template>
  <div class="signup-container">
    <div class="signup-header">
      <h2>Sign Up</h2>
    </div>
    <form @submit.prevent="submitForm">
      <div class="input-group">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div class="input-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="input-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Sign Up</button>
      <router-link to="/login"> <button>Login</button></router-link>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SignUp",
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async submitForm() {
      if (!this.username || !this.email || !this.password) {
        alert("Please fill in all fields");
        return;
      }

      try {
        let response = await axios.post(
          "https://oilshop-backend.onrender.com/auth/register",
          {
            username: this.username,
            email: this.email,
            password: this.password,
          }
        );

        if (response.status === 200) {
          this.$router.push("/login");
        } else {
          alert("Sign up failed: " + response.data);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    },
  },
};
</script>

<style scoped>
.signup-container {
  width: 320px;
  margin: 50px auto;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.1);
  background: white;
}

.signup-header {
  background-color: #556b2f;
  padding: 20px 20px;
}

.signup-header h2 {
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
  margin-top: 5px;
}

button:hover {
  background-color: #424;
}
</style>
