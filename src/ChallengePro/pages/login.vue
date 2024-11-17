<script>

import {Card} from "primevue";
import {Password} from "primevue";
import {Button} from "primevue";

export default {

  name: "login",
  components: {Card, Button, Password},

  data(){
    return {
      dataToAuthenticate: {
        username: null,
        password: null,
      },
      loginError: null
    }
  },
  methods: {
    goToRegister() {
      this.$router.push("/register");
    },
    async handleLogin() {
      try {

        await this.$store.dispatch("authenticate", this.dataToAuthenticate);

        // Si la autenticación es exitosa, redirigir a la página de inicio
        this.$router.push("/home");
      } catch (error) {
        // En caso de error, mostrar mensaje de error
        this.loginError = "Credenciales incorrectas. Inténtalo de nuevo.";
      }
    }
  }
}
</script>
<template>
  <div class="login-form">
    <h3>Login</h3>
    <div class="form-group">
      <label for="username">Username</label>
      <inputtext id="username" v-model="dataToAuthenticate.username" placeholder="Enter your username" />
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <Password id="password" v-model="dataToAuthenticate.password" placeholder="Enter your password" />
    </div>
    <Button label="Login" class="submit-button" @click="handleLogin" />
    <a @click="goToRegister">no account? Sign up</a>
  </div>
</template>


<style scoped>
.login-form {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h3 {
  text-align: center;
  color: #182e3f;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

.form-group :deep(input),
.form-group :deep(.p-password input) {
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}


#password, #username {
  width: 350px;
}

.submit-button {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #0056b3;
}


</style>
