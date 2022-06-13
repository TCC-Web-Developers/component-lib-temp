<script setup>
const props = defineProps({
  jobtitle: { type: String, default: "jobtitle" },
});
</script>

<template>
  <span class="reminders-jobtitle text-muted">{{ jobtitle }}</span>
</template>

<style lang="scss" scoped>
.reminders-jobtitle {
  font-size: 13px;
  color: #b5b5c3 !important;
}
</style>
