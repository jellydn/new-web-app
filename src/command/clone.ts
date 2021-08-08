import { Command, flags } from "@oclif/command";
import { exec } from "shelljs";
import degit from "degit";
import cli from "cli-ux";
import { renameSync } from "fs";
import { join } from "path";

class CloneApp extends Command {
  static description = "Scaffolding Your Vite Project";

  static flags = {
    name: flags.string({
      char: "n",
      description: "folder name to create",
    }),
  };

  async run() {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const { flags } = this.parse(CloneApp);
    const name = flags.name ?? "vite-react-ts-app";

    cli.action.start(CloneApp.description);
    const d = degit("vitejs/vite/packages/create-app/template-react-ts");
    await d.clone(name);
    cli.action.stop();

    cli.action.start("Install");
    exec(`cd ${name} && git init`);
    exec(`cd ${name} && yarn install`);
    renameSync(join(name, "_gitignore"), join(name, ".gitignore"));
    cli.action.stop();
  }
}

export = CloneApp;
