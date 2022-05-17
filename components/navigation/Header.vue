<template>
  <div class="header card">
    <div class="top-nav">
      <div class="logo">
        <img
          src="~/assets/shared/avrio-logo.png"
          width="100"
          alt="company logo"
        />
      </div>
      <div class="options">
        <div class="nav" @click="logout()">
          <span class="mdi mdi-exit-to-app mdi-24px"></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {};
  },
  computed: {},
  methods: {
    logout() {
      let payload = {
        isAuth: false,
        token: null,
      };
      this.$store.commit("localStorage/CLEAR_STATE", payload);
      this.$router.push('/')
    },
  },
};
</script>
<style scoped>
.header {
  height: 60px;
  margin-bottom: 20px;
}
.top-nav {
  width: 80%;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
}
.logo {
  cursor: pointer;
  display: grid;
  place-items: center;
}
.nav {
  display: grid;
  place-items: center;
  margin-right: 10px;
  padding: 10px;
}
.options {
  display: flex;
  cursor: pointer;
}
</style>
