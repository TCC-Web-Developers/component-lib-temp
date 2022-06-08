<script setup>
import { RouterLink } from "vue-router";
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps({
  href: String,
});
</script>

<template>
  <a v-if="href === 'javascript:;'" :href="href" class="base-link">
    <slot></slot>
  </a>
  <RouterLink v-else :to="href" class="base-link">
    <slot></slot>
  </RouterLink>
</template>
