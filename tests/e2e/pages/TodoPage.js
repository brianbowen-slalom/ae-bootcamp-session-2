class TodoPage {
  constructor(page) {
    this.page = page;
    this.input = page.getByPlaceholder('Enter item name');
    this.addButton = page.getByRole('button', { name: 'Add Item' });
    this.loadingText = page.getByText('Loading data...');
  }

  async goto() {
    await this.page.goto('/');
  }

  async waitForReady() {
    await this.loadingText.waitFor({ state: 'hidden' });
  }

  async addItem(name) {
    await this.input.fill(name);
    await this.addButton.click();
  }

  async submitEmptyItem() {
    await this.input.fill('   ');
    await this.addButton.click();
  }

  itemText(name) {
    return this.page.getByText(name);
  }

  itemRow(name) {
    return this.page.locator('li', { hasText: name });
  }

  allRows() {
    return this.page.locator('li');
  }

  async deleteItem(name) {
    const row = this.itemRow(name);
    await row.getByRole('button', { name: 'Delete' }).click();
  }
}

module.exports = { TodoPage };
