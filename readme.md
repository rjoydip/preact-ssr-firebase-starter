# preact-ssr-firebase-starter 

[![License](https://img.shields.io/npm/l/make-coverage-badge.svg)](https://github.com/rjoydip/preact-ssr-firebase-starter/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://reactjs.org/docs/how-to-contribute.html#your-first-pull-request)

Preact SSR firebase starter.

## Installation

```
$ git clone https://github.com/rjoydip/preact-ssr-firebase-starter.git
$ cd preact-ssr-firebase-starter
$ npm install
```

## Frameworks

- [Fastify](https://fastify.io)
- [Express](https://expressjs.com)

## Steps

- Choose right framework.
- Create firebase project.
- Clone the repository.
- Login with firebase by `npm run firebase login`.
- Create `.firebaserc` file and copy-paste below code and change alise name.
```js
{
  "projects": {
    "staging": "<PROJECT_NAME>"
  }
}
```
- Add project alias `npm run firebase use --alias react-ssr`.
- Deploy staging via `npm run deploy:staging`.

## Local development

Run project locally.

```
$ npm start
```

## License

MIT © [Joydip Roy](https://raw.githubusercontent.com/rjoydip/preact-ssr-firebase-starter/master/license)