<script setup>
import Default from "@/assets/avatar.jpg";

const props = defineProps({
  img: { type: String, default: Default },
  hasAvatar: { type: Boolean, default: false },
});
</script>

<template>
  <img v-if="hasAvatar" alt="Vue logo" :src="img" />
  <div
    v-else
    class="no-avatar d-flex justify-content-center align-items-center"
  >
    AV
  </div>
</template>

<style lang="scss" scoped>
img,
.no-avatar {
  border-radius: 0.42rem;
  height: 35px;
  width: 35px;
}

.no-avatar {
  font-size: 14px;
  font-weight: var(--font-medium);
  background-color: var(--primary-color-light);
  color: var(--primary-color);
}
</style>
