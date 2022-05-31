<script setup>
import { ref, computed, watch, reactive } from "vue";
import { useRouter } from "vue-router";
//COMPONENTS
import HeaderSidebar from "@/components/molecules/header-sidebar.vue";
import MenuItemSidebar from "@/components/molecules/menu-item-sidebar.vue";
import BaseMenuSection from "@/components/sidebar/base-menu-section.vue";
import MenuSectionHeaderSidebar from "@/components/molecules/menu-section-header-sidebar.vue";
import BaseMenu from "@/components/sidebar/base-menu.vue";
//DATA
import menusObject from "@/data/menus.js";

const props = defineProps({
  isOffCanvasOpen: Boolean,
});

const router = useRouter();
const isSidebarOpen = ref(true);
const isSidebarHovering = ref(false);
const activeRootItem = ref(null);
const activeFirstItem = ref(null);
const menus = ref(menusObject);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

const handleMouseEnter = () => {
  if (!isSidebarOpen.value) {
    isSidebarHovering.value = true;
  }
};

const handleMouseLeave = () => {
  if (!isSidebarOpen.value) {
    isSidebarHovering.value = false;
  }
};

const handleToggleItem = itemData => {
  const { level, id } = itemData;

  if (level === "root") {
    activeRootItem.value = itemData;
  }
  if (level === "first") {
    activeFirstItem.value = itemData;
  }

  console.log(itemData);
};

const activeItems = computed(() => {
  return {
    activeRootItem: activeRootItem.value,
    activeFirstItem: activeFirstItem.value,
  };
});

defineExpose({
  isSidebarOpen,
  isSidebarHovering,
  toggleSidebar,
});
</script>

<template>
  <div
    class="sidebar-mobile d-flex flex-column flex-row-auto"
    :class="[
      `sidebar-${
        isSidebarOpen ? 'open' : isSidebarHovering ? 'hover' : 'close'
      }`,
      `${isOffCanvasOpen ? 'open-sidebar-mobile' : ''}`,
    ]"
  >
    <HeaderSidebar
      @toggleSidebar="toggleSidebar"
      :isSidebarOpen="isSidebarOpen"
      :isSidebarHovering="isSidebarHovering"
    />
    <BaseMenu @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
      <MenuItemSidebar
        :isSidebarOpen="isSidebarOpen"
        :isSidebarHovering="isSidebarHovering"
        :label="'Dashboard'"
        :type="'link-item'"
        :href="'/'"
        :isLink="true"
      ></MenuItemSidebar>

      <BaseMenuSection v-for="menuSection in menus" :key="menuSection.id">
        <template #menu-section-header>
          <MenuSectionHeaderSidebar
            :isSidebarOpen="isSidebarOpen"
            :isSidebarHovering="isSidebarHovering"
          >
            {{ menuSection.headerLabel }}
          </MenuSectionHeaderSidebar>
        </template>
        <template #menu-items>
          <!-- MENU ITEMS -->
          <MenuItemSidebar
            @handleToggleItem="handleToggleItem"
            :isSidebarOpen="isSidebarOpen"
            :isSidebarHovering="isSidebarHovering"
            v-for="item in menuSection.items"
            :key="item.id"
            :id="item.id"
            :itemsLength="item.items.length"
            :label="item.label"
            :type="item.type"
            :href="item.url"
            :isCollapsible="item.isCollapsible"
            :isLink="item.isLink"
            :activeItems="activeItems"
          >
            <!-- FIRST LEVEL SUBMENU ITEMS -->
            <MenuItemSidebar
              @handleToggleItem="handleToggleItem"
              :isSidebarOpen="isSidebarOpen"
              :isSidebarHovering="isSidebarHovering"
              v-for="firstItem in item.items"
              :key="firstItem.id"
              :id="firstItem.id"
              :itemsLength="firstItem.items.length"
              :label="firstItem.label"
              :type="firstItem.type"
              :href="firstItem.url"
              :isCollapsible="firstItem.isCollapsible"
              :bulletType="firstItem.bulletType"
              :parentTag="item.label"
              :isLink="firstItem.isLink"
              :itemLevel="'first'"
              :activeItems="activeItems"
            >
              <!-- SECOND LEVEL SUBMENU ITEMS   -->
              <MenuItemSidebar
                :isSidebarOpen="isSidebarOpen"
                :isSidebarHovering="isSidebarHovering"
                v-for="secondItem in firstItem.items"
                :key="secondItem.id"
                :itemsLength="secondItem.items.length"
                :label="secondItem.label"
                :type="secondItem.type"
                :href="secondItem.url"
                :isCollapsible="secondItem.isCollapsible"
                :bulletType="secondItem.bulletType"
                :parentTag="firstItem.label"
                :isLink="secondItem.isLink"
                :itemLevel="'second'"
              >
                <!-- THIRD LEVEL SUBMENU ITEMS   -->
                <MenuItemSidebar
                  :isSidebarOpen="isSidebarOpen"
                  :isSidebarHovering="isSidebarHovering"
                  v-for="thirdItem in secondItem.items"
                  :key="thirdItem.id"
                  :itemsLength="thirdItem.items.length"
                  :label="thirdItem.label"
                  :type="thirdItem.type"
                  :href="thirdItem.url"
                  :isCollapsible="thirdItem.isCollapsible"
                  :bulletType="thirdItem.bulletType"
                  :parentTag="secondItem.label"
                  :isLink="thirdItem.isLink"
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

.sidebar-mobile {
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
