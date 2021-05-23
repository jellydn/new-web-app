import { Command, flags } from "@oclif/command";
import cli from "cli-ux";

import degit from "degit";

class CloneApp extends Command {
  static description = "Scaffolding Your Vite Project";

  static flags = {
    name: flags.string({
      char: "n",
      description: "folder name to create",
    }),
  };

  async run() {
    const { flags } = this.parse(CloneApp);
    const name = flags.name ?? "vite-react-ts-app";

    cli.action.start(`Clone react-ts for ${name}`);
    const d = degit("vitejs/vite/packages/create-app/template-react-ts");
    d.clone(name);
    cli.action.stop();
  }
}

export = CloneApp;
