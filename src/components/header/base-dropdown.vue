<script setup></script>

<template>
  <div class="topbar-item-dropdown-menu">
    <div class="topbar-dropdown-header">
      <slot name="dropdown-header-content"></slot>
    </div>

    <div class="topbar-dropdown-body">
      <slot name="dropdown-body-content"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.topbar-item-dropdown-menu {
  position: absolute;
  width: 350px;
  transform: translate3d(-295px, 72px, 0px);
  top: 0px;
  left: 0px;
  will-change: transform;
  -webkit-box-shadow: 0px 15px 50px 0px rgb(82 63 105 / 15%);
  box-shadow: 0px 15px 50px 0px rgb(82 63 105 / 15%);

  .topbar-dropdown-header {
    width: 100%;
    background-color: var(--light-color);
    border-radius: 0.4rem 0.4rem 0 0;
  }

  .topbar-dropdown-body {
    background-color: #ffffff;
    border-radius: 0 0 0.4rem 0.4rem;
  }
}
</style>
