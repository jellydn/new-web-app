import { Command } from "@oclif/core";
import { CliUx } from "@oclif/core";
import { exec } from "shelljs";

// https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html
class UpgradeReact18App extends Command {
  static description = "Upgrade to React 18";

  async run(): Promise<void> {
    CliUx.ux.action.start(UpgradeReact18App.description);
    exec(`yarn add react react-dom`);
    exec(`yarn add -D @types/react @types/react-dom`);
    exec(`npx types-react-codemod preset-18 .`);
    this
      .log(`React 18 introduces a new root API which provides better ergonomics for managing roots. The new root API also enables the new concurrent renderer, which allows you to opt-into concurrent features.
    // Before
    import { render } from 'react-dom';
    const container = document.getElementById('app');
    render(<App tab="home" />, container);

    // After
    import { createRoot } from 'react-dom/client';
    const container = document.getElementById('app');
    const root = createRoot(container);
    root.render(<App tab="home" />);

Please adjust on your app as above.!`);
    CliUx.ux.action.stop();
  }
}

export = UpgradeReact18App;
