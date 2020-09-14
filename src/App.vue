<template>
  <div v-if="!loading">
    <Header />
    <router-view></router-view>
  </div>
  <div v-else>PLEASE WAIT....</div>
</template>

<script>
import Header from "@/components/Header.component.vue";
import { auth, createUserProfileDoc } from "@/firebase/firebase.utils.js";
import { mapState } from "vuex";

export default {
  components: { Header },
  computed: {
    ...mapState({
      loading: (state) => state.user.loading,
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
      // this.currentUser = user;
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
a {
  text-decoration: none;
  color: #000;
}
* {
  box-sizing: border-box;
}
</style>
