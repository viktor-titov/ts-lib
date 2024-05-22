export let entry: string;
export namespace experiments {
    let outputModule: boolean;
}
export namespace output {
    let path: string;
    let filename: string;
    namespace library {
        let type: string;
    }
}
export namespace resolve {
    let extensions: string[];
}
export let devtool: string;
export namespace module {
    let strictExportPresence: boolean;
    let rules: {
        test: RegExp;
        exclude: RegExp;
        use: {
            loader: string;
        };
    }[];
}
