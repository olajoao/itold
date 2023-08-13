import { defineStore } from "pinia";

const AppStore = defineStore("useAppStore", {
  state: () => {
    return {
      darkMode: false,
    };
  },

  actions: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
    },
  },
});

export default AppStore;
