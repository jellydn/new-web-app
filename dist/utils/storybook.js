"use strict";
const core_1 = require("@oclif/core");
const shelljs_1 = require("shelljs");
const core_2 = require("@oclif/core");
// https://storybook.js.org/docs/react/get-started/install
class StorybookApp extends core_1.Command {
    static description = "Install Storybook - Build bulletproof UI components faster";
    static flags = {
        name: core_1.Flags.string({
            char: "n",
            description: "folder name to create",
        }),
    };
    async run() {
        // eslint-disable-next-line @typescript-eslint/no-shadow
        const { flags } = await this.parse(StorybookApp);
        const name = flags.name ?? "vite-react-ts-app";
        core_2.CliUx.ux.action.start(StorybookApp.description);
        (0, shelljs_1.exec)(`cd ${name} && npx sb init`);
        core_2.CliUx.ux.action.stop();
    }
}
module.exports = StorybookApp;
