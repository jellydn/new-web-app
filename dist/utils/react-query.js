"use strict";
const core_1 = require("@oclif/core");
const shelljs_1 = require("shelljs");
const replace_in_file_1 = require("replace-in-file");
const core_2 = require("@oclif/core");
// https://react-query.tanstack.com/installation
class ReactQueryApp extends core_1.Command {
    static description = "Performance and powerful data synchronization for React";
    static flags = {
        name: core_1.Flags.string({
            char: "n",
            description: "folder name to create",
        }),
    };
    async run() {
        // eslint-disable-next-line @typescript-eslint/no-shadow
        const { flags } = await this.parse(ReactQueryApp);
        const name = flags.name ?? "vite-react-ts-app";
        core_2.CliUx.ux.action.start(ReactQueryApp.description);
        (0, shelljs_1.exec)(`cd ${name} && yarn add react-query`);
        (0, replace_in_file_1.replaceInFileSync)({
            files: [`${name}/src/App.tsx`],
            from: "import React, { useState } from 'react'",
            to: `import React, { useState } from 'react'
      import {
        QueryClient,
        QueryClientProvider,
      } from 'react-query'
      import { ReactQueryDevtools } from 'react-query/devtools'`,
        });
        (0, replace_in_file_1.replaceInFileSync)({
            files: [`${name}/src/App.tsx`],
            from: "import './App.css'",
            to: `import './App.css'

      const queryClient = new QueryClient()
      `,
        });
        (0, replace_in_file_1.replaceInFileSync)({
            files: [`${name}/src/App.tsx`],
            from: "export default App",
            to: `export default () => (
        <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
      )`,
        });
        core_2.CliUx.ux.action.stop();
    }
}
module.exports = ReactQueryApp;
