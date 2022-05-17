<template>
    <div>
      <p class="menu-label is-hidden-touch">General</p>
      <ul class="menu-list">
        <li v-for="(item, key) of items" :key="key">
          <NuxtLink :to="item.to" exact-active-class="is-active">
            <b-icon :icon="item.icon" /> {{ item.title }}
          </NuxtLink>
        </li>
      </ul>
    </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Dashboard",
          icon: "view-dashboard",
          to: { name: "home" },
        },
        {
          title: "Admin",
          icon: "account",
          to: { name: "admin" },
        },
      ],
    };
  },
};
</script>
