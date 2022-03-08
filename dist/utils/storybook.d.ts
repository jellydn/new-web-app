import { Command } from "@oclif/core";
declare class StorybookApp extends Command {
    static description: string;
    static flags: {
        name: import("@oclif/core/lib/interfaces").OptionFlag<string | undefined>;
    };
    run(): Promise<void>;
}
export = StorybookApp;
