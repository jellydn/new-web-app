import { Command, Flags } from "@oclif/core";
import { exec } from "shelljs";
import { CliUx } from "@oclif/core";

// https://storybook.js.org/docs/react/get-started/install
class StorybookApp extends Command {
  static description =
    "Install Storybook - Build bulletproof UI components faster";

  static flags = {
    name: Flags.string({
      char: "n",
      description: "folder name to create",
    }),
  };

  async run(): Promise<void> {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const { flags } = await this.parse(StorybookApp);
    const name = flags.name ?? "vite-react-ts-app";
    CliUx.ux.action.start(StorybookApp.description);

    exec(`cd ${name} && npx sb init`);

    CliUx.ux.action.stop();
  }
}

export = StorybookApp;
