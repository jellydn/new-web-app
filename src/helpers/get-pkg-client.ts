import { execSync } from "node:child_process";

export type PackageManager = "npm" | "pnpm" | "yarn";

export function getPkgClient(): PackageManager {
  try {
    const userAgent = process.env.npm_config_user_agent;
    if (userAgent) {
      if (userAgent.startsWith("yarn")) {
        return "yarn";
      }

 if (userAgent.startsWith("pnpm")) {
        return "pnpm";
      }
    }

    try {
      execSync("yarn --version", { stdio: "ignore" });
      return "yarn";
    } catch {
      execSync("pnpm --version", { stdio: "ignore" });
      return "pnpm";
    }
  } catch {
    return "npm";
  }
}
