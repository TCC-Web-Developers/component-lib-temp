<script setup>
import { ref } from "vue";
//components
import BaseDropdown from "@/components/header/base-dropdown.vue";
import BaseNotificationHeaderTab from "@/components/header/notification/base-notification-header-tab.vue";
import HeaderLabel from "@/components/header/notification/notification-header-label.vue";
import HeaderTabItem from "@/components/header/notification/notification-header-tab-item.vue";
import RemindersItem from "./reminders-item.vue";
import SeeAllButton from "@/components/header/notification/reminders-seeall-button.vue";
//data
import topbar_reminders_items_data from "@/data/topbar_reminders_items.js";

const remindersItems = ref(topbar_reminders_items_data);
</script>

<template>
  <BaseDropdown>
    <template #dropdown-header-content>
      <div class="dropdown-notification-header">
        <HeaderLabel />
        <BaseNotificationHeaderTab>
          <HeaderTabItem name="reminders" />
          <HeaderTabItem name="events" />
          <HeaderTabItem name="logs" />
        </BaseNotificationHeaderTab>
      </div>
    </template>
    <template #dropdown-body-content>
      <div class="dropdown-notification-body">
        <div class="topbar-dropdown-scroll">
          <RemindersItem
            v-for="item in remindersItems"
            :key="item.id"
            :item="item"
          />
        </div>
        <div class="reminders-see-all d-flex justify-content-center pt-4">
          <SeeAllButton />
        </div>
      </div>
    </template>
  </BaseDropdown>
</template>

<style lang="scss" scoped>
.dropdown-notification-header {
  padding-top: 2.45rem;
  background-color: #3658d2;
  border-radius: 0.4rem 0.4rem 0 0;
}

.dropdown-notification-body {
  padding: 26px;
  .topbar-dropdown-scroll {
    height: 300px;
    width: 100%;
    overflow: auto;
  }
}
</style>
