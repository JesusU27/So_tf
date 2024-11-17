<script>
import {mapGetters} from 'vuex';
import {Toolbar} from "primevue";
import {Button} from "primevue";
import {Card} from "primevue";
import {ChallengesService} from "@/ChallengePro/services/challenges.service.js";

export default {
  name: "Home",
  components: {Toolbar, Button, Card},
  data() {
    return {
      arrayMyChallenges: [],
      arrayChallenges: [],
      AllChallenges: []
    }
  },
  computed: {
    ...mapGetters(['getUser']),
  },
  methods: {
    handleLogout() {

      this.$store.dispatch('logout');
      this.$router.push('/login');
    },
  },
  async mounted() {
    const service = new ChallengesService();
    this.arrayChallenges = this.getUser.challenges_completed;
    this.arrayMyChallenges = await service.getMyChallenges(this.arrayChallenges);

    console.log(this.arrayMyChallenges);

    this.AllChallenges = await service.getAllChallenges();

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
    <div class=challenges>

      <div class="completed">
        <div v-for="challenge in arrayMyChallenges" :key="challenge.id" class="challenge-card">
          <Card>
            <template #header>
              <h3>{{ challenge.title }}</h3>
            </template>
            <template #content>
              <p>{{ challenge.description }}</p>
              <p><strong>Fecha de inicio:</strong> {{ challenge.start_date || "No especificada" }}</p>
              <p><strong>Fecha de fin:</strong> {{ challenge.end_date || "No especificada" }}</p>
              <p><strong>Recompensa:</strong> {{ challenge.rewards.details || "No hay recompensa" }}</p>
            </template>
          </Card>


        </div>

      </div>
      <div class="to-complete">
        <h2>Desafíos Completados</h2>
        <div v-if="AllChallenges.length === 0">
          <p>No se encontraron desafíos.</p>
        </div>
        <div v-else>

          <div v-for="challenge in AllChallenges" :key="challenge.id" class="challenge-card">
            <Card>
              <template #header>
                <h3>{{ challenge.title }}</h3>
              </template>
              <template #content>
                <p>{{ challenge.description }}</p>
                <p><strong>Fecha de inicio:</strong> {{ challenge.start_date || "No especificada" }}</p>
                <p><strong>Fecha de fin:</strong> {{ challenge.end_date || "No especificada" }}</p>
                <p><strong>Recompensa:</strong> {{ challenge.rewards.details || "No hay recompensa" }}</p>
              </template>
            </Card>
          </div>
        </div>
      </div>
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