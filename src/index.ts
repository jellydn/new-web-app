import { Command, flags } from "@oclif/command";
import cli from "cli-ux";

import degit from "degit";

class NewWebApp extends Command {
  static description = "describe the command here";

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({ char: "v" }),
    help: flags.help({ char: "h" }),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({
      char: "n",
      description: "folder name to create react-ts app with vitejs",
    }),
  };

  async run() {
    const { flags } = this.parse(NewWebApp);
    const name = flags.name ?? "vite-react-ts-app";

    cli.action.start(`create ${name}`);
    const d = degit("vitejs/vite/packages/create-app/template-react-ts");
    d.clone(name);
    cli.action.stop();
  }
}

export = NewWebApp;
