<script setup></script>

<template>
  <div
    class="
      message-center
      d-flex
      align-items-center
      justify-content-center
      gap-2
    "
  >
    <span class="message-center-label">Message Center</span>
    <span class="notif-badge d-flex align-items-center justify-content-center"
      >24</span
    >
  </div>
</template>

<style lang="scss" scoped="scss">
.message-center {
  .message-center-label {
    font-size: calc(1rem + 0.12vw);
    color: white;
    font-family: var(--font-family);
  }

  .notif-badge {
    background-color: #5ccec9;
    color: white;
    width: 2.4rem;
    height: 2rem;
    font-size: 0.925rem;
    line-height: 1.35;
    border-radius: 0.42rem;
  }
}
</style>
