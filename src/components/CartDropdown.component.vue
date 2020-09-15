<template>
  <div class="cart-dropdown">
    <div class="cart-items"></div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
</template>

<script>
import CustomButton from "@/components/CustomButton.component.vue";

export default {
  components: {
    CustomButton,
  },
};
</script>

<style lang="scss" scoped>
.cart-dropdown {
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  .cart-items {
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }

  button {
    margin-top: auto;
  }
}
</style>