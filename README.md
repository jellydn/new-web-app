# Welcome to new-web-app 👋

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/new-web-app.svg)](https://npmjs.org/package/new-web-app)
[![Downloads/week](https://img.shields.io/npm/dw/new-web-app.svg)](https://npmjs.org/package/new-web-app)
[![License](https://img.shields.io/npm/l/new-web-app.svg)](https://github.com/jellydn/new-web-app/blob/master/package.json)![Prerequisite](https://img.shields.io/badge/node-%3E%3D14.0.0-blue.svg)
[![Twitter: jellydn](https://img.shields.io/twitter/follow/jellydn.svg?style=social)](https://twitter.com/jellydn)

> Frontend app generator

### 🏠 [Homepage](https://github.com/jellydn/new-web-app)

[![Intro New-Web-App CLI](https://img.youtube.com/vi/fflgltdSpW8/0.jpg)](https://www.youtube.com/watch?v=fflgltdSpW8)

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
npm install -g new-web-app
```

## Usage

<!-- usagestop -->

# Commands

<!-- commands -->

- [`new-web-app help [COMMANDS]`](#new-web-app-help-commands)
- [`new-web-app react`](#new-web-app-react)
- [`new-web-app react upgrade-react-18`](#new-web-app-react-upgrade-react-18)
- [`new-web-app update [CHANNEL]`](#new-web-app-update-channel)

## `new-web-app help [COMMANDS]`

Display help for new-web-app.

```
USAGE
  $ new-web-app help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for new-web-app.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.16/src/commands/help.ts)_

## `new-web-app react`

React App Generator

```
USAGE
  $ new-web-app react [-v] [-h] [-n <value>] [-t yes|no] [-s yes|no] [-a yes|no] [-q yes|no] [-f yes|no]
    [-c yes|no]

FLAGS
  -a, --linter=<option>           add ESLint, Prettier with sort imports plugin
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
  $ npx new-web-app@latest react -n=react-app -a=yes -q=yes

  $ npx new-web-app@latest react --name=react-app --airbnb=yes --react-query=yes
```

_See code: [dist/commands/react/index.ts](https://github.com/jellydn/new-web-app/blob/v0.5.1/dist/commands/react/index.ts)_

## `new-web-app react upgrade-react-18`

Upgrade to React 18

```
USAGE
  $ new-web-app react upgrade-react-18 [-d <value>]

FLAGS
  -d, --directory=<value>  folder name to update

DESCRIPTION
  Upgrade to React 18
```

_See code: [dist/commands/react/upgrade-react-18.ts](https://github.com/jellydn/new-web-app/blob/v0.5.1/dist/commands/react/upgrade-react-18.ts)_

## `new-web-app update [CHANNEL]`

update the new-web-app CLI

```
USAGE
  $ new-web-app update [CHANNEL] [-a] [-v <value> | -i] [--force]

FLAGS
  -a, --available        Install a specific version.
  -i, --interactive      Interactively select version to install. This is ignored if a channel is provided.
  -v, --version=<value>  Install a specific version.
  --force                Force a re-download of the requested version.

DESCRIPTION
  update the new-web-app CLI

EXAMPLES
  Update to the stable channel:

    $ new-web-app update stable

  Update to a specific version:

    $ new-web-app update --version 1.0.0

  Interactively select version:

    $ new-web-app update --interactive

  See available versions:

    $ new-web-app update --available
```

_See code: [@oclif/plugin-update](https://github.com/oclif/plugin-update/blob/v3.1.30/src/commands/update.ts)_

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

[![kofi](https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/dunghd)
[![paypal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/dunghd)
[![buymeacoffee](https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/dunghd)

Give a ⭐️ if this project helped you!
