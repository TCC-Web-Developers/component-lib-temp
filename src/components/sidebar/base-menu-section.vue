<script setup></script>

<template>
  <li class="menu-section">
    <div class="menu-section-label-wrapper d-flex align-items-center">
      <slot name="menu-section-icon"></slot>
      <slot name="menu-section-label"></slot>
    </div>
    <ul class="menu-items-container">
      <slot name="menu-items"></slot>
    </ul>
  </li>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/components/menu-section.scss";
</style>
