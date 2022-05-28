<script setup>
import Logo from "@/assets/logo.svg";
//components
import BaseHeader from "@/components/sidebar/base-header.vue";
import BaseMenuBtn from "@/components/sidebar/base-menu-btn.vue";
import BaseLogo from "@/components/sidebar/base-logo.vue";

const props = defineProps({
  isSidebarOpen: Boolean,
  isSidebarHovering: Boolean,
});
const emits = defineEmits(["toggleSidebar"]);

const toggleSidebar = () => {
  emits("toggleSidebar");
};
</script>

<template>
  <BaseHeader :isSidebarOpen="isSidebarOpen || isSidebarHovering">
    <template #header-logo>
      <span v-show="isSidebarOpen || isSidebarHovering">
        <BaseLogo :href="'/'">
          <img :src="Logo" />
        </BaseLogo>
      </span>
    </template>
    <template #header-menu-btn>
      <BaseMenuBtn
        @toggleSidebar="toggleSidebar"
        :isSidebarOpen="isSidebarOpen"
      />
    </template>
  </BaseHeader>
</template>
