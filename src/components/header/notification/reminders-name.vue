<script setup>
const props = defineProps({
  name: { type: String, default: "name" },
});
</script>

<template>
  <a href="#" class="reminders-name">
    {{ name }}
  </a>
</template>

<style lang="scss" scoped>
.reminders-name {
  font-size: 14px;
  text-decoration: none;
  color: #181c32 !important;
  margin-bottom: 0.2rem;

  &:hover {
    color: var(--primary-color) !important;
  }
}
</style>
