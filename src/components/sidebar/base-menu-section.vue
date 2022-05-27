
<template>
  <li class="menu-section">
    <slot name="menu-section-header"></slot>
    <ul class="menu-items-container">
      <slot name="menu-items"></slot>
    </ul>
  </li>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/components/menu-section.scss";
</style>
