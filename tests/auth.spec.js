const { test, expect } = require('@playwright/test');

test.describe('Authentication & Authorization',  () =>{
  test.beforeEach(async ({page}) => {
    await page.goto('https://coding.pasv.us/user/login')
  })

  test('Sign in with existing credentials', async ({page}) => {

    await page.locator('#normal_login_email').fill('voitsekhivska.marina@gmail.com')
    await page.locator('#normal_login_password').fill('*867542310*Vv')
    await page.locator('button[type="submit"]').click()
    await expect(page.locator('.ant-avatar-square')).toBeVisible()
  })

  test('Sign with in existing credentials', async ({page}) => {

    await page.locator('#normal_login_email').fill('vitsekhivska.marina@gmail.com')
    await page.locator('#normal_login_password').fill('*867542310*Vv')
    await page.locator('button[type="submit"]').click()
    const toast = page.locator('.ant-notification-notice-message')
    await expect(toast).toBeVisible()
    await expect(toast).toHaveText(' User login. Fail')
    })
})
