# 🧪 Teste de Mesa — Fluxo de Busca de Produtos (Amazon)

## 🎯 Objetivo
Validar o fluxo de busca de produtos na Amazon Brasil, garantindo que os resultados sejam exibidos corretamente, que a navegação para o produto funcione e que as informações essenciais estejam visíveis.

---

## 🌐 Sistema
Amazon Brasil  
https://www.amazon.com.br

---

## 📋 Cenário de Teste

### 🧾 Fluxo: Busca e validação de produtos

| Passo | Ação | Entrada | Resultado Esperado |
|------|------|--------|-------------------|
| 1 | Acessar o site | https://www.amazon.com.br | Página inicial carregada com sucesso |
| 2 | Localizar campo de busca | - | Campo de busca visível |
| 3 | Inserir termo de busca | "monitor 4k" | Texto preenchido corretamente |
| 4 | Executar busca | Clique no botão buscar | Página de resultados carregada |
| 5 | Aguardar carregamento | - | Lista de produtos visível |
| 6 | Validar resultados | - | Pelo menos 1 produto exibido |
| 7 | Selecionar produto | Primeiro item da lista | Página do produto carregada |
| 8 | Validar título | - | Título do produto visível |
| 9 | Validar preço | - | Preço exibido (quando disponível) |
| 10 | Capturar evidência | Screenshot | Imagem salva com sucesso |
| 11 | Retornar à busca | Voltar página | Lista de produtos exibida novamente |
| 12 | Nova busca | "notebook i7" | Campo preenchido corretamente |
| 13 | Executar nova busca | Clique buscar | Nova lista carregada |
| 14 | Validar resultados | - | Produtos exibidos na tela |

---

## 🧠 Regras de Negócio

- ✅ O campo de busca deve estar disponível na página inicial  
- ✅ A busca deve retornar produtos relacionados ao termo informado  
- ✅ O produto deve possuir um título visível  
- ⚠️ O preço pode não estar disponível para todos os produtos  
- ✅ A navegação entre páginas deve funcionar corretamente  
- ✅ Evidências (screenshots) devem ser geradas  

---

## ⚠️ Pontos de Atenção

- 🔸 Elementos carregam dinamicamente (lazy loading)  
- 🔸 Possível bloqueio por bot (principalmente em CI)  
- 🔸 Layout pode variar conforme região/dispositivo  
- 🔸 Nem todos os produtos possuem preço exibido  

---

## 🧪 Tipo de Teste

- ✔ Teste Funcional  
- ✔ Teste End-to-End (E2E)  
- ✔ Teste Smoke (parcial)  

---

## ✅ Critérios de Aceite

- [X] A busca retorna resultados  
- [X] O produto abre corretamente  
- [X] O título do produto é exibido  
- [X] O preço é exibido quando disponível  
- [X] Screenshot é capturado com sucesso  
- [X] Segunda busca retorna resultados válidos  

---

## 🚀 Observação

Este teste utiliza um ambiente real (Amazon), podendo apresentar instabilidade devido a:

- bloqueios anti-bot  
- variações no layout  
- mudanças no DOM  

Para ambientes de CI/CD, recomenda-se utilizar ambientes controlados ou mocks.

---

## 👨‍💻 Autor

**Ricardo Oliveira**  
QA Engineer | Automação de Testes | Playwright | BDD