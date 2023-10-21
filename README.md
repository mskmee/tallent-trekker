# Talent trakker

# ℹ️ General Info

This is the repository responsible for Talent trakker apps.

## 🏭 Applications

- [Backend]() — Talent trakker application backend. #TODO: add backend repo link
- [Frontend]() — Talent trakker application frontend.
- _To work properly, fill in the **`.env`** file. Use the **`.env.example`** file as an example._
- 🖍 Requirements
- run **`npx simple-git-hooks`** at the root of the project, before the start (it will set the [pre-commit hook](https://www.npmjs.com/package/simple-git-hooks) for any commits).

### 💽 DB Schema

```mermaid

```

## 🏃‍♂️ Simple Start

1. **`npm install`** at the root
2. Fill ENVs
3. **`npx simple-git-hooks`** at the root
4. **`npm run start:dev`**
5. Enjoy ❤️

### 🌑 Backend

- [JAVA](https://www.java.com/ru/) — a backend language.
- [Spring](https://spring.io/) — a query builder.
- 🌕 Frontend
- [React](https://reactjs.org/) — a frontend library.
- [Redux](https://redux.js.org/) + [Redux Toolkit](https://redux-toolkit.js.org/) — a state manager.

### 🥊 Code quality

- [simple-git-hooks](https://www.npmjs.com/package/simple-git-hooks) — a tool that lets you easily manage git hooks.
- [lint-staged](https://www.npmjs.com/package/lint-staged) — run linters on git staged files.
- [dangerjs](https://danger.systems/js/) — automate common code review chores.
- [commitlint](https://commitlint.js.org/) — helps your team adhere to a commit convention.
- [editorconfig](https://editorconfig.org/) — helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs.
- [prettier](https://prettier.io/) — an opinionated code formatter.
- [ls-lint](https://ls-lint.org/) — file and directory name linter.
- [eslint](https://eslint.org/) — find problems in your JS code.
- [stylelint](https://stylelint.io/) — find and fix problems in your CSS code.

#### 🏅 Pull Request flow

```
<project-prefix>-<issue-number>: <ticket-title>
```

##### Example

- `tt-5: Add auth`

#### 🌳 Branch flow

```
<type>/<project-prefix>-<issue-number>-<short-desc>
```

##### Types

- task
- fix

##### Examples

- `task/tt-5-add-clinician-dashboard`
- `task/tt-12-add-clinician-flow`
- `fix/tt-16-fix-clinician-flow`

#### 🗂 Commit flow

```
<project-prefix>-<issue-number>: <modifier> <description>
```

##### Modifiers

- `+` (add)
- `*` (edit)
- `-` (remove)

##### Examples

- `tt-5: + title for dashboard`
- `tt-12: * dashboard title`
- `tt-16: - dashboard title`

## 📦 CI/CD

CI/CD implemented using [GitHub Actions](https://docs.github.com/en/actions)
