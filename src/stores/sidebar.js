import { defineStore } from "pinia";

export const useSidebarStore = defineStore("sidebar", {
  state: () => {
    return {
      isOpen: true,
      isHovering: false,
    };
  },
  actions: {
    toggleSidebar() {
      this.isOpen = !this.isOpen;
    },
    closeSidebar() {
      this.isOpen = false;
    },
    openSidebar() {
      this.isOpen = true;
    },
    mouseOverSidebar() {
      this.isHovering = true;
    },
    mouseLeaveSidebar() {
      this.isHovering = false;
    },
  },
});
