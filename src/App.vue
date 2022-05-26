<script setup>
import { RouterView } from "vue-router";
// import IconPlaceholder from "@/components/IconPlaceholder.vue";
import SidebarNavigation from "@/components/organisms/sidebar-navigation.vue";
import NavigationBar from "@/components/organisms/navigation-bar.vue";
import MainContent from "@/components/organisms/main-content.vue";
import BaseWrapper from "@/components/base-wrapper.vue";
</script>

<template>
  <main class="d-none d-lg-block">
    <div class="page d-flex flex-row">
      <SidebarNavigation />
      <BaseWrapper>
        <template #navigation-bar>
          <NavigationBar />
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
</style>
