/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Builder, Token, concat, hardline} from "@romefrontend/formatter";

import {JSInterpreterDirective} from "@romefrontend/ast";

export default function JSInterpreterDirective(
	builder: Builder,
	node: JSInterpreterDirective,
): Token {
	return concat([`#!${node.value}`, hardline, hardline]);
}
