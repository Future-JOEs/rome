# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > invalid-syntax > migrated_0004`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "esprima/invalid-syntax/migrated_0004/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "esprima/invalid-syntax/migrated_0004/input.js"
		end: Object {
			column: 0
			index: 3
			line: 2
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse/js"}]
			description: Object {
				advice: Array []
				category: "parse/js"
				message: MARKUP {parts: Array [RAW_MARKUP {value: "Invalid number"}]}
			}
			location: Object {
				filename: "esprima/invalid-syntax/migrated_0004/input.js"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 2
					index: 2
					line: 1
				}
				start: Object {
					column: 2
					index: 2
					line: 1
				}
			}
		}
	]
	body: Array [
		JSExpressionStatement {
			loc: Object {
				filename: "esprima/invalid-syntax/migrated_0004/input.js"
				end: Object {
					column: 2
					index: 2
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			expression: JSNumericLiteral {
				value: 3
				format: undefined
				loc: Object {
					filename: "esprima/invalid-syntax/migrated_0004/input.js"
					end: Object {
						column: 2
						index: 2
						line: 1
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
			}
		}
	]
}
```

### `diagnostics`

```

 esprima/invalid-syntax/migrated_0004/input.js:1:2 parse/js ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Invalid number

    3e
      ^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
