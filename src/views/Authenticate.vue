<template>
  <div class="sign-in-and-sign-up">
    <Signin />
    <SignUp />
  </div>
</template>

<script>
import Signin from "@/components/Signin.component.vue";
import SignUp from "@/components/Signup.component.vue";
export default {
  components: {
    Signin,
    SignUp,
  },
};
</script>

<style lang="scss" scoped>
.sign-in-and-sign-up {
  widows: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
}
</style>