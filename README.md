# Minha Rua 🚚💜

**Minha Rua** é um projeto pessoal onde você pode buscar informações de um endereço a partir do CEP. É uma releitura de um dos meus primeiros projetos, desenvolvido durante o curso na Gama Academy, agora refatorado para usar **React** e dar um ar mais moderno e organizado ao código.

## Funcionalidades

- Busca informações de endereço pelo CEP usando a [Brasil API](https://brasilapi.com.br/api/cep/v2/).  
- Formatação automática do CEP enquanto você digita (`XXXXX-XXX`).  
- Exibição do endereço completo: rua, bairro, cidade e UF.  
- Feedback visual para erros e carregamento.

## Como Funciona

1. Digite o CEP no campo de busca.  
2. O CEP é automaticamente formatado.  
3. Clique no botão de busca ou pressione Enter.  
4. Se o CEP for válido, os campos de endereço são preenchidos automaticamente.  
5. Caso haja erro (CEP inválido ou não encontrado), uma mensagem de aviso é exibida.  

## Tecnologias

- **React** – para criar a interface interativa.  
- **Styled Components** – para manter o estilo do projeto organizado, componível e próximo da ideia original.  
- **Brasil API** – para consumir os dados de CEP.  
- **JavaScript** (ES6+) – lógica do projeto e manipulação de estados.  
