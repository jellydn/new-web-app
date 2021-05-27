import { Command, flags } from "@oclif/command";
import { exec } from "shelljs";
import cli from "cli-ux";

import degit from "degit";

class PresetApp extends Command {
  static description = "Scaffolding Your Vite Project";

  static flags = {
    name: flags.string({
      char: "n",
      description: "folder name to create",
    }),
    preset: flags.string({
      char: "p",
      options: ["default", "minimum", "full"],
      description: "use preset from new-web-app CLI",
    }),
  };

  async run() {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const { flags } = this.parse(PresetApp);
    const name = flags.name ?? "vite-react-ts-app";

    cli.action.start(`Clone react-ts for ${name}`);
    const d = degit(`jellydn/new-web-app/templates/${flags.preset}-preset`);
    await d.clone(name);
    cli.action.stop();

    cli.action.start("Install");
    exec(`cd ${name} && git init`);
    exec(`cd ${name} && yarn install`);
    cli.action.stop();
  }
}

export = PresetApp;
