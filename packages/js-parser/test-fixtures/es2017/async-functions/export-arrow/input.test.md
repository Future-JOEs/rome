# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/js-parser/index.test.ts --update-snapshots` to update.

## `es2017 > async-functions > export-arrow`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "es2017/async-functions/export-arrow/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "module"
	syntax: Array []
	loc: Object {
		filename: "es2017/async-functions/export-arrow/input.js"
		end: Object {
			column: 0
			index: 39
			line: 2
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		JSExportDefaultDeclaration {
			loc: Object {
				filename: "es2017/async-functions/export-arrow/input.js"
				end: Object {
					column: 38
					index: 38
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			declaration: JSArrowFunctionExpression {
				loc: Object {
					filename: "es2017/async-functions/export-arrow/input.js"
					end: Object {
						column: 38
						index: 38
						line: 1
					}
					start: Object {
						column: 15
						index: 15
						line: 1
					}
				}
				head: JSFunctionHead {
					async: true
					hasHoistedVars: false
					params: Array []
					rest: undefined
					returnType: undefined
					thisType: undefined
					loc: Object {
						filename: "es2017/async-functions/export-arrow/input.js"
						end: Object {
							column: 26
							index: 26
							line: 1
						}
						start: Object {
							column: 15
							index: 15
							line: 1
						}
					}
				}
				body: JSAwaitExpression {
					loc: Object {
						filename: "es2017/async-functions/export-arrow/input.js"
						end: Object {
							column: 38
							index: 38
							line: 1
						}
						start: Object {
							column: 27
							index: 27
							line: 1
						}
					}
					argument: JSCallExpression {
						arguments: Array []
						loc: Object {
							filename: "es2017/async-functions/export-arrow/input.js"
							end: Object {
								column: 38
								index: 38
								line: 1
							}
							start: Object {
								column: 33
								index: 33
								line: 1
							}
						}
						callee: JSReferenceIdentifier {
							name: "foo"
							loc: Object {
								filename: "es2017/async-functions/export-arrow/input.js"
								identifierName: "foo"
								end: Object {
									column: 36
									index: 36
									line: 1
								}
								start: Object {
									column: 33
									index: 33
									line: 1
								}
							}
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
