<script setup>
// import { RouterLink, RouterView } from "vue-router";
// import IconPlaceholder from "@/components/IconPlaceholder.vue";
import SidebarComponent from "@/components/organisms/sidebar-component.vue";

import { useSidebarStore } from "@/stores/sidebar.js";
const sidebar = useSidebarStore();
</script>

<template>
  <main class="d-none d-lg-block">
    <div class="page d-flex flex-row">
      <SidebarComponent />
      <div
        class="wrapper"
        :class="[`wrapper-sidebar-${sidebar.isOpen ? 'open' : 'close'}`]"
      >
        <header
          class="navbar"
          :class="[`navbar-sidebar-${sidebar.isOpen ? 'open' : 'close'}`]"
        ></header>
        <div class="content"></div>
      </div>
    </div>
  </main>
  <!-- <RouterView /> -->
</template>

<style lang="scss">
@import "@/assets/scss/custom.scss";
@import "@/assets/scss/navbar.scss";
@import "@/assets/scss/content.scss";
@import "@/assets/scss/navbar-and-content-wrapper.scss";
</style>
