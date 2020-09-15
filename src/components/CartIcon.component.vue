<template>
  <div class="cart-icon" @click="toggleCartDropdown">
    <img class="shopping-icon" src="@/assets/logo/shopping-bag.svg" alt="cart-icon" />
    <span class="item-count">{{cartLength}}</span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({ cartLength: "cart/cartLength" }),
  },
  methods: {
    toggleCartDropdown() {
      this.$store.dispatch("cart/toggleCartDropdown");
    },
  },
};
</script>

<style lang="scss" scoped>
.cart-icon {
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .shopping-icon {
    width: 24px;
    height: 24px;
  }

  .item-count {
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 12px;
  }
}
</style>