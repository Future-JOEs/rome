# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/js-parser/index.test.ts --update-snapshots` to update.

## `es2020 > dynamic-import > parses-strict`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	filename: "es2020/dynamic-import/parses-strict/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "es2020/dynamic-import/parses-strict/input.js"
		end: Object {
			column: 0
			index: 34
			line: 4
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	directives: Array [
		JSDirective {
			value: "use strict"
			loc: Object {
				filename: "es2020/dynamic-import/parses-strict/input.js"
				end: Object {
					column: 13
					index: 13
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
		}
	]
	body: Array [
		JSExpressionStatement {
			loc: Object {
				filename: "es2020/dynamic-import/parses-strict/input.js"
				end: Object {
					column: 18
					index: 33
					line: 3
				}
				start: Object {
					column: 0
					index: 15
					line: 3
				}
			}
			expression: JSImportCall {
				loc: Object {
					filename: "es2020/dynamic-import/parses-strict/input.js"
					end: Object {
						column: 17
						index: 32
						line: 3
					}
					start: Object {
						column: 6
						index: 21
						line: 3
					}
				}
				argument: JSStringLiteral {
					value: "test.js"
					loc: Object {
						filename: "es2020/dynamic-import/parses-strict/input.js"
						end: Object {
							column: 16
							index: 31
							line: 3
						}
						start: Object {
							column: 7
							index: 22
							line: 3
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
