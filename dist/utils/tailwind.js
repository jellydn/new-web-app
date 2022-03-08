"use strict";
const core_1 = require("@oclif/core");
const shelljs_1 = require("shelljs");
const replace_in_file_1 = require("replace-in-file");
const fs_1 = require("fs");
const core_2 = require("@oclif/core");
// https://tailwindcss.com/docs/guides/vue-3-vite#install-tailwind-via-npm
class TailwindApp extends core_1.Command {
    static description = "Install Tailwind CSS with React and Vite";
    static flags = {
        name: core_1.Flags.string({
            char: "n",
            description: "folder name to create",
        }),
    };
    async run() {
        // eslint-disable-next-line @typescript-eslint/no-shadow
        const { flags } = await this.parse(TailwindApp);
        const name = flags.name ?? "vite-react-ts-app";
        core_2.CliUx.ux.action.start(TailwindApp.description);
        core_2.CliUx.ux.action.stop();
        core_2.CliUx.ux.action.start("Setting up Tailwind CSS");
        (0, shelljs_1.exec)(`cd ${name} && yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest && npx tailwindcss init -p`);
        core_2.CliUx.ux.action.stop();
        core_2.CliUx.ux.action.start("Configure Tailwind to remove unused styles in production");
        (0, replace_in_file_1.replaceInFileSync)({
            files: [`${name}/tailwind.config.js`],
            from: "purge: [],",
            to: "purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'], mode: 'jit',",
        });
        const styles = `/* ./src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;`;
        (0, fs_1.writeFileSync)(`${name}/src/index.css`, styles);
        core_2.CliUx.ux.action.stop();
    }
}
module.exports = TailwindApp;
