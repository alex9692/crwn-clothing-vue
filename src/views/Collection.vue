<template>
  <div class="collection-page">
    <h2 class="title">{{title}}</h2>
    <div class="items">
      <CollectionItem v-for="item in items" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import CollectionItem from "@/components/CollectionItem.component.vue";

export default {
  components: {
    CollectionItem,
  },
  computed: {
    collections() {
      return this.$store.getters["shop/getCollectionsByCategory"](
        this.$route.params.collectionId
      );
    },
    items() {
      return this.collections.items;
    },
    title() {
      return this.collections.title;
    },
  },
};
</script>

<style lang="scss" scoped>
.collection-page {
  display: flex;
  flex-direction: column;

  .title {
    font-size: 38px;
    margin: 0 auto 30px;
  }

  .items {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;

    & .collection-item {
      margin-bottom: 30px;
    }
  }
}
</style>