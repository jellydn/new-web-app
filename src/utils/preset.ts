import { Command, Flags, ux } from "@oclif/core";
import degit from "degit";

import { execaCommandSync } from "../exca";
import { isInGitRepository } from "../helpers/git";

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

    ux.action.start(PresetApp.description);
    const d = degit(
      `jellydn/new-web-app/templates/react/${flags.preset}-preset`,
    );
    await d.clone(name);

    ux.action.start("Install");
    // Only call git init if that is not in git directory
    const isGitDirectory = isInGitRepository();
    if (!isGitDirectory) await execaCommandSync(`cd ${name} && git init`);

    await execaCommandSync(`cd ${name} && yarn install`);
    ux.action.stop();
  }
}

export default PresetApp;
