/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {TSParenthesizedType} from "@romefrontend/ast";
import {Builder, Token, concat} from "@romefrontend/formatter";

export default function TSParenthesizedType(
	builder: Builder,
	node: TSParenthesizedType,
): Token {
	return concat(["(", builder.tokenize(node.typeAnnotation, node), ")"]);
}
