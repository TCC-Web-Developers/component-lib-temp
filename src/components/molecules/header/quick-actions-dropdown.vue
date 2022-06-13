<script setup>
import { ref } from "vue";
//components
import BaseDropdown from "@/components/header/base-dropdown.vue";
import HeaderLabel from "@/components/header/quick-actions/quick-actions-header-label.vue";
import HeaderButton from "@/components/header/quick-actions/quick-actions-header-button.vue";
import Item from "./quick-actions-item.vue";
//data
import quick_actions_items_data from "@/data/topbar_quick_actions_items.js";

const quickActionsItems = ref(quick_actions_items_data);
</script>

<template>
  <BaseDropdown>
    <template #dropdown-header-content>
      <div class="dropdown-quick-actions-header d-flex flex-column">
        <HeaderLabel label="quick actions" />
        <HeaderButton />
      </div>
    </template>
    <template #dropdown-body-content>
      <div class="dropdown-quick-actions-body">
        <Item v-for="item in quickActionsItems" :key="item.id" :item="item" />
      </div>
    </template>
  </BaseDropdown>
</template>

<style lang="scss" scoped>
.dropdown-quick-actions-header {
  padding: 2rem 0;
  font-family: var(--font-family);
}

.dropdown-quick-actions-body {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
