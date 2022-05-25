import { defineStore } from "pinia";

export const useSidebarStore = defineStore("sidebar", {
  state: () => {
    return { isOpen: true };
  },
  actions: {
    toggleSidebar() {
      this.isOpen = !this.isOpen;
    },
  },
});
