<p align="center">
  <img src="https://serralheriaesoldagens.com.br/logo-serralheriaesoldagens.png">
</p>

---
## SOBRE O PROJETO
Site web2 desenvolvido para a empresa de serralheria localizada em Cidade Ocidental - GO <a href="https://serralheriaesoldagens.com.br" target="_blank">Serralheria e Soldagens</a>.


---
## CONECTE-SE COMIGO
<div>
  <a href="https://www.linkedin.com/in/sjrpovoas" target="_blank"><img src="https://img.shields.io/twitter/follow/sjrpovoas?style=for-the-badge&label=linkedin&labelColor=2196f3&color=2196f3&link=https%3A%2F%2Fwww.x.com%2Fsjrpovoas" target="_blank"></a>
  <a href="https://www.x.com/sjrpovoas" target="_blank"><img src="https://img.shields.io/twitter/follow/sjrpovoas?style=for-the-badge&logo=X&logoSize=250&label=%2F%20Twitter&labelColor=000000&color=000000&cacheSeconds=3600&link=https%3A%2F%2Fx.com%2Fsjrpovoas" target="_blank"></a>
  <a href="https://github.com/SjrPovoas" target="_blank"><img src="https://img.shields.io/twitter/follow/SjrPovoas?style=for-the-badge&logo=github&logoColor=%23ffffffff&logoSize=250&label=github&labelColor=%23666666&color=%23666666&cacheSeconds=3600&link=https%3A%2F%2Fgithub.com%2FSjrPovoas"></a>
  <a href="https://www.instagram.com/silviopovoasjunior" target="_blank"><img src="https://img.shields.io/twitter/follow/silviopovoasjunior?style=for-the-badge&logo=instagram&logoColor=%23ffffffff&logoSize=250&label=instagram&labelColor=%23ff6c3f&color=%23ff6c3f&cacheSeconds=3600&link=https%3A%2F%2Fwww.instagram.com%2Fsilviopovoasjunior" target="_blank"></a>
</div>

---
## AGRADECIMENTOS
<div>
  Ao <a href="https://serralheriaesoldagens.com.br/#sobre" target="_blank">Silvano Ribeiro</a> pela confiança em nossos serviços. 
</div>

<br>
<br>

