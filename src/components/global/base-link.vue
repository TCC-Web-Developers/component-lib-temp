<script setup>
import { RouterLink } from "vue-router";
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps({
  href: String,
});
</script>

<template>
  <RouterLink
    :to="href === 'javascript:;' ? router.currentRoute.value.fullPath : href"
    class="base-link"
  >
    <slot></slot>
  </RouterLink>
</template>
