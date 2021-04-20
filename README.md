# messenger-webhook

Simple bot with its own rules that could ask user and answer question asked by user. This include Node.js webhook for FB Messenger.

This project was bootstrapped with
[Bottender](https://github.com/Yoctol/bottender) init script.

---

## Configuration

Some of this configuration comes from Bottender's init script. It has been rewritten for better explanation with this customization and purpose of this project.

### The `bottender.config.js` File

Bottender configuration file. You can use this file to provide settings for the session store and channels. Important configuration for this project is in `channels.messenger.enabled`, you need to set its value to `true` for enabling webhook for messenger

### The `.env` File

This project utilizes the [dotenv](https://www.npmjs.com/package/dotenv) package to load environment variables needed for this to work.

To make the webhook work (especially messenger), all the required environment variables (below) in `.env` file need to be filled.
```sh
...
MESSENGER_PAGE_ID=YOUR_MESSENGER_PAGE_ID
MESSENGER_ACCESS_TOKEN=YOUR_MESSENGER_ACCESS_TOKEN
MESSENGER_APP_ID=YOUR_MESSENGER_APP_ID
MESSENGER_APP_SECRET=YOUR_MESSENGER_APP_SECRET
MESSENGER_VERIFY_TOKEN=YOUR_MESSENGER_VERIFY_TOKEN
...
```

#### MESSENGER_PAGE_ID
This variable can be easily find in your Page's URL. For example, this URL `https://www.facebook.com/Messenger-Webhook-107007124856494` has id `107007124856494`, its located in most right of URL, consist of number. Or you can find it with this step:
![Alt Text](https://media.giphy.com/media/MndmuUmrHqfxaA0mda/giphy.gif)

#### MESSENGER_ACCESS_TOKEN
You need to have access to FB Page's Admin Dashboard to get this variable. Its located in Access Token's tab of Messenger's settings inside Dashboard.
![Alt Text](https://media.giphy.com/media/hX9NdYBI9HHDJsG41Y/giphy.gif)

#### MESSENGER_APP_ID
This variable located in top-left of Admin's Dashboard of your page.
![Alt Text](https://media.giphy.com/media/2w0XGBJ7UKCUijHXrH/giphy.gif)

#### MESSENGER_APP_SECRET
This is the Secret token for your Page/App (not your messenger's). You can locate this variable inside Page/App's settings
![Alt Text](https://media.giphy.com/media/p0InT72w5VwFqgvmMu/giphy.gif)

#### MESSENGER_VERIFY_TOKEN
This variable is for verifying webhook. You can fill anything here. Make sure the token that you created is secure.

---

## Development and Deployment

### `npm install`
Before you can run anything, make sure to install all the required dependencies.

In the project directory, you can run:

### `npm run dev`
Runs the app in development mode.<br>
It will output ngrok's URL in terminal that can be used for integration with Messenger.<br>
The bot will automatically reload if you make changes to the code.<br>
By default, server runs on [http://localhost:5000](http://localhost:5000) and ngrok runs on [http://localhost:4040](http://localhost:4040).

To run in [Console Mode](https://bottender.js.org/docs/en/the-basics-console-mode), provide the `--console` option:

![Alt Text](https://media.giphy.com/media/DdZmHfd11TCTML0sHG/giphy.gif)

```sh
npm run dev -- --console
```

### `npm start`

Runs the app in production mode.<br>
By default, server runs on [http://localhost:5000](http://localhost:5000).

### `npm run lint`

Runs the linter rules using [Eslint](https://eslint.org/).

### `npm test`

Runs the test cases using [Jest](https://jestjs.io/).

---

## Guides for Webhook in Messenger (Development)

After the app is running in development mode. It will print out ngrok's URL in terminal.

![Alt Text](https://media.giphy.com/media/2Qcx2SEi58nbJ9BGOB/giphy.gif)

For integration with Messenger, you can do it manually from Admin's dashboard in Facebook Developer's Page, or you can easily integrate with one line command below:
```sh
npx bottender messenger webhook set
```

![Alt Text](https://media.giphy.com/media/IwPpZH1ojqDv29oCzh/giphy.gif)
---

## Guides for Webhook in Messenger (Production)

Assuming you're deploying this App in `https://www.example.com/`. The webhook will automatically available at `https://www.example.com/webhooks/messenger`.

---

## Guides for REST API

This guides assumes that the App is deployed at `http://localhost:5000/`

### Get All Messages
To get all messages that has been received from users.<br>
Endpoint : `http://localhost:5000/messages` <br>
Method : `GET`

`200 Success` Sample Response :
```
[
  {
    "id": 7,
    "messages": "hola",
    "users": "messenger:12121"
  },
  {
    "id": 8,
    "messages": "Wibi",
    "users": "messenger:12121"
  }
]
```

### Get Message by ID
To get one message by its id.<br>
Endpoint : `http://localhost:5000/messages/:id` <br>
Method : `GET`

Example Request : `http://localhost:5000/messages/7`<br>
`200 Success` Sample Response :
```
{
  "id": 7,
  "messages": "hola",
  "users": "messenger:12121"
}
```

### Create New Message
To create new message that accepts `message` and `user` params.<br>
Endpoint : `http://localhost:5000/messages/` <br>
Method : `POST`

Body (`application/json`) : 
```
{
  "message": "hello",
  "user": "user90909"
}
```
`200 Success` Sample Response :
```
{
  "id": 9,
  "message": "hello",
  "user": "user90909"
}
```

### Delete One Message
To delete message by its id.<br>
Endpoint : `http://localhost:5000/messages/:id` <br>
Method : `DELETE`

Example Request : `http://localhost:5000/messages/8` <br>
`200 Success` Sample Response :
```
Entry Deleted
```

---
### Messenger Webhook.<br>
Docs by: Wibisana Wiratama | wibi.s.wi@gmail.com <br>