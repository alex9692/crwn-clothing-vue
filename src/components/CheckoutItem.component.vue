<template>
  <div class="checkout-item">
    <div class="image-container">
      <img :src="item.imageUrl" alt="item-name" />
    </div>
    <span class="name">{{item.name}}</span>
    <span class="quantity">
      <div class="arrow" @click="subtractItemFromCart">&#10094;</div>
      <span class="value">{{item.quantity}}</span>
      <div class="arrow" @click="addItemToCart">&#10095;</div>
    </span>
    <span class="price">{{item.price}}</span>
    <div @click="removeItemFromCart" class="remove-button">&#10005;</div>
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
  methods: {
    removeItemFromCart() {
      this.$store.dispatch("cart/removeItemFromCart", this.item);
    },
    subtractItemFromCart() {
      this.$store.dispatch("cart/subtractItemFromCart", this.item);
    },
    addItemToCart() {
      this.$store.dispatch("cart/addItemToCart", this.item);
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
    display: flex;

    .arrow {
      cursor: pointer;
    }

    .value {
      margin: 0 10px;
    }
  }

  .remove-button {
    padding-left: 12px;
    cursor: pointer;
  }
}
</style>