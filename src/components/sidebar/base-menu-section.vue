<script setup></script>

<template>
  <li class="menu-section">
    <div class="menu-section-label-wrapper d-flex align-items-center">
      <slot name="menu-section-label"></slot>
    </div>
    <ul>
      <slot name="menu-items"></slot>
    </ul>
  </li>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/components/menu-item.scss";

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
}
</style>
