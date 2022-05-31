<script setup>
import { ref, shallowRef } from "vue";
import BaseSubmenu from "@/components/navbar/base-submenu.vue";
import BaseSubmenuItem from "@/components/navbar/base-submenu-item.vue";
import BaseSubmenuItemIcon from "@/components/navbar/base-submenu-item-icon.vue";
import BaseSubmenuItemLabel from "@/components/navbar/base-submenu-item-label.vue";
import BaseSubmenuItemArrow from "@/components/navbar/base-submenu-item-arrow.vue";
import IconBootstrap from "@/components/icons/icon-bootstrap.vue";
import BaseBulletIcon from "@/components/navbar/base-bullet-icon.vue";
//TEMPORARILY IMPORT FOR STORYBOOK
// import BaseSubmenuItem from "../../navbar/base-submenu-item.vue";
// import BaseSubmenuItemIcon from "../../navbar/base-submenu-item-icon.vue";
// import BaseSubmenuItemLabel from "../../navbar/base-submenu-item-label.vue";
// import BaseSubmenuItemArrow from "../../navbar/base-submenu-item-arrow.vue";
const icons = ref([]);
const defaultIcon = shallowRef(IconBootstrap);
const activeItem = ref(null);
const props = defineProps({
  label: { type: String, default: "Label" },
  parentLabel: { type: String, default: "menu" },
  href: { type: String },
  isCollapsible: { type: Boolean },
  isLink: { type: Boolean },
  icon: {
    type: String,
    validator(value) {
      return ["svg", "bullet"].includes(value);
    },
    default: "svg",
  },
  bulletType: { type: String, default: "dot" },
});

const handleMouseOver = () => {
  activeItem.value = props.parentLabel;
  console.log(props.label, props.parentLabel);
};
const handleMouseLeave = () => {
  activeItem.value = null;
};

// const getItemIcon = () => {
//   return icons.value.find(icon => icon.name === props.label).component;
// };
</script>

<template>
  <BaseSubmenuItem
    @handleMouseOver="handleMouseOver"
    @handleMouseLeave="handleMouseLeave"
    :href="isLink ? href : 'javascript:;'"
  >
    <template #default>
      <BaseBulletIcon v-if="icon === 'bullet'" :bulletType="bulletType" />
      <BaseSubmenuItemIcon v-if="icon === 'svg'">
        <component :is="defaultIcon"></component>
      </BaseSubmenuItemIcon>
      <BaseSubmenuItemLabel> {{ label }} </BaseSubmenuItemLabel>
      <BaseSubmenuItemArrow v-if="isCollapsible" />
    </template>
    <template #subnav>
      <BaseSubmenu
        v-if="isCollapsible"
        class="subitem-subnav"
        :class="[activeItem === parentLabel ? 'subitem-subnav-show' : '']"
      >
        <slot></slot>
      </BaseSubmenu>
    </template>
  </BaseSubmenuItem>
</template>

<style lang="scss" scoped></style>
