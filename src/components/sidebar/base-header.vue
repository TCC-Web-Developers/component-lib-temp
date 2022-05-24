<script setup></script>

<template>
  <div
    class="header d-flex align-items-center justify-content-between px-menu-item"
  >
    <slot name="header-logo"></slot>
    <slot name="header-menu-btn"></slot>
  </div>
</template>

<style lang="scss" scoped>
.header {
  flex: none;
  height: 72px;
  background-color: salmon;
}
</style>
