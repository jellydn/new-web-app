import { Command, flags } from "@oclif/command";
import cli from "cli-ux";

import CloneApp from "./command/clone";
import TailwindApp from "./command/tailwind";
import AirbnbApp from "./command/airbnb";

class NewWebApp extends Command {
  static description = "New Web App Generator";

  static flags = {
    version: flags.version({ char: "v" }),
    help: flags.help({ char: "h" }),
    name: flags.string({
      char: "n",
      description: "folder name to create",
    }),
    tailwind: flags.string({
      options: ["yes", "no"],
      description: "use tailwind css",
    }),
  };

  // TODO: detect yarn/npm
  async run() {
    const { flags } = this.parse(NewWebApp);
    let name, tailwind;

    if (!flags.name) {
      name = await cli.prompt("What is your project name?", {
        type: "normal",
        default: "vite-react-ts-app",
      });
    } else {
      name = flags.name;
    }

    if (!flags.tailwind) {
      tailwind = await cli.prompt("Do you want to add TailwindCSS?", {
        type: "normal",
        default: "yes/no",
      });
    } else {
      tailwind = flags.tailwind;
    }

    await CloneApp.run(["--name", name]);

    if (tailwind === "yes") {
      await TailwindApp.run(["--name", name]);
    }

    await AirbnbApp.run(["--name", name]);
  }
}

export = NewWebApp;
