"use strict";
const tslib_1 = require("tslib");
const core_1 = require("@oclif/core");
const shelljs_1 = require("shelljs");
const core_2 = require("@oclif/core");
const degit_1 = tslib_1.__importDefault(require("degit"));
class PresetApp extends core_1.Command {
    static description = "Scaffolding Your Vite Project With Preset";
    static flags = {
        name: core_1.Flags.string({
            char: "n",
            description: "folder name to create",
        }),
        preset: core_1.Flags.string({
            char: "p",
            options: ["default", "minimum", "full"],
            description: "use preset from new-web-app CLI",
        }),
    };
    async run() {
        // eslint-disable-next-line @typescript-eslint/no-shadow
        const { flags } = await this.parse(PresetApp);
        const name = flags.name ?? "vite-react-ts-app";
        core_2.CliUx.ux.action.start(PresetApp.description);
        const d = (0, degit_1.default)(`jellydn/new-web-app/templates/${flags.preset}-preset`);
        await d.clone(name);
        core_2.CliUx.ux.action.stop();
        core_2.CliUx.ux.action.start("Install");
        (0, shelljs_1.exec)(`cd ${name} && git init`);
        (0, shelljs_1.exec)(`cd ${name} && yarn install`);
        core_2.CliUx.ux.action.stop();
    }
}
module.exports = PresetApp;
