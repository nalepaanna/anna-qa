# QA Challenge

This repository contains automated tests written in Playwright/Typescript related to the site: https://www.sapfioneer.com/

It consist of the following tests:

- #1 User should be able see proper bookmarks
- #2 User should be able to go to Financial Control page
- #3 User should be not able to submit empty contact form

## Requirements

- Node.js are installed to your local system. Install at least v16 or higher. https://nodejs.org/en/
- Visual Studio Code is the preferred IDE. https://code.visualstudio.com/Download

## Usages

At the first, clone or download this repository.

Then install dependencies from root directory:

```bash
$ npm install
```

Run tests from root directory in headless mode:

```bash
$ npm run test
```

Run tests from root directory in headed mode:

```bash
$ npm run test:headed
```

List reporter is used to inform about test results.
Screenshots after failed tests are saved in /test-results directory.
Multiple reporters can be specified in playwright.config.ts file.

## Docs

Official Playwright documentation:
https://playwright.dev/docs/intro
