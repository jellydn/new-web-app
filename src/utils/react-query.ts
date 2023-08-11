import { Command, Flags, ux } from "@oclif/core";
import { replaceInFileSync } from "replace-in-file";

import { execaCommandSync } from "../exca";

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
    ux.action.start(ReactQueryApp.description);

    await execaCommandSync(`cd ${name} && yarn add react-query`);

    replaceInFileSync({
      files: [`${name}/src/App.tsx`],
      from: "function App()",
      to: `import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

      const queryClient = new QueryClient()
function App()
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

    ux.action.stop();
  }
}

export default ReactQueryApp;
