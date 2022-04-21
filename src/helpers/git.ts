import { execSync } from "node:child_process";

export function isInGitRepository(): boolean {
  try {
    execSync("git rev-parse --is-inside-work-tree", { stdio: "ignore" });
    return true;
  } catch {}
  return false;
}
