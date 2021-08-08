import { Command, flags } from "@oclif/command";
import { exec } from "shelljs";
import cli from "cli-ux";

// https://github.com/toshi-toma/eslint-config-airbnb-typescript-prettier
class AirbnbApp extends Command {
  static description =
    "Install Cypress - Fast, easy and reliable testing for anything that runs in a browser.";

  static flags = {
    name: flags.string({
      char: "n",
      description: "folder name to create",
    }),
  };

  async run() {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const { flags } = this.parse(AirbnbApp);
    const name = flags.name ?? "vite-react-ts-app";
    cli.action.start(AirbnbApp.description);

    exec(`cd ${name} && yarn add cypress --dev`);

    cli.action.stop();
  }
}

export = AirbnbApp;
