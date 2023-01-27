# **Elegibilidade de Clientes - Lemon 🍋**


## **Sobre o Projeto**

O projeto foi desenvolvido através de desafio proposto pela empresa Lemon para verificar a critérios de elegibilidade para aquisição de clientes, onde foi passado os seguinte critérios:

* **Classe de consumo da cliente**
    * Possíveis Valores: Comercial, Residencial, Industrial, Poder Público, e Rural.
    * Elegíveis: Comercial, Residencial e Industrial.
* **Modalidade tarifária**
    * Possíveis Valores: Branca, Azul, Verde, e Convencional.
    * Elegíveis: Convencional, Branca.
* **Consumo mínimo do cliente**
    * O cálculo deve ser feito utilizando a média dos 12 valores mais recentes do histórico de consumo.
        * Clientes com tipo de conexão Monofásica só são elegíveis caso tenham consumo médio acima de 400 kWh.
        * Clientes com tipo de conexão Bifásica só são elegíveis caso tenham consumo médio acima de 500 kWh.
        * Clientes com tipo de conexão Trifásica só são elegíveis caso tenham consumo médio acima de 750 kWh.
* Para calcular a projeção da **economia anual** de CO2, considere que para serem gerados 1000 kWh no Brasil são emitidos em média 84kg de CO2.

## **Como Rodar a Aplicação**

  `Para rodar a aplicação é necessario obter a versão do node maior ou igual 16`

  ````
  git clone git@github.com:jefferson-moraiis/test-eligibility-lemon.git

  cd test-eligibility-lemon

  npm install

  npm run start:dev
  ````

  ## **Como Rodar os Test**

  teste unitarios:

  ```
  npm run test
  ```

   cobertura de testes:

  ```
  npm run test:ci
  ```

## **Bibliotecas e Ferramentas**

* NPM
* Typescript
* Git
* Jest
* Validator
* Express
* Husky
* Lint Staged
* Eslint
* Nodemon

## **Estrutura de pasta do projeto**
```
src - pasta raiz
   |-- domain -> regras de negocios
   |   |-- enums
   |   |-- interfaces
   |   |-- usecases
   |-- main -> configurações do projeto
   |   |-- config
   |   |-- controllers
   |   |-- docs
   |   |   |-- components
   |   |   |-- paths
   |   |   |-- schemas
   |   |-- routes
   |-- tests -> testes
   |   |-- mocks

   ```
## **Metodologias**

* TDD
* Conventional Commits
* Dependency Diagrams
* Use Cases