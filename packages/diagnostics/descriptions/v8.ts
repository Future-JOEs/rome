import {createDiagnosticsCategory} from "./index";
import {markup} from "@romefrontend/cli-layout";

export const v8 = createDiagnosticsCategory({
	SYNTAX_ERROR: (message: string) => ({
		message: markup`${message}`,
		category: "v8/syntaxError",
	}),
});
