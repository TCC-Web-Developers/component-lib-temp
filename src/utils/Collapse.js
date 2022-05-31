class Collapse {
  constructor(submenu, itemHeight, itemsLength) {
    this.submenu = submenu;
    this.itemHeight = itemHeight;
    this.itemsLength = itemsLength;
    this.status = submenu.dataset.status;
    this.level = submenu.dataset.level;
    this.tag = submenu.dataset.tag;
  }

  // activate
  activate() {
    if (this.status === "show") {
      this.hideSubmenu(this.submenu);
      if (this.level === "first") {
        this.shrinkParentHeight(this.submenu);
      } else if (this.level === "second") {
        this.shrinkParentHeight(this.submenu);
      }
    } else if (this.status === "hidden") {
      this.hideActiveSubmenuByLevel(this.level);
      this.showSubmenu(this.submenu);
    }
  }

  isShow() {
    return this.status === "show" ? true : false;
  }
  // ===

  // === GET ELEMENT ===
  getElement(selector) {
    return document.querySelector(selector);
  }
  getAllElement(selector) {
    return [...document.querySelectorAll(selector)];
  }
  // ===

  // === THREE LIFCYCLE ===
  // Show submenu
  showSubmenu(submenu) {
    this.expandSubmenuHeight(submenu);
    const allActiveSubmenusTotalHeight =
      this.getTotalHeightOfActiveSubmenu(submenu);
    submenu.style.maxHeight = `${
      this.itemHeight * this.itemsLength + allActiveSubmenusTotalHeight
    }px`;
    //
    submenu.previousElementSibling.dataset.active = "true";
    //
    this.setStatusShow(submenu);
    this.animateArrow(submenu, "show");
  }
  // Hide submenu
  hideSubmenu(submenu) {
    //
    submenu.previousElementSibling.dataset.active = "false";
    //
    submenu.style.maxHeight = "0px";
    this.setStatusHidden(submenu);
    this.animateArrow(submenu, "hidden");
  }
  // Hide All submenu
  hideAllSubmenu(submenus) {
    submenus.forEach(submenu => {
      submenu.style.maxHeight = "0px";
      //
      submenu.previousElementSibling.dataset.active = "false";
      //
      this.setStatusHidden(submenu);
      this.animateArrow(submenu, "hidden");
    });
  }
  hideActiveSubmenuByLevel(level) {
    if (level === "root") {
      const activeSiblingsItems = this.getAllElement('[data-level="root"]');
      this.hideAllSubmenu(activeSiblingsItems);
    } else if (level === "first") {
      const activeSiblingsItems = this.getAllElement(
        `[data-tag="${this.tag}"]`
      );
      this.hideAllSubmenu(activeSiblingsItems);
    } else if (level === "second") {
      const activeSiblingsItems = this.getAllElement(
        `[data-tag="${this.tag}"]`
      );
      this.hideAllSubmenu(activeSiblingsItems);
    }
  }
  // ===

  // === ARROW ICONS ===
  getArrowIcon(submenu) {
    return submenu.previousElementSibling.children[2].children[0];
  }
  animateArrow(submenu, state) {
    const arrowIcon = this.getArrowIcon(submenu);
    if (state === "show") arrowIcon.style.transform = "rotate(90deg)";
    else if (state === "hidden") arrowIcon.style.transform = "rotate(0deg)";
  }
  // ===

  // === STATUS ===
  setStatusHidden(submenu) {
    submenu.dataset.status = "hidden";
  }
  setStatusShow(submenu) {
    submenu.dataset.status = "show";
  }
  // ===

  // === SUBMENU HEIGHTS ===
  getMaxHeight(value) {
    return value && Number(value.style.maxHeight.replace("px", ""));
  }

  getSubmenuHeight(parent) {
    return [...parent.children].length * this.itemHeight;
  }

  getTotalHeightOfActiveSubmenu(parent) {
    return [...parent.querySelectorAll(`[data-status="show"]`)]
      .map(subitem => this.getMaxHeight(subitem))
      .reduce((a, b) => a + b, 0);
  }

  shrinkParentHeight(submenu) {
    const parent = this.getElement(`[data-label="${submenu.dataset.tag}"]`);
    const currentHeight = this.getMaxHeight(parent);
    parent.style.maxHeight = `${
      currentHeight - this.itemsLength * this.itemHeight
    }px`;
  }

  expandSubmenuHeight(submenu) {
    if (submenu.dataset.level === "first") {
      const parent = this.getElement(`[data-label="${submenu.dataset.tag}"]`);
      const parentHeight = this.getSubmenuHeight(parent);
      const allActiveSubmenusTotalHeight =
        this.getTotalHeightOfActiveSubmenu(parent);
      parent.style.maxHeight = `${
        parentHeight +
        this.itemHeight * this.itemsLength +
        allActiveSubmenusTotalHeight
      }px`;
    } else if (submenu.dataset.level === "second") {
      const parent = this.getElement(`[data-label="${submenu.dataset.tag}"]`);
      const parentHeight = this.getSubmenuHeight(parent);
      parent.style.maxHeight = `${
        parentHeight + this.itemHeight * this.itemsLength
      }px`;
      const activeRootItem = [
        ...document.querySelectorAll(`[data-level="root"]`),
      ].find(submenu => submenu.dataset.status === "show");
      const allActiveSubmenusTotalHeight =
        this.getTotalHeightOfActiveSubmenu(activeRootItem);
      activeRootItem.style.maxHeight = `${
        this.itemHeight * this.itemsLength + allActiveSubmenusTotalHeight
      }px`;
    }
  }
  // ===
}

export default Collapse;
