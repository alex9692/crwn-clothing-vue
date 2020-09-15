<template>
  <div class="cart-dropdown">
    <div class="cart-items" v-if="cartLength > 0">
      <CartItem v-for="item in cartItems" :key="item.id" :item="item" />
    </div>
    <div v-else class="empty-message">Your cart is empty</div>
    <CustomButton @click="gotToCheckout">GO TO CHECKOUT</CustomButton>
  </div>
</template>

<script>
import CustomButton from "@/components/CustomButton.component.vue";
import CartItem from "@/components/CartItem.component.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    CustomButton,
    CartItem,
  },
  computed: {
    ...mapGetters({
      cartItems: "cart/cartItems",
      cartLength: "cart/cartLength",
    }),
  },
  methods: {
    gotToCheckout() {
      this.$router.push("/checkout");
      this.$store.dispatch("cart/toggleCartDropdown");
    },
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
  .empty-message {
    font-size: 18px;
    margin: 50px auto;
  }

  button {
    margin-top: auto;
  }
}
</style>