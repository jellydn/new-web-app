import { Command, Flags, ux } from "@oclif/core";

import { execaCommandSync } from "../../exca";
import { getPkgClient } from "../../helpers/get-pkg-client";

// https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html
class UpgradeReact18App extends Command {
  static description = "Upgrade to React 18";

  static flags = {
    directory: Flags.string({
      char: "d",
      description: "folder name to update",
    }),
  };

  async run(): Promise<void> {
    ux.action.start(UpgradeReact18App.description);
    const { flags } = await this.parse(UpgradeReact18App);
    const directory = flags.directory ?? ".";

    if (directory !== ".") {
      await execaCommandSync(`cd ${directory}`);
    }

    // Install yarn if not exists
    const pkgClient = getPkgClient();
    if (pkgClient !== "yarn") {
      await execaCommandSync("npm install --global yarn");
    }

    await execaCommandSync(`yarn add react react-dom`);
    await execaCommandSync(`yarn add -D @types/react @types/react-dom`);
    await execaCommandSync(`npx types-react-codemod preset-18 .`);
    this.log(`React 18 introduces a new root API. Please adjust as below.
    // Before
    import { render } from 'react-dom';
    const container = document.getElementById('app');
    render(<App tab="home" />, container);

    // After
    import { createRoot } from 'react-dom/client';
    const container = document.getElementById('app');
    const root = createRoot(container);
    root.render(<App tab="home" />);

    Happy hacking!`);
    ux.action.stop();
  }
}

export default UpgradeReact18App;
