<script setup>
import { shallowRef } from "vue";

import BaseQuickActionsItem from "@/components/header/quick-actions/base-quick-actions-item.vue";
import Icon from "@/components/header/quick-actions/quick-actions-item-icon.vue";
import Label from "@/components/header/quick-actions/quick-actions-item-label.vue";

import IconSalesTwo from "@/components/icons/navbar/icon-sales2.vue";
import IconBoxTwo from "@/components/icons/navbar/icon-box-2.vue";
import IconGlobe from "@/components/icons/navbar/icon-globe.vue";
import IconGroup from "@/components/icons/navbar/icon-group.vue";

const props = defineProps({
  item: { type: Object },
});

const icons = shallowRef([
  {
    name: "sales-6",
    component: IconSalesTwo,
  },
  {
    name: "box-2",
    component: IconBoxTwo,
  },
  {
    name: "globe",
    component: IconGlobe,
  },
  {
    name: "group",
    component: IconGroup,
  },
]);

const getIcon = iconName => {
  return icons.value.find(icon => icon.name === iconName).component;
};
</script>

<template>
  <BaseQuickActionsItem>
    <Icon>
      <component :is="getIcon(item.icon)" width="39px" height="39px" />
    </Icon>
    <Label :label="item.label" />
  </BaseQuickActionsItem>
</template>
