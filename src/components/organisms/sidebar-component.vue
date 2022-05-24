<script setup>
import HeaderSidebar from "@/components/molecules/header-sidebar.vue";
import MenuItemSidebar from "@/components/molecules/menu-item-sidebar.vue";
</script>

<template>
  <div class="sidebar bg-gradient d-flex flex-column flex-row-auto">
    <HeaderSidebar />
    <div class="sidebar-menu-wrapper">
      <div class="sidebar-menu">
        <ul>
          <MenuItemSidebar />
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 265px;
  z-index: 100;

  .sidebar-menu-wrapper {
    flex: 1 0 auto;

    .sidebar-menu {
      height: calc(100vh - 72px - 13px - 13px);
      width: 100%;
      overflow-y: auto;
      margin: 13px 0;

      &::-webkit-scrollbar {
        display: none;
        position: absolute;
        width: 0.3rem;
      }

      // &::-webkit-scrollbar-track {
      //   box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      // }

      // &::-webkit-scrollbar-thumb {
      //   border-radius: 100px;
      //   background-color: darkgrey;
      //   outline: 1px solid slategrey;
      // }

      ul {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 1000px;
        padding: 15px 0;
      }
    }
  }
}
</style>
