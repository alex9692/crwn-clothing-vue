<template>
  <div class="collection-preview">
    <h1 class="title">{{title.toUpperCase()}}</h1>
    <div class="preview">
      <CollectionItem v-for="item in slicedArray" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
import CollectionItem from "@/components/CollectionItem.component.vue";
export default {
  components: {
    CollectionItem,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
  computed: {
    slicedArray() {
      return this.items.slice(0, 4);
    },
  },
};
</script>


<style lang="scss" scoped>
.collection-preview {
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  .title {
    font-size: 28px;
    margin-bottom: 25px;
  }

  .preview {
    display: flex;
    justify-content: space-between;
  }
}
</style>