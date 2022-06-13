<script setup>
const props = defineProps({
  href: { type: String, default: "#" },
});
</script>

<template>
  <a :href="href" class="reminders-goto btn btn-icon btn-light btn-sm">></a>
</template>

<style lang="scss" scoped>
.reminders-goto {
  display: block;
  height: 32.5px;
  width: 32.5px;
  text-decoration: none;
  background-color: #f3f6f9;
  border-color: #f3f6f9;
}
</style>
