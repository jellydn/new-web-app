import { Command } from "@oclif/core";
declare class PresetApp extends Command {
    static description: string;
    static flags: {
        name: import("@oclif/core/lib/interfaces").OptionFlag<string | undefined>;
        preset: import("@oclif/core/lib/interfaces").OptionFlag<string | undefined>;
    };
    run(): Promise<void>;
}
export = PresetApp;
