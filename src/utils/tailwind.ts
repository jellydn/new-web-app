import { Command, Flags } from "@oclif/core";
import { CliUx } from "@oclif/core";
import { writeFileSync } from "fs";
import { replaceInFileSync } from "replace-in-file";

import { execaCommandSync } from "../exca";

// https://tailwindcss.com/docs/guides/vue-3-vite#install-tailwind-via-npm
class TailwindApp extends Command {
  static description = "Install Tailwind CSS with React and Vite";

  static flags = {
    name: Flags.string({
      char: "n",
      description: "folder name to create",
    }),
  };

  async run(): Promise<void> {
    const { flags } = await this.parse(TailwindApp);
    const name = flags.name ?? "vite-react-ts-app";
    CliUx.ux.action.start(TailwindApp.description);
    CliUx.ux.action.stop();

    CliUx.ux.action.start("Setting up Tailwind CSS");
    execaCommandSync(
      `cd ${name} && yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest && npx tailwindcss init -p`
    );
    CliUx.ux.action.stop();

    CliUx.ux.action.start(
      "Configure Tailwind to remove unused styles in production"
    );
    replaceInFileSync({
      files: [`${name}/tailwind.config.js`],
      from: "purge: [],",
      to: "purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'], mode: 'jit',",
    });
    const styles = `/* ./src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;`;
    writeFileSync(`${name}/src/index.css`, styles);

    CliUx.ux.action.stop();
  }
}

export default TailwindApp;
