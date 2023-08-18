import { defineStore } from "pinia";

const darkModeStorage = localStorage.getItem("darkMode");

const AppStore = defineStore("useAppStore", {
  state: () => ({
    darkMode: (darkModeStorage === "true" ? true : false) ?? false,
  }),

  actions: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      if (this.darkMode) localStorage.setItem("darkMode", "true");
      else localStorage.setItem("darkMode", "false");
    },
  },
});

export default AppStore;
