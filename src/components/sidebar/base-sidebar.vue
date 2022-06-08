<script setup>
import BaseMenu from "@/components/sidebar/base-menu.vue";
const props = defineProps({
  isSidebarOpen: Boolean,
  isSidebarHovering: Boolean,
  isOffCanvasOpen: Boolean,
});
const emits = defineEmits(["handleMouseEnter", "handleMouseLeave"]);
</script>

<template>
  <div
    class="sidebar d-flex flex-column flex-row-auto"
    :class="[
      `sidebar-${
        isSidebarOpen ? 'open' : isSidebarHovering ? 'hover' : 'close'
      }`,
      `${isOffCanvasOpen ? 'open-sidebar-mobile' : ''}`,
    ]"
  >
    <slot name="sidebar-header"></slot>
    <BaseMenu
      @mouseenter="$emit('handleMouseEnter')"
      @mouseleave="$emit('handleMouseLeave')"
    >
      <slot name="sidebar-menu"></slot>
    </BaseMenu>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/components/sidebar.scss";
.sidebar {
  @media (max-width: 992px) {
    z-index: 501;
    position: fixed;
    top: 0;
    bottom: 0;
    transform: translateX(-100%);
    transition: 0.2s transform linear;

    &.open-sidebar-mobile {
      transform: translateX(0%);
    }
  }
}
</style>
