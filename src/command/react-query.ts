import { Command, flags } from "@oclif/command";
import { exec } from "shelljs";
import { replaceInFileSync } from "replace-in-file";
import cli from "cli-ux";

// https://react-query.tanstack.com/installation
class ReactQueryApp extends Command {
  static description =
    "Performance and powerful data synchronization for React";

  static flags = {
    name: flags.string({
      char: "n",
      description: "folder name to create",
    }),
  };

  async run() {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const { flags } = this.parse(ReactQueryApp);
    const name = flags.name ?? "vite-react-ts-app";
    cli.action.start(ReactQueryApp.description);

    exec(`cd ${name} && yarn add react-query`);

    replaceInFileSync({
      files: [`${name}/src/App.tsx`],
      from: "import React, { useState } from 'react'",
      to: `import React, { useState } from 'react'
      import {
        QueryClient,
        QueryClientProvider,
      } from 'react-query'
      import { ReactQueryDevtools } from 'react-query/devtools'`,
    });

    replaceInFileSync({
      files: [`${name}/src/App.tsx`],
      from: "import './App.css'",
      to: `import './App.css'

      const queryClient = new QueryClient()
      `,
    });
    replaceInFileSync({
      files: [`${name}/src/App.tsx`],
      from: "export default App",
      to: `export default () => (
        <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
      )`,
    });

    cli.action.stop();
  }
}

export = ReactQueryApp;
