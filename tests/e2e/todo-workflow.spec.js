const { test, expect } = require('@playwright/test');
const { TodoPage } = require('./pages/TodoPage');

test.describe('TODO workflow', () => {
  test('adds a new item', async ({ page }) => {
    const todoPage = new TodoPage(page);
    const itemName = `E2E item ${Date.now()}`;

    await todoPage.goto();
    await todoPage.waitForReady();
    await todoPage.addItem(itemName);

    await expect(todoPage.itemText(itemName)).toBeVisible();
  });

  test('deletes an item after adding it', async ({ page }) => {
    const todoPage = new TodoPage(page);
    const itemName = `Delete me ${Date.now()}`;

    await todoPage.goto();
    await todoPage.waitForReady();
    await todoPage.addItem(itemName);
    await expect(todoPage.itemText(itemName)).toBeVisible();

    await todoPage.deleteItem(itemName);
    await expect(todoPage.itemText(itemName)).not.toBeVisible();
  });
});
