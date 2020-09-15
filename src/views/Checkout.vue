<template>
  <div class="checkout-page">
    <div class="checkout-header">
      <div class="header-block">
        <span>Product</span>
      </div>
      <div class="header-block">
        <span>Description</span>
      </div>
      <div class="header-block">
        <span>Quantity</span>
      </div>
      <div class="header-block">
        <span>Price</span>
      </div>
      <div class="header-block">
        <span>Remove</span>
      </div>
    </div>
    <CheckoutItem v-for="item in cartItems" :key="item.id" :item="item" />
    <div class="total">TOTAL: ${{cartTotal}}</div>
  </div>
</template>

<script>
import CheckoutItem from "@/components/CheckoutItem.component.vue";
import { mapGetters } from "vuex";

export default {
  components: { CheckoutItem },
  computed: {
    ...mapGetters({
      cartItems: "cart/cartItems",
      cartTotal: "cart/cartTotal",
    }),
  },
};
</script>

<style lang="scss" scoped>
.checkout-page {
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  .checkout-header {
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;

    .header-block {
      text-transform: capitalize;
      width: 23%;

      &:last-child {
        width: 8%;
      }
    }
  }

  .total {
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
  }
}
</style>