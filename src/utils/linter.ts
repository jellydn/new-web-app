import { Command, Flags, ux } from "@oclif/core";
import { writeFileSync } from "fs";

import { execaCommandSync } from "../exca";

// https://github.com/jellydn/eslint-config-productsway
class LinterApp extends Command {
  static description =
    "Install ESLint - ESLint config with TypeScript and Prettier support.";

  static flags = {
    name: Flags.string({
      char: "n",
      description: "folder name to create",
    }),
  };

  async run(): Promise<void> {
    const { flags } = await this.parse(LinterApp);
    const name = flags.name ?? "vite-react-ts-app";
    ux.action.start(LinterApp.description);

    await execaCommandSync(
      `cd ${name} && yarn add -D typescript eslint prettier eslint-config-productsway @typescript-eslint/eslint-plugin @typescript-eslint/parser`,
    );

    const linter = `module.exports = {
      extends: "productsway/react",
      ignorePatterns: ['dist', '.eslintrc.cjs',,'vite.config.ts'],
      parserOptions: {
        project: ["./tsconfig.json", "./tsconfig.node.json"],
      },
      rules: {
        "react/jsx-filename-extension": 0,
        "import/extensions": 0,
        "import/no-extraneous-dependencies": 0
      }
    };`;
    writeFileSync(`${name}/.eslintrc.cjs`, linter);

    await execaCommandSync(
      `cd ${name} && npx husky-init && npx mrm@2 lint-staged`,
    );

    ux.action.stop();
  }
}

export default LinterApp;
