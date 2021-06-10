# Cypress - Teste
## Teste Via

### Cenários de Testes automatizados

#### Funcionalidade: Cadastro
Cenário: Preencher cadastro com dados válidos
Dado que eu acesse a página da VV Test
E acesse o menu "Cadastro"
Quando eu preencher todos os campos obrigatórios 
Então deve exibir uma mensagem de sucesso

## Clonando e executando em sua máquina

### Pré-requisito:

-Node.js - Você encontra em: https://nodejs.org/en/

-Visual Studio Code ou qualquer editor de texto - você encontra em: https://code.visualstudio.com/download

-Git: você encontra em: https://git-scm.com/downloads


Via terminal, rode os seguintes comandos:
```  
git clone https://github.com/simonekppx/Teste-VV.git
```
```
cd Test-VV
```

#### Para instalar as dependencias:
```
npm install 
```

#### Para executar em moodo Headlesss via console:
```
npx cypress run
```

#### Para executar via Dashboard:
```
npx cypress open 
```
Após abrir o dasboard, clique na opção "Running integration tests" para rodar todos os testes.





