<script setup>
import Logo from "@/assets/logo.svg";
//components
import BaseHeader from "@/components/sidebar/base-header.vue";
import BaseMenuBtn from "@/components/sidebar/base-menu-btn.vue";
import BaseLogo from "@/components/sidebar/base-logo.vue";
</script>

<template>
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
</template>
