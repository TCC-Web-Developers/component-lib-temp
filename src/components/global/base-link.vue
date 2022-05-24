<script setup>
const props = defineProps({
  href: String,
});
</script>

<template>
  <a :href="href" class="base-link">
    <slot></slot>
  </a>
</template>
