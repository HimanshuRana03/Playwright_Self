# Playwright Automation – JavaScript

A hands-on project created to learn and practice **web automation testing using Playwright with JavaScript**.

This repository contains my Playwright learning exercises, test scripts, and automation setup. The goal is to build practical knowledge of browser automation, test execution, and cross-browser testing.

## 🚀 Tech Stack

- **Programming Language:** JavaScript
- **Automation Framework:** Playwright
- **Test Runner:** Playwright Test
- **Package Manager:** npm
- **Version Control:** Git & GitHub
- **CI/CD:** GitHub Actions

## 📂 Project Structure

```text
Playwright_Self/
│
├── .github/
│   └── workflows/          # GitHub Actions workflows
│
├── tests/                  # Playwright test cases
│
├── .gitignore              # Files excluded from Git
├── package.json            # Project dependencies
├── package-lock.json       # Dependency lock file
└── playwright.config.js    # Playwright configuration
```

## ⚙️ Prerequisites

Make sure you have the following installed:

- Node.js (version 20 or above)
- npm
- Visual Studio Code (recommended)

## 📥 Installation & Setup

**1. Clone the repository**

```bash
git clone https://github.com/HimanshuRana03/Playwright_Self.git
```

**2. Navigate to the project directory**

```bash
cd Playwright_Self
```

**3. Install dependencies**

```bash
npm install
```

**4. Install Playwright browsers**

```bash
npx playwright install
```

## ▶️ Running Tests

Run all configured browser projects:

```bash
npx playwright test
```

Run tests in headed mode (visible browser):

```bash
npx playwright test --headed
```

Run tests in a specific browser:

```bash
npx playwright test --project=chromium
```

```bash
npx playwright test --project=firefox
```

```bash
npx playwright test --project=webkit
```

Run a specific test file:

```bash
npx playwright test tests/example.spec.js
```

Open the HTML test report:

```bash
npx playwright show-report
```

## 🌐 Browser Configuration

The project is configured to run tests across three browser engines:

- Chromium
- Firefox
- WebKit

Browser projects and test settings are maintained in `playwright.config.js`.

## 📚 Learning Objectives

This repository is intended to help me develop practical skills in:

- JavaScript fundamentals for test automation
- Playwright installation and configuration
- Browser navigation and interaction
- Locators and web element handling
- Assertions and validations
- Handling asynchronous operations using `async` and `await`
- Cross-browser testing
- Test execution and HTML reporting
- Git and GitHub version control
- Continuous Integration using GitHub Actions

## 🔄 Project Updates

This is a continuous learning project. I will keep adding new test cases, exploring Playwright features, and improving my automation skills as I progress.

## 👨‍💻 Author

**Himanshu Rana**

GitHub: [HimanshuRana03](https://github.com/HimanshuRana03)

---

⭐ If you find this repository useful, feel free to explore it!