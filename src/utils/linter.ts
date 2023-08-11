import { Command, Flags, ux } from "@oclif/core";
import { existsSync, writeFileSync } from "fs";
import { join } from "path";

import { execaCommandSync } from "../exca";
import { replaceInFileSync } from "replace-in-file";

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
      `cd ${name} && yarn remove eslint-plugin-react-hooks && yarn add -D typescript eslint prettier @trivago/prettier-plugin-sort-imports eslint-config-productsway @typescript-eslint/eslint-plugin @typescript-eslint/parser`,
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

    if (existsSync(join(name, ".eslintrc.cjs"))) {
      // Replace the content
      replaceInFileSync({
        files: [`./${name}/.eslintrc.cjs`],
        from: `extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],`,
        to: `extends: [
    'productsway/react',
  ],`,
      });
    } else {
      writeFileSync(`${name}/.eslintrc.cjs`, linter);
    }

    // Only create prettier config if it doesn't exist
    // This is to prevent overriding user's custom config
    if (!existsSync(join(name, ".prettierrc"))) {
      const prettier = `{
      "importOrder": ["^@core/(.*)$", "^@server/(.*)$", "^@ui/(.*)$", "^[./]"],
      "importOrderSeparation": true,
      "importOrderSortSpecifiers": true,
      "plugins": ["@trivago/prettier-plugin-sort-imports"]
    }`;
      writeFileSync(`${name}/.prettierrc`, prettier);
    }

    await execaCommandSync(
      `cd ${name} && npx husky-init && npx mrm@2 lint-staged`,
    );

    ux.action.stop();
  }
}

export default LinterApp;
