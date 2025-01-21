# Server API

## Index

- [Register a new user](#register-a-new-user)
- [User login](#user-login)

## Register a new user

```js
/**
 * Register a new user
 * @path http://localhost:3000/api/users
 * @method POST
 * @param {object} user
 * @param {string} user.first_name
 * @param {string} user.last_name
 * @param {string} user.email
 * @param {string} user.password
 */
(async () => {
    const response = await axios({
        method: 'POST',
        url: 'http://localhost:3000/api/users',
        data: {
            first_name: 'John',
            last_name: 'Doe',
            email: 'john.doe@email.com',
            password: 'password'
        },
    });

    return response.data;
});
```

## User login

```js
/**
 * User login
 * @path http://localhost:3000/auth/token
 * @method POST
 * @param {object} user
 * @param {string} user.email
 * @param {string} user.password
 */
(async () => {
    const response = await axios({
        method: 'POST',
        url: 'http://localhost:3000/auth/token',
        data: {
            email: 'john.doe@email.com',
            password: 'password'
        },
    });

    return response.data;
});
```
