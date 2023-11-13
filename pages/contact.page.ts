import { BasePage } from "./base.page";

export class ContactPage extends BasePage {
  static readonly urlPath = "/contact/";

  readonly contactForm = this.page.frameLocator('iframe[title="Form 0"]');
  readonly submitButton = this.contactForm.getByRole("button", {
    name: "Submit",
  });
  readonly errorMessageForElement = (label: string) =>
    this.contactForm
      .locator(`.hs-form-field:has-text('${label}')`)
      .locator(".hs-error-msg");
  readonly summaryErrorMessage = this.contactForm.locator(
    ".hs_error_rollup .hs-error-msgs"
  );
}
