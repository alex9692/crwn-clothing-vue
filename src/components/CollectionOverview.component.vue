<template>
  <div class="collections-overview">
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
import { mapGetters } from "vuex";

export default {
  components: {
    CollectionPreview,
  },
  computed: {
    ...mapGetters({
      collections: "shop/getCollectionData",
    }),
  },
};
</script>

<style lang="scss" scoped>
.collections-overview {
  display: flex;
  flex-direction: column;
}
</style>