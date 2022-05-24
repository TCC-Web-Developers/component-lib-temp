<script setup>
// import { RouterLink, RouterView } from "vue-router";
// import IconPlaceholder from "@/components/IconPlaceholder.vue";
import SidebarComponent from "@/components/organisms/sidebar-component.vue";
</script>

<template>
  <main class="d-none d-lg-block">
    <div class="page d-flex flex-row">
      <SidebarComponent />
      <div class="wrapper">
        <header></header>
        <div class="content"></div>
      </div>
    </div>
  </main>
  <!-- <RouterView /> -->
</template>

<style lang="scss">
@import "@/assets/scss/custom.scss";

main {
  // background-color: salmon;
  // height: 100vh;
  // width: 100%;

  .page {
    .wrapper {
      min-height: 100vh;
      width: 100%;
      background-color: rgb(255, 233, 236);
      padding: 72px 0 0 265px;

      header {
        position: fixed;
        top: 0;
        right: 0;
        left: 265px;
        z-index: 99;
        height: 72px;
        background-color: rgb(236, 236, 236);
      }

      .content {
        height: 200vh;
        width: 100%;
        background-color: rgb(125, 125, 125);
      }
    }
  }
}
</style>
