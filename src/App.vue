<template>
  <div>
    <Header :authUser="!!currentUser" />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "@/components/Header.component.vue";
import { auth } from "@/firebase/firebase.utils.js";
export default {
  components: { Header },
  data() {
    return {
      currentUser: null,
      unsubscribe: null,
    };
  },
  created() {
    this.unsubscribe = auth.onAuthStateChanged((user) => {
      this.currentUser = user;

      console.log(user);
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
