<script setup></script>

<template>
  <ul class="topbar-dropdown-tab d-flex align-items-stretch mt-2">
    <slot></slot>
  </ul>
</template>

<style lang="scss" scoped>
.topbar-dropdown-tab {
  list-style: none;
  margin: 0;
  padding: 0 2rem;
  gap: 26px;
}
</style>
