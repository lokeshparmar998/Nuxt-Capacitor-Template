<template>
  <div class="index box">
    <div class="is-family-monospace is-size-3 is-underlined">
      Checklist to start working on this template
    </div>
    <section class="section">
      <b-field class="mb-5">
        <b-checkbox size="is-large is-family-monospace"
          >Set axios base url in nuxt.config.js file.</b-checkbox
        >
      </b-field>
      <b-field class="mb-5">
        <b-checkbox size="is-large is-family-monospace"
          >If using only for web remove capacitor files.</b-checkbox
        >
      </b-field>
      <b-field class="mb-5">
        <b-checkbox size="is-large is-family-monospace"
          >Rename project in nuxt.config.js and capacitor.config.</b-checkbox
        >
      </b-field>
      <b-field class="mb-5">
        <b-checkbox size="is-large is-family-monospace"
          >Rename project in android string file.</b-checkbox
        >
      </b-field>
      <b-field class="mb-5">
        <b-checkbox size="is-large is-family-monospace"
          >Install ios to work on ios app.</b-checkbox
        >
      </b-field>
      <b-field>
        <b-checkbox size="is-large is-family-monospace"
          >Setup push notifications in android.</b-checkbox
        >
      </b-field>
    </section>
  </div>
</template>
<script>
export default {
  layout: "fullpage",
  data: function () {
    return {};
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
.index {
  width: 60%;
  height: 100vh;
  margin: auto;
}
</style>
