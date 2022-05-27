<script setup>
import { ref } from "vue";
import { RouterView } from "vue-router";
// import IconPlaceholder from "@/components/IconPlaceholder.vue";
import SidebarNavigation from "@/components/organisms/sidebar-navigation.vue";
import NavigationBar from "@/components/organisms/navigation-bar.vue";
import MainContent from "@/components/organisms/main-content.vue";
import BaseWrapper from "@/components/base-wrapper.vue";

const isOffCanvasOpen = ref(false);

const handleToggleSidebar = () => {
  isOffCanvasOpen.value = !isOffCanvasOpen.value;
};
</script>

<template>
  <main class="">
    <div class="page d-flex flex-row">
      <div
        @click="handleToggleSidebar"
        v-show="isOffCanvasOpen"
        class="overlay"
      ></div>
      <SidebarNavigation :isOffCanvasOpen="isOffCanvasOpen" />
      <BaseWrapper>
        <template #navigation-bar>
          <NavigationBar @handleToggleSidebar="handleToggleSidebar" />
        </template>
        <template #main-content>
          <MainContent>
            <RouterView />
          </MainContent>
        </template>
      </BaseWrapper>
    </div>
  </main>
</template>

<style lang="scss">
@import "@/assets/scss/custom.scss";

.overlay {
  @media (max-width: 992px) {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
    z-index: 500;
    background: rgba(0, 0, 0, 0.1);
  }
}
</style>
