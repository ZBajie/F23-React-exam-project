# FE2023 react exam project.

React, typescript, vite, react-router-doom,
Scss and redux will be used.

An app for searching after books and get information about the book.

Itś possible to search for Authors too.

Users can save books and authors in a list, favorite mark them and books read can have a personal note.

[open library](https://openlibrary.org/developers) api will be used.

## Url used

https://openlibrary.org/search.json?title=${searchWord}&limit=10&offset=${offset}&type=work

https://openlibrary.org${bookData?.key}.json

https://openlibrary.org/search/authors.json?q=${searchWord}&limit=10&offset=${offset}

## Yarn

To setup project.

git clone

yarn install

yarn run dev

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
