<template>
  <div class="homepage">
    <Directory />
  </div>
</template>

<script>
import Directory from "@/components/Directory.component.vue";
export default {
  components: {
    Directory,
  },
};
</script>

<style lang="scss" scoped>
.homepage {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
}
</style>