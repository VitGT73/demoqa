# Quick start from a template

Use @playwright/test to create multiple independent test scenarios, and leverage the power of web-first assertions.

[_TOC_]

# dsadas
# sdsadasd
### sdsdsa
### sdsadsa


## adsdas


### Playwright Test example with multiple test cases

```typescript
/**
  * To learn more about Playwright Test visit:
  * https://www.checklyhq.com/docs/browser-checks/playwright-test/
  * https://playwright.dev/docs/writing-tests
  */

const { expect, test } = require('@playwright/test')

// Set the action timeout to 10 seconds to quickly identify failing actions.
// By default Playwright Test has no timeout for actions (e.g. clicking an element).
// Learn more here: https://www.checklyhq.com/docs/browser-checks/timeouts/
test.use({ actionTimeout: 10000 })

// You can use test.describe to declare a group of related test cases
test.describe('Playwright home page', () => {
  // The callback in test.beforeEach will be executed before each test.
  test.beforeEach(async ({ page }) => {
    // Each test will be given a new page instance navigated to the this URL
    // For deployments Checkly will inject the deployment url as ENVIRONMENT_URL
    await page.goto(process.env.ENVIRONMENT_URL || 'https://playwright.dev/')
  })
  // Other useful hooks: test.beforeAll, test.afterEach, test.afterAll

  test('has a page title containing Playwright', async ({ page }) => {
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/)
  })

  test("has a 'get started' link linking to the intro page", async ({ page }) => {
    // Create a locator based on a text selector.
    const getStarted = page.getByText('Get Started')
    // Use the locator for runtime 2022.02:
    // const getStarted = page.locator('text=Get Started')

    // Expect an attribute "to be strictly equal" to the value.
    await expect(getStarted).toHaveAttribute('href', '/docs/intro')

    // Click the get started link.
    await getStarted.click()

    // Expects the URL to contain intro.
    await expect(page).toHaveURL(/.*intro/)
  })

  test.describe('has Open Graph tags', () => {
    const tags = ['description', 'title', 'url']

    // You can create tests from an array, by calling "test()" in a loop
    tags.forEach((tag) => {
      test(`has the Open Graph tag "${tag}"`, async ({ page }) => {
        await expect(page.locator(`meta[property="og:${tag}"]`)).toHaveCount(1)
      })
    })
  })
})

```

### Wait for an element to become visible

Use Playwright's locator function to query elements and check their visibility after a navigation or an interaction.

```typescript
/**
  * To learn more about Playwright Test visit:
  * https://www.checklyhq.com/docs/browser-checks/playwright-test/
  * https://playwright.dev/docs/writing-tests
  */

const { expect, test } = require('@playwright/test')

// Set the action timeout to 10 seconds to quickly identify failing actions.
// By default Playwright Test has no timeout for actions (e.g. clicking an element).
// Learn more here: https://www.checklyhq.com/docs/browser-checks/timeouts/
test.use({ actionTimeout: 10000 })

test('wait for an element to become visible', async ({ page }) => {
  // Change checklyhq.com to your site's URL,
  // or, even better, define a ENVIRONMENT_URL environment variable
  // to reuse it across your browser checks
  await page.goto(process.env.ENVIRONMENT_URL || 'https://www.checklyhq.com/')

  // Locate the headline and check if it's visible
  // Learn more about all locator functions in the Playwright docs
  // https://playwright.dev/docs/api/class-locator
  const mainHeadline = page.locator('h1.title')
  await expect(mainHeadline).toBeVisible()

  // Take a screenshot of the current page
  await page.screenshot({ path: 'screenshot.jpg' })
})

```

### Visual regression testing with snapshots

Use the ".toHaveScreenshot()" assertion to visually compare screenshots and alert on visual regressions.

