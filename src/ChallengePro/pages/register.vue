<script>
import {Card} from "primevue";
import {AccessService} from "@/ChallengePro/services/access.service.js";
export default {
  name: "register",
  components: {Card},
  data() {
    return {
      form: {
        id: null,
        username: "",
        email: "",
        password: "",
        profile: {
          name: "",
          age: null,
          location: "",
          profile_picture: "",
        },
        challenges_completed: []
      },
      submitted: false,
    };
  },

  methods: {
    handleSubmit() {
      const User = this.form;

      this.submitted = true;

      const service = new AccessService();
      service.register(User);
    },
    goToLogin(){
      this.$router.push("/login");
    }
  },
}
</script>
<template>
  <div class="register-form">
    <h2>Register</h2>
    <form @submit.prevent="handleSubmit">
      <!-- Username -->
      <div class="form-group">
        <label for="username">Username:</label>
        <input
            id="username"
            type="text"
            v-model="form.username"
            placeholder="Enter your username"
            required
        />
      </div>

      <!-- Email -->
      <div class="form-group">
        <label for="email">Email:</label>
        <input
            id="email"
            type="email"
            v-model="form.email"
            placeholder="Enter your email"
            required
        />
      </div>

      <!-- Password -->
      <div class="form-group">
        <label for="password">Password:</label>
        <input
            id="password"
            type="password"
            v-model="form.password"
            placeholder="Enter your password"
            required
        />
      </div>

      <!-- Name -->
      <div class="form-group">
        <label for="name">Full Name:</label>
        <input
            id="name"
            type="text"
            v-model="form.profile.name"
            placeholder="Enter your full name"
            required
        />
      </div>

      <!-- Age -->
      <div class="form-group">
        <label for="age">Age:</label>
        <input
            id="age"
            type="number"
            v-model="form.profile.age"
            placeholder="Enter your age"
            required
        />
      </div>

      <!-- Location -->
      <div class="form-group">
        <label for="location">Location:</label>
        <input
            id="location"
            type="text"
            v-model="form.profile.location"
            placeholder="Enter your location"
            required
        />
      </div>

      <button type="submit">Register</button>

      <a @click="goToLogin">have account? Sign in</a>


    </form>

    <!-- Success Message -->
    <div v-if="submitted">
      <h3>Registration Successful!</h3>
    </div>
  </div>

</template>

<style scoped>

.register-form {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

h3 {
  color: green;
}
</style>