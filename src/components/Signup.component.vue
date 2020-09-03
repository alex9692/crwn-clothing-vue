<template>
  <div class="sign-up">
    <h2 class="title">I don't have an account.</h2>
    <span>Sign up with your email and password</span>
    <form class="sign-up-form" @submit.prevent="onSubmit">
      <FormInput type="text" name="displayName" v-model="displayName" required label="Username" />
      <FormInput type="email" name="email" v-model="email" required label="Email" />
      <FormInput type="password" name="password" v-model="password" required label="Password" />
      <FormInput
        type="password"
        name="confirmPassword"
        v-model="confirmPassword"
        required
        label="Confirm Password"
      />

      <CustomButton type="submit">Sign Up</CustomButton>
    </form>
  </div>
</template>

<script>
import FormInput from "@/components/FormInput.component.vue";
import CustomButton from "@/components/CustomButton.component.vue";

import { auth, createUserProfileDoc } from "@/firebase/firebase.utils.js";
export default {
  components: {
    FormInput,
    CustomButton,
  },
  data() {
    return {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    async onSubmit() {
      if (this.password !== this.confirmPassword) {
        alert("password don't match");
        return;
      }
      try {
        const { user } = await auth.createUserWithEmailAndPassword(
          this.email,
          this.password
        );
        await createUserProfileDoc(user, { displayName: this.displayName });
        this.displayName = "";
        this.email = "";
        this.password = "";
        this.confirmPassword = "";
      } catch (err) {
        console.log(err.message);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.sign-up {
  display: flex;
  flex-direction: column;
  width: 380px;
  .title {
    margin: 10px 0;
  }
}
</style>