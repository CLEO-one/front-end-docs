
# Git pre-commit hooks

[husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged)

Setup husky and lint-staged to your project for linters(eslint and stylelint) and code formatters(prettier) in package.json like example [here](https://github.com/cleo-one/front-end-docs/blob/master/snippets/eslint-stylelint-prettier/package.json)

part of example snippet:
```
{  
  "devDependencies": {
    ...
    "husky": "^3.0.8",
    "lint-staged": "^9.4.1"
    ...
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.js": [
      "eslint --fix",
      "prettier --write",
      "git add"
    ]
  }
}
```
