# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-generator > generator-method-with-yield-line-terminator`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "esprima/es2015-generator/generator-method-with-yield-line-terminator/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "esprima/es2015-generator/generator-method-with-yield-line-terminator/input.js"
		end: Object {
			column: 0
			index: 30
			line: 5
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		JSExpressionStatement {
			loc: Object {
				filename: "esprima/es2015-generator/generator-method-with-yield-line-terminator/input.js"
				end: Object {
					column: 4
					index: 29
					line: 4
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			expression: JSObjectExpression {
				loc: Object {
					filename: "esprima/es2015-generator/generator-method-with-yield-line-terminator/input.js"
					end: Object {
						column: 3
						index: 28
						line: 4
					}
					start: Object {
						column: 1
						index: 1
						line: 1
					}
				}
				properties: Array [
					JSObjectMethod {
						kind: "method"
						key: JSStaticPropertyKey {
							value: JSIdentifier {
								name: "foo"
								loc: Object {
									filename: "esprima/es2015-generator/generator-method-with-yield-line-terminator/input.js"
									identifierName: "foo"
									end: Object {
										column: 7
										index: 7
										line: 1
									}
									start: Object {
										column: 4
										index: 4
										line: 1
									}
								}
							}
							loc: Object {
								filename: "esprima/es2015-generator/generator-method-with-yield-line-terminator/input.js"
								end: Object {
									column: 7
									index: 7
									line: 1
								}
								start: Object {
									column: 4
									index: 4
									line: 1
								}
							}
						}
						loc: Object {
							filename: "esprima/es2015-generator/generator-method-with-yield-line-terminator/input.js"
							end: Object {
								column: 1
								index: 26
								line: 4
							}
							start: Object {
								column: 3
								index: 3
								line: 1
							}
						}
						head: JSFunctionHead {
							async: false
							generator: true
							hasHoistedVars: false
							params: Array []
							rest: undefined
							returnType: undefined
							thisType: undefined
							typeParameters: undefined
							loc: Object {
								filename: "esprima/es2015-generator/generator-method-with-yield-line-terminator/input.js"
								end: Object {
									column: 9
									index: 9
									line: 1
								}
								start: Object {
									column: 7
									index: 7
									line: 1
								}
							}
						}
						body: JSBlockStatement {
							directives: Array []
							loc: Object {
								filename: "esprima/es2015-generator/generator-method-with-yield-line-terminator/input.js"
								end: Object {
									column: 1
									index: 26
									line: 4
								}
								start: Object {
									column: 10
									index: 10
									line: 1
								}
							}
							body: Array [
								JSExpressionStatement {
									loc: Object {
										filename: "esprima/es2015-generator/generator-method-with-yield-line-terminator/input.js"
										end: Object {
											column: 7
											index: 20
											line: 2
										}
										start: Object {
											column: 2
											index: 15
											line: 2
										}
									}
									expression: JSYieldExpression {
										argument: undefined
										delegate: false
										loc: Object {
											filename: "esprima/es2015-generator/generator-method-with-yield-line-terminator/input.js"
											end: Object {
												column: 7
												index: 20
												line: 2
											}
											start: Object {
												column: 2
												index: 15
												line: 2
											}
										}
									}
								}
								JSExpressionStatement {
									loc: Object {
										filename: "esprima/es2015-generator/generator-method-with-yield-line-terminator/input.js"
										end: Object {
											column: 3
											index: 24
											line: 3
										}
										start: Object {
											column: 2
											index: 23
											line: 3
										}
									}
									expression: JSNumericLiteral {
										value: 3
										format: undefined
										loc: Object {
											filename: "esprima/es2015-generator/generator-method-with-yield-line-terminator/input.js"
											end: Object {
												column: 3
												index: 24
												line: 3
											}
											start: Object {
												column: 2
												index: 23
												line: 3
											}
										}
									}
								}
							]
						}
					}
				]
			}
		}
	]
}
```

### `diagnostics`

```
✔ No known problems!

```
