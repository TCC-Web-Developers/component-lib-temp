<script setup>
const props = defineProps({
  percent: { type: String, default: "0" },
});
</script>

<template>
  <span class="reminders-percent">{{ "+" + percent + "%" }}</span>
</template>

<style lang="scss" scoped>
.reminders-percent {
  font-size: 12px;
  color: #1bc5bd !important;
  padding-right: 1.4rem;
}
</style>
