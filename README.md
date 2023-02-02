# 📊 Dashgo

## 💡 Projeto

Desenvolvimento de uma aplicação responsiva utilizando NextJS. O Dashgo é uma dashboard contendo listagem e cadastro de novos usuários, dentre outras funcionalidades. A responsividade da aplicação foi construída com a biblioteca do Chakra UI.

#### A aplicação contém as seguintes rotas:

  - página de login com validações nos campos de preenchimento,
  - página Home que exibe um header, uma sidebar e gráficos gerados pela biblioteca ApexCharts,
  - a página de listagem de usuários provida pela biblioteca FakerJS que gera dados em massa de usuários,.
  - a página com formulário de cadastro de novos usuários construída através do react-hook-form com validações em cada campo do formulário.
  
#### Acesse o deploy do projeto:

- página de login: https://dashgo-reremeireles.vercel.app/
- página Home: https://dashgo-reremeireles.vercel.app/dashboard
- página de listagem de usuários: https://dashgo-reremeireles.vercel.app/users
- página de cadastro de novos usuários: https://dashgo-reremeireles.vercel.app/users/create

## 💻 Tecnologias e Bibliotecas

- ReactJS
- NextJS
- Typescript
- Chakra UI
- MirageJS
- Axios
- React Hook Form
- React Icons
- ReactQuery
  - gerenciamento de dados assíncronos em aplicações: busca, sincroniza, atualiza e armazena em cache local os dados da aplicação
- React-ApexCharts
- FakerJS

## 👩‍💻 Conceitos aplicados no projeto

- Interface Declarativa com Chakra UI
- Componentização
- Validação de formulários
- Layouts responsivos utilizando Responsive Styles do Chakra UI com os hooks:
  - useBreakPointValue
  - useDisclosure
- Contexto 
- Data Fetching e Refetch de dados utilizando React Query 
  - no React Query existe o loading de dados (carregamento inicial) que depois de carregados ficam armazenados no cache local, esse loading ocorre uma vez e depois os dados são exibidos a partir da perspectiva do cache que armazena os dados, existem dois tipos de loadings na aplicação: 
    - loading inicial: primeiro carregamento mais pesado
    - loading de refetch: sinalizando que está ocorrendo uma atualização de dados
- Hooks
  - useEffect
  - useRouter
  - useForm
  - useContext
  - useQuery
- Axios
  - aqui o Axios substitui o fetch, pois por mais que o React Query seja uma biblioteca para facilitar o Data Fetching, ele não substitui a forma como é feito o fetch de dados tradicionalmente, a vantagem do Axios sobre o fetch é que com o Axios é possível setar uma base URL para que todas as requisições sempre partam de um endereço inicial
- Lógica de paginação da listagem de usuários
