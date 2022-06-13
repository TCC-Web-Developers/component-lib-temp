<script setup>
import { ref, computed, watch, reactive } from "vue";
import { useRouter } from "vue-router";
//COMPONENTS
import HeaderSidebar from "@/components/molecules/header-sidebar.vue";
import MenuItemSidebar from "@/components/molecules/menu-item-sidebar.vue";
import BaseMenuSection from "@/components/sidebar/base-menu-section.vue";
import MenuSectionHeaderSidebar from "@/components/molecules/menu-section-header-sidebar.vue";
import BaseSidebar from "@/components/sidebar/base-sidebar.vue";
//DATA
import menusObject from "@/data/sidebar/menus.js";

const props = defineProps({
  isOffCanvasOpen: Boolean,
});

const router = useRouter();
const isSidebarOpen = ref(true);
const isSidebarHovering = ref(false);
const activeItemsContainer = reactive({
  items: [],
});
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

const removeItem = itemData => {
  const { level, parent, submenuHeight } = itemData;

  activeItemsContainer.items = [...activeItemsContainer.items].filter(
    activeItem => activeItem.parent !== parent
  );

  //shrink the height of removed item's parent(submenu) and its root item.
  activeItemsContainer.items = activeItemsContainer.items.map(activeItem => {
    //shrink root
    if (activeItem.level === "root" && level === "second") {
      return {
        ...activeItem,
        submenuHeight: activeItem.submenuHeight - submenuHeight,
      };
    }
    //shrink parent
    if (activeItem.label === parent) {
      return {
        ...activeItem,
        submenuHeight: activeItem.submenuHeight - submenuHeight,
      };
    }
    return activeItem;
  });
};

const toggleSubItem = parent => {
  activeItemsContainer.items = [...activeItemsContainer.items].filter(
    activeItem => activeItem.parent !== parent
  );
};

const toggleRootItem = level => {
  activeItemsContainer.items = [...activeItemsContainer.items].filter(
    activeItem => activeItem.level !== level
  );
};

const handleToggleItem = itemData => {
  const { level, id, parent } = itemData;
  const hasItemInActiveItemsContainer = activeItemsContainer.items.some(
    activeItem => activeItem.id === id && activeItem.parent === parent
  );

  //check if it has already item in active items container, then remove it.
  if (hasItemInActiveItemsContainer) {
    removeItem(itemData);
    return;
  }

  //toggle similar level item.
  if (level === "root") {
    toggleRootItem(level);
  } else {
    toggleSubItem(parent);
  }

  //Append clicked item in active items container based on their dropdown level
  if (level === "root") {
    let itemDataCopy = itemData;
    const activeItemsContainerCopy = [...activeItemsContainer.items];

    //to retain previous submenu's height of root upon opening
    if (activeItemsContainer.items.length) {
      const childAndFirstLevelItem = activeItemsContainerCopy.find(
        activeItem => {
          return (
            activeItem.level === "first" && activeItem.parent === itemData.label
          );
        }
      );

      if (childAndFirstLevelItem) {
        itemDataCopy = {
          ...itemData,
          submenuHeight:
            itemData.itemsLength * 40 + childAndFirstLevelItem.submenuHeight,
        };
      }
    }

    activeItemsContainer.items = [...activeItemsContainerCopy, itemDataCopy];
  } else if (level === "first") {
    let itemDataCopy = itemData;
    let activeItemsContainerCopy = [...activeItemsContainer.items].map(
      activeItem => {
        if (activeItem.label === itemData.parent) {
          return {
            ...activeItem,
            submenuHeight: activeItem.itemsLength * 40 + itemData.submenuHeight,
          };
        }
        return activeItem;
      }
    );

    //to retain submenu's height of root and the activated item upon opening
    if (
      activeItemsContainerCopy.some(
        activeItem => activeItem.level === "root"
      ) &&
      activeItemsContainerCopy.some(
        activeItem => activeItem.level === "second"
      ) &&
      activeItemsContainerCopy.some(
        activeItem => activeItem.parent === itemDataCopy.label
      )
    ) {
      const secondActiveItemHeight = activeItemsContainerCopy.find(
        activeItem => activeItem.level === "second"
      ).submenuHeight;

      //expand root's submenu height
      activeItemsContainerCopy = activeItemsContainerCopy.map(activeItem => {
        if (activeItem.level === "root") {
          return {
            ...activeItem,
            submenuHeight: activeItem.submenuHeight + secondActiveItemHeight,
          };
        }
        return activeItem;
      });

      //expand first's submenu height
      itemDataCopy = {
        ...itemDataCopy,
        submenuHeight: itemData.itemsLength * 40 + secondActiveItemHeight,
      };
    }

    activeItemsContainer.items = [...activeItemsContainerCopy, itemDataCopy];
  } else if (level === "second") {
    let activeItemsContainerCopy = [...activeItemsContainer.items].map(activeItem => {
      //expand this item's parent submenu height
      if (activeItem.label === itemData.parent) {
        return {
          ...activeItem,
          submenuHeight: activeItem.itemsLength * 40 + itemData.submenuHeight,
        };
      }
      return activeItem;
    });

    const parentHeight = activeItemsContainerCopy.find(
      activeItem => activeItem.label === itemData.parent
    ).submenuHeight;

    //expand this item's root submenu height
    activeItemsContainerCopy = activeItemsContainerCopy.map(activeItem => {
      if (activeItem.level === "root") {
        return {
          ...activeItem,
          submenuHeight:
            activeItem.itemsLength * 40 + parentHeight + itemData.submenuHeight,
        };
      }

      return activeItem;
    });

    activeItemsContainer.items = [...activeItemsContainerCopy, itemData];
  }
};

