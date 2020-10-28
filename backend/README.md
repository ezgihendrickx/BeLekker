# Setup Backend

Install dependencies

```bash
npm i
```

Create .env file

```bash
touch .env
```

Add DB connection in .env file

```bash
DB_CONNECT = your_mongoDB_database_url_with_username_and_database_name_without_quotes
```

Start Node server

```bash
npm start
```

# Endpoints

## Register

http://localhost:3000/api/user/register

```
/api/user/register
```

```json
{
  "first_name": "John",
  "last_name": "Doe",
  "password": "password",
  "repeat_password": "password",
  "dob": "13011990",
  "email": "email@email.com",
  "repeat_email": "email@email.com"
}
```

## Login

http://localhost:3000/api/user/login

```
/api/user/login
```

```json
{
  "email": "email@email.com",
  "password": "password"
}
```

If login is successful, then an `auth-token` is send by the API in the header, use this token to confirm that the user is logged in.
