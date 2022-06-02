<script setup>
import { ref, shallowRef } from "vue";
import BaseSubmenu from "@/components/navbar/base-submenu.vue";
import BaseSubmenuItem from "@/components/navbar/base-submenu-item.vue";
import BaseSubmenuItemIcon from "@/components/navbar/base-submenu-item-icon.vue";
import BaseSubmenuItemLabel from "@/components/navbar/base-submenu-item-label.vue";
import BaseSubmenuItemArrow from "@/components/navbar/base-submenu-item-arrow.vue";
import BaseBulletIcon from "@/components/navbar/base-bullet-icon.vue";
//ICONS
import IconDefault from "@/components/icons/navbar/icon-briefcase.vue";
import IconBriefcase from "@/components/icons/navbar/icon-briefcase.vue";
import IconChatLocked from "@/components/icons/navbar/icon-chat-locked.vue";
import IconCmd from "@/components/icons/navbar/icon-cmd.vue";
import IconCompiling from "@/components/icons/navbar/icon-compiling.vue";
import IconCrown from "@/components/icons/navbar/icon-crown.vue";
import IconGroupChat from "@/components/icons/navbar/icon-group-chat.vue";
import IconLockoverTuning from "@/components/icons/navbar/icon-lockover-tuning.vue";
import IconMailAt from "@/components/icons/navbar/icon-mail-at.vue";
import IconMailbox from "@/components/icons/navbar/icon-mailbox.vue";
import IconOutgoingBox from "@/components/icons/navbar/icon-outgoing-box.vue";
import IconSafeChat from "@/components/icons/navbar/icon-safe-chat.vue";
import IconSend from "@/components/icons/navbar/icon-send.vue";
import IconSpam from "@/components/icons/navbar/icon-spam.vue";
import IconThumbtack from "@/components/icons/navbar/icon-thumbtack.vue";
//TEMPORARILY IMPORT FOR STORYBOOK
// import BaseSubmenuItem from "../../navbar/base-submenu-item.vue";
// import BaseSubmenuItemIcon from "../../navbar/base-submenu-item-icon.vue";
// import BaseSubmenuItemLabel from "../../navbar/base-submenu-item-label.vue";
// import BaseSubmenuItemArrow from "../../navbar/base-submenu-item-arrow.vue";
const icons = shallowRef([
  {
    name: "default",
    component: IconDefault,
  },
  {
    name: "briefcase",
    component: IconBriefcase,
  },
  {
    name: "chat-locked",
    component: IconChatLocked,
  },
  {
    name: "cmd",
    component: IconCmd,
  },
  {
    name: "compiling",
    component: IconCompiling,
  },
  {
    name: "crown",
    component: IconCrown,
  },
  {
    name: "group-chat",
    component: IconGroupChat,
  },
  {
    name: "lockover-tuning",
    component: IconLockoverTuning,
  },
  {
    name: "mail-at",
    component: IconMailAt,
  },
  {
    name: "mailbox",
    component: IconMailbox,
  },
  {
    name: "outgoing-box",
    component: IconOutgoingBox,
  },
  {
    name: "safe-chat",
    component: IconSafeChat,
  },
  {
    name: "send",
    component: IconSend,
  },
  {
    name: "spam",
    component: IconSpam,
  },
  {
    name: "thumbtack",
    component: IconThumbtack,
  },
]);
const activeItem = ref(null);
const props = defineProps({
  label: { type: String, default: "Label" },
  parentLabel: { type: String, default: "menu" },
  href: { type: String },
  isCollapsible: { type: Boolean },
  isLink: { type: Boolean },
  bulletType: { type: String, default: "dot" },
  hasIcon: { type: Boolean, default: false },
  isBulleted: { type: Boolean, default: false },
  icon: { type: String, default: null },
});

const handleMouseOver = () => {
  activeItem.value = props.parentLabel;
  console.log(props.label, props.parentLabel);
};
const handleMouseLeave = () => {
  activeItem.value = null;
};

const getIcon = iconName => {
  return icons.value.find(icon => icon.name === iconName).component;
};
</script>

<template>
  <BaseSubmenuItem
    @handleMouseOver="handleMouseOver"
    @handleMouseLeave="handleMouseLeave"
    :href="isLink ? href : 'javascript:;'"
  >
    <template #default>
      <BaseBulletIcon v-if="isBulleted" :bulletType="bulletType" />
      <BaseSubmenuItemIcon v-if="hasIcon">
        <component :is="getIcon(icon ? icon : 'default')"></component>
      </BaseSubmenuItemIcon>
      <BaseSubmenuItemLabel>
        {{ label }}
      </BaseSubmenuItemLabel>
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

<style lang="scss" scoped>
@import "@/assets/scss/components/navbar/menu-item.scss";
</style>
