import execa from "execa";

async function execaCommandSync(
  command: string,
  options: execa.Options = {
    stdin: "inherit",
    stderr: "inherit",
    shell: true,
  }
) {
  try {
    const subprocess = execa.command(command, options);
    subprocess.stdout?.pipe(process.stdout);
    const { stdout } = await subprocess;
    return stdout;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export { execaCommandSync };
