<script setup>
import BaseMenuSectionHeader from "@/components/sidebar/base-menu-section-header.vue";
import BaseMenuSectionIcon from "@/components/sidebar/base-menu-section-icon.vue";
import BaseMenuSectionLabel from "@/components/sidebar/base-menu-section-label.vue";
</script>

<template>
  <BaseMenuSectionHeader>
    <BaseMenuSectionIcon />
    <BaseMenuSectionLabel>
      <slot></slot>
    </BaseMenuSectionLabel>
  </BaseMenuSectionHeader>
</template>
