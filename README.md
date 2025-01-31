# Server API

## Index

- [Register a new user](#register-a-new-user)
- [User login](#user-login)
- [Create a new Page](#create-a-new-page)
- [Get all Pages](#get-all-pages)
- [Get a Page by ID](#get-a-page-by-id)
- [Update a Page](#update-a-page)
- [Archive a Page](#archive-a-page)
- [Delete a Page](#delete-a-page)

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

## Create a new Page

```js
/**
 * Create a new Page
 * @path http://localhost:3000/api/pages
 * @method POST
 * @param {object} page
 * @param {string} page.title
 * @param {string} page.content
 */
(async () => {
    const response = await axios({
        method: 'POST',
        url: 'http://localhost:3000/api/pages',
        headers: {
            'Authorization': 'Bearer <token>'
        },
        data: {
            title: 'Page Title',
            content: 'Page Content'
        },
    });

    return response.data;
});
```

## Get all Pages

```js
/**
 * Get all Pages
 * @path http://localhost:3000/api/pages?lang=it|en
 * @method GET
 */
(async () => {
    const response = await axios({
        method: 'GET',
        url: 'http://localhost:3000/api/pages',
        headers: {
            'Authorization': 'Bearer <token>'
        },
    });

    return response.data;
});
```

## Get a Page by ID

```js
/**
 * Get a Page by ID
 * @path http://localhost:3000/api/pages/:page_id
 * @method GET
 */
(async () => {
    const response = await axios({
        method: 'GET',
        url: 'http://localhost:3000/api/pages/:page_id',
        headers: {
            'Authorization': 'Bearer <token>'
        },
    });

    return response.data;
});
```

## Update a Page

```js
/**
 * Update a Page
 * @path http://localhost:3000/api/pages/:page_id
 * @method PUT
 * @param {object} page
 * @param {string} page.title
 * @param {string} page.content
 */
(async () => {
    const response = await axios({
        method: 'PUT',
        url: 'http://localhost:3000/api/pages/:page_id',
        headers: {
            'Authorization': 'Bearer <token>'
        },
        data: {
            title: 'Page Title',
            content: 'Page Content'
        },
    });

    return response.data;
});
```

## Archive a Page

```js
/**
 * Archive a Page
 * @path http://localhost:3000/api/pages/archive/:page_id
 * @method PUT
 * @param {object} page
 * @param {boolean} page.is_archived
 */
(async () => {
    const response = await axios({
        method: 'PUT',
        url: 'http://localhost:3000/api/pages/archive/:page_id',
        headers: {
            'Authorization': 'Bearer <token>'
        },
        data: {
            is_archived: true
        },
    });

    return response.data;
});
```

## Delete a Page

```js
/**
 * Delete a Page only if is archived
 * @path http://localhost:3000/api/pages/:page_id
 * @method DELETE
 */
(async () => {
    const response = await axios({
        method: 'DELETE',
        url: 'http://localhost:3000/api/pages/:page_id',
        headers: {
            'Authorization': 'Bearer <token>'
        },
    });
    
    return response.data;
});
```
