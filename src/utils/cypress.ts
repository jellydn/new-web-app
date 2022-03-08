import { Command, Flags } from "@oclif/core";
import { exec } from "shelljs";
import { CliUx } from "@oclif/core";

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
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const { flags } = await this.parse(AirbnbApp);
    const name = flags.name ?? "vite-react-ts-app";
    CliUx.ux.action.start(AirbnbApp.description);

    exec(`cd ${name} && yarn add cypress --dev`);

    CliUx.ux.action.stop();
  }
}

export = AirbnbApp;