```typescript
/**
  * To learn more about Playwright Test Visual comparison testing visit:
  * https://www.checklyhq.com/docs/browser-checks/visual-comparison-snapshot-testing/
  * https://playwright.dev/docs/test-snapshots
  */

import { expect, test } from '@playwright/test'

// Set the action timeout to 10 seconds to quickly identify failing actions.
// By default Playwright Test has no timeout for actions (e.g. clicking an element).
// Learn more here: https://www.checklyhq.com/docs/browser-checks/timeouts/
test.use({ actionTimeout: 10000 })

test('Checkly homepage visual comparison', async ({ page }) => {
  // Change checklyhq.com to your site's URL,
  // or, even better, define a ENVIRONMENT_URL environment variable
  // to reuse it across your browser checks
  await page.goto(process.env.ENVIRONMENT_URL || 'https://www.checklyhq.com/')

  // Use the `toHaveScreenshot` matcher to compare screenshots between check runs
  await expect(page).toHaveScreenshot()
})

```

### Wait for a new page to load and screenshot it

Use "Promise.all" and "waitForURL" to check a navigation result after clicking a link.

```typescript
/**
  * To learn more about Playwright Test visit:
  * https://www.checklyhq.com/docs/browser-checks/playwright-test/
  * https://playwright.dev/docs/writing-tests
  */

const { expect, test } = require('@playwright/test')

// Set the action timeout to 10 seconds to quickly identify failing actions.
// By default Playwright Test has no timeout for actions (e.g. clicking an element).
// Learn more here: https://www.checklyhq.com/docs/browser-checks/timeouts/
test.use({ actionTimeout: 10000 })

test('wait for a new page to load and screenshot it', async ({ page }) => {
  // Change checklyhq.com to your site's URL,
  // or, even better, define a ENVIRONMENT_URL environment variable
  // to reuse it across your browser checks
  await page.goto(process.env.ENVIRONMENT_URL || 'https://www.checklyhq.com/')

  // Locate the Pricing link
  const pricingLink = page.locator('#nav a >> text=\'Pricing\'').first()

  await Promise.all([
    // Wait for navigation to the expected url
    page.waitForURL('**/pricing/'),
    // Click the pricing page link
    pricingLink.click()
  ])

  // Test that the page has a correct title
  await expect(page).toHaveTitle(/Checkly pricing plans/)

  // Take a screenshot of the current page
  await page.screenshot({ path: 'screenshot.jpg' })
})
```

### Emulate a mobile device
Use Playwright's "devices" and access a device configuration when creating a new page to emulate a mobile phone.
```typescript
/**
  * To learn more about Playwright Test visit:
  * https://www.checklyhq.com/docs/browser-checks/playwright-test/
  * https://playwright.dev/docs/writing-tests
  */

const { devices, test } = require('@playwright/test')

// Set the action timeout to 10 seconds to quickly identify failing actions.
// By default Playwright Test has no timeout for actions (e.g. clicking an element).
// Learn more here: https://www.checklyhq.com/docs/browser-checks/timeouts/
test.use({ actionTimeout: 10000 })

test('emulate a mobile device', async ({ browser }) => {
  const iPhone = devices['iPhone SE']
  // Initialize a new page
  // with the iPhone user agent, dimensions and pixel density
  const page = await browser.newPage({
    ...iPhone,
  })

  // Change checklyhq.com to your site's URL,
  // or, even better, define a ENVIRONMENT_URL environment variable
  // to reuse it across your browser checks
  await page.goto(process.env.ENVIRONMENT_URL || 'https://www.checklyhq.com/')

  // Take a screenshot of the current page
  await page.screenshot({ path: './screenshot.png' })
})

```
### Interact with form elements
Use Playwright's "click" and "type" methods to interact with input elements and buttons to check your signup and search flows.

