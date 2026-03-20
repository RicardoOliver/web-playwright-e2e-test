
---

## ⚙️ Pré-requisitos

- Node.js 18+
- npm ou yarn
- k6 instalado (opcional para testes de performance)

---

## 🚀 Setup automático (Windows PowerShell)

Execute o comando abaixo para criar toda a estrutura do projeto automaticamente:

```powershell
mkdir meu-projeto; cd meu-projeto;

npm init -y;

npm install -D @playwright/test playwright-bdd typescript;

npx playwright install;

mkdir tests; mkdir tests\features; mkdir tests\steps; mkdir k6;

@"
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "CommonJS",
    "moduleResolution": "Node",
    "types": ["@playwright/test"],
    "strict": true
  }
}
"@ | Out-File -Encoding utf8 tsconfig.json;

@"
node_modules
test-results
playwright-report
"@ | Out-File -Encoding utf8 .gitignore;

@"
import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  features: 'tests/features/**/*.feature',
  steps: 'tests/steps/**/*.ts',
});

export default defineConfig({
  testDir,
  reporter: [['html']],
  use: {
    baseURL: 'https://www.amazon.com.br/',
    headless: false,
    viewport: null,
    launchOptions: {
      args: ['--start-maximized'],
    },
    trace: 'on-first-retry'
  },
});
"@ | Out-File -Encoding utf8 playwright.config.ts;