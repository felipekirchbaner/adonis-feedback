# Adonis API application

A Feeback API

## Setup

Use the command to install the blueprint

```bash
npm install
```
### Env vars

```
cp .env.example .env
```
### Config vars

```js
DB_USER=
DB_PASSWORD=
DB_DATABASE=
```

### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

### Seeds

Run the following command to run startup seeds.

```js
adonis seed
```

### Start the serve in development mode
```bash
adonis serve --dev
```

## API endpoints (See file "insomnia.json")

| Action        | Method          | Path  |
| :------------- |:-------------| :-----|
| **USERS** | | |
| User registration | POST | ```/users``` |
| User login | POST | ```/sessions``` |
| **Feedbacks** | | |
| Index | GET | ```/feedbacks``` |
| Store | POST | ```/feedbacks``` |
| Update | PUT | ```/feedbacks/{feedback}``` |
| destroy | DELETE | ```/feedbacks/{feedback}``` |
| show | GET | ```/feedbacks/{feedback}``` |
