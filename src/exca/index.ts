import execa from "execa";

async function execaCommandSync(
  command: string,
  options: execa.Options = {
    stdin: "inherit",
    stderr: "inherit",
    shell: true,
  }
) {
  const subprocess = execa.command(command, options);
  subprocess.stdout?.pipe(process.stdout);
  const { stdout } = await subprocess;
  return stdout;
}

export { execaCommandSync };
