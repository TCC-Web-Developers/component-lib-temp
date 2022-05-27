<script setup>
import Logo from "@/assets/logo.svg";
//components
import BaseHeader from "@/components/sidebar/base-header.vue";
import BaseMenuBtn from "@/components/sidebar/base-menu-btn.vue";
import BaseLogo from "@/components/sidebar/base-logo.vue";
//STATE
import { useSidebarStore } from "@/stores/sidebar.js";

const sidebar = useSidebarStore();
</script>

<template>
  <BaseHeader :isSidebarOpen="sidebar.isOpen || sidebar.isHovering">
    <template #header-logo>
      <span v-show="sidebar.isOpen || sidebar.isHovering">
        <BaseLogo :href="'/'">
          <img :src="Logo" />
        </BaseLogo>
      </span>
    </template>
    <template #header-menu-btn>
      <BaseMenuBtn />
    </template>
  </BaseHeader>
</template>
