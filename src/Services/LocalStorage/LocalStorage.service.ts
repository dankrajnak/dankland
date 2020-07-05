type LiquorPage = "liquor" | "middle";

export default class LocalStorageService {
  static isLocalStorageSupported(): boolean {
    try {
      return "localStorage" in window && window["localStorage"] !== null;
    } catch (e) {
      return false;
    }
  }

  static getLiquorPage(): LiquorPage {
    if (this.isLocalStorageSupported()) {
      return window.localStorage.getItem("liquor") as LiquorPage;
    }
    return "liquor";
  }

  static toggleLiquorPage(): void {
    if (this.isLocalStorageSupported()) {
      const page = this.getLiquorPage();
      if (page === "liquor") {
        this.setLiquorPage("middle");
      } else {
        this.setLiquorPage("liquor");
      }
    }
  }

  static setLiquorPage(page: LiquorPage): void {
    return window.localStorage.setItem("liquor", page);
  }
}
