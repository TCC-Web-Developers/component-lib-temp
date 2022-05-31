<script setup>
const props = defineProps({
  isSidebarOpen: Boolean,
});
</script>

<template>
  <div
    class="navbar d-flex align-items-center justify-content-end"
    :class="[`navbar-sidebar-${isSidebarOpen ? 'open' : 'close'}`]"
  >
    <div
      class="
        container-fluid
        d-flex
        align-items-stretch
        justify-content-between
        h-100
        px-0
      "
    >
      <div class="navbar-menu-wrapper">
        <div class="navbar-menu">
          <ul class="menu-nav d-flex">
            <slot name="navbar-menu-items"></slot>
          </ul>
        </div>
      </div>
      <div class="topbar">
        <slot name="navbar-topbar"></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/navbar.scss";
@import "@/assets/scss/custom.scss";

.menu {
  background-color: coral;
  color: white;
}
</style>
