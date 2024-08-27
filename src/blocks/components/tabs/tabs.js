const tabsBlocks = document.querySelectorAll(".js-tabs");

if (tabsBlocks) {
  for (const tabsBlock of tabsBlocks) {
    const tabs = tabsBlock.querySelectorAll("[data-tab]");

    for (const tab of tabs) {
      tab.addEventListener(
        "click",
        () => {
          clear();
          tab.classList.add("active");
          const tabContent = tab.getAttribute("data-tab");
          document.getElementById(tabContent).classList.add("active");
        },
        false
      );
    }

    const clear = () => {
      for (const tab of tabs) {
        tab.classList.remove("active");
        const tabContent = tab.getAttribute("data-tab");
        document.getElementById(tabContent).classList.remove("active");
      }
    };
  }
}
