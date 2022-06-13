<script setup>
import { ref, computed } from "vue";
import { RouterView } from "vue-router";
// import IconPlaceholder from "@/components/IconPlaceholder.vue";
import Sidebar from "@/components/organisms/the-sidebar.vue";
import Header from "@/components/organisms/the-header.vue";
import MainContent from "@/components/organisms/main-content.vue";
import BaseWrapper from "@/components/base-wrapper.vue";

const isOffCanvasOpen = ref(false);
const sidebar = ref(null);

const handleToggleOffCanvas = () => {
  isOffCanvasOpen.value = !isOffCanvasOpen.value;
};

const handleToggleSidebar = () => {
  sidebar.value.toggleSidebar();
};

const isSidebarOpen = computed(() => {
  return sidebar.value && sidebar.value.isSidebarOpen;
});
</script>

<template>
  <main class="">
    <div class="page d-flex flex-row">
      <div
        @click="handleToggleOffCanvas"
        v-show="isOffCanvasOpen"
        class="overlay"
      ></div>
      <!-- begin::SIDEBAR -->
      <Sidebar ref="sidebar" :isOffCanvasOpen="isOffCanvasOpen" />
      <!-- end::SIDEBAR -->
      <BaseWrapper :isSidebarOpen="isSidebarOpen">
        <!-- begin::HEADER -->
        <template #header>
          <Header
            @handleToggleOffCanvas="handleToggleOffCanvas"
            @handleToggleSidebar="handleToggleSidebar"
            :isSidebarOpen="isSidebarOpen"
          />
        </template>
        <!-- end::HEADER -->

        <!-- begin::MAIN CONTENT -->
        <template #main-content>
          <MainContent>
            <RouterView />
          </MainContent>
        </template>
        <!-- end::MAIN CONTENT -->
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
