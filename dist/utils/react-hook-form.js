"use strict";
const core_1 = require("@oclif/core");
const shelljs_1 = require("shelljs");
const replace_in_file_1 = require("replace-in-file");
const core_2 = require("@oclif/core");
// https://www.react-hook-form.com/get-started
class ReactHookFormApp extends core_1.Command {
    static description = "Install React-hook-form - Simple form validation with React Hook Form.";
    static flags = {
        name: core_1.Flags.string({
            char: "n",
            description: "folder name to create",
        }),
    };
    async run() {
        // eslint-disable-next-line @typescript-eslint/no-shadow
        const { flags } = await this.parse(ReactHookFormApp);
        const name = flags.name ?? "vite-react-ts-app";
        core_2.CliUx.ux.action.start(ReactHookFormApp.description);
        (0, shelljs_1.exec)(`cd ${name} && yarn add react-hook-form @hookform/devtools`);
        core_2.CliUx.ux.action.stop();
        core_2.CliUx.ux.action.start("Add react-hook-form example");
        (0, replace_in_file_1.replaceInFileSync)({
            files: [`${name}/src/App.tsx`],
            from: "import './App.css'",
            to: `import { useForm } from "react-hook-form"
      import { DevTool } from "@hookform/devtools"
      import './App.css'
      `,
        });
        (0, replace_in_file_1.replaceInFileSync)({
            files: [`${name}/src/App.tsx`],
            from: "function App() {",
            to: `type FormValues = {
        firstName: string;
        lastName: string;
      };

      function ExampleForm() {
        const { register, handleSubmit, control } = useForm<FormValues>();

        const onSubmit = handleSubmit((data) => console.log(data));

        return (
          <div>
            <h3>React-hook-form example</h3>
            <DevTool control={control} placement={"top-left"} />

            <form onSubmit={onSubmit}>
              <label>First Name</label>
              <input {...register("firstName")} />
              <label>Last Name</label>
              <input {...register("lastName")} />
              <button type="submit">Submit</button>
            </form>
          </div>
        );
      }

      function App() {
      `,
        });
        (0, replace_in_file_1.replaceInFileSync)({
            files: [`${name}/src/App.tsx`],
            from: " </header>",
            to: `
      <ExampleForm />
      </header>
      `,
        });
        core_2.CliUx.ux.action.stop();
    }
}
module.exports = ReactHookFormApp;
