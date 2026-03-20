Feature: Busca de produtos na Amazon

  Background:
    Given que o usuário acessa a página inicial da Amazon Brasil

  Scenario: Buscar monitor 4k e validar produto
    When o usuário pesquisa por "monitor 4k"
    And aguarda o carregamento dos resultados
    Then deve visualizar produtos na busca

    When clica no primeiro produto
    Then deve visualizar o título do produto
    And deve visualizar o preço quando disponível
    And captura screenshot do produto

  Scenario: Buscar notebook i7
    When o usuário pesquisa por "notebook i7"
    And aguarda o carregamento dos resultados
    Then deve visualizar produtos na busca