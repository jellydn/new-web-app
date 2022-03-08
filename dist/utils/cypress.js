"use strict";
const core_1 = require("@oclif/core");
const shelljs_1 = require("shelljs");
const core_2 = require("@oclif/core");
// https://github.com/toshi-toma/eslint-config-airbnb-typescript-prettier
class AirbnbApp extends core_1.Command {
    static description = "Install Cypress - Fast, easy and reliable testing for anything that runs in a browser.";
    static flags = {
        name: core_1.Flags.string({
            char: "n",
            description: "folder name to create",
        }),
    };
    async run() {
        // eslint-disable-next-line @typescript-eslint/no-shadow
        const { flags } = await this.parse(AirbnbApp);
        const name = flags.name ?? "vite-react-ts-app";
        core_2.CliUx.ux.action.start(AirbnbApp.description);
        (0, shelljs_1.exec)(`cd ${name} && yarn add cypress --dev`);
        core_2.CliUx.ux.action.stop();
    }
}
module.exports = AirbnbApp;
