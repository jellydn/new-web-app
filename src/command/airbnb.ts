import { Command, flags } from "@oclif/command";
import { exec } from "shelljs";
import { writeFileSync } from "fs";
import cli from "cli-ux";

// https://github.com/toshi-toma/eslint-config-airbnb-typescript-prettier
class AirbnbApp extends Command {
  static description =
    "Airbnb's ESLint config with TypeScript and Prettier support.";

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
    cli.action.start(
      `Airbnb's ESLint config with TypeScript and Prettier support`
    );

    exec(
      `cd ${name} && yarn add -D typescript eslint prettier eslint-config-productsway`
    );

    const linter = `module.exports = {
      extends: "productsway"
      parserOptions: {
        project: './tsconfig.json',
      }
    };`;
    writeFileSync(`${name}/.eslintrc.js`, linter);
    writeFileSync(`${name}/.eslintignore`, ".eslintrc.js");

    exec(`cd ${name} && npx mrm@2 lint-staged`);

    cli.action.stop();
  }
}

export = AirbnbApp;
