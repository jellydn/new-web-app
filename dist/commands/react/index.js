"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@oclif/core");
const core_2 = require("@oclif/core");
const shelljs_1 = require("shelljs");
const clone_1 = tslib_1.__importDefault(require("../../utils/clone"));
const tailwind_1 = tslib_1.__importDefault(require("../../utils/tailwind"));
const airbnb_1 = tslib_1.__importDefault(require("../../utils/airbnb"));
const react_query_1 = tslib_1.__importDefault(require("../../utils/react-query"));
const react_hook_form_1 = tslib_1.__importDefault(require("../../utils/react-hook-form"));
const storybook_1 = tslib_1.__importDefault(require("../../utils/storybook"));
const preset_1 = tslib_1.__importDefault(require("../../utils/preset"));
const cypress_1 = tslib_1.__importDefault(require("../../utils/cypress"));
class ReactCommand extends core_1.Command {
    static description = "React App Generator";
    static flags = {
        version: core_1.Flags.version({ char: "v" }),
        help: core_1.Flags.help({ char: "h" }),
        name: core_1.Flags.string({
            char: "n",
            description: "folder name to create",
        }),
        tailwind: core_1.Flags.string({
            char: "t",
            options: ["yes", "no"],
            description: "add tailwind css",
        }),
        storybook: core_1.Flags.string({
            char: "s",
            options: ["yes", "no"],
            description: "add storybook",
        }),
        airbnb: core_1.Flags.string({
            char: "a",
            options: ["yes", "no"],
            description: "add ESLint, Prettier with Airbnb style (Typescript)",
        }),
        "react-query": core_1.Flags.string({
            char: "q",
            options: ["yes", "no"],
            description: "add react-query",
        }),
        "react-hook-form": core_1.Flags.string({
            char: "f",
            options: ["yes", "no"],
            description: "add react-hook-form",
        }),
        cypress: core_1.Flags.string({
            char: "c",
            options: ["yes", "no"],
            description: "add cypress",
        }),
    };
    static examples = [
        "$ npx new-web-app create -n=react-app -a=yes -q=yes",
        "$ npx new-web-app --name=react-app --airbnb=yes --react-query=yes",
    ];
    // TODO: detect yarn/npm
    async run() {
        const { name, airbnb, reactQuery, storybook, tailwind, reactHookForm, cypress, } = await this.parseInputs();
        // optimise speed by use preset template
        if (tailwind === "yes" &&
            airbnb === "yes" &&
            reactHookForm === "yes" &&
            reactQuery === "yes" &&
            storybook === "yes" &&
            cypress === "yes") {
            await preset_1.default.run(["--name", name, "--preset", "full"]);
            this.onSuccess(name);
            return;
        }
        if (tailwind === "no" &&
            airbnb === "yes" &&
            reactHookForm === "no" &&
            reactQuery === "yes" &&
            storybook === "no") {
            await preset_1.default.run(["--name", name, "--preset", "default"]);
            this.onSuccess(name);
            return;
        }
        if (tailwind === "no" &&
            airbnb === "yes" &&
            reactHookForm === "no" &&
            reactQuery === "no" &&
            storybook === "no") {
            await preset_1.default.run(["--name", name, "--preset", "minimum"]);
            this.onSuccess(name);
            return;
        }
        await clone_1.default.run(["--name", name]);
        if (tailwind === "yes") {
            await tailwind_1.default.run(["--name", name]);
        }
        if (storybook === "yes") {
            await storybook_1.default.run(["--name", name]);
        }
        if (airbnb === "yes") {
            await airbnb_1.default.run(["--name", name]);
        }
        if (reactQuery === "yes") {
            await react_query_1.default.run(["--name", name]);
        }
        if (reactHookForm === "yes") {
            await react_hook_form_1.default.run(["--name", name]);
        }
        if (cypress === "yes") {
            await cypress_1.default.run(["--name", name]);
        }
        (0, shelljs_1.exec)(`cd ${name} && npx prettier . --write`);
        this.onSuccess(name);
    }
    onSuccess(name) {
        this.log(`Success! Created ${name}
Inside that directory, you can run several commands:

yarn dev
  Starts the development server.

yarn build
  Bundles the app into static files for production.

We suggest that you begin by typing:

  cd ${name}
  yarn dev

Happy hacking!`);
    }
    async parseInputs() {
        // eslint-disable-next-line @typescript-eslint/no-shadow
        const { flags } = await this.parse(ReactCommand);
        let { name = "vite-react-ts-app", airbnb = "no", "react-query": reactQuery = "no", storybook = "no", tailwind = "no", "react-hook-form": reactHookForm = "no", cypress = "no", } = flags;
        if (!flags.name) {
            name = await core_2.CliUx.ux.prompt("What is your project name?", {
                type: "normal",
                default: "vite-react-ts-app",
            });
            if (!flags.airbnb) {
                airbnb = await core_2.CliUx.ux.prompt("Do you want to add ESLint, Prettier with Airbnb style? (yes/no)", {
                    type: "normal",
                    default: "yes",
                });
            }
            if (!flags["react-query"]) {
                reactQuery = await core_2.CliUx.ux.prompt("Do you want to add react-query for data fetching? (yes/no)", {
                    type: "normal",
                    default: "yes",
                });
            }
            if (!flags.storybook) {
                storybook = await core_2.CliUx.ux.prompt("Do you want to add storybook? (yes/no)", {
                    type: "normal",
                    default: "no",
                });
            }
            if (!flags.tailwind) {
                tailwind = await core_2.CliUx.ux.prompt("Do you want to add TailwindCSS? (yes/no)", {
                    type: "normal",
                    default: "no",
                });
            }
            if (!flags["react-hook-form"]) {
                reactHookForm = await core_2.CliUx.ux.prompt("Do you want to add react-hook-form? (yes/no)", {
                    type: "normal",
                    default: "no",
                });
            }
            if (!flags.cypress) {
                cypress = await core_2.CliUx.ux.prompt("Do you want to add cypress? (yes/no)", {
                    type: "normal",
                    default: "no",
                });
            }
        }
        return {
            name,
            airbnb,
            reactQuery,
            storybook,
            tailwind,
            reactHookForm,
            cypress,
        };
    }
}
exports.default = ReactCommand;
