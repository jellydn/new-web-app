import { Command, Flags } from "@oclif/core";
import { CliUx } from "@oclif/core";
import { replaceInFileSync } from "replace-in-file";
import { exec } from "shelljs";

// https://react-query.tanstack.com/installation
class ReactQueryApp extends Command {
  static description =
    "Performance and powerful data synchronization for React";

  static flags = {
    name: Flags.string({
      char: "n",
      description: "folder name to create",
    }),
  };

  async run(): Promise<void> {
    const { flags } = await this.parse(ReactQueryApp);
    const name = flags.name ?? "vite-react-ts-app";
    CliUx.ux.action.start(ReactQueryApp.description);

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

    CliUx.ux.action.stop();
  }
}

export = ReactQueryApp;
