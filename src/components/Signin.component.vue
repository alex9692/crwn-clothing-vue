<template>
  <div class="sign-in">
    <h2 class="title">I already have an account</h2>
    <span>Sign in with your email and password</span>
    <form @submit.prevent="onSubmit">
      <FormInput type="email" name="email" v-model="email" required label="Email" />

      <FormInput type="password" name="password" v-model="password" required label="Password" />

      <div class="buttons">
        <CustomButton type="submit">Sign in</CustomButton>
        <CustomButton
          :isGoogleSignIn="true"
          type="button"
          @click="signInWithGoogle"
        >Sign in with Google</CustomButton>
      </div>
    </form>
  </div>
</template>

<script>
import FormInput from "@/components/FormInput.component.vue";
import CustomButton from "@/components/CustomButton.component.vue";
import { auth, signInWithGoogle } from "@/firebase/firebase.utils.js";

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
    async onSubmit() {
      try {
        await auth.signInWithEmailAndPassword(this.email, this.password);
        this.email = "";
        this.password = "";
      } catch (err) {
        console.error(err);
      }
    },
    signInWithGoogle: signInWithGoogle,
  },
};
</script>

<style lang="scss" scoped>
.sign-in {
  width: 380px;
  display: flex;
  flex-direction: column;

  .title {
    margin: 10px 0;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
  }
}
</style>