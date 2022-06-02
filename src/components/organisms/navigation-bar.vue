<script setup>
import { ref, computed } from "vue";
import BaseNavbar from "@/components/navbar/base-navbar.vue";
import MainmenuItem from "@/components/molecules/navbar/mainmenu-item.vue";
import MainmenuItemSubmenu from "@/components/molecules/navbar/mainmenu-item-submenu.vue";
//data
import navbar_data from "@/data/navbar.js";
import pages_data from "@/data/pages.js";
import features_data from "@/data/features.js";
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
const features = ref(features_data);

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
    {
      label: "features",
      items: features.value,
    },
  ];
});
</script>

<template>
  <BaseNavbar :isSidebarOpen="isSidebarOpen">
    <template #navbar-menu-items>
      <MainmenuItem
        v-for="navbarItem in navbar"
        :key="navbarItem.id"
        @handleClickItem="handleClickItem(navbarItem.id)"
        :label="navbarItem.label"
        :isActive="navbarItem.isActive"
        :hasSubmenu="items.some(item => item.label === navbarItem.label)"
      >
        <template #main-menu-submenu>
          <MainmenuItemSubmenu :navbarItem="navbarItem" :items="items" />
        </template>
      </MainmenuItem>
    </template>
    <template #navbar-topbar>
      <button @click="click">TEST</button>
    </template>
  </BaseNavbar>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/components/navbar/submenu.scss";
@import "@/assets/scss/navbar.scss";
@import "@/assets/scss/custom.scss";
</style>

<!-- <button
      @click="handleToggleSidebar"
      class="btn btn-primary text-white d-block d-lg-none"
    >
      MENU
    </button> -->
