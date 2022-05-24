<script setup>
import Logo from "@/assets/logo.svg";
//components
import BaseHeader from "@/components/sidebar/base-header.vue";
import BaseMenuBtn from "@/components/sidebar/base-menu-btn.vue";
import BaseLogo from "@/components/sidebar/base-logo.vue";
</script>

<template>
  <div class="sidebar bg-gradient d-flex flex-column flex-row-auto">
    <BaseHeader>
      <template #header-logo>
        <BaseLogo :href="'/'">
          <img :src="Logo" />
        </BaseLogo>
      </template>
      <template #header-menu-btn>
        <BaseMenuBtn />
      </template>
    </BaseHeader>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 265px;
  z-index: 100;
}
</style>
