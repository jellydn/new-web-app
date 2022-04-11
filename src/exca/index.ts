import execa from "execa";

function execaCommandSync(command: string) {
  return execa.commandSync(command);
}

export { execaCommandSync };
