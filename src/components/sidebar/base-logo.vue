<script setup>
import BaseLink from "@/components/global/base-link.vue";

const props = defineProps({
  href: String,
});
</script>

<template>
  <BaseLink :href="href">
    <slot></slot>
  </BaseLink>
</template>
