import { createBdd } from 'playwright-bdd';
import { HomePage } from '../pages/home.page';
import { SearchPage } from '../pages/search.page';
import { ProductPage } from '../pages/product.page';

const { Given, When, Then } = createBdd();

let home: HomePage;
let search: SearchPage;
let product: ProductPage;

Given('que o usuário acessa a página inicial da Amazon Brasil', async ({ page }) => {
  home = new HomePage(page);
  await home.go();
});

When('o usuário pesquisa por {string}', async ({ page }, termo: string) => {
  await home.search(termo);
  search = new SearchPage(page);
});

When('aguarda o carregamento dos resultados', async () => {
  await search.waitResults();
});

Then('deve visualizar produtos na busca', async () => {
  await search.hasResults();
});

When('clica no primeiro produto', async ({ page }) => {
  await search.clickFirstProduct();
  product = new ProductPage(page);
  await product.validateLoaded();
});

Then('deve visualizar o título do produto', async () => {
  await product.validateTitle();
});

Then('deve visualizar o preço quando disponível', async () => {
  await product.validatePriceIfExists();
});

Then('captura screenshot do produto', async () => {
  await product.screenshot('produto');
});