<script setup>
import BaseRemindersItem from "@/components/header/notification/base-reminders-item.vue";
import Avatar from "@/components/header/notification/reminders-avatar.vue";
import Name from "@/components/header/notification/reminders-name.vue";
import Jobtitle from "@/components/header/notification/reminders-jobtitle.vue";
import Percent from "@/components/header/notification/reminders-percent.vue";
import Goto from "@/components/header/notification/reminders-goto.vue";

const props = defineProps({
  item: { type: Object },
});
</script>

<template>
  <BaseRemindersItem>
    <template #reminders-avatar>
      <Avatar :hasAvatar="item.hasAvatar" />
    </template>
    <template #reminders-name-jobtitle>
      <Name :name="item.name" />
      <Jobtitle :jobtitle="item.jobtitle" />
    </template>
    <template #reminders-percent>
      <Percent :percent="item.percent" />
    </template>
    <template #reminders-goto>
      <Goto />
    </template>
  </BaseRemindersItem>
</template>
