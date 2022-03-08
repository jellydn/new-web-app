import { Command } from "@oclif/core";
export default class ReactCommand extends Command {
    static description: string;
    static flags: {
        version: import("@oclif/core/lib/interfaces").BooleanFlag<void>;
        help: import("@oclif/core/lib/interfaces").BooleanFlag<void>;
        name: import("@oclif/core/lib/interfaces").OptionFlag<string | undefined>;
        tailwind: import("@oclif/core/lib/interfaces").OptionFlag<string | undefined>;
        storybook: import("@oclif/core/lib/interfaces").OptionFlag<string | undefined>;
        airbnb: import("@oclif/core/lib/interfaces").OptionFlag<string | undefined>;
        "react-query": import("@oclif/core/lib/interfaces").OptionFlag<string | undefined>;
        "react-hook-form": import("@oclif/core/lib/interfaces").OptionFlag<string | undefined>;
        cypress: import("@oclif/core/lib/interfaces").OptionFlag<string | undefined>;
    };
    static examples: string[];
    run(): Promise<void>;
    onSuccess(name: string): void;
    private parseInputs;
}
