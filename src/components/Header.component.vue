<template>
  <div class="header">
    <router-link class="logo-container" to="/">
      <img class="logo" src="@/assets/logo/crown.svg" alt="logo" />
    </router-link>
    <div class="options">
      <router-link class="option" to="/shop">SHOP</router-link>
      <router-link class="option" to>CONTACT</router-link>
      <router-link class="option" to>ABOUT</router-link>
      <router-link class="option" v-if="!authUser" to="/auth">SIGN IN</router-link>
      <div v-if="authUser" class="option" @click="auth.signOut()">SIGN OUT</div>
    </div>
  </div>
</template>

<script>
import { auth } from "@/firebase/firebase.utils.js";
export default {
  props: ["authUser"],
  data() {
    return {
      auth: auth,
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  .logo-container {
    height: 100%;
    width: 70px;
    padding: 25px;
  }

  .options {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .option {
      padding: 10px 15px;
      cursor: pointer;
    }
  }
}
</style>