<template>
  <div class="sign-in">
    <h2 class="title">I already have an account</h2>
    <span>Sign in with your email and password</span>
    <form @submit.prevent="onSubmit">
      <FormInput type="email" name="email" v-model="email" required label="Email" />

      <FormInput type="password" name="password" v-model="password" required label="Password" />

      <CustomButton type="submit">Sign in</CustomButton>
    </form>
  </div>
</template>

<script>
import FormInput from "@/components/FormInput.component.vue";
import CustomButton from "@/components/CustomButton.component.vue";
export default {
  components: {
    FormInput,
    CustomButton,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    onSubmit() {
      console.log(this.email, this.password);
      this.email = "";
      this.password = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.sign-in {
  width: 30vw;
  display: flex;
  flex-direction: column;

  .title {
    margin: 10px 0;
  }
}
</style>