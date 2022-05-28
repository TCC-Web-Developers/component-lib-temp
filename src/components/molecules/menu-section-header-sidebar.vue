<script setup>
import BaseMenuSectionHeader from "@/components/sidebar/base-menu-section-header.vue";
import BaseMenuSectionIcon from "@/components/sidebar/base-menu-section-icon.vue";
import BaseMenuSectionLabel from "@/components/sidebar/base-menu-section-label.vue";

const props = defineProps({
  isSidebarOpen: Boolean,
  isSidebarHovering: Boolean,
});
</script>

<template>
  <BaseMenuSectionHeader>
    <BaseMenuSectionIcon
      :isSidebarOpen="isSidebarOpen"
      :isSidebarHovering="isSidebarHovering"
    />
    <BaseMenuSectionLabel
      :isSidebarOpen="isSidebarOpen"
      :isSidebarHovering="isSidebarHovering"
    >
      <slot></slot>
    </BaseMenuSectionLabel>
  </BaseMenuSectionHeader>
</template>
