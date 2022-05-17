<template>
  <div>
    <Header />
    <div class="default">
      <div class="side-nav">
        <SideNav />
      </div>
      <Nuxt class="main" />
    </div>
  </div>
</template>
<script>
import Header from "@/components/navigation/Header.vue";
import SideNav from "@/components/navigation/SideNav.vue";
export default {
  name: "DefaultLayout",
  middleware: "auth",
  components: {
    Header,
    SideNav,
  },
};
</script>
<style scoped>
.default {
  display: flex;
  width: 80%;
  margin: auto;
}
.main {
  width: 85%;
}
.side-nav {
  width: 15%;
}
</style>
