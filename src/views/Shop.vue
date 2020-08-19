<template>
  <div class="shop-page">
    <CollectionPreview
      v-for="data in collections"
      :key="data.id"
      :title="data.title"
      :items="data.items"
    />
  </div>
</template>


<script>
import CollectionPreview from "@/components/CollectionPreview.component.vue";
import shop_data from "@/dummy-data/shop.data.js";
export default {
  components: {
    CollectionPreview,
  },
  data() {
    return {
      collections: shop_data,
    };
  },
};
</script>


<style lang="scss" scoped>
</style>