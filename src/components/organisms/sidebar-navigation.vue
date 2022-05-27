<script setup>
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { ref } from "vue";
//COMPONENTS
import HeaderSidebar from "@/components/molecules/header-sidebar.vue";
import MenuItemSidebar from "@/components/molecules/menu-item-sidebar.vue";
import BaseMenuSection from "@/components/sidebar/base-menu-section.vue";
import MenuSectionHeaderSidebar from "@/components/molecules/menu-section-header-sidebar.vue";
import BaseMenu from "@/components/sidebar/base-menu.vue";
//STATES
import { useSidebarStore } from "@/stores/sidebar.js";
//DATA
import menusObject from "@/data/menus.js";

const menus = ref(menusObject);
const sidebar = useSidebarStore();
</script>

<template>
  <div
    class="d-flex flex-column flex-row-auto"
    :class="[`sidebar-${sidebar.isOpen ? 'open' : 'close'}`]"
  >
    <HeaderSidebar />
    <BaseMenu>
      <MenuItemSidebar
        :label="'Dashboard'"
        :type="'menu-item'"
        :href="'/'"
        :isCollapsible="false"
      ></MenuItemSidebar>

      <BaseMenuSection v-for="menuSection in menus" :key="menuSection.id">
        <template #menu-section-header>
          <MenuSectionHeaderSidebar>
            {{ menuSection.headerLabel }}
          </MenuSectionHeaderSidebar>
        </template>
        <template #menu-items>
          <!-- MENU ITEMS -->
          <MenuItemSidebar
            v-for="item in menuSection.items"
            :key="item.id"
            :itemsLength="item.items.length"
            :label="item.label"
            :type="item.type"
            :href="item.url"
            :isCollapsible="item.isCollapsible"
          >
            <!-- FIRST LEVEL SUBMENU ITEMS -->
            <MenuItemSidebar
              v-for="firstItem in item.items"
              :key="firstItem.id"
              :itemsLength="firstItem.items.length"
              :label="firstItem.label"
              :type="firstItem.type"
              :href="firstItem.url"
              :isCollapsible="firstItem.isCollapsible"
              :bulletType="firstItem.bulletType"
              :itemLevel="'first'"
            >
              <!-- SECOND LEVEL SUBMENU ITEMS   -->
              <MenuItemSidebar
                v-for="secondItem in firstItem.items"
                :key="secondItem.id"
                :itemsLength="secondItem.items.length"
                :label="secondItem.label"
                :type="secondItem.type"
                :href="secondItem.url"
                :isCollapsible="secondItem.isCollapsible"
                :bulletType="secondItem.bulletType"
                :itemLevel="'second'"
              >
                <!-- THIRD LEVEL SUBMENU ITEMS   -->
                <MenuItemSidebar
                  v-for="thirdItem in secondItem.items"
                  :key="thirdItem.id"
                  :itemsLength="thirdItem.items.length"
                  :label="thirdItem.label"
                  :type="thirdItem.type"
                  :href="thirdItem.url"
                  :isCollapsible="thirdItem.isCollapsible"
                  :bulletType="thirdItem.bulletType"
                  :itemLevel="'third'"
                >
                </MenuItemSidebar>
                <!-- THIRD LEVEL SUBMENU ITEMS   -->
              </MenuItemSidebar>
              <!-- SECOND LEVEL SUBMENU ITEMS   -->
            </MenuItemSidebar>
            <!-- FIRST LEVEL SUBMENU ITEMS -->
          </MenuItemSidebar>
          <!-- MENU ITEMS -->
        </template>
      </BaseMenuSection>
    </BaseMenu>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/components/sidebar.scss";

.collapsable-menu {
  overflow: hidden;
  transition: 0.2s max-height linear;
  list-style: none;
  padding: 0;
}
</style>
