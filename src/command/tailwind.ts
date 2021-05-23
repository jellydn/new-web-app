import { Command, flags } from "@oclif/command";
import { exec } from "shelljs";
import { replaceInFileSync } from "replace-in-file";
import { writeFileSync } from "fs";
import cli from "cli-ux";

class TailwindApp extends Command {
  static description = "Scaffolding Your Vite Project";

  static flags = {
    name: flags.string({
      char: "n",
      description: "folder name to create",
    }),
  };

  async run() {
    const { flags } = this.parse(TailwindApp);
    const name = flags.name ?? "vite-react-ts-app";
    cli.action.start(`Install Tailwind CSS with React and Vite`);
    exec(`cd ${name}`);
    cli.action.stop();

    cli.action.start("Setting up Tailwind CSS");
    exec(
      `cd ${name} && yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest && npx tailwindcss init -p`
    );
    cli.action.stop();

    cli.action.start(
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

    cli.action.stop();
  }
}

export = TailwindApp;
