<script setup></script>

<template>
  <div class="reminders d-flex align-items-center mb-3">
    <div class="reminders-avatar flex-shrink-0">
      <slot name="reminders-avatar"></slot>
    </div>
    <div class="reminders-content d-flex">
      <div class="reminders-name-jobtitle d-flex flex-column">
        <slot name="reminders-name-jobtitle"></slot>
      </div>
      <div class="reminders-item d-flex align-items-center py-2">
        <slot name="reminders-percent"></slot>
        <slot name="reminders-goto"></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.reminders {
  width: 100%;
  .reminders-avatar {
    margin-right: 0.6rem;
  }

  .reminders-content {
    flex: 1 auto;
    font-family: var(--font-family);
    font-weight: 500;
    .reminders-name-jobtitle {
      flex-grow: 1;
      padding-right: 1.2rem;
    }
  }
}
</style>
