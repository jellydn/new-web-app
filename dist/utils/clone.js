"use strict";
const tslib_1 = require("tslib");
const core_1 = require("@oclif/core");
const shelljs_1 = require("shelljs");
const degit_1 = tslib_1.__importDefault(require("degit"));
const core_2 = require("@oclif/core");
const fs_1 = require("fs");
const path_1 = require("path");
class CloneApp extends core_1.Command {
    static description = "Scaffolding Your Vite Project";
    static flags = {
        name: core_1.Flags.string({
            char: "n",
            description: "folder name to create",
        }),
    };
    async run() {
        // eslint-disable-next-line @typescript-eslint/no-shadow
        const { flags } = await this.parse(CloneApp);
        const name = flags.name ?? "vite-react-ts-app";
        core_2.CliUx.ux.action.start(CloneApp.description);
        const d = (0, degit_1.default)("vitejs/vite/packages/create-vite/template-react-ts");
        await d.clone(name);
        core_2.CliUx.ux.action.stop();
        core_2.CliUx.ux.action.start("Install");
        (0, shelljs_1.exec)(`cd ${name} && git init`);
        (0, shelljs_1.exec)(`cd ${name} && yarn install`);
        if ((0, fs_1.existsSync)((0, path_1.join)(name, "_gitignore"))) {
            (0, fs_1.renameSync)((0, path_1.join)(name, "_gitignore"), (0, path_1.join)(name, ".gitignore"));
        }
        core_2.CliUx.ux.action.stop();
    }
}
module.exports = CloneApp;
