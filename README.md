## How to use

* Run on localhost: `yarn install` and `yarn run serve`, then go to [localhost:8080](localhost:8080)
* Linter: `yarn run lint` or `yarn run lint:changed` for changed files only
* Code prettifying: `yarn run format` or `yarn run format:changed` for changed files only
* Check if eslintrc has any conflicts with prettier config (in case you want to change any of those): `yarn run eslint-check`
* Run precommit routine: `yarn run precommit`. It prettifies and lints changed files
* Husky 🐕 automatically adds precommit hooks so you can commit without hesitation right away 🔥✊

## Tech stack explanation

* I used sass to extract some props to variables & reuse them. Postcss for prefixes.
* React & redux is default for me: quick bootstrapping, easy maintaining, helps to keep everything small and modular. I used ramda because I love fp (even though abviously it wasn't necessary in such a small project). Also redux-saga for async stuff and other redux stuff.
* Dev environment uses eslint, husky, prettier and babel (webpack.config is ran with babel too). I didn't have time to cover everything w/ test, usually I use jest for it)

## Other notes

* I couldn't manage to use the specified API due to cors problem. Idk if I was supposed to use a nodejs server for it, but I used mocked data (real though, copied from api response).
* I guess Miefen and Kaufen are the 'purpose' property, but I'm not sure so I just hardcoded Miefen in every advertisement.
