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
This variable can be easily find in your Page's URL. For example, this URL `https://www.facebook.com/Messenger-Webhook-107007124856494` has id `107007124856494`, its located in most right of URL, consist of number.

#### MESSENGER_ACCESS_TOKEN
You need to have access to FB Page's Admin Dashboard to get this variable. Its located in Access Token's tab of Messenger's settings inside Dashboard.

#### MESSENGER_APP_ID
This variable located in top-left of Admin's Dashboard of your page.

#### MESSENGER_APP_SECRET
This is the Secret token for your Page/App (not your messenger's). You can locate this variable inside Page/App's settings

#### MESSENGER_VERIFY_TOKEN
This variable is for verifying webhook. You can fill anything here. Make sure the token that you created is secure.

---

## Development and Deployment

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode.<br>
The bot will automatically reload if you make changes to the code.<br>
By default, server runs on [http://localhost:5000](http://localhost:5000) and ngrok runs on [http://localhost:4040](http://localhost:4040).

To run in [Console Mode](https://bottender.js.org/docs/en/the-basics-console-mode), provide the `--console` option:

```sh
npm run dev -- --console
yarn dev --console
```

### `npm start`

Runs the app in production mode.<br>
By default, server runs on [http://localhost:5000](http://localhost:5000).

To run in [Console Mode](https://bottender.js.org/docs/en/the-basics-console-mode), provide the `--console` option:

```sh
npm start -- --console
yarn start --console
```

### `npm run lint`

Runs the linter rules using [Eslint](https://eslint.org/).

### `npm test`

Runs the test cases using [Jest](https://jestjs.io/).

---
### Messenger Webhook.<br>
Docs by: Wibisana Wiratama | wibi.s.wi@gmail.com <br>
Rewritten from Bottender generated .md