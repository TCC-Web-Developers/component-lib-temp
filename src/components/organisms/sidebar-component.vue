<script setup>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
//COMPONENTS
import HeaderSidebar from "@/components/molecules/header-sidebar.vue";
import MenuItemSidebar from "@/components/molecules/menu-item-sidebar.vue";
import BaseMenuSection from "@/components/sidebar/base-menu-section.vue";
import BaseMenuSectionLabel from "@/components/sidebar/base-menu-section-label.vue";
import BaseMenu from "@/components/sidebar/base-menu.vue";
//STATES
import { useSidebarStore } from "@/stores/sidebar.js";

const sidebar = useSidebarStore();
</script>

<template>
  <div
    class="bg-gradient d-flex flex-column flex-row-auto"
    :class="[`sidebar-${sidebar.isOpen ? 'open' : 'close'}`]"
  >
    <HeaderSidebar />
    <BaseMenu>
      <MenuItemSidebar :href="'/'" :isShow="false" />
      <BaseMenuSection>
        <template #menu-section-label>
          <BaseMenuSectionLabel>Custom</BaseMenuSectionLabel>
        </template>
        <template #menu-items>
          <MenuItemSidebar :href="'#collapseOne'" :isShow="true" />
          <div id="collapseOne" class="collapse" data-bs-parent="#accordion">
            <MenuItemSidebar :isShow="true" />
            <MenuItemSidebar :isShow="true" />
            <MenuItemSidebar :isShow="true" />
          </div>
        </template>
      </BaseMenuSection>
    </BaseMenu>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/components/sidebar.scss";
</style>
