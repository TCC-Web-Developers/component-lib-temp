<script setup>
import { ref, computed, shallowRef } from "vue";
import BaseNavbar from "@/components/navbar/base-navbar.vue";
import MainmenuItem from "@/components/molecules/navbar/mainmenu-item.vue";
import MainmenuItemSubmenu from "@/components/molecules/navbar/mainmenu-item-submenu.vue";
import BaseTopbarItemBtn from "@/components/navbar/topbar/base-topbar-item-btn.vue";
//data
import navbar_data from "@/data/navbar.js";
import pages_data from "@/data/pages.js";
import features_data from "@/data/features.js";
import apps_data from "@/data/apps.js";
import topbar_item_data from "@/data/topbar_item.js";
//icons
import IconChatSix from "@/components/icons/navbar/icon-chat-6.vue";
import IconSearch from "@/components/icons/navbar/icon-search.vue";
import IconEqualizer from "@/components/icons/navbar/icon-equalizer.vue";
import IconFourBlocks from "@/components/icons/navbar/icon-four-blocks.vue";
import IconCompiling from "@/components/icons/navbar/icon-compiling.vue";

const icons = shallowRef([
  {
    name: "search",
    component: IconSearch,
  },
  {
    name: "equalizer",
    component: IconEqualizer,
  },
  {
    name: "four-blocks",
    component: IconFourBlocks,
  },
  {
    name: "compiling",
    component: IconCompiling,
  },
  {
    name: "chat-6",
    component: IconChatSix,
  },
]);

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
const topbarItems = ref(topbar_item_data);

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

const getIcon = iconName => {
  return icons.value.find(icon => icon.name === iconName).component;
};
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
      <div v-for="item in topbarItems" :key="item.id" class="dropdown-item">
        <div class="topbar-item d-flex align-items-center">
          <BaseTopbarItemBtn>
            <component :is="getIcon(item.icon)"></component>
          </BaseTopbarItemBtn>
          <div
            v-if="item.name === 'notifications'"
            class="topbar-item-dropdown-menu"
          >
            <div class="topbar-dropdown-header">
              <div
                class="
                  message-center
                  d-flex
                  align-items-center
                  justify-content-center
                  gap-2
                "
              >
                <span class="message-center-label">Message Center</span>
                <span
                  class="
                    notif-badge
                    d-flex
                    align-items-center
                    justify-content-center
                  "
                  >24</span
                >
              </div>
              <ul class="topbar-dropdown-tab d-flex align-items-stretch">
                <li class="dropdown-tab-item">
                  <a href="#">Reminders</a>
                </li>
                <li class="dropdown-tab-item">
                  <a href="#">Events</a>
                </li>
                <li class="dropdown-tab-item">
                  <a href="#">Logs</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </template>
  </BaseNavbar>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/components/navbar/submenu.scss";
@import "@/assets/scss/navbar.scss";
@import "@/assets/scss/custom.scss";
@import "@/assets/scss/components/navbar/topbar.scss";

.topbar-item-dropdown-menu {
  position: absolute;
  width: 350px;
  background-color: red;
  transform: translate3d(-295px, 72px, 0px);
  top: 0px;
  left: 0px;
  will-change: transform;

  .topbar-dropdown-header {
    padding-top: 2.8rem;
    width: 100%;

    .message-center {
      .message-center-label {
        font-size: calc(1rem + 0.12vw);
        color: white;
        font-family: var(--font-family);
      }

      .notif-badge {
        background-color: #5ccec9;
        color: white;
        width: 2.4rem;
        height: 2.2rem;
        font-size: 0.925rem;
        line-height: 1.35;
        border-radius: 0.42rem;
      }
    }

    .topbar-dropdown-tab {
      padding: 0 2rem;
      gap: 26px;

      .dropdown-tab-item {
        padding: 12px 0;
        font-size: 14px;
        font-weight: 500;
      }
    }
  }
}
</style>

<!-- <button
      @click="handleToggleSidebar"
      class="btn btn-primary text-white d-block d-lg-none"
    >
      MENU
    </button> -->
