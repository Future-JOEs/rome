# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/js-parser/index.test.ts --update-snapshots` to update.

## `typescript > enum > members-trailing-comma-with-initializer`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "typescript/enum/members-trailing-comma-with-initializer/input.ts"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "module"
	syntax: Array ["ts"]
	loc: Object {
		filename: "typescript/enum/members-trailing-comma-with-initializer/input.ts"
		end: Object {
			column: 0
			index: 22
			line: 4
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		TSEnumDeclaration {
			id: JSBindingIdentifier {
				name: "E"
				loc: Object {
					filename: "typescript/enum/members-trailing-comma-with-initializer/input.ts"
					identifierName: "E"
					end: Object {
						column: 6
						index: 6
						line: 1
					}
					start: Object {
						column: 5
						index: 5
						line: 1
					}
				}
			}
			const: false
			loc: Object {
				filename: "typescript/enum/members-trailing-comma-with-initializer/input.ts"
				end: Object {
					column: 1
					index: 21
					line: 3
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			members: Array [
				TSEnumMember {
					id: JSIdentifier {
						name: "A"
						loc: Object {
							filename: "typescript/enum/members-trailing-comma-with-initializer/input.ts"
							identifierName: "A"
							end: Object {
								column: 5
								index: 14
								line: 2
							}
							start: Object {
								column: 4
								index: 13
								line: 2
							}
						}
					}
					loc: Object {
						filename: "typescript/enum/members-trailing-comma-with-initializer/input.ts"
						end: Object {
							column: 9
							index: 18
							line: 2
						}
						start: Object {
							column: 4
							index: 13
							line: 2
						}
					}
					initializer: JSNumericLiteral {
						value: 0
						format: undefined
						loc: Object {
							filename: "typescript/enum/members-trailing-comma-with-initializer/input.ts"
							end: Object {
								column: 9
								index: 18
								line: 2
							}
							start: Object {
								column: 8
								index: 17
								line: 2
							}
						}
					}
				}
			]
		}
	]
}
```

### `diagnostics`

```
✔ No known problems!

```
