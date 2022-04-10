# Welcome to new-web-app 👋

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/new-web-app.svg)](https://npmjs.org/package/new-web-app)
[![Downloads/week](https://img.shields.io/npm/dw/new-web-app.svg)](https://npmjs.org/package/new-web-app)
[![License](https://img.shields.io/npm/l/new-web-app.svg)](https://github.com/jellydn/new-web-app/blob/master/package.json)![Prerequisite](https://img.shields.io/badge/node-%3E%3D14.0.0-blue.svg)
[![Twitter: jellydn](https://img.shields.io/twitter/follow/jellydn.svg?style=social)](https://twitter.com/jellydn)

> Frontend app generator

### 🏠 [Homepage](https://github.com/jellydn/new-web-app)

<!-- toc -->

- [Welcome to new-web-app 👋](#welcome-to-new-web-app-)
- [Install globally with yarn](#install-globally-with-yarn)
- [Or install globally with npm](#or-install-globally-with-npm)
- [Commands](#commands)
<!-- tocstop -->

## Prerequisites

- node >=14.0.0

## Built with

- https://oclif.io/ - The Open CLI Framework
- https://github.com/Rich-Harris/degit straightforward project scaffolding
- https://github.com/shelljs/shelljs Unix shell commands for Node.js
- https://github.com/wj42ftns/replace-in-files Replace text in one or more files or globs.

## Features

- [x] Support React + Typescript template
- [ ] Support Svelte
- [ ] Support Solid

## Why vitejs

Thank you for awesome recording from Amjad Masad
![./compare.gif](./compare.gif)

In short, better performance, more detail on https://blog.replit.com/vite

## Install

```sh
# Install globally with yarn
yarn global add new-web-app
# Or install globally with npm
npm install -g new-web-app yarn
```

## Usage

<!-- usagestop -->

# Commands

<!-- commands -->

- [`new-web-app help [COMMAND]`](#new-web-app-help-command)
- [`new-web-app react`](#new-web-app-react)
- [`new-web-app react react-18`](#new-web-app-react-react-18)

## `new-web-app help [COMMAND]`

Display help for new-web-app.

```
USAGE
  $ new-web-app help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for new-web-app.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.12/src/commands/help.ts)_

## `new-web-app react`

React App Generator

```
USAGE
  $ new-web-app react [-v] [-h] [-n <value>] [-t yes|no] [-s yes|no] [-a yes|no] [-q yes|no] [-f yes|no]
    [-c yes|no]

FLAGS
  -a, --airbnb=<option>           add ESLint, Prettier with Airbnb style (Typescript)
                                  <options: yes|no>
  -c, --cypress=<option>          add cypress
                                  <options: yes|no>
  -f, --react-hook-form=<option>  add react-hook-form
                                  <options: yes|no>
  -h, --help                      Show CLI help.
  -n, --name=<value>              folder name to create
  -q, --react-query=<option>      add react-query
                                  <options: yes|no>
  -s, --storybook=<option>        add storybook
                                  <options: yes|no>
  -t, --tailwind=<option>         add tailwind css
                                  <options: yes|no>
  -v, --version                   Show CLI version.

DESCRIPTION
  React App Generator

EXAMPLES
  $ npx new-web-app create -n=react-app -a=yes -q=yes

  $ npx new-web-app --name=react-app --airbnb=yes --react-query=yes
```

_See code: [dist/commands/react/index.ts](https://github.com/jellydn/new-web-app/blob/v0.2.5/dist/commands/react/index.ts)_

## `new-web-app react react-18`

Upgrade to React 18

```
USAGE
  $ new-web-app react react-18 [-n <value>]

FLAGS
  -n, --name=<value>  folder name to create

DESCRIPTION
  Upgrade to React 18
```

<!-- commandsstop -->

## Demo

![https://gyazo.com/2ace08cfb1435f82a1c8e9550f547e44.gif](https://gyazo.com/2ace08cfb1435f82a1c8e9550f547e44.gif)

## Author

👤 **Huynh Duc Dung @jellydn**

- Website: https://productsway.com/
- Twitter: [@jellydn](https://twitter.com/jellydn)
- Github: [@jellydn](https://github.com/jellydn)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/jellydn/new-web-app/issues).

## Stargazers

[![Stargazers repo roster for @jellydn/new-web-app](https://reporoster.com/stars/jellydn/new-web-app)](https://github.com/jellydn/new-web-app/stargazers)

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
