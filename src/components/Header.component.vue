<template>
  <div class="header">
    <router-link class="logo-container" to="/">
      <img class="logo" src="@/assets/logo/crown.svg" alt="logo" />
    </router-link>
    <div class="options">
      <router-link class="option" to="/shop">SHOP</router-link>
      <router-link class="option" to>CONTACT</router-link>
      <router-link class="option" to>ABOUT</router-link>
    </div>
  </div>
</template>

<script>
export default {};
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
    }
  }
}
</style>