<template>
  <div class="collection-item">
    <div class="image" :style="{backgroundImage: `url(${imageUrl})`}"></div>
    <div class="collection-footer">
      <span class="name">{{name}}</span>
      <span class="price">{{price}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.collection-item {
  width: 22%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;

  .image {
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
  }

  .collection-footer {
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;

    .name {
      width: 90%;
      margin-bottom: 15px;
    }

    .price {
      width: 10%;
    }
  }
}
</style>