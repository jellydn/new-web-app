import { Command, flags } from "@oclif/command";
import cli from "cli-ux";
import { exec } from "shelljs";

import CloneApp from "./command/clone";
import TailwindApp from "./command/tailwind";
import AirbnbApp from "./command/airbnb";
import ReactQueryApp from "./command/react-query";
import ReactHookFormApp from "./command/react-hook-form";
import StorybookApp from "./command/storybook";
import PresetApp from "./command/preset";
import CypressApp from "./command/cypress";

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
      char: "t",
      options: ["yes", "no"],
      description: "add tailwind css",
    }),
    storybook: flags.string({
      char: "s",
      options: ["yes", "no"],
      description: "add storybook",
    }),
    airbnb: flags.string({
      char: "a",
      options: ["yes", "no"],
      description: "add ESLint, Prettier with Airbnb style (Typescript)",
    }),
    "react-query": flags.string({
      char: "q",
      options: ["yes", "no"],
      description: "add react-query",
    }),
    "react-hook-form": flags.string({
      char: "f",
      options: ["yes", "no"],
      description: "add react-hook-form",
    }),
    cypress: flags.string({
      char: "c",
      options: ["yes", "no"],
      description: "add cypress",
    }),
  };

  static examples = [
    "$ npx new-web-app -n=react-app -a=yes -q=yes",
    "$ npx new-web-app --name=react-app --airbnb=yes --react-query=yes",
  ];

  // TODO: detect yarn/npm
  async run() {
    const {
      name,
      airbnb,
      reactQuery,
      storybook,
      tailwind,
      reactHookForm,
      cypress,
    } = await this.parseInputs();

    // optimise speed by use preset template
    if (
      tailwind === "yes" &&
      airbnb === "yes" &&
      reactHookForm === "yes" &&
      reactQuery === "yes" &&
      storybook === "yes" &&
      cypress === "yes"
    ) {
      await PresetApp.run(["--name", name, "--preset", "full"]);
      this.onSuccess(name);
      return;
    }

    if (
      tailwind === "no" &&
      airbnb === "yes" &&
      reactHookForm === "no" &&
      reactQuery === "yes" &&
      storybook === "no"
    ) {
      await PresetApp.run(["--name", name, "--preset", "default"]);
      this.onSuccess(name);
      return;
    }

    if (
      tailwind === "no" &&
      airbnb === "yes" &&
      reactHookForm === "no" &&
      reactQuery === "no" &&
      storybook === "no"
    ) {
      await PresetApp.run(["--name", name, "--preset", "minimum"]);
      this.onSuccess(name);
      return;
    }

    await CloneApp.run(["--name", name]);

    if (tailwind === "yes") {
      await TailwindApp.run(["--name", name]);
    }

    if (storybook === "yes") {
      await StorybookApp.run(["--name", name]);
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

    if (cypress === "yes") {
      await CypressApp.run(["--name", name]);
    }

    exec(`cd ${name} && npx prettier . --write`);
    this.onSuccess(name);
  }

  onSuccess(name: string) {
    this.log(`Success! Created ${name}
Inside that directory, you can run several commands:

yarn dev
  Starts the development server.

yarn build
  Bundles the app into static files for production.

We suggest that you begin by typing:

  cd ${name}
  yarn dev

Happy hacking!`);
  }

  private async parseInputs() {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const { flags } = this.parse(NewWebApp);
    let {
      name = "vite-react-ts-app",
      airbnb = "no",
      "react-query": reactQuery = "no",
      storybook = "no",
      tailwind = "no",
      "react-hook-form": reactHookForm = "no",
      cypress = "no",
    } = flags;
    if (!flags.name) {
      name = await cli.prompt("What is your project name?", {
        type: "normal",
        default: "vite-react-ts-app",
      });

      if (!flags.airbnb) {
        airbnb = await cli.prompt(
          "Do you want to add ESLint, Prettier with Airbnb style? (yes/no)",
          {
            type: "normal",
            default: "yes",
          }
        );
      }

      if (!flags["react-query"]) {
        reactQuery = await cli.prompt(
          "Do you want to add react-query for data fetching? (yes/no)",
          {
            type: "normal",
            default: "yes",
          }
        );
      }

      if (!flags.storybook) {
        storybook = await cli.prompt("Do you want to add storybook? (yes/no)", {
          type: "normal",
          default: "no",
        });
      }

      if (!flags.tailwind) {
        tailwind = await cli.prompt(
          "Do you want to add TailwindCSS? (yes/no)",
          {
            type: "normal",
            default: "no",
          }
        );
      }

      if (!flags["react-hook-form"]) {
        reactHookForm = await cli.prompt(
          "Do you want to add react-hook-form? (yes/no)",
          {
            type: "normal",
            default: "no",
          }
        );
      }

      if (!flags.cypress) {
        cypress = await cli.prompt("Do you want to add cypress? (yes/no)", {
          type: "normal",
          default: "no",
        });
      }
    }
    return {
      name,
      airbnb,
      reactQuery,
      storybook,
      tailwind,
      reactHookForm,
      cypress,
    };
  }
}

export = NewWebApp;
