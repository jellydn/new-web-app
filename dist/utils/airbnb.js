"use strict";
const core_1 = require("@oclif/core");
const shelljs_1 = require("shelljs");
const fs_1 = require("fs");
const core_2 = require("@oclif/core");
// https://github.com/toshi-toma/eslint-config-airbnb-typescript-prettier
class AirbnbApp extends core_1.Command {
    static description = "Install ESLint - Airbnb's ESLint config with TypeScript and Prettier support.";
    static flags = {
        name: core_1.Flags.string({
            char: "n",
            description: "folder name to create",
        }),
    };
    async run() {
        // eslint-disable-next-line @typescript-eslint/no-shadow
        const { flags } = await this.parse(AirbnbApp);
        const name = flags.name ?? "vite-react-ts-app";
        core_2.CliUx.ux.action.start(AirbnbApp.description);
        (0, shelljs_1.exec)(`cd ${name} && yarn add -D typescript eslint prettier eslint-config-productsway @typescript-eslint/eslint-plugin @typescript-eslint/parser`);
        const linter = `module.exports = {
      extends: "productsway",
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {
        "react/jsx-filename-extension": 0,
        "import/extensions": 0,
        "import/no-extraneous-dependencies": 0
      }
    };`;
        (0, fs_1.writeFileSync)(`${name}/.eslintrc.js`, linter);
        (0, fs_1.writeFileSync)(`${name}/.eslintignore`, ".eslintrc.js");
        (0, shelljs_1.exec)(`cd ${name} && npx mrm@2 lint-staged`);
        core_2.CliUx.ux.action.stop();
    }
}
module.exports = AirbnbApp;
