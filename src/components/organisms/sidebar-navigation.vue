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

const cl = ref(null);
const menus = ref(menusObject);
const sidebar = useSidebarStore();

console.log(menus.value);
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

      <BaseMenuSection v-for="menu in menus" :key="menu.id">
        <template #menu-section-header>
          <MenuSectionHeaderSidebar>
            {{ menu.headerLabel }}
          </MenuSectionHeaderSidebar>
        </template>
        <template #menu-items>
          <!-- MENU ITEMS -->
          <MenuItemSidebar
            v-for="item in menu.items"
            :key="item.id"
            :label="item.label"
            :type="item.type"
            :href="item.url"
            :isCollapsible="item.isCollapsible"
          >
            <!-- FIRST LEVEL SUBMENU ITEMS -->
            <MenuItemSidebar
              v-for="firstItem in item.items"
              :key="firstItem.id"
              :label="firstItem.label"
              :type="firstItem.type"
              :href="firstItem.url"
              :isCollapsible="firstItem.isCollapsible"
              :bulletType="firstItem.bulletType"
              :itemLevel="'first'"
            >
              <!-- SECOND LEVEL SUBMENU ITEMS -->
              <MenuItemSidebar
                v-for="secondItem in firstItem.items"
                :key="secondItem.id"
                :label="secondItem.label"
                :type="secondItem.type"
                :href="secondItem.url"
                :isCollapsible="secondItem.isCollapsible"
                :bulletType="secondItem.bulletType"
                :itemLevel="'second'"
              >
                <!-- THIRD LEVEL SUBMENU ITEMS -->
                <MenuItemSidebar
                  v-for="thirdItem in secondItem.items"
                  :key="thirdItem.id"
                  :label="thirdItem.label"
                  :type="thirdItem.type"
                  :href="thirdItem.url"
                  :isCollapsible="thirdItem.isCollapsible"
                  :bulletType="thirdItem.bulletType"
                  :itemLevel="'third'"
                >
                </MenuItemSidebar>
              </MenuItemSidebar>
            </MenuItemSidebar>
            <!-- SUBMENU ITEMS -->
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
