<template>
  <div class="checkout-item">
    <div class="image-container">
      <img :src="item.imageUrl" alt="item-name" />
    </div>
    <span class="name">{{item.name}}</span>
    <span class="quantity">{{item.quantity}}</span>
    <span class="price">{{item.price}}</span>
    <div class="remove-button">&#10005;</div>
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
.checkout-item {
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  .image-container {
    width: 23%;
    padding-right: 15px;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .name,
  .quantity,
  .price {
    width: 23%;
  }

  .quantity {
    padding-left: 20px;
  }

  .remove-button {
    padding-left: 12px;
    cursor: pointer;
  }
}
</style>