# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-yield > yield-catch-parameter`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "esprima/es2015-yield/yield-catch-parameter/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "esprima/es2015-yield/yield-catch-parameter/input.js"
		end: Object {
			column: 0
			index: 24
			line: 2
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		JSTryStatement {
			finalizer: undefined
			loc: Object {
				filename: "esprima/es2015-yield/yield-catch-parameter/input.js"
				end: Object {
					column: 23
					index: 23
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			block: JSBlockStatement {
				body: Array []
				directives: Array []
				loc: Object {
					filename: "esprima/es2015-yield/yield-catch-parameter/input.js"
					end: Object {
						column: 6
						index: 6
						line: 1
					}
					start: Object {
						column: 4
						index: 4
						line: 1
					}
				}
			}
			handler: JSCatchClause {
				loc: Object {
					filename: "esprima/es2015-yield/yield-catch-parameter/input.js"
					end: Object {
						column: 23
						index: 23
						line: 1
					}
					start: Object {
						column: 7
						index: 7
						line: 1
					}
				}
				body: JSBlockStatement {
					body: Array []
					directives: Array []
					loc: Object {
						filename: "esprima/es2015-yield/yield-catch-parameter/input.js"
						end: Object {
							column: 23
							index: 23
							line: 1
						}
						start: Object {
							column: 21
							index: 21
							line: 1
						}
					}
				}
				param: JSBindingIdentifier {
					name: "yield"
					loc: Object {
						filename: "esprima/es2015-yield/yield-catch-parameter/input.js"
						identifierName: "yield"
						end: Object {
							column: 19
							index: 19
							line: 1
						}
						start: Object {
							column: 14
							index: 14
							line: 1
						}
					}
				}
			}
		}
	]
}
```

### `diagnostics`

```
✔ No known problems!

```
