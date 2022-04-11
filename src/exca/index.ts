import execa from "execa";

async function execaCommandSync(command: string) {
  const subprocess = execa.command(command, {
    stdin: "inherit",
  });
  subprocess.stdout?.pipe(process.stdout);
  const { stdout } = await subprocess;
  return stdout;
}

export { execaCommandSync };
