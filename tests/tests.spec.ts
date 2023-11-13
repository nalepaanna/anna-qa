import { test, expect } from "@playwright/test";
import { BasePage } from "../pages/base.page";
import { FinancialControlPage } from "../pages/financialControl.page";
import { ContactPage } from "../pages/contact.page";

test.describe("Tests", () => {
  let basePage: BasePage;
  let financialControlPage: FinancialControlPage;
  let contactPage: ContactPage;

  test.beforeEach(async ({ page }) => {
    basePage = new BasePage(page);
    contactPage = new ContactPage(page);
    financialControlPage = new FinancialControlPage(page);
    await basePage.goto();
  });

  test("#1 User should be able see proper bookmarks", async () => {
    const expectedBookmarks = [
      "Banking",
      "Insurance",
      "Finance & ESG",
      "Services",
      "Partners",
      "Company",
      "Resources",
    ];

    const visibleBookmarks = await basePage.bookmarks.allTextContents();
    expect(expectedBookmarks).toStrictEqual(visibleBookmarks);
  });

  test("#2 User should be able to go to Financial Control page", async ({
    page,
  }) => {
    await basePage.bookmarkWithGivenText("Finance & ESG").hover();
    await basePage.bookmarkWithGivenText("Financial Control").click();

    await expect(page).toHaveURL(FinancialControlPage.urlPath);
    await expect(financialControlPage.pageHeading).toHaveText(
      "Financial Control"
    );
  });

  test("#3 User should be not able to submit empty contact form", async ({
    page,
  }) => {
    const errorMessage = "Please complete this required field.";
    const dropdownErrorMessage =
      "Please select an option from the dropdown menu.";
    const summaryErrorMessage = "Please complete all required fields.";

    await basePage.getInTouchButton.click();
    await expect(page).toHaveURL(ContactPage.urlPath);

    await contactPage.submitButton.click();
    await expect(page).toHaveURL(ContactPage.urlPath);

    await expect(contactPage.errorMessageForElement("First name")).toHaveText(
      errorMessage
    );
    await expect(contactPage.errorMessageForElement("Last name")).toHaveText(
      errorMessage
    );
    await expect(contactPage.errorMessageForElement("Work email")).toHaveText(
      errorMessage
    );
    await expect(contactPage.errorMessageForElement("Country")).toHaveText(
      dropdownErrorMessage
    );
    await expect(
      contactPage.errorMessageForElement("How can we help you?")
    ).toHaveText(errorMessage);

    await expect(contactPage.summaryErrorMessage).toHaveText(
      summaryErrorMessage
    );
  });
});
