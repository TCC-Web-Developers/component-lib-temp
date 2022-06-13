<script setup>
const props = defineProps({
  label: {
    type: Object,
    default: () => ({ heading: "heading", subheading: "subheading" }),
  },
});
</script>

<template>
  <div class="quick-actions-label text-center">
    <span class="quick-actions-heading"> {{ label.heading }} </span>
    <span class="quick-actions-subheading"> {{ label.subheading }} </span>
  </div>
</template>

<style lang="scss" scoped>
.quick-actions-label {
  .quick-actions-heading {
    display: block;
    font-size: 15px;
    font-weight: var(--font-medium);
    color: #3f4254;
    margin: 6.5px 0px 3.25px 0px;
  }

  .quick-actions-subheading {
    color: #7e8299;
    font-size: 14px;
  }
}
</style>
