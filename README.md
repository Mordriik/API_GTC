# API do Site GTC

Esta é a API oficial do site do Grupo de Teatro Científico da UEPG (GTC), desenvolvida em Node.js com Express e Prisma ORM. Seu objetivo é fornecer dados de roteiros, cenários, figurinos e textos pop-up ao frontend do site do grupo.

## 📚 Visão Geral

- **Stack utilizada:**
  - Node.js + Express
  - PostgreSQL (Supabase)
  - Prisma ORM
  - Render (deploy)
  - GitHub (controle de versão)

- **Objetivo atual:**
  - Exibir a peça "Coração em Chagas" para o público no evento do dia 14 de maio.

---

## ⚖️ Como rodar localmente

```bash
git clone https://github.com/Mordriik/GTC_API
cd API
npm install
npx prisma generate
npm run dev
```

### Variáveis de ambiente
Crie um arquivo `.env` com o seguinte conteúdo:

```env
DATABASE_URL="postgresql://usuario:senha@host:porta/nome-do-banco"
```

---

## 📁 Estrutura de Pastas

```
/src
  ├── routes
  │    ├── roteiros.js
  │    ├── cenarios.js
  │    ├── figurinos.js
  │    ├── popups.js
  │    └── vinculos.js
  └── index.js
/prisma
  └── schema.prisma
```

---

## 🔎 Endpoints Disponíveis

### `GET /roteiros`
- Retorna todos os roteiros cadastrados.

### `GET /cenarios`
- Retorna todos os cenários.

### `GET /figurinos`
- Retorna todos os figurinos.

### `GET /popups`
- Retorna os textos pop-up.

### `GET /vinculos`
- Retorna os vínculos entre roteiros, cenários e figurinos.
```obs: rotas de tabelas de vinculos ocultadas por enquanto.```

---

## 🔐 Segurança e Controle de Acesso

- **RLS (Row-Level Security):** ativada em todas as tabelas do Supabase.
- **Políticas:** apenas leitura pública permitida.
- **Sem autenticação no momento.**

---

## ☁️ Deploy

- **Render:** hospedagem da API (gratuito, com hibernação após 15 minutos de inatividade).
- **Supabase:** hospedagem do banco de dados PostgreSQL.

---

## 📅 Backup e Restauração

- Backups feitos via pgAdmin.
- Restauração realizada através de comandos SQL no editor do Supabase.
- Script de criação das tabelas incluído no repositório (ver `/prisma/schema.prisma`).

---

## ✅ Status Atual

- [x] Estrutura básica para primeira versão
- [x] API funcional publicada
- [x] Integração com Supabase
- [x] Peça "Coração em Chagas" online
- [ ] Em desenvolvimento para novas funcionalidades (login, fórum, mais peças)

---

## ⚒️ Contribuição

Abra uma _issue_ ou _pull request_ com sugestões ou melhorias. O projeto está sendo mantido por membros do GTC.

---

**Desenvolvido com ❤️ por Moisés Inácio Rodrigues**
