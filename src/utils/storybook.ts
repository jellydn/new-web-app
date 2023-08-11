import { Command, Flags, ux } from "@oclif/core";

import { execaCommandSync } from "../exca";

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
    const { flags } = await this.parse(StorybookApp);
    const name = flags.name ?? "vite-react-ts-app";
    ux.action.start(StorybookApp.description);

    await execaCommandSync(`cd ${name} && npx sb init`);

    ux.action.stop();
  }
}

export default StorybookApp;
