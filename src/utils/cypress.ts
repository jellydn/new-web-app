import { Command, Flags, ux } from "@oclif/core";

import { execaCommandSync } from "../exca";

// https://github.com/toshi-toma/eslint-config-airbnb-typescript-prettier
class AirbnbApp extends Command {
  static description =
    "Install Cypress - Fast, easy and reliable testing for anything that runs in a browser.";

  static flags = {
    name: Flags.string({
      char: "n",
      description: "folder name to create",
    }),
  };

  async run(): Promise<void> {
    const { flags } = await this.parse(AirbnbApp);
    const name = flags.name ?? "vite-react-ts-app";
    ux.action.start(AirbnbApp.description);

    await execaCommandSync(`cd ${name} && yarn add cypress --dev`);

    ux.action.stop();
  }
}

export default AirbnbApp;