defineExpose({
  isSidebarOpen,
  isSidebarHovering,
  toggleSidebar,
});
</script>

<template>
  <BaseSidebar
    @handleMouseLeave="handleMouseLeave"
    @handleMouseEnter="handleMouseEnter"
    :isSidebarOpen="isSidebarOpen"
    :isSidebarHovering="isSidebarHovering"
    :isOffCanvasOpen="isOffCanvasOpen"
  >
    <template #sidebar-header>
      <HeaderSidebar
        @toggleSidebar="toggleSidebar"
        :isSidebarOpen="isSidebarOpen"
        :isSidebarHovering="isSidebarHovering"
      />
    </template>
    <template #sidebar-menu>
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
            :path="item.path"
            :href="menuSection.path + item.path"
            :isCollapsible="item.isCollapsible"
            :isLink="item.isLink"
            :parentItem="menuSection.headerLabel"
            :activeItems="activeItemsContainer.items"
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
              :path="firstItem.path"
              :href="menuSection.path + item.path + firstItem.path"
              :isCollapsible="firstItem.isCollapsible"
              :bulletType="firstItem.bulletType"
              :parentItem="item.label"
              :isLink="firstItem.isLink"
              :itemLevel="'first'"
              :activeItems="activeItemsContainer.items"
            >
              <!-- SECOND LEVEL SUBMENU ITEMS   -->
              <MenuItemSidebar
                @handleToggleItem="handleToggleItem"
                :isSidebarOpen="isSidebarOpen"
                :isSidebarHovering="isSidebarHovering"
                v-for="secondItem in firstItem.items"
                :key="secondItem.id"
                :id="secondItem.id"
                :itemsLength="secondItem.items.length"
                :label="secondItem.label"
                :type="secondItem.type"
                :path="secondItem.path"
                :href="
                  menuSection.path +
                  item.path +
                  firstItem.path +
                  secondItem.path
                "
                :isCollapsible="secondItem.isCollapsible"
                :bulletType="secondItem.bulletType"
                :parentItem="firstItem.label"
                :isLink="secondItem.isLink"
                :itemLevel="'second'"
                :activeItems="activeItemsContainer.items"
              >
                <!-- THIRD LEVEL SUBMENU ITEMS   -->
                <MenuItemSidebar
                  @handleToggleItem="handleToggleItem"
                  :isSidebarOpen="isSidebarOpen"
                  :isSidebarHovering="isSidebarHovering"
                  v-for="thirdItem in secondItem.items"
                  :key="thirdItem.id"
                  :id="thirdItem.id"
                  :itemsLength="thirdItem.items.length"
                  :label="thirdItem.label"
                  :type="thirdItem.type"
                  :path="thirdItem.url"
                  :href="
                    menuSection.path +
                    item.path +
                    firstItem.path +
                    secondItem.path +
                    thirdItem.path
                  "
                  :isCollapsible="thirdItem.isCollapsible"
                  :bulletType="thirdItem.bulletType"
                  :parentItem="secondItem.label"
                  :isLink="thirdItem.isLink"
                  :itemLevel="'third'"
                  :activeItems="activeItemsContainer.items"
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
    </template>
  </BaseSidebar>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/components/sidebar.scss";
</style>
