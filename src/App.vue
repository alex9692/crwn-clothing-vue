<template>
  <div v-if="!isLoading">
    <Header />
    <router-view></router-view>
  </div>
  <div v-else>
    <h2 class="loading-text">PLEASE WAIT....</h2>
    <Loading />
  </div>
</template>

<script>
import Header from "@/components/Header.component.vue";
import Loading from "@/components/Loading.component.vue";
import { auth, createUserProfileDoc } from "@/firebase/firebase.utils.js";
import { mapGetters } from "vuex";

export default {
  components: { Header, Loading },
  computed: {
    ...mapGetters({
      isLoading: "user/isLoading",
    }),
  },
  data() {
    return {
      unsubscribe: null,
    };
  },
  created() {
    this.$store.dispatch("user/setLoading", true);
    this.unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDoc(user);

        userRef.onSnapshot((snapshot) => {
          this.$store.dispatch("user/setCurrentUser", {
            id: snapshot.id,
            ...snapshot.data(),
          });
          this.$store.dispatch("user/setLoading", false);
        });
      } else {
        this.$store.dispatch("user/setCurrentUser", null);
        this.$store.dispatch("user/setLoading", false);
      }
    });
  },
  destroyed() {
    this.unsubscribe();
  },
};
</script>

<style>
body {
  font-family: "Open Sans Condensed", sans-serif;
  padding: 20px 60px;
}
.loading-text {
  color: #7e7878;
}
a {
  text-decoration: none;
  color: #000;
}
* {
  box-sizing: border-box;
}
</style>
