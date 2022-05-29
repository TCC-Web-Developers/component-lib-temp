<script setup>
import IconMenu from "@/components/icons/icon-menu.vue";
import BaseSvgIcon from "@/components/global/base-svg-icon.vue";

const props = defineProps({
  isSidebarOpen: Boolean,
});
const emits = defineEmits(["toggleSidebar"]);

const handleToggleSidebar = () => {
  emits("toggleSidebar");
};
</script>

<template>
  <button
    @click="handleToggleSidebar"
    class="menu-btn"
    :class="[`menu-btn-${isSidebarOpen ? 'open' : 'close'}`]"
  >
    <BaseSvgIcon>
      <IconMenu class="svg-icon-md" />
    </BaseSvgIcon>
  </button>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/components/sidebar-header.scss";
</style>
