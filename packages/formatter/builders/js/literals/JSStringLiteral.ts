/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Builder, Token} from "@romefrontend/formatter";

import {escapeJSString} from "@romefrontend/string-escape";
import {
	AnyNode,
	JSDirective,
	JSStringLiteral,
	TSStringLiteralTypeAnnotation,
} from "@romefrontend/ast";
import {escapeXHTMLEntities} from "@romefrontend/html-parser";

export default function JSStringLiteral(
	builder: Builder,
	node: JSDirective | JSStringLiteral | TSStringLiteralTypeAnnotation,
	parent: AnyNode,
): Token {
	const quotes =
		parent.type === "JSXAttribute" || !node.value.includes('"') ? '"' : "'";

	const value =
		parent.type === "JSXAttribute"
			? escapeXHTMLEntities(node.value)
			: node.value;

	return escapeJSString(value, {quote: quotes});
}
