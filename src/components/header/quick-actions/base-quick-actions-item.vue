<script setup></script>

<template>
  <div class="quick-actions-item-wrapper">
    <a
      href="#"
      class="quick-actions-item d-flex flex-column align-items-center"
    >
      <slot></slot>
    </a>
  </div>
</template>

<style lang="scss" scoped>
.quick-actions-item-wrapper {
  border-right: 0.5px solid #ebedf3;
  border-top: 0.5px solid #ebedf3;

  .quick-actions-item {
    font-family: var(--font-family);
    text-decoration: none;
    padding: 32.5px 16px;
  }
}
</style>
