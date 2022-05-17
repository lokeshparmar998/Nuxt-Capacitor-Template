<template>
  <div class="login-page">
    <div class="branding">
      <div class="branding-logo">
        <div class="is-justify-content-center is-flex">
          <img src="~/assets/shared/logo.png" width="200px" alt="" />
        </div>
      </div>
    </div>
    <div class="login">
      <div class="login-box">
        <div class="page-heading">Login to the dashboard</div>
        <b-field label="Username">
          <b-input
            type="email"
            placeholder="johndoe@gmail.com"
            maxlength="30"
            v-model="email"
          >
          </b-input>
        </b-field>
        <b-field label="Password">
          <b-input
            class="custom-input"
            value="123"
            type="password"
            placeholder="**********"
            v-model="password"
            maxlength="30"
          ></b-input>
        </b-field>
        <b-button type="is-success" @click="login">Login</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "fullpage",
  data: function () {
    return {
      email: "donjoe@gmail.com",
      password: "This is fake",
    };
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters["localStorage/isAuthenticated"];
    },
  },
  created() {
    if (this.isAuthenticated) {
      this.$router.push("home");
    }
  },
  methods: {
    login() {
      this.$nuxt.$loading.start();
      let that = this;
      setTimeout(() => {
        this.$nuxt.$loading.finish();
        that.$successToast("Login Success!", that);
        that.$store.commit("localStorage/SET_AUTH", true);
        that.$store.commit("localStorage/SET_TOKEN", "test");
        this.$router.push("home");
      }, 1000);
    },
  },
};
</script>
<style scoped>
.login-page {
  display: flex;
}
.branding {
  width: 50%;
  height: 100vh;
  background: #30a673;
  display: grid;
  place-items: center;
}
.login {
  width: 50%;
  height: 100vh;
  display: grid;
  place-items: center;
}
.page-heading {
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: 600;
  font-family: "roboto", sans-serif;
}
.login-box {
  width: 70%;
  margin: auto;
}
.field {
  margin-bottom: 0px;
}
</style>
