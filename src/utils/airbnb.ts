import { Command, Flags } from "@oclif/core";
import { CliUx } from "@oclif/core";
import { writeFileSync } from "fs";

import { execaCommandSync } from "../exca";

// https://github.com/toshi-toma/eslint-config-airbnb-typescript-prettier
class AirbnbApp extends Command {
  static description =
    "Install ESLint - Airbnb's ESLint config with TypeScript and Prettier support.";

  static flags = {
    name: Flags.string({
      char: "n",
      description: "folder name to create",
    }),
  };

  async run(): Promise<void> {
    const { flags } = await this.parse(AirbnbApp);
    const name = flags.name ?? "vite-react-ts-app";
    CliUx.ux.action.start(AirbnbApp.description);

    execaCommandSync(
      `cd ${name} && yarn add -D typescript eslint prettier eslint-config-productsway @typescript-eslint/eslint-plugin @typescript-eslint/parser`
    );

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
    writeFileSync(`${name}/.eslintrc.js`, linter);
    writeFileSync(`${name}/.eslintignore`, ".eslintrc.js");

    execaCommandSync(`cd ${name} && npx mrm@2 lint-staged`);

    CliUx.ux.action.stop();
  }
}

export default AirbnbApp;
