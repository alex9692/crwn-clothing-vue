<template>
  <div class="cart-item">
    <img :src="item.imageUrl" alt="item-name" />
    <div class="item-details">
      <span class="name">{{item.name}}</span>
      <span class="price">{{item.quantity}} x ${{item.price}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.cart-item {
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;

  img {
    width: 30%;
  }

  .item-details {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px 20px;

    .name {
      font-size: 16px;
    }
  }
}
</style>