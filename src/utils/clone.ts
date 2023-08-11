import { Command, Flags, ux } from "@oclif/core";
import degit from "degit";
import { existsSync, renameSync, writeFileSync } from "fs";
import { join } from "path";
import { replaceInFileSync } from "replace-in-file";

import { execaCommandSync } from "../exca";
import { isInGitRepository } from "../helpers/git";

class CloneApp extends Command {
  static description = "Scaffolding Your Vite Project";

  static flags = {
    name: Flags.string({
      char: "n",
      description: "folder name to create",
    }),
  };

  async run(): Promise<void> {
    const { flags } = await this.parse(CloneApp);
    const name = flags.name ?? "vite-react-ts-app";

    ux.action.start(CloneApp.description);
    const d = degit("vitejs/vite/packages/create-vite/template-react-ts");
    await d.clone(name);

    replaceInFileSync({
      files: [`${name}/package.json`],
      from: `"name": "vite-react-typescript-starter",`,
      to: `"name": "${name}",`,
    });

    ux.action.start("Install with prettier code");
    // Only call git init if that is not in git directory
    const isGitDirectory = isInGitRepository();
    if (!isGitDirectory) await execaCommandSync(`cd ${name} && git init`);

    await execaCommandSync(
      `cd ${name} && yarn add -D prettier @trivago/prettier-plugin-sort-imports`,
    );
    if (existsSync(join(name, "_gitignore"))) {
      renameSync(join(name, "_gitignore"), join(name, ".gitignore"));
    }

    const prettier = `{
      "plugins": [
        "@trivago/prettier-plugin-sort-imports"
      ],
      "importOrder": [
        "^@core/(.*)$",
        "^@server/(.*)$",
        "^@ui/(.*)$",
        "^[./]"
      ],
      "importOrderSeparation": true,
      "importOrderSortSpecifiers": true
    }`;
    writeFileSync(`${name}/.prettierrc`, prettier);
    ux.action.stop();
  }
}

export default CloneApp;
