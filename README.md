# API do Site GTC

API oficial do site do Grupo de Teatro Científico da UEPG (GTC). Desenvolvida com Node.js, esta API adota uma arquitetura robusta para gerenciar todo o conteúdo do site, incluindo peças, usuários e elementos cênicos, com um sistema de autenticação e autorização baseado em roles.

---

## ✨ Funcionalidades

  - **Autenticação e Autorização:** Sistema seguro com JSON Web Tokens (JWT), diferenciando usuários comuns de administradores.
  - **CRUD Completo:** Operações de Criar, Ler, Atualizar e Deletar para todos os principais recursos (roteiros, cenários, figurinos, etc.).
  - **Gestão de Vínculos:** Relação inteligente entre roteiros e seus respectivos cenários e figurinos diretamente na criação/atualização.
  - **Validação de Dados:** Proteção contra dados malformados em todas as rotas de entrada (POST/PUT) utilizando Zod.
  - **Estrutura Profissional:** Código organizado em camadas (Routes, Controllers, Services, Validators) para manutenibilidade e escalabilidade.

---

## 📚 Stack Utilizada

  - Backend: Node.js, Express.js
  - Banco de Dados: PostgreSQL (hospedado no Supabase)
  - ORM: Prisma
  - Autenticação: JWT, bcrypt.js
  - Validação: Zod
  - Deploy: Render
  - Controle de Versão: Git e GitHub

---

## ⚖️ Como rodar localmente

**1. Clone o repositório:**
```bash
git clone [https://github.com/Mordriik/API_GTC.git](https://github.com/Mordriik/API_GTC.git)
# Navega até a pasta raiz
cd API_GTC
```

**2. Instale as dependências:**
```bash
npm install
```

**3. Configure as variáveis de ambiente:**
Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis:
```bash
# URL de conexão com seu banco de dados PostgreSQL local ou de desenvolvimento
DATABASE_URL="postgresql://usuario:senha@host:porta/nome-do-banco"

# Chave secreta para gerar os tokens JWT (use o comando abaixo para gerar uma chave segura)
# node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
JWT_SECRET="sua-chave-secreta-super-segura"
```

**4. Aplique as migrações do banco de dados:**
Este comando irá criar todas as tabelas no seu banco de dados com base no schema.
```bash
npx prisma migrate dev
```

**5. Inicie o servidor de desenvolvimento:**
```bash
npm run dev
```

---

## 📁 Estrutura de Pastas

```
/prisma
  └── schema.prisma         # Definição do schema do banco de dados
/src
  ├── controllers           # Lida com requisições e respostas HTTP
  ├── lib                   # Configurações de bibliotecas (Prisma Client)
  ├── middleware            # Funções que rodam entre a requisição e o controller (auth, validação)
  ├── routes                # Definição dos endpoints da API
  ├── services              # Contém a lógica de negócio e as chamadas ao banco
  ├── validators            # Contém os schemas de validação (Zod)
  └── index.js              # Ponto de entrada da aplicação Express
.env                        # Arquivo para variáveis de ambiente (NÃO versionado)
.gitignore
package.json
README.md
```

---

## 🔎 Endpoints da API

### `[PUBLICO]`: Acessível por qualquer um.
### `[ADMIN]`: Requer um token JWT de um usuário com `role` de `ADMIN`.

**Autenticação `(/auth)`**
### `POST /auth/register`
  - [PUBLICO]: Registra um novo usuário.
### `POST /auth/login`
  - [PUBLICO]: Realiza o login e retorna um token JWT.

**Roteiros `(/roteiros)`**
### `GET /`
  - [PUBLICO]: Lista todos os roteiros com seus cenários e figurinos vinculados.
### `GET /:id`
  - [PUBLICO]: Retorna um roteiro específico.
### `POST /`
  - [ADMIN]: Cria um novo roteiro e o vincula a cenários e figurinos existentes.
  Exemplo:
```bash
Body: { "titulo": "...", "texto": "...", "cenarioIds": [1, 2], "figurinoIds": [1, 2] }
```
### `PUT /:id`
  - [ADMIN]: Atualiza um roteiro e seus vínculos.
### `DELETE /:id`
  - [ADMIN]: Deleta um roteiro.

**Cenários `(/cenarios)`**
### `GET /`
  - [PUBLICO]: Lista todos os cenários.
### `GET /:id`
  - [PUBLICO]: Retorna um cenário específico.
### `POST /`
  - [ADMIN]: Cria um novo cenário.
### `PUT /:id`
  - [ADMIN]: Atualiza um cenário.
### `DELETE /:id`
  - [ADMIN]: Deleta um cenário.

  **Figurinos `(/figurinos)`**
### `GET /`
  - [PUBLICO]: Lista todos os figurinos.
### `GET /:id`
  - [PUBLICO]: Retorna um figurino específico.
### `POST /`
  - [ADMIN]: Cria um novo figurino.
### `PUT /:id`
  - [ADMIN]: Atualiza um figurino.
### `DELETE /:id`
  - [ADMIN]: Deleta um figurino.

    **Textos Pop-up `(/popups)`**
### `GET /`
  - [PUBLICO]: Lista todos os textos pop-up.
### `GET /:id`
  - [PUBLICO]: Retorna um texto pop-up específico.
### `POST /`
  - [ADMIN]: Cria um novo texto pop-up.
### `PUT /:id`
  - [ADMIN]: Atualiza um texto pop-up.
### `DELETE /:id`
  - [ADMIN]: Deleta um texto pop-up.

---

## 🔐 Segurança e Controle de Acesso

- **Autenticação:** As rotas de criação, atualização e deleção são protegidas e exigem um Bearer Token JWT no cabeçalho `Authorization`.
- **Autorização:** Apenas usuários com a role de ADMIN podem acessar as rotas protegidas.
- **RLS (Row-Level Security):** Ativada em todas as tabelas de dados no Supabase para uma camada extra de segurança. A tabela _prisma_migrations não possui RLS para permitir o funcionamento correto do deploy.

---

## ☁️ Deploy

- **Plataforma:** Render (plano gratuito).
- **Banco de Dados:** Supabase (plano gratuito).
- **Comando de Build:** `npm install && npx prisma generate`
- **Comando de Início:** `npx prisma migrate deploy && npm start`

---

## 📅 Backup e Restauração

- Backups feitos via pgAdmin.
- Restauração realizada através de comandos SQL no editor do Supabase.

---

## ✅ Status Atual

- [x] Estrutura da API refatorada para arquitetura em camadas.
- [x] Sistema de autenticação e autorização com JWT e roles implementado.
- [x] Implementação de CRUD completo para todos os recursos.
- [x] Validação de dados de entrada com Zod.
- [x] Integração e deploy contínuo com Render e Supabase.
- [ ] Em desenvolvimento para novas funcionalidades que surjam necessidade

---

## ⚒️ Contribuição

Abra uma _issue_ ou _pull request_ com sugestões ou melhorias. O projeto está sendo mantido por membros do GTC da Universidade Estadual de Ponta Grossa.

---

**Desenvolvido com ❤️ por Moisés "Mordriik" Rodrigues**
