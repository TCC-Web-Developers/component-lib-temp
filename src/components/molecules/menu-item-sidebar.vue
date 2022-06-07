<script setup>
import { ref, computed, watch } from "vue";
import { useRouter } from "vue-router";
import BaseMenuItem from "@/components/sidebar/base-menu-item.vue";
import BaseMenuItemLabel from "@/components/sidebar/base-menu-item-label.vue";
import BaseMenuItemArrow from "@/components/sidebar/base-menu-item-arrow.vue";
import BaseMenuItemIcon from "@/components/sidebar/base-menu-item-icon.vue";
import BaseBulletIcon from "@/components/sidebar/base-bullet-icon.vue";
//ICONS
import icons from "@/components/molecules/icons.js";
const router = useRouter();
const props = defineProps({
  isSidebarOpen: Boolean,
  isSidebarHovering: Boolean,
  id: Number,
  href: String,
  path: String,
  itemsLength: Number,
  label: String,
  type: {
    type: String,
    validator(value) {
      return ["menu-item", "submenu-item", "link-item"].includes(value);
    },
  },
  bulletType: { type: String, default: "" },
  itemLevel: { type: String, default: "root" },
  isCollapsible: { type: Boolean, default: false },
  isLink: { type: Boolean, default: false },
  parentItem: String,
  activeItems: { type: Array },
});
const emits = defineEmits(["handleToggleItem"]);

const currentRouteRef = ref(null);
const submenuHeight = ref(0);
const isActive = ref(false);

const handleToggleItem = () => {
  if (!props.isCollapsible) return;
  const itemData = {
    itemType: props.type,
    level: props.itemLevel,
    label: props.label,
    parent: props.parentItem,
    id: props.id,
    itemsLength: props.itemsLength,
    submenuHeight: props.itemsLength * 40,
  };
  emits("handleToggleItem", itemData);
};

watch(
  () => props.activeItems,
  newValue => {
    submenuHeight.value = 0;
    isActive.value = false;

    newValue.forEach(activeItem => {
      const { parent, id, submenuHeight: activeSubemenuHeight } = activeItem;
      if (parent === props.parentItem && id === props.id) {
        submenuHeight.value = activeSubemenuHeight;
        isActive.value = !isActive.value;
      }
    });
  }
);

const currentRoute = computed(() => {
  return router.currentRoute.value.fullPath;
});

// watch(
//   () => currentRoute.value,
//   newValue => {
//     if (props.itemLevel === "root") {
//       const arr = newValue.split("/").splice(2);

//       if (props.path && arr[0] === props.path.replace("/", "")) {
//         handleToggleItem();
//       }
//     }
//     if (props.itemLevel === "first") {
//       const arr = newValue.split("/").splice(2);

//       if (props.path && arr[0] === props.path.replace("/", "")) {
//         handleToggleItem();
//       }
//       if (props.path && arr[1] === props.path.replace("/", "")) {
//         handleToggleItem();
//       }
//     }
//     if (props.itemLevel === "second") {
//       const arr = newValue.split("/").splice(2);

//       if (props.path && arr[0] === props.path.replace("/", "")) {
//         handleToggleItem();
//       }
//       if (props.path && arr[1] === props.path.replace("/", "")) {
//         handleToggleItem();
//       }
//       if (props.path && arr[2] === props.path.replace("/", "")) {
//         handleToggleItem();
//       }
//     }
//   }
// );
const getItemIcon = (type, label) => {
  return icons.value.find(
    icon => icon.name === (type === "menu-item" ? label : "dashboard")
  ).component;
};
</script>

<template>
  <BaseMenuItem
    ref="currentRouteRef"
    @handleToggleItem="handleToggleItem"
    v-show="(isSidebarOpen || isSidebarHovering) | (itemLevel === 'root')"
    :href="isLink ? href : 'javascript:;'"
    :type="type"
    :itemLevel="itemLevel"
    :isActive="isActive"
    v-memo="[activeItems]"
  >
    <template #menu-item>
      <BaseMenuItemIcon
        :icon="getItemIcon(type, label)"
        v-if="type === 'menu-item' || (isLink && itemLevel === 'root')"
      />

      <BaseBulletIcon
        v-if="type === 'submenu-item' || type === 'link-item'"
        :bulletType="bulletType"
      />
      <BaseMenuItemLabel v-if="isSidebarOpen || isSidebarHovering">
        {{ label }}
      </BaseMenuItemLabel>
      <BaseMenuItemArrow v-if="!isLink" :isActive="isActive" />
    </template>
    <template v-if="isCollapsible" #submenu>
      <ul class="submenu" :style="{ maxHeight: `${submenuHeight}px` }">
        <slot></slot>
      </ul>
    </template>
  </BaseMenuItem>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/components/menu-item.scss";

.submenu {
  transition: 0.18s max-height linear;
  list-style: none;
  padding: 0;
  max-height: 0px;
  overflow: hidden;
}
</style>
