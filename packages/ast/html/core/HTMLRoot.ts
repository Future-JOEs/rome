import {NodeBaseWithComments, RootBase} from "../../index";
import {createBuilder} from "../../utils";
import {AnyHTMLChildNode} from "@romefrontend/ast/html/unions";

export interface HTMLRoot extends NodeBaseWithComments,
RootBase {
	type: "HTMLRoot";
	body: Array<AnyHTMLChildNode>;
}

export const htmlRoot = createBuilder<HTMLRoot>(
	"HTMLRoot",
	{
		bindingKeys: {},
		visitorKeys: {
			body: true,
			comments: true,
		},
	},
);
