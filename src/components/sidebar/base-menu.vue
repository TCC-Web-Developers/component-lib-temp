<script setup></script>

<template>
  <div class="sidebar-menu-wrapper">
    <div class="sidebar-menu">
      <ul>
        <slot></slot>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/components/sidebar-menu.scss";
</style>
