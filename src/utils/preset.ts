import { Command, Flags } from "@oclif/core";
import { CliUx } from "@oclif/core";
import degit from "degit";

import { execaCommandSync } from "../exca";

class PresetApp extends Command {
  static description = "Scaffolding Your Vite Project With Preset";

  static flags = {
    name: Flags.string({
      char: "n",
      description: "folder name to create",
    }),
    preset: Flags.string({
      char: "p",
      options: ["default", "minimum", "full"],
      description: "use preset from new-web-app CLI",
    }),
  };

  async run(): Promise<void> {
    const { flags } = await this.parse(PresetApp);
    const name = flags.name ?? "vite-react-ts-app";

    CliUx.ux.action.start(PresetApp.description);
    const d = degit(`jellydn/new-web-app/templates/${flags.preset}-preset`);
    await d.clone(name);
    CliUx.ux.action.stop();

    CliUx.ux.action.start("Install");
    execaCommandSync(`cd ${name} && git init`);
    execaCommandSync(`cd ${name} && yarn install`);
    CliUx.ux.action.stop();
  }
}

export default PresetApp;
