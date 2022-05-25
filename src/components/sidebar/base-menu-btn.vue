<script setup>
import IconMenu from "@/components/icons/icon-menu.vue";
import BaseSvgIcon from "@/components/global/base-svg-icon.vue";
//States
import { useSidebarStore } from "@/stores/sidebar.js";

const sidebar = useSidebarStore();

const handleToggleSidebar = () => {
  sidebar.toggleSidebar();
};
</script>

<template>
  <button
    @click="handleToggleSidebar"
    class="menu-btn"
    :class="[`menu-btn-${sidebar.isOpen ? 'open' : 'close'}`]"
  >
    <BaseSvgIcon class="open-state">
      <IconMenu class="svg-icon-md" />
    </BaseSvgIcon>
  </button>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/components/sidebar-header.scss";
</style>
