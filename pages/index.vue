<template>
  <div>
   Nuxt template with Capacitor.js. <br>
   A quick template for hybrid apps.
  </div>
</template>

<script>
export default {
  layout: "fullpage",
  data: function () {
    return {
      
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

</style>
