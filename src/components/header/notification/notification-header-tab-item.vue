<script setup>
const props = defineProps({
  name: { type: String, default: "tab name" },
});
</script>

<template>
  <li class="dropdown-tab-item">
    <a href="#">{{ name }}</a>
  </li>
</template>

<style lang="scss" scoped>
.dropdown-tab-item {
  font-size: 14px;
  font-weight: 500;

  a {
    font-family: var(--font-family);
    text-transform: capitalize;
    text-decoration: none;
    color: var(--light-color);
    display: block;
    padding: 12px 0;
    border-bottom: 2.5px solid var(--primary-color);
  }
}
</style>
