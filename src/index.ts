import { Command, flags } from "@oclif/command";
import cli from "cli-ux";

import CloneApp from "./command/clone";
import TailwindApp from "./command/tailwind";
import AirbnbApp from "./command/airbnb";
import ReactQueryApp from "./command/react-query";
import ReactHookFormApp from "./command/react-hook-form";

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
      description: "add tailwind css",
    }),
    airbnb: flags.string({
      options: ["yes", "no"],
      description: "add ESLint, Prettier with Airbnb style (Typescript)",
    }),
    ["react-query"]: flags.string({
      options: ["yes", "no"],
      description: "add react-query",
    }),
    ["react-hook-form"]: flags.string({
      options: ["yes", "no"],
      description: "add react-hook-form",
    }),
  };

  // TODO: detect yarn/npm
  async run() {
    const { flags } = this.parse(NewWebApp);
    let name, tailwind, airbnb, reactQuery, reactHookForm;

    if (!flags.name) {
      name = await cli.prompt("What is your project name? (yes/no)", {
        type: "normal",
        default: "vite-react-ts-app",
      });
    } else {
      name = flags.name;
    }

    if (!flags.tailwind) {
      tailwind = await cli.prompt("Do you want to add TailwindCSS? (yes/no)", {
        type: "normal",
        default: "yes",
      });
    } else {
      tailwind = flags.tailwind;
    }

    if (!flags.airbnb) {
      airbnb = await cli.prompt(
        "Do you want to add ESLint, Prettier with Airbnb style? (yes/no)",
        {
          type: "normal",
          default: "yes",
        }
      );
    } else {
      tailwind = flags.airbnb;
    }

    if (!flags["react-query"]) {
      reactQuery = await cli.prompt(
        "Do you want to add react-query for data fetching? (yes/no)",
        {
          type: "normal",
          default: "yes",
        }
      );
    } else {
      reactQuery = flags["react-query"];
    }

    if (!flags["react-query"]) {
      reactHookForm = await cli.prompt(
        "Do you want to add react-hook-form? (yes/no)",
        {
          type: "normal",
          default: "yes",
        }
      );
    } else {
      reactHookForm = flags["react-hook-form"];
    }

    await CloneApp.run(["--name", name]);

    if (tailwind === "yes") {
      await TailwindApp.run(["--name", name]);
    }

    if (airbnb === "yes") {
      await AirbnbApp.run(["--name", name]);
    }

    if (reactQuery === "yes") {
      await ReactQueryApp.run(["--name", name]);
    }

    if (reactHookForm === "yes") {
      await ReactHookFormApp.run(["--name", name]);
    }
  }
}

export = NewWebApp;
