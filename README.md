# Welcome to new-web-app 👋

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/new-web-app.svg)](https://npmjs.org/package/new-web-app)
[![Downloads/week](https://img.shields.io/npm/dw/new-web-app.svg)](https://npmjs.org/package/new-web-app)
[![License](https://img.shields.io/npm/l/new-web-app.svg)](https://github.com/jellydn/new-web-app/blob/master/package.json)![Prerequisite](https://img.shields.io/badge/node-%3E%3D14.0.0-blue.svg)
[![Twitter: jellydn](https://img.shields.io/twitter/follow/jellydn.svg?style=social)](https://twitter.com/jellydn)

> Frontend app generator

### 🏠 [Homepage](https://github.com/jellydn/new-web-app)

<!-- toc -->
* [Welcome to new-web-app 👋](#welcome-to-new-web-app-)
* [Install globally with yarn](#install-globally-with-yarn)
* [Or install globally with npm](#or-install-globally-with-npm)
* [Commands](#commands)
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
* [`new-web-app help [COMMAND]`](#new-web-app-help-command)
* [`new-web-app plugins`](#new-web-app-plugins)
* [`new-web-app plugins:inspect PLUGIN...`](#new-web-app-pluginsinspect-plugin)
* [`new-web-app plugins:install PLUGIN...`](#new-web-app-pluginsinstall-plugin)
* [`new-web-app plugins:link PLUGIN`](#new-web-app-pluginslink-plugin)
* [`new-web-app plugins:uninstall PLUGIN...`](#new-web-app-pluginsuninstall-plugin)
* [`new-web-app plugins update`](#new-web-app-plugins-update)
* [`new-web-app react`](#new-web-app-react)

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

## `new-web-app plugins`

List installed plugins.

```
USAGE
  $ new-web-app plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ new-web-app plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.0/src/commands/plugins/index.ts)_

## `new-web-app plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ new-web-app plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ new-web-app plugins:inspect myplugin
```

## `new-web-app plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ new-web-app plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ new-web-app plugins add

EXAMPLES
  $ new-web-app plugins:install myplugin 

  $ new-web-app plugins:install https://github.com/someuser/someplugin

  $ new-web-app plugins:install someuser/someplugin
```

## `new-web-app plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ new-web-app plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ new-web-app plugins:link myplugin
```

## `new-web-app plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ new-web-app plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ new-web-app plugins unlink
  $ new-web-app plugins remove
```

## `new-web-app plugins update`

Update installed plugins.

```
USAGE
  $ new-web-app plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

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

_See code: [dist/commands/react/index.ts](https://github.com/jellydn/new-web-app/blob/v0.2.0/dist/commands/react/index.ts)_
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
