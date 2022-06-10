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
import Avatar from "@/assets/avatar.jpg";

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
              <ul class="topbar-dropdown-tab d-flex align-items-stretch mt-2">
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

            <div class="topbar-dropdown-body">
              <div class="topbar-dropdown-scroll">
                <div class="reminders d-flex align-items-center mb-3">
                  <div class="reminders-avatar flex-shrink-0">
                    <img alt="Vue logo" :src="Avatar" />
                  </div>
                  <div class="reminders-content d-flex">
                    <div class="reminders-name-jobtitle d-flex flex-column">
                      <a href="#" class="reminders-name">Marcus Smart</a>
                      <span class="reminders-jobtitle text-muted"
                        >UI/UX, Art Director</span
                      >
                    </div>
                    <div class="reminders-item d-flex align-items-center py-2">
                      <span class="reminders-percent">+65%</span>
                      <a
                        href="#"
                        class="reminders-goto btn btn-icon btn-light btn-sm"
                        >></a
                      >
                    </div>
                  </div>
                </div>
                <div class="reminders d-flex align-items-center mb-3">
                  <div class="reminders-avatar flex-shrink-0">
                    <img alt="Vue logo" :src="Avatar" />
                  </div>
                  <div class="reminders-content d-flex">
                    <div class="reminders-name-jobtitle d-flex flex-column">
                      <a href="#" class="reminders-name">Marcus Smart</a>
                      <span class="reminders-jobtitle text-muted"
                        >UI/UX, Art Director</span
                      >
                    </div>
                    <div class="reminders-item d-flex align-items-center py-2">
                      <span class="reminders-percent">+65%</span>
                      <a
                        href="#"
                        class="reminders-goto btn btn-icon btn-light btn-sm"
                        >></a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="reminders-see-all d-flex justify-content-center pt-4">
                <a href="#" class="fw-semibold">See All</a>
              </div>
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
  transform: translate3d(-295px, 72px, 0px);
  top: 0px;
  left: 0px;
  will-change: transform;
  -webkit-box-shadow: 0px 15px 50px 0px rgb(82 63 105 / 15%);
  box-shadow: 0px 15px 50px 0px rgb(82 63 105 / 15%);

  .topbar-dropdown-header {
    padding-top: 2.8rem;
    width: 100%;
    background-color: #3658d2;
    border-radius: 0.4rem 0.4rem 0 0;

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
        height: 2rem;
        font-size: 0.925rem;
        line-height: 1.35;
        border-radius: 0.42rem;
      }
    }

    .topbar-dropdown-tab {
      padding: 0 2rem;
      gap: 26px;

      .dropdown-tab-item {
        font-size: 14px;
        font-weight: 500;

        a {
          display: block;
          padding: 12px 0;
          border-bottom: 2.5px solid $primary;
        }
      }
    }
  }

  .topbar-dropdown-body {
    background-color: #ffffff;
    padding: 26px;
    border-radius: 0 0 0.4rem 0.4rem;

    .topbar-dropdown-scroll {
      height: 300px;
      width: 100%;
      overflow: auto;

      .reminders {
        width: 100%;
        .reminders-avatar {
          margin-right: 0.6rem;
          img {
            border-radius: 0.42rem;
            height: 35px;
            width: 35px;
          }
        }

        .reminders-content {
          flex: 1 auto;
          font-family: var(--font-family);
          font-weight: 500;
          .reminders-name-jobtitle {
            flex-grow: 1;
            padding-right: 1.2rem;
            .reminders-name {
              font-size: 14px;
              text-decoration: none;
              color: #181c32 !important;
              margin-bottom: 0.2rem;

              &:hover {
                color: var(--primary-color) !important;
              }
            }

            .reminders-jobtitle {
              font-size: 13px;
              color: #b5b5c3 !important;
            }
          }

          .reminders-item {
            .reminders-percent {
              font-size: 12px;
              color: #1bc5bd !important;
              padding-right: 1.4rem;
            }

            .reminders-goto {
              display: block;
              height: 32.5px;
              width: 32.5px;
              text-decoration: none;
              background-color: #f3f6f9;
              border-color: #f3f6f9;
            }
          }
        }
      }
    }

    .reminders-see-all {
      a {
        font-family: var(--font-family);
        text-decoration: none;
        border-radius: 0.4rem;
        padding: 8.4px 13px;
        font-weight: 500;
        font-size: 13px;
        color: var(--primary-color);
        background-color: var(--primary-color-light);

        &:hover {
          background-color: var(--primary-color);
          color: var(--light-color);
        }
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
