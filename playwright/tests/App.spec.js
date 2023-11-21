const { test, expect } = require('@playwright/test');
const user = require('../user.js');

test("Успешная авторизация", async ({page}) => {
  test.slow();
  await page.goto("https://netology.ru/?modal=sign_in");
  await expect(page).toHaveTitle(
    "Нетология — обучение современным профессиям онлайн"
  );
  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill(user.email);
  await page.getByPlaceholder("Пароль").click();
  await page.getByPlaceholder("Пароль").fill(user.password);
  await page.getByTestId("login-submit-btn").click();
  await expect(page).toHaveURL("https://netology.ru/profile");
});

test("Неуспешная авторизация", async ({page}) => {
  await page.goto("https://netology.ru");
  await page.getByRole('link', { name: 'Войти' }).click();
  await page.getByPlaceholder('Email').fill(user.email);
  await page.getByPlaceholder('Пароль').fill(user.invalidPassword);
  await page.getByTestId('login-submit-btn').click();
  await expect(page.locator('[data-testid="login-error-hint"]'))
  .toHaveText(["Вы ввели неправильно логин или пароль"]);
  await page.close();
});