---
## SUMÁRIO
👋 Bem-vindo ao repositório!
Se encontrar algum problema ou tiver alguma dúvida, por favor compartilhe conosco na aba [discussões/issues](https://github.com/SjrPovoas/serralheriaesoldagens/issues).

1. [Configurando conexão VScode com Github](https://github.com/SjrPovoas/serralheriaesoldagens/#1-configurando-conexao-vscode-com-github)
2. [Tecnologias Usadas](https://github.com/SjrPovoas/serralheriaesoldagens/#2-tecnologias-usadas)
3. [Recursos Utilizados na parte Visual](https://github.com/SjrPovoas/serralheriaesoldagens/#3-recursos-utilizados-na-parte-visual)
4. [Conheça o Time](https://github.com/SjrPovoas/serralheriaesoldagens/#4-conheca-o-time)

---
## 1. CONFIGURANDO CONEXÃO VSCODE COM GITHUB

**Para clonar esse Projeto, use:**

```
  git clone https://github.com/SjrPovoas/serralheriaesoldagens.git
```

### 1. Verifique a configuração do Git
Antes de fazer login, é importante verificar se você configurou seu nome de usuário e endereço de e-mail no Git.

Você pode fazer isso com os seguintes comandos, substituindo "Seu Nome" e "seu@email.com" pelas suas informações reais:
```
  git config --global user.name  "Seu Nome"
  git config --global user.email "usuario@email.com"
```
// Pra certificar que os dados foram salvos, use o seguinte comando:
```
  git config --list 
```

### 2. Fazendo o primeiro Commit

1. Inicializar um novo repositório Git no diretório atual.
```
  git init
```
2. Adicionar todos os arquivos modificados e novos à área de stage.
```
  git add .
```
3. Criar um novo commit com os arquivos na área de stage e uma mensagem de commit.
```
  git commit -m "Mensagem de commit"
```
4. Adicionar um repositório remoto ao seu projeto.
```
  git remote add <nome> <URL do repositório>
EX: git remote add https://github.com/SjrPovoas/serralheriaesoldagens.git
```
5. Empurrar seus commits para o repositório remoto.
```
  git push -u origin main
```
6. Cria uma nova branch chamada 'feature/admin'
```
git checkout -b feature/admin
```
7. Agora empurra essa branch para o GitHub
```
git push -u origin feature/admin
```
8. Crie o Pull Request: 
<br>
Vá até o seu repositório no GitHub.
<br>
Lá você verá uma barra amarela ou um botão escrito "Compare & pull request".
<br>
Clique nele e depois clique em "Create pull request".
<br>
Como você é o dono do repositório, verá um botão verde escrito "Merge pull request".
<br>
Clique nele para confirmar a junção das mudanças com a branch: main.
<br>
Depois de clicar no "Merge" lá no site do GitHub, volte ao seu terminal e diga para o seu computador que a branch: main agora está atualizada:
<br>

```
git checkout main
```

9. Baixa as novidades que acabamos de fazer o merge
```
git pull origin main
```

10. Importantes comandos para criar ou rodar o projeto:
```
npx next dev
npm rebuild
npm run dev
```

### 3. Comandos utilizados para instalar Dependências e correções

```
npx create-next-app@latest serralheriaesoldagens
```
```
npm install -D tailwindcss postcss autoprefixer
```
```
npx tailwindcss init -p
```
```
npm install @tailwindcss/postcss
```
```
npm install bootstrap-icons
```
```
npm install tailwindcss@latest postcss autoprefixer --save-dev
```
```
npm install nodemailer
```
```
npm install @types/nodemailer --save-dev
```
```
npm install next-cloudinary
```

---
## 2. TECNOLOGIAS USADAS

<details>
<summary>FRONTEND</summary>
<ul>
<li>NEXT.JS</li>
<li>TAILWIND</li>
</ul>
</details>

<details>
<summary>BACKEND</summary>
<ul>
<li>JAVASCRIPT</li>
</ul>
</details>

---
## 3. RECURSOS UTILIZADOS NA PARTE VISUAL

<details>
<summary>FONTS</summary>

  - [Google Fonts](https://fonts.google.com/)

</details>

<details>
<summary>BOTÕES</summary>

  - [Bootstrap](https://icons.getbootstrap.com/)

</details>

<details>
<summary>GERADOR DE LINK DE WHATSAPP</summary>

  - [Zap Convertte](https://zap.convertte.com.br/gerador-link-whatsapp/)

</details>

<details>
<summary>GERADOR DE BOTÃO DE REDE SOCIAIS</summary>

  - [Shields.io](https://shields.io/badges)

</details>

<details>
<summary>CONSULTA A PALETA DE CORES</summary>

  - [Paleta de Cores](https://paletadecolores.online/)

</details>

<details>
<summary>GERADOR DE ÍCONES</summary>

  - [Gerador de Ícones Online](https://www.aconvert.com/pt/icon/)

</details>

---
## 5. CONFIGURAÇÃO DE REDIRECIONAMENTO

<details>
<summary>DOMÍNIO | CONFIGURAÇÃO | DESTINO</summary>
<ul>
<li>serralheriaesoldagens.com.br     | Connect to Production |	(Nenhum, ele é o principal)</li>
<li>www.serralheriaesoldagens.com.br | Redirect (301)	       | serralheriaesoldagens.com.br</li>
</ul>
</details>

---
## 6. FLUXO DE ENVIO E RECEBIMENTO DE EMAIL CORPORATIVO

<details>
<summary>IMPROVMX</summary>
<ul>
<li><b>Serviço de encaminhamento (RELAY)</b>
<br>
Ele não possui uma caixa de entrada para fazer login e ler e-mails. Ele apenas recebe a mensagem enviada para o seu domínio e a "empurra" instantaneamente para outro endereço (como o seu Gmail Corporativo).
<br>
O foco principal é o recebimento. Para responder ou enviar e-mails usando o seu domínio através dele, você configura o SMTP de outro provedor ou usa os recursos de "Enviar como" do Gmail.
<br>
Oferece um plano gratuito generoso com aliases ilimitados.
<br>
Uma vez dentro do painel do ImprovMX, você verá que ele já cria automaticamente um alias de * (catch-all) apontando para o seu Gmail. Se quiser criar especificamente o contato@, basta adicionar uma linha lá dentro.
<br>
Após salvar as alterações no DNS, o próprio painel do ImprovMX vai mostrar um aviso verde de "Active".
<br>
<li><b>Criar conta gratuita</b>
<br>
Acesse https://improvmx.com/ e utilize o email do gmail de preferência.
</li>
</ul>
</details>

---
## 7. ÁREA ADMINISTRATIVA

<details>
<summary>CLOUDINARY</summary>

 - [Cloudinary](https://cloudinary.com/)

<ul>
<li>Como funciona:</li>
Serviço gratuito. O Cloudinary é uma plataforma em nuvem para gerenciamento de mídia. Ele permite que desenvolvedores e criadores façam upload, armazenamento, otimização e entrega de imagens e vídeos. A ferramenta processa arquivos automaticamente para que carreguem rápido em qualquer dispositivo ou tamanho de tela.
</lu>

 - [Área Administrativa da Serralheria e Soldagens](https://serralheriaesoldagens.com.br/admin/)

</details>


<p>

---
## 8. CONHEÇA O TIME

Nome | Título | Linkedin | X/Twitter | GitHub | Instagram
---|---|---|---|---|---
Silvio Póvoas | Desenvolvedor | [sjrpovoas](https://www.linkedin.com/in/sjrpovoas) | [sjrpovoas](https://www.x.com/sjrpovoas) | [SjrPovoas](https://github.com/SjrPovoas) | [@silviopovoasjunior](https://www.instagram.com/silviopovoasjunior)
Silvano Ribeiro | Empresário | X | X | X | [@serralheriaesoldagens](https://www.instagram.com/serralheriaesoldagens)


***
Última atualização: 02/06/2026 - 15:43
<p align="center">
  &COPY; 2026 Serralheria e Soldagens
</p>