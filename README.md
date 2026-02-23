🔐 Validador de Senha

Aplicação web desenvolvida com HTML, CSS e JavaScript puro que realiza a validação dinâmica da força de uma senha com base em regras pré-definidas.

O sistema fornece feedback visual em tempo real ao usuário, indicando quais critérios já foram atendidos.

📌 Objetivo

Demonstrar:

Manipulação do DOM com JavaScript

Uso de expressões regulares (Regex)

Validação dinâmica baseada em eventos (oninput)

Controle de classes CSS para feedback visual

Organização lógica de regras de negócio no front-end

🚀 Funcionalidades

✔ Validação em tempo real enquanto o usuário digita

✔ Verificação de múltiplas regras de segurança

✔ Alternância entre mostrar/ocultar senha

✔ Feedback visual com mudança de cores

✔ Interface simples e responsiva

📋 Regras de Validação

A senha deve:

Ter entre 8 e 15 caracteres

Conter pelo menos 1 número

Conter pelo menos 1 letra minúscula

Conter pelo menos 2 letras maiúsculas

Conter pelo menos 1 símbolo

🧠 Lógica Utilizada

A validação é feita através de:

String.match() com Expressões Regulares

Manipulação de classes com classList.add() e classList.remove()

Eventos:

oninput → Para validação dinâmica

addEventListener("click") → Para alternar visibilidade da senha

Exemplo de Regex utilizadas:

/[0-9]/g      // números
/[a-z]/g      // letras minúsculas
/[A-Z]/g      // letras maiúsculas
/\W/g         // caracteres especiais
🗂 Estrutura do Projeto
📁 validador-de-senha
│
├── index.html
├── style.css
└── js.js
🖥️ Tecnologias Utilizadas

HTML5

CSS3

JavaScript (Vanilla JS)

Google Fonts (Montserrat)

📷 Interface

A interface é composta por:

Campo de senha

Botão "Mostrar"

Lista dinâmica de regras

Feedback visual com cores:

🔴 Vermelho → Regra não atendida

🟢 Verde → Regra atendida

▶️ Como Executar

Clone o repositório:

git clone https://github.com/seu-usuario/validador-de-senha.git

Abra o arquivo index.html no navegador.

📚 Conceitos Aplicados

Validação de formulários no front-end

Regex aplicada à segurança

Estados visuais com CSS

Boas práticas de separação (HTML / CSS / JS)

🔮 Possíveis Melhorias Futuras

Barra visual de força da senha

Indicação textual (Fraca / Média / Forte)

Animações suaves

Refatoração para modularização

Remover atributo oninput e utilizar apenas addEventListener

Melhorar acessibilidade (ARIA)

👨‍💻 Autor

Cleiton Arcanjo
Estudante de Análise e Desenvolvimento de Sistemas.
Foco em desenvolvimento web e lógica de programação
