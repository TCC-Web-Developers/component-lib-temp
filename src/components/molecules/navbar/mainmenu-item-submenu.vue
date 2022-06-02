<script setup>
import SubmenuItem from "@/components/molecules/navbar/submenu-item.vue";
import BaseSubmenu from "@/components/navbar/base-submenu.vue";
const props = defineProps({
  navbarItem: { type: Object },
  items: { type: Array },
});
</script>

<template>
  <BaseSubmenu
    :class="[
      navbarItem.isActive ? 'menu-submenu-show' : '',
      navbarItem.label === 'features' ? 'menu-content' : '',
    ]"
  >
    <template v-if="navbarItem.label === 'features'">
      <ul class="menu-content">
        <li
          v-for="featureItem in items.find(
            item => item.label === navbarItem.label
          ).items"
          :key="featureItem.id"
          class="menu-content-item"
        >
          <h3>{{ featureItem.label }}</h3>
          <ul class="menu-inner">
            <SubmenuItem
              v-for="item in featureItem.items"
              :key="item.id"
              :isCollapsible="item.isCollapsible"
              :bulletType="item.bulletType"
              :label="item.label"
              :hasIcon="item.hasIcon"
              :isBulleted="item.isBulleted"
              :icon="item.icon"
            >
            </SubmenuItem>
          </ul>
        </li>
      </ul>
    </template>
    <template v-else>
      <SubmenuItem
        v-for="item in items.find(item => item.label === navbarItem.label)
          .items"
        :key="item.id"
        :isCollapsible="item.isCollapsible"
        :label="item.label"
        :hasIcon="item.hasIcon"
        :isBulleted="item.isBulleted"
        :icon="item.icon"
      >
        <SubmenuItem
          v-for="item in item.items"
          :key="item.id"
          :isCollapsible="item.isCollapsible"
          :bulletType="item.bulletType"
          :label="item.label"
          :hasIcon="item.hasIcon"
          :isBulleted="item.isBulleted"
          :parentLabel="item.label"
          :icon="item.icon"
        >
        </SubmenuItem>
      </SubmenuItem>
    </template>
  </BaseSubmenu>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/navbar.scss";

.menu-content {
  display: flex;
  .menu-content-item {
    width: 250px;
    border-right: 1px solid #ebedf3;

    h3 {
      text-transform: capitalize;
      padding: 30px 30px 10px 30px;
      font-size: 14px;
      font-weight: 500;
      color: #181c32;
    }

    .menu-inner {
      padding: 0 0 20px 0;
    }
  }
}
</style>
