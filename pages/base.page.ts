import { Locator, Page } from "@playwright/test";

export class BasePage {
  readonly page: Page;
  readonly bookmarks: Locator;
  readonly bookmarkWithGivenText: (text: string) => Locator;
  readonly getInTouchButton: Locator;
  readonly pageHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.bookmarks = page
      .getByRole("navigation")
      .locator(".menu-item-type-custom")
      .getByRole("link");
    this.bookmarkWithGivenText = (text: string) =>
      this.bookmarks.getByText(text);
    this.getInTouchButton = this.page
      .getByRole("navigation")
      .getByRole("link", {
        name: "Get in touch",
      });
    this.pageHeading = page.getByRole("heading", { level: 3 }).first();
  }

  async goto(): Promise<void> {
    await this.page.goto("/");
  }
}
