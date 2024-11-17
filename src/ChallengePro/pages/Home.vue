<script>
import {mapGetters} from 'vuex';
import {Toolbar} from "primevue";
import {Button} from "primevue";

export default {
  name: "Home",
  components: {Toolbar, Button},
  computed: {
    ...mapGetters(['getUser']),
  },
  methods: {
    handleLogout() {

      this.$store.dispatch('logout');
      this.$router.push('/login');
    },
  }
}
</script>

<template>
  <Toolbar class="toolbar">
    <template #start>
    </template>
    <template #end>
      <Button label="Logout" class="logout-button" @click="handleLogout"/>
    </template>
  </Toolbar>
  <div class="home">
    <div>
      <h1>Bienvenido, {{ getUser?.profile?.name }}</h1>
      <p>Email: {{ getUser?.email }}</p>
    </div>
    <div class = my-challenges>
      <





    </div>

  </div>
</template>

<style scoped>
.home {
  margin-top: 40px;
}

.logout-button {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: #48bbaf;
  background-color: #1a5788;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.logout-button:hover {
  background-color: #182e3f;
}

.toolbar {
  background-color: #81bee7;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  padding: 1rem;

}
</style>