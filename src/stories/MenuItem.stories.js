import MenuItem from "../components/molecules/menu-item-sidebar.vue";

export default {
  title: "Sidebar/Menu Item",
  component: MenuItem,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  //   argTypes: {
  //     backgroundColor: { control: "color" },
  //     onClick: {},
  //     size: {
  //       control: { type: "select" },
  //       options: ["small", "medium", "large"],
  //     },
  //   },
};

// export default {
//   /* 👇 The title prop is optional.
//    * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
//    * to learn how to generate automatic titles
//    */
//   title: "Item Label",
//   component: ItemLabel,
// };

export const Primary = () => ({
  components: { MenuItem },
  template: `<MenuItem :label="item"></MenuItem>`,
});
