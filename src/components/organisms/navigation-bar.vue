<script setup>
import { ref, computed } from "vue";
import BaseNavbar from "@/components/navbar/base-navbar.vue";
import SubmenuItem from "@/components/molecules/navbar/submenu-item.vue";
import MainmenuItem from "@/components/molecules/navbar/mainmenu-item.vue";
import BaseSubmenu from "@/components/navbar/base-submenu.vue";
import BaseLabel from "@/components/navbar/base-label.vue";
//data
import pages_data from "@/data/pages.js";
import navbar_data from "@/data/navbar.js";
import apps_data from "@/data/apps.js";
const props = defineProps({
  isSidebarOpen: Boolean,
});
const emit = defineEmits(["handleToggleOffCanvas", "handleToggleSidebar"]);
const show = ref(false);
const handleToggleSidebar = () => {
  emit("handleToggleOffCanvas");

  if (!props.isSidebarOpen) {
    emit("handleToggleSidebar");
  }
};
const navbar = ref([...navbar_data]);
const pages = ref(pages_data);
const apps = ref(apps_data);

const click = () => {
  // show.value = !show.value;
  // console.log(firstDropdownRef.value);
};

const handleClickItem = id => {
  navbar.value = [...navbar.value].map(item => {
    if (item.id === id) {
      return {
        ...item,
        isActive: !item.isActive,
      };
    } else {
      return {
        ...item,
        isActive: false,
      };
    }
  });
};

const items = computed(() => {
  return [
    {
      label: "pages",
      items: pages.value,
    },
    {
      label: "apps",
      items: apps.value,
    },
  ];
});

// watch(
//   () => navbar.value,
//   (newValue, oldValue) => {
//     console.log(newValue, oldValue);
//   }
// );
</script>

<template>
  <BaseNavbar :isSidebarOpen="isSidebarOpen">
    <template #navbar-menu-items>
      <MainmenuItem
        v-for="navbarItem in navbar"
        :key="navbarItem.id"
        @handleClickItem="handleClickItem(navbarItem.id)"
        :class="[navbarItem.isActive ? 'main-menu-item-active' : '']"
      >
        <template #main-menu-label>
          <BaseLabel @click="click">{{ navbarItem.label }}</BaseLabel>
        </template>
        <template #main-menu-submenu>
          <BaseSubmenu
            :class="[navbarItem.isActive ? 'menu-submenu-show' : '', '']"
          >
            <SubmenuItem
              v-for="item in items.find(item => item.label === navbarItem.label)
                .items"
              :key="item.id"
              :isCollapsible="item.isCollapsible"
              :label="item.label"
            >
              <SubmenuItem
                v-for="item in item.items"
                :key="item.id"
                :isCollapsible="item.isCollapsible"
                :icon="'bullet'"
                :bulletType="item.bulletType"
                :label="item.label"
                :parentLabel="item.label"
              >
              </SubmenuItem>
            </SubmenuItem>
          </BaseSubmenu>
        </template>
      </MainmenuItem>
    </template>
    <template #navbar-topbar>
      <button @click="click">TEST</button>
    </template>
  </BaseNavbar>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/navbar.scss";
@import "@/assets/scss/custom.scss";
</style>

<!-- <button
      @click="handleToggleSidebar"
      class="btn btn-primary text-white d-block d-lg-none"
    >
      MENU
    </button> -->
