// Button.stories.js
import BaseMenu from "@/components/sidebar/base-menu.vue";

export default {
  title: "Sidebar/Menu",
  component: BaseMenu,
};

export const Primary = () => ({
  components: { BaseMenu },
  template: `<BaseMenu>HAHA</BaseMenu>`,
});
