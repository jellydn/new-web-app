import { Command, flags } from "@oclif/command";
import { exec } from "shelljs";
import { replaceInFileSync } from "replace-in-file";
import cli from "cli-ux";

// https://www.react-hook-form.com/get-started
class ReactHookFormApp extends Command {
  static description = "Simple form validation with React Hook Form.";

  static flags = {
    name: flags.string({
      char: "n",
      description: "folder name to create",
    }),
  };

  async run() {
    const { flags } = this.parse(ReactHookFormApp);
    const name = flags.name ?? "vite-react-ts-app";
    cli.action.start(`Install react-hook-form`);
    exec(`cd ${name} && yarn add react-hook-form @hookform/devtools`);
    cli.action.stop();

    cli.action.start("Add react-hook-form example");
    replaceInFileSync({
      files: [`${name}/src/App.tsx`],
      from: "import './App.css'",
      to: `import { useForm } from "react-hook-form"
      import { DevTool } from "@hookform/devtools"
      import './App.css'
      `,
    });

    replaceInFileSync({
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

    replaceInFileSync({
      files: [`${name}/src/App.tsx`],
      from: " </header>",
      to: `
      <ExampleForm />
      </header>
      `,
    });
    cli.action.stop();
  }
}

export = ReactHookFormApp;
