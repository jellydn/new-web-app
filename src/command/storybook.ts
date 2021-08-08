import { Command, flags } from "@oclif/command";
import { exec } from "shelljs";
import cli from "cli-ux";

// https://storybook.js.org/docs/react/get-started/install
class StorybookApp extends Command {
  static description =
    "Install Storybook - Build bulletproof UI components faster";

  static flags = {
    name: flags.string({
      char: "n",
      description: "folder name to create",
    }),
  };

  async run() {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const { flags } = this.parse(StorybookApp);
    const name = flags.name ?? "vite-react-ts-app";
    cli.action.start(StorybookApp.description);

    exec(`cd ${name} && npx sb init`);

    cli.action.stop();
  }
}

export = StorybookApp;
