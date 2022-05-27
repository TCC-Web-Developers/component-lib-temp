<script setup>
import { ref } from "vue";
import BaseMenuItem from "@/components/sidebar/base-menu-item.vue";
import IconPlaceholder from "@/components/icons/icon-placeholder.vue";
import BaseMenuItemLabel from "@/components/sidebar/base-menu-item-label.vue";
import BaseMenuItemArrow from "@/components/sidebar/base-menu-item-arrow.vue";
import BaseMenuItemIcon from "@/components/sidebar/base-menu-item-icon.vue";
import BaseBulletIcon from "@/components/sidebar/base-bullet-icon.vue";
//STATE
import { useSidebarStore } from "@/stores/sidebar.js";

const sidebar = useSidebarStore();
const itemsRef = ref(null);
const rooHeight = ref(0);
const props = defineProps({
  href: String,
  itemsLength: Number,
  label: String,
  type: String,
  bulletType: { type: String, default: "" },
  itemLevel: { type: String, default: "root" },
  isCollapsible: Boolean,
});

const getArrowIcon = submenu => {
  return submenu.previousElementSibling.children[2].children[0];
};

const handleToggleItem = () => {
  if (!props.isCollapsible) return;

  const defaultArrowRotation = "rotate(0deg)";
  const defaultSubmenuHeight = "0px";
  const submenu = itemsRef.value;
  const submenuStatus = submenu.dataset.status;

  const itemLevel = itemsRef.value.dataset.level;
  const submenus = [...document.querySelectorAll(`[data-level=${itemLevel}]`)];
  const activeSubmenus = [...document.querySelectorAll(`[data-status=show]`)];
  const arrowIcon = getArrowIcon(submenu);

  const rootSubmenu = activeSubmenus.find(
    submenu => submenu.dataset.level === "root"
  );
  const firstSubmenu = activeSubmenus.find(
    submenu => submenu.dataset.level === "first"
  );
  const activeSubmenusTotalCurrentHeight = activeSubmenus.map(submenu =>
    Number(submenu.style.maxHeight.replace("px", ""))
  );

  //hide item
  if (submenuStatus === "show") {
    itemsRef.value.style.maxHeight = defaultSubmenuHeight;
    itemsRef.value.dataset.status = "hidden";
    arrowIcon.style.transform = defaultArrowRotation;

    if (itemLevel === "first") {
      rootSubmenu.style.maxHeight = `${
        [...rootSubmenu.children].length * 40
      }px`;
    }
    // else if (itemLevel === "second") {
    //   rootSubmenu.style.maxHeight = `${
    //     [...rootSubmenu.children].length * 40
    //   }px`;
    // }
    return;
  }

  //show item while one item is currently open
  submenus.map(items => {
    const itemArrowElem = getArrowIcon(items);
    items.style.maxHeight = defaultSubmenuHeight;
    itemArrowElem.style.transform = defaultArrowRotation;
  });

  //show item
  itemsRef.value.style.maxHeight = `${40 * props.itemsLength}px`;
  itemsRef.value.dataset.status = "show";
  arrowIcon.style.transform = "rotate(90deg)";
  //side effect
  if (itemLevel === "first") {
    rootSubmenu.style.maxHeight = `${
      activeSubmenusTotalCurrentHeight[0] + 40 * props.itemsLength
    }px`;
  } else if (itemLevel === "second") {
    console.log("second", activeSubmenusTotalCurrentHeight);
    rootSubmenu.style.maxHeight = `${
      activeSubmenusTotalCurrentHeight[0] +
      activeSubmenusTotalCurrentHeight[1] +
      40 * props.itemsLength
    }px`;
    // firstSubmenu.style.maxHeight = `${
    //   activeSubmenusTotalCurrentHeight[0] +
    //   activeSubmenusTotalCurrentHeight[1] +
    //   40 * props.itemsLength
    // }px`;
  }
  console.log(activeSubmenusTotalCurrentHeight);
};
</script>

<template>
  <BaseMenuItem
    @handleToggleItem="handleToggleItem"
    v-show="sidebar.isOpen | (itemLevel === 'root')"
    :href="href"
    :type="type"
    :itemLevel="itemLevel"
  >
    <template #menu-item>
      <BaseMenuItemIcon v-if="type === 'menu-item'">
        <IconPlaceholder />
      </BaseMenuItemIcon>
      <BaseBulletIcon
        v-if="type === 'submenu-item' || type === 'link-item'"
        :bulletType="bulletType"
      />
      <BaseMenuItemLabel> {{ label }} </BaseMenuItemLabel>
      <BaseMenuItemArrow v-if="isCollapsible" :isShow="false" />
    </template>
    <template v-if="isCollapsible" #submenu>
      <ul
        ref="itemsRef"
        class="submenu"
        :class="[`${itemLevel}-submenu`]"
        data-status="hidden"
        :data-level="itemLevel"
      >
        <slot></slot>
      </ul>
    </template>
  </BaseMenuItem>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/components/menu-item.scss";

.submenu {
  transition: 0.3s max-height linear;
  list-style: none;
  padding: 0;

  &.root-submenu {
    max-height: 0px;
    overflow: hidden;
  }
  &.first-submenu {
    max-height: 0px;
    overflow: hidden;
  }
  &.second-submenu {
    max-height: 0px;
    overflow: hidden;
  }
  &.third-submenu {
    max-height: 0px;
    overflow: hidden;
  }
}
</style>
