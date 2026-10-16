const { test, expect } = require('@playwright/test')

// The newest clickable choice; clicking it repeatedly always moves the story forward
const nextChoice = (page) => page.locator('#article a[href="#"]').last()

const articleText = (page) => page.locator('#article').textContent()

const heading = (page, text) => page.locator('#article h2', { hasText: text })

// Click through choices until a chapter heading containing `text` is on the page
const advanceTo = async (page, text) => {
  for (let clicks = 0; (await heading(page, text).count()) === 0; clicks++) {
    expect(clicks, `stuck before "${text}"`).toBeLessThan(200)
    await nextChoice(page).click()
  }
}

let pageErrors
let externalRequests

test.beforeEach(async ({ page, baseURL }) => {
  pageErrors = []
  externalRequests = []
  page.on('pageerror', (e) => pageErrors.push(e.message))
  page.on('request', (r) => r.url().startsWith(baseURL) || externalRequests.push(r.url()))
  await page.goto('/')
  await expect(page.locator('#article h1')).toHaveText('Harmonia')
})

test.afterEach(() => {
  expect(pageErrors).toEqual([])
  expect(externalRequests).toEqual([])
})

test('playing through should reach the credits', async ({ page }) => {
  const chapters = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven']
  for (const chapter of chapters) {
    await advanceTo(page, `Chapter ${chapter}`)
  }
  await advanceTo(page, 'Credits')
})

test('every self-hosted font should load', async ({ page }) => {
  const fonts = await page.evaluate(async () => {
    const faces = [...document.fonts]
    await Promise.allSettled(faces.map((f) => f.load()))
    return faces.map((f) => [f.family, f.status])
  })
  expect(fonts).toHaveLength(10)
  for (const [family, status] of fonts) {
    expect(status, family).toBe('loaded')
  }
})

test('clicking an annotated link should reveal its margin card', async ({ page }) => {
  await advanceTo(page, 'Chapter One')
  const card = page.locator('#card-c1-college-name')
  await expect(card).toHaveCount(0)
  await page.locator('#source-c1-college-name a').click()
  await expect(card).toBeVisible()
  await expect(card).toHaveClass(/\b(left|right)\b/)
  await expect(page.locator('svg.jtk-connector')).toHaveCount(1)
})

test('progress should survive a reload', async ({ page }) => {
  await advanceTo(page, 'Chapter Two')
  const before = await articleText(page)
  await expect.poll(() => page.evaluate(() => JSON.parse(localStorage.getItem('harmonia-bookmarks')).present.length)).toBe(2)
  await page.reload()
  await expect.poll(() => articleText(page)).toBe(before)
})

test('the back button should undo the last choice', async ({ page }) => {
  await advanceTo(page, 'Chapter One')
  const before = await articleText(page)
  await nextChoice(page).click()
  await expect.poll(() => articleText(page)).not.toBe(before)
  await page.goBack()
  await expect.poll(() => articleText(page)).toBe(before)
})

test('restart should return to the beginning of the story', async ({ page }) => {
  const before = await articleText(page)
  await advanceTo(page, 'Chapter Two')
  page.once('dialog', (dialog) => dialog.accept())
  await page.locator('nav a[onclick^="resetGame"]').click()
  await expect.poll(() => articleText(page)).toBe(before)
})

test('the about panel should open and close', async ({ page }) => {
  const modal = page.locator('#about-modal')
  await page.locator('#about-toggle').click()
  await expect(modal).toHaveClass(/open/)
  await modal.locator('.close a').click()
  await expect(modal).not.toHaveClass(/open/)
})
