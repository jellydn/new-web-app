import { Command, Flags } from "@oclif/core";
import { CliUx } from "@oclif/core";

import { execaCommandSync } from "../../exca";
import { getPkgClient } from "../../helpers/get-pkg-client";
import AirbnbApp from "../../utils/airbnb.js";
import CloneApp from "../../utils/clone.js";
import CypressApp from "../../utils/cypress.js";
import PresetApp from "../../utils/preset.js";
import ReactHookFormApp from "../../utils/react-hook-form.js";
import ReactQueryApp from "../../utils/react-query.js";
import StorybookApp from "../../utils/storybook.js";
import TailwindApp from "../../utils/tailwind.js";

export default class ReactCommand extends Command {
  static description = "React App Generator";

  static flags = {
    version: Flags.version({ char: "v" }),
    help: Flags.help({ char: "h" }),
    name: Flags.string({
      char: "n",
      description: "folder name to create",
    }),
    tailwind: Flags.string({
      char: "t",
      options: ["yes", "no"],
      description: "add tailwind css",
    }),
    storybook: Flags.string({
      char: "s",
      options: ["yes", "no"],
      description: "add storybook",
    }),
    airbnb: Flags.string({
      char: "a",
      options: ["yes", "no"],
      description: "add ESLint, Prettier with Airbnb style (Typescript)",
    }),
    "react-query": Flags.string({
      char: "q",
      options: ["yes", "no"],
      description: "add react-query",
    }),
    "react-hook-form": Flags.string({
      char: "f",
      options: ["yes", "no"],
      description: "add react-hook-form",
    }),
    cypress: Flags.string({
      char: "c",
      options: ["yes", "no"],
      description: "add cypress",
    }),
  };

  static examples = [
    "$ npx new-web-app@latest react -n=react-app -a=yes -q=yes",
    "$ npx new-web-app@latest react --name=react-app --airbnb=yes --react-query=yes",
  ];

  // TODO: detect yarn/npm
  async run(): Promise<void> {
    const {
      name,
      airbnb,
      reactQuery,
      storybook,
      tailwind,
      reactHookForm,
      cypress,
    } = await this.parseInputs();

    // install yarn if not exists
    const pkgClient = getPkgClient();
    if (pkgClient !== "yarn") {
      await execaCommandSync("npm install --global yarn");
    }

    // optimize speed by use preset template
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

    await execaCommandSync(`cd ${name} && npx prettier . --write`);
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
    const { flags } = await this.parse(ReactCommand);
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
      name = await CliUx.ux.prompt("What is your project name?", {
        type: "normal",
        default: "vite-react-ts-app",
      });

      if (!flags.airbnb) {
        airbnb = await CliUx.ux.prompt(
          "Do you want to add ESLint, Prettier with Airbnb style? (yes/no)",
          {
            type: "normal",
            default: "yes",
          }
        );
      }

      if (!flags["react-query"]) {
        reactQuery = await CliUx.ux.prompt(
          "Do you want to add react-query for data fetching? (yes/no)",
          {
            type: "normal",
            default: "yes",
          }
        );
      }

      if (!flags.storybook) {
        storybook = await CliUx.ux.prompt(
          "Do you want to add storybook? (yes/no)",
          {
            type: "normal",
            default: "no",
          }
        );
      }

      if (!flags.tailwind) {
        tailwind = await CliUx.ux.prompt(
          "Do you want to add TailwindCSS? (yes/no)",
          {
            type: "normal",
            default: "no",
          }
        );
      }

      if (!flags["react-hook-form"]) {
        reactHookForm = await CliUx.ux.prompt(
          "Do you want to add react-hook-form? (yes/no)",
          {
            type: "normal",
            default: "no",
          }
        );
      }

      if (!flags.cypress) {
        cypress = await CliUx.ux.prompt(
          "Do you want to add cypress? (yes/no)",
          {
            type: "normal",
            default: "no",
          }
        );
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