```typescript
/**
  * To learn more about Playwright Test visit:
  * https://www.checklyhq.com/docs/browser-checks/playwright-test/
  * https://playwright.dev/docs/writing-tests
  */

const { expect, test } = require('@playwright/test')

// Set the action timeout to 10 seconds to quickly identify failing actions.
// By default Playwright Test has no timeout for actions (e.g. clicking an element).
// Learn more here: https://www.checklyhq.com/docs/browser-checks/timeouts/
test.use({ actionTimeout: 10000 })

test('interact with form elements', async ({ page }) => {
  // Change checklyhq.com to your site's URL,
  // or, even better, define a ENVIRONMENT_URL environment variable
  // to reuse it across your browser checks
  await page.goto(process.env.ENVIRONMENT_URL || 'https://danube-web.shop/')

  // Open registration modal
  await page.locator('#signup').click()
  await page.locator('#s-name').click()

  // Locate all form elements and fill them out
  await page.locator('#s-name').type('Jane')
  await page.locator('#s-surname').type('Doe')
  await page.locator('#s-email').type(process.env.USER_EMAIL || 'jane@example.com')
  await page.locator('#s-password2').type(process.env.USER_PASSWORD || 'sUp3rS3cUr3')
  await page.locator('#s-company').type('Checkly Inc.')

  await page.locator('#business').click()
  await page.locator('#marketing-agreement').click()
  await page.locator('#privacy-policy').click()
  await page.locator('#register-btn').click()

  // Wait for success message to appear
  await expect(page.locator('#login-message')).toBeVisible()

  await page.screenshot({
    path: 'screenshot.png',
  })
})

```
### Block unnecessary requests
```typescript
/**
  * To learn more about Playwright Test visit:
  * https://www.checklyhq.com/docs/browser-checks/playwright-test/
  * https://playwright.dev/docs/writing-tests
  */

const { test } = require('@playwright/test')

// Set the action timeout to 10 seconds to quickly identify failing actions.
// By default Playwright Test has no timeout for actions (e.g. clicking an element).
// Learn more here: https://www.checklyhq.com/docs/browser-checks/timeouts/
test.use({ actionTimeout: 10000 })

test('block unnecessary requests', async ({ page }) => {
  // Cancel all analytics or font request
  await page.route(/(analytics|fonts)/, (route) => route.abort())
  // Don't load images to make your check run faster
  await page.route('**/*.{png,jpg,jpeg,webp,svg}', (route) => route.abort())

  // Change checklyhq.com to your site's URL,
  // or, even better, define a ENVIRONMENT_URL environment variable
  // to reuse it across your browser checks
  await page.goto(process.env.ENVIRONMENT_URL || 'https://www.checklyhq.com/')

  // Take a screenshot of the current page
  await page.screenshot({ path: './screenshot.png' })
})
```

### Read and manipulate cookies
Add and modify your browser session's cookies to test your credential flows.

```typescript
/**
  * To learn more about Playwright Test visit:
  * https://www.checklyhq.com/docs/browser-checks/playwright-test/
  * https://playwright.dev/docs/writing-tests
  */

const { test } = require('@playwright/test')

// Set the action timeout to 10 seconds to quickly identify failing actions.
// By default Playwright Test has no timeout for actions (e.g. clicking an element).
// Learn more here: https://www.checklyhq.com/docs/browser-checks/timeouts/
test.use({ actionTimeout: 10000 })

test('read and manipulate cookies', async ({ browser }) => {
  const context = await browser.newContext()
  const page = await context.newPage()

  // Change checklyhq.com to your site's URL,
  // or, even better, define a ENVIRONMENT_URL environment variable
  // to reuse it across your browser checks
  await page.goto(process.env.ENVIRONMENT_URL || 'https://www.checklyhq.com/')

  // Read all the cookies
  const cookies = await context.cookies()

  // Log the cookies
  console.log(cookies)

  // Optional: Add new or modify existing cookies
  // await context.addCookies([
  //   {
  //     name: "MY_COOKIE",
  //     value: "Raccoon",
  //     path: "/",
  //     domain: ".checklyhq.com",
  //   },
  // ])
})

```

### Evaluate performance metrics

