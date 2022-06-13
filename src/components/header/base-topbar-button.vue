<script setup></script>

<template>
  <div
    class="
      topbar-item-btn
      btn-item
      d-flex
      align-items-center
      justify-content-center
    "
  >
    <span> <slot></slot> </span>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/components/navbar/topbar.scss";
</style>
