<script setup>
import { ref, computed, shallowRef } from "vue";
import { useRouter } from "vue-router";
import BaseMenuItem from "@/components/sidebar/base-menu-item.vue";
import BaseMenuItemLabel from "@/components/sidebar/base-menu-item-label.vue";
import BaseMenuItemArrow from "@/components/sidebar/base-menu-item-arrow.vue";
import BaseMenuItemIcon from "@/components/sidebar/base-menu-item-icon.vue";
import BaseBulletIcon from "@/components/sidebar/base-bullet-icon.vue";
//ICONS
import IconDashboard from "@/components/icons/icon-dashboard.vue";
import IconApplications from "@/components/icons/icon-applications.vue";
import IconPages from "@/components/icons/icon-pages.vue";
import IconThemes from "@/components/icons/icon-themes.vue";
import IconSubheaders from "@/components/icons/icon-subheaders.vue";
import IconGeneral from "@/components/icons/icon-general.vue";
import IconBuilder from "@/components/icons/icon-builder.vue";
import IconBootstrap from "@/components/icons/icon-bootstrap.vue";
import IconCustom from "@/components/icons/icon-custom.vue";
import IconForms from "@/components/icons/icon-forms.vue";
import IconKTDatatable from "@/components/icons/icon-ktdatatable.vue";
import IconDatatablesDotNet from "@/components/icons/icon-datatablesdotnet.vue";
import IconFileUpload from "@/components/icons/icon-fileupload.vue";
import IconCards from "@/components/icons/icon-cards.vue";
import IconWidgets from "@/components/icons/icon-widgets.vue";
import IconIcons from "@/components/icons/icon-icons.vue";
import IconCalendar from "@/components/icons/icon-calendar.vue";
import IconCharts from "@/components/icons/icon-charts.vue";
import IconMaps from "@/components/icons/icon-maps.vue";
import IconMiscellaneous from "@/components/icons/icon-miscellaneous.vue";
//LOGIC
import Collapse from "@/utils/Collapse.js";

const icons = shallowRef([
  {
    name: "dashboard",
    component: IconDashboard,
  },
  {
    name: "applications",
    component: IconApplications,
  },
  {
    name: "pages",
    component: IconPages,
  },
  {
    name: "themes",
    component: IconThemes,
  },
  {
    name: "subheaders",
    component: IconSubheaders,
  },
  {
    name: "general",
    component: IconGeneral,
  },
  {
    name: "builder",
    component: IconBuilder,
  },
  {
    name: "bootstrap",
    component: IconBootstrap,
  },
  {
    name: "custom",
    component: IconCustom,
  },
  {
    name: "forms",
    component: IconForms,
  },
  {
    name: "KTDatatable",
    component: IconKTDatatable,
  },
  {
    name: "datatables.net",
    component: IconDatatablesDotNet,
  },
  {
    name: "file upload",
    component: IconFileUpload,
  },
  {
    name: "cards",
    component: IconCards,
  },
  {
    name: "widgets",
    component: IconWidgets,
  },
  {
    name: "icons",
    component: IconIcons,
  },
  {
    name: "calendar",
    component: IconCalendar,
  },
  {
    name: "charts",
    component: IconCharts,
  },
  {
    name: "maps",
    component: IconMaps,
  },
  {
    name: "miscellaneous",
    component: IconMiscellaneous,
  },
]);
const router = useRouter();
const itemsRef = ref(null);
const props = defineProps({
  isSidebarOpen: Boolean,
  isSidebarHovering: Boolean,
  href: String,
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
  parentTag: String,
});

const handleToggleItem = event => {
  if (!props.isCollapsible) return;
  const submenu = new Collapse(itemsRef.value, 40, props.itemsLength);
  submenu.activate();
};

const currentRoute = computed(() => {
  return router.currentRoute.value.fullPath;
});
</script>

<template>
  <BaseMenuItem
    @handleToggleItem="handleToggleItem"
    v-show="(isSidebarOpen || isSidebarHovering) | (itemLevel === 'root')"
    :href="isLink ? href : 'javascript:;'"
    :type="type"
    :itemLevel="itemLevel"
    :currentRoute="currentRoute"
  >
    <template #menu-item>
      <BaseMenuItemIcon
        v-if="type === 'menu-item' || (isLink && itemLevel === 'root')"
      >
        <component
          :is="
            icons.find(
              icon => icon.name === (type === 'menu-item' ? label : 'dashboard')
            ).component
          "
        ></component>
      </BaseMenuItemIcon>
      <BaseBulletIcon
        v-if="type === 'submenu-item' || type === 'link-item'"
        :bulletType="bulletType"
      />
      <BaseMenuItemLabel v-if="isSidebarOpen || isSidebarHovering">
        {{ label }}
      </BaseMenuItemLabel>
      <BaseMenuItemArrow v-if="!isLink" />
    </template>
    <template v-if="isCollapsible" #submenu>
      <ul
        ref="itemsRef"
        class="submenu"
        :class="[`${itemLevel}-submenu`]"
        data-status="hidden"
        :data-level="itemLevel"
        :data-label="label"
        :data-tag="parentTag"
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

  &.root-submenu,
  &.first-submenu,
  &.second-submenu,
  &.third-submenu {
    max-height: 0px;
    overflow: hidden;
  }
}
</style>
