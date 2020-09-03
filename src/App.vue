<template>
  <div>
    <Header :authUser="!!currentUser" />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "@/components/Header.component.vue";
import { auth, createUserProfileDoc } from "@/firebase/firebase.utils.js";
export default {
  components: { Header },
  data() {
    return {
      currentUser: null,
      unsubscribe: null,
    };
  },
  created() {
    this.unsubscribe = auth.onAuthStateChanged(async (user) => {
      // this.currentUser = user;
      if (user) {
        const userRef = await createUserProfileDoc(user);

        userRef.onSnapshot((snapshot) => {
          this.currentUser = {
            id: snapshot.id,
            ...snapshot.data(),
          };
        });
      } else {
        this.currentUser = null;
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
