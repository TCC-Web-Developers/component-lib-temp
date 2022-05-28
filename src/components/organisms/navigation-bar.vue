<script setup>
const props = defineProps({
  isSidebarOpen: Boolean,
});
const emit = defineEmits(["handleToggleOffCanvas", "handleToggleSidebar"]);

const handleToggleSidebar = () => {
  emit("handleToggleOffCanvas");

  if (!props.isSidebarOpen) {
    emit("handleToggleSidebar");
  }
};
</script>

<template>
  <div
    class="navbar px-2 d-flex align-items-center justify-content-end"
    :class="[`navbar-sidebar-${isSidebarOpen ? 'open' : 'close'}`]"
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