```typescript
/**
  * To learn more about Playwright Test visit:
  * https://www.checklyhq.com/docs/browser-checks/playwright-test/
  * https://playwright.dev/docs/writing-tests
  */

const { expect, test } = require('@playwright/test')

// Set the action timeout to 10 seconds to quickly identify failing actions.
// By default Playwright Test has no timeout for actions (e.g. clicking an element).
// Learn more here: https://www.checklyhq.com/docs/browser-checks/timeouts/
test.use({ actionTimeout: 10000 })

test('evaluate performance metrics', async ({ page }) => {
  // Change checklyhq.com to your site's URL,
  // or, even better, define a ENVIRONMENT_URL environment variable
  // to reuse it across your browser checks
  await page.goto(process.env.ENVIRONMENT_URL || 'https://www.checklyhq.com/')

  // Inject a PerformanceObserver and access web performance metrics
  const LCP = await page.evaluate(() => {
    return new Promise((resolve) => {
      new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const LCP = entries.at(-1)
        resolve(LCP.startTime)
      }).observe({
        type: 'largest-contentful-paint',
        buffered: true,
      })
    })
  })

  // Add custom assertions to fail your check
  // if your web performance degraded
  console.log('Largest Contentful Paint', parseInt(LCP, 10))
  expect(parseInt(LCP, 10)).toBeLessThan(1000)
})

```
### Take screenshots in multiple screen dimensions

Use "setViewportSize" to adjust the page's screen dimensions to run your Browser checks in different viewport sizes.

```typescript
/**
  * To learn more about Playwright Test visit:
  * https://www.checklyhq.com/docs/browser-checks/playwright-test/
  * https://playwright.dev/docs/writing-tests
  */

const { test } = require('@playwright/test')

// Set the action timeout to 10 seconds to quickly identify failing actions.
// By default Playwright Test has no timeout for actions (e.g. clicking an element).
// Learn more here: https://www.checklyhq.com/docs/browser-checks/timeouts/
test.use({ actionTimeout: 10000 })

const DIMENSIONS = [
  { width: 1920, height: 1080, name: 'large' },
  { width: 1000, height: 800, name: 'middle' },
  { width: 600, height: 800, name: 'small' },
]

test.describe('emulate different viewport sizes', () => {
  // Iterate over defined dimensions
  for (const { name, width, height } of DIMENSIONS) {
    test('take screenshot on ' + name + ' viewport', async ({ page }) => {
      // Change checklyhq.com to your site's URL,
      // or, even better, define a ENVIRONMENT_URL environment variable
      // to reuse it across your browser checks
      await page.setViewportSize({
        height,
        width,
      })

      await page.goto(process.env.ENVIRONMENT_URL || 'https://www.checklyhq.com/')

      await page.screenshot({
        path: `${name}.png`,
      })
    })
  }
})

```
### Throttle the browser network
Use the Chrome DevTools Protocol to adjust your Browser check's network conditions and test a slow mobile connection.

```typescript
/**
  * To learn more about Playwright Test visit:
  * https://www.checklyhq.com/docs/browser-checks/playwright-test/
  * https://playwright.dev/docs/writing-tests
  */

const { test } = require('@playwright/test')

// Set the action timeout to 10 seconds to quickly identify failing actions.
// By default Playwright Test has no timeout for actions (e.g. clicking an element).
// Learn more here: https://www.checklyhq.com/docs/browser-checks/timeouts/
test.use({ actionTimeout: 10000 })

test('throttle the browser network', async ({ page }) => {
  // Use the Chrome DevTools Protocol to change the network conditions
  const client = await page.context().newCDPSession(page)
  await client.send('Network.enable')
  await client.send('Network.emulateNetworkConditions', {
    offline: false,
    downloadThroughput: (4 * 1024 * 1024) / 8,
    uploadThroughput: (3 * 1024 * 1024) / 8,
    latency: 20,
  })

  // Change checklyhq.com to your site's URL,
  // or, even better, define a ENVIRONMENT_URL environment variable
  // to reuse it across your browser checks
  await page.goto(process.env.ENVIRONMENT_URL || 'https://www.checklyhq.com/')
})
```
### Interact with iframes

