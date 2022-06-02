<script setup>
import { computed } from "vue";
import BaseLink from "@/components/global/base-link.vue";
import { useRouter } from "vue-router";
const router = useRouter();
const props = defineProps({
  href: String,
  type: String,
  itemLevel: String,
  isActive: Boolean,
  isRouteActive: Boolean,
});
const emit = defineEmits(["handleToggleItem"]);

const handleToggleItem = () => {
  emit("handleToggleItem");
};

const currentRoute = computed(() => {
  return router.currentRoute.value.fullPath;
});
</script>

<template>
  <li class="menu-item-wrapper">
    <BaseLink
      @click="handleToggleItem"
      :href="href"
      class="d-flex align-items-center"
      :class="[
        `${type}`,
        `${itemLevel}-level-item`,
        isActive ? 'active' : '',
        currentRoute === href ? 'active' : '',
      ]"
    >
      <slot name="menu-item"></slot>
    </BaseLink>
    <slot name="submenu"></slot>
  </li>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/components/menu-item.scss";
</style>
