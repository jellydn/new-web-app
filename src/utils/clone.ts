import { Command, Flags } from "@oclif/core";
import { exec } from "shelljs";
import degit from "degit";
import { CliUx } from "@oclif/core";
import { renameSync, existsSync } from "fs";
import { join } from "path";

class CloneApp extends Command {
  static description = "Scaffolding Your Vite Project";

  static flags = {
    name: Flags.string({
      char: "n",
      description: "folder name to create",
    }),
  };

  async run(): Promise<void> {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const { flags } = await this.parse(CloneApp);
    const name = flags.name ?? "vite-react-ts-app";

    CliUx.ux.action.start(CloneApp.description);
    const d = degit("vitejs/vite/packages/create-vite/template-react-ts");
    await d.clone(name);
    CliUx.ux.action.stop();

    CliUx.ux.action.start("Install");
    exec(`cd ${name} && git init`);
    exec(`cd ${name} && yarn install`);
    if (existsSync(join(name, "_gitignore"))) {
      renameSync(join(name, "_gitignore"), join(name, ".gitignore"));
    }
    CliUx.ux.action.stop();
  }
}

export = CloneApp;
