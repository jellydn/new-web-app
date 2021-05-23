import { Command, flags } from "@oclif/command";

import CloneApp from "./command/clone";

class NewWebApp extends Command {
  static description = "New Web App Generator";

  static flags = {
    version: flags.version({ char: "v" }),
    help: flags.help({ char: "h" }),
    name: flags.string({
      char: "n",
      description: "folder name to create",
    }),
  };

  async run() {
    const { flags } = this.parse(NewWebApp);
    const name = flags.name ?? "vite-react-ts-app";

    await CloneApp.run(["--name", name]);
  }
}

export = NewWebApp;
