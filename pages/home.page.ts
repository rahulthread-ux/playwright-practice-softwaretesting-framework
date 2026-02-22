import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class HomePage extends BasePage {
  readonly categoriesLabel: Locator;
  readonly sortLabel: Locator;

  constructor(page: Page) {
    super(page);
    
    this.categoriesLabel = page.locator('[data-test="nav-categories"]')
    this.sortLabel = page.locator('text=Sort');
  }

  async navigateToHome() {
    await this.navigate('/');
  }

  async getTitle() {
    return this.page.title();
  }
}