Use Playwright's "frame" and "frameLocator" methods to load and interact with embedded iframes.
```typescript
/**
  * To learn more about Playwright Test visit:
  * https://www.checklyhq.com/docs/browser-checks/playwright-test/
  * https://playwright.dev/docs/writing-tests
  */

const { expect, test } = require('@playwright/test')

// Set the action timeout to 10 seconds to quickly identify failing actions.
// By default Playwright Test has no timeout for actions (e.g. clicking an element).
// Learn more here: https://www.checklyhq.com/docs/browser-checks/timeouts/
test.use({ actionTimeout: 10000 })

test('interact with iframes', async ({ page }) => {
  // Create a demo iframe
  await page.setContent(
    '<iframe name="example-iframe" src="https://example.com">',
  )

  // Access the embedded iframe
  // Find more information about frames in the Playwright docs:
  // https://playwright.dev/docs/api/class-frame
  const iframe = page.frame('example-iframe')

  // Wait for it to be loaded
  await iframe.waitForLoadState()

  // Locate the iframe's headline and run an assertion against it
  const headline = iframe.locator('h1')
  expect(headline).toHaveText(/Example Domain/)

  // Take a screenshot
  await page.screenshot({
    path: 'screenshot.png',
  })
})

```

### Handle opened pages and tabs

Use the page event to access a new tab or page after clicking a 'target="_blank"' link.

```typescript
/**
  * To learn more about Playwright Test visit:
  * https://www.checklyhq.com/docs/browser-checks/playwright-test/
  * https://playwright.dev/docs/writing-tests
  */

const { test } = require('@playwright/test')

// Set the action timeout to 10 seconds to quickly identify failing actions.
// By default Playwright Test has no timeout for actions (e.g. clicking an element).
// Learn more here: https://www.checklyhq.com/docs/browser-checks/timeouts/
test.use({ actionTimeout: 10000 })

test('handle opened pages and tabs', async ({ context, page }) => {
  // Change checklyhq.com to your site's URL,
  // or, even better, define a ENVIRONMENT_URL environment variable
  // to reuse it across your browser checks
  await page.goto(process.env.ENVIRONMENT_URL || 'https://www.checklyhq.com/')

  // Wait for "page" event and click a target=_blank link
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.locator("[href='https://status.checklyhq.com/']").click(),
  ])

  // Take screenshot of both tabs
  await page.screenshot({ path: 'screenshot-tab-old.png' })
  await newPage.screenshot({ path: 'screenshot-tab-new.png' })
})

```
### Dismiss optional popups

Use a try/catch block to close optionally appearing modals. Catch the error if the modal didn't appear.

```typescript
/**
  * To learn more about Playwright Test visit:
  * https://www.checklyhq.com/docs/browser-checks/playwright-test/
  * https://playwright.dev/docs/writing-tests
  */

const { test } = require('@playwright/test')

// Set the action timeout to 10 seconds to quickly identify failing actions.
// By default Playwright Test has no timeout for actions (e.g. clicking an element).
// Learn more here: https://www.checklyhq.com/docs/browser-checks/timeouts/
test.use({ actionTimeout: 10000 })

test('dismiss optional popups', async ({ page }) => {
  // Change checklyhq.com to your site's URL,
  // or, even better, define a ENVIRONMENT_URL environment variable
  // to reuse it across your browser checks
  await page.goto(process.env.ENVIRONMENT_URL || 'https://www.checklyhq.com/')

  // Try to close an optional popup but add a timeout
  // and catch the error if it wasn't found
  try {
    await page.getByTitle('Accept Cookies').click({ timeout: 3000 })
    // Use the locator for runtime 2022.02:
    // await page.locator('[title="Accept Cookies"]').click({ timeout: 3000 })
  } catch (error) {
    console.log('No popup to click')
  }

  // Take a screenshot
  await page.screenshot({
    path: 'screenshot.png',
  })
})

```

### Playwright Test example with multiple test cases

```typescript

```
