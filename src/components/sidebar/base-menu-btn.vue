<script setup>
import IconMenu from "@/components/icons/icon-menu.vue";
import BaseSvgIcon from "@/components/global/base-svg-icon.vue";
</script>

<template>
  <button>
    <BaseSvgIcon>
      <IconMenu class="svg-icon-md" />
    </BaseSvgIcon>
  </button>
</template>

<style lang="scss" scoped>
button {
  outline: none;
  border: none;
  background-color: transparent;
}
</style>
