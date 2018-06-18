# Desafio
#### Teste para o projeto ES na Palma da mão


## 1.0 - Sobre a solução
### 1.1 - Páginia inicial
A página inicial é a primeira tela de contato do usuário na aplicação então algo bem intuitivo é fundamental.<br>
Nesta tela há uma 'caixa' onde o usuário poderá escolher através de botões as opções 
_BUSCAR POR CPF_ ou _BUSCAR POR CÓDIGO DO CONCURSO_ .<br>
Ao clicar em alguma das opções, o corpo da 'caixa' irá alterar os campos: inserção de dados, botão _BUSCAR_ 
e o corpo que será mostrado o resultado da busca.

### 1.2 - Por trás da página inical
Quando o usuário inserir algum dado nos campos de inserção e clicar em buscar, o manipulador de eventos (JQUERY) irá pegar
o valor (dado inserido) do campo e enviará para o servidor usando AJAX e ficará esperando o resultado de resposta.
Ao chegar ao servidor através do método GET, a aplicação irá pegar o valor que foi enviado pelo manipulador e 
irá inicar uma função de busca atráves do campo.

### 1.3 - Busca no banco
Ao iniciar a função de busca ela procurará a quem corresponde esse dado informado (CPF ou Código do Concurso), quando achado irá 
procurar pelo resultado específico dela. Exemplo, a função de achar um candidato, irá buscar pelo CPF inserido a quem aquele dado 
se refere no banco de dados, achado esta informação ela continuará a buscar, tomando como base a(s) sua(s) profissão(ões) e comparará
com as listas de vagas existente nos concursos. Ao encontrar enviará de volta a página inicial do cliente, aonde o ficou esperando uma
resposta e assim que chegar irá 'escrever' para o usuário de forma dinâmica o concurso que combina com aquele CPF/pessoa.

**OBS :** Caso não encontre, permanecerá inalterada a página do cliente.


<hr>

## 2.0 - Ferramentas Utilizadas
|             |    Página WEB   |        Servidor    |    Container    |   Banco de Dados |
|-------------|-----------------|--------------------|-----------------|------------------|
|             |   HTML5 + CSS3  |       NodeJs       |      Docker     |      MongoDB     |
| FRAMEWORK + |    + JQUERY     |    + ExpressJs     |    Dockerfile   |
| FRAMEWORK + |    +  AJAX      |    + Mongoose      |   Docker Compose|

**OBS:** A porta utilizada será a 80.

## 3.0 - WakaTime
[Clique para acessar](https://wakatime.com/@5874775c-fd4d-45b9-8554-c7be548708eb/projects/azugumubcd)
