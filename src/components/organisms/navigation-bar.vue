<script setup>
import { useSidebarStore } from "@/stores/sidebar.js";
const sidebar = useSidebarStore();

const emit = defineEmits(["handleToggleSidebar"]);

const handleToggleSidebar = () => {
  emit("handleToggleSidebar");

  if (!sidebar.isOpen) {
    sidebar.toggleSidebar();
  }
};
</script>

<template>
  <div
    class="navbar px-2 d-flex align-items-center justify-content-end"
    :class="[`navbar-sidebar-${sidebar.isOpen ? 'open' : 'close'}`]"
  >
    <button
      @click="handleToggleSidebar"
      class="btn btn-primary text-white d-block d-lg-none"
    >
      MENU
    </button>
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
