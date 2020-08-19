<template>
  <div>
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "@/components/Header.component.vue";
export default {
  components: { Header },
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
</style>
