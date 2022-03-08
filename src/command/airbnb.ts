import { Command, flags } from "@oclif/command";
import { exec } from "shelljs";
import { writeFileSync } from "fs";
import cli from "cli-ux";

// https://github.com/toshi-toma/eslint-config-airbnb-typescript-prettier
class AirbnbApp extends Command {
  static description =
    "Install ESLint - Airbnb's ESLint config with TypeScript and Prettier support.";

  static flags = {
    name: flags.string({
      char: "n",
      description: "folder name to create",
    }),
  };

  async run() {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const { flags } = this.parse(AirbnbApp);
    const name = flags.name ?? "vite-react-ts-app";
    cli.action.start(AirbnbApp.description);

    exec(
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

    exec(`cd ${name} && npx mrm@2 lint-staged`);

    cli.action.stop();
  }
}

export = AirbnbApp;
