# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > invalid-syntax > migrated_0271`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "esprima/invalid-syntax/migrated_0271/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "esprima/invalid-syntax/migrated_0271/input.js"
		end: Object {
			column: 0
			index: 33
			line: 2
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		JSClassDeclaration {
			id: JSBindingIdentifier {
				name: "A"
				loc: Object {
					filename: "esprima/invalid-syntax/migrated_0271/input.js"
					identifierName: "A"
					end: Object {
						column: 7
						index: 7
						line: 1
					}
					start: Object {
						column: 6
						index: 6
						line: 1
					}
				}
			}
			loc: Object {
				filename: "esprima/invalid-syntax/migrated_0271/input.js"
				end: Object {
					column: 32
					index: 32
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			meta: JSClassHead {
				implements: undefined
				superClass: undefined
				superTypeParameters: undefined
				typeParameters: undefined
				loc: Object {
					filename: "esprima/invalid-syntax/migrated_0271/input.js"
					end: Object {
						column: 32
						index: 32
						line: 1
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
				body: Array [
					JSClassMethod {
						kind: "method"
						key: JSStaticPropertyKey {
							value: JSStringLiteral {
								value: "prototype"
								loc: Object {
									filename: "esprima/invalid-syntax/migrated_0271/input.js"
									end: Object {
										column: 27
										index: 27
										line: 1
									}
									start: Object {
										column: 16
										index: 16
										line: 1
									}
								}
							}
							loc: Object {
								filename: "esprima/invalid-syntax/migrated_0271/input.js"
								end: Object {
									column: 27
									index: 27
									line: 1
								}
								start: Object {
									column: 16
									index: 16
									line: 1
								}
							}
						}
						loc: Object {
							filename: "esprima/invalid-syntax/migrated_0271/input.js"
							end: Object {
								column: 31
								index: 31
								line: 1
							}
							start: Object {
								column: 9
								index: 9
								line: 1
							}
						}
						body: JSBlockStatement {
							body: Array []
							directives: Array []
							loc: Object {
								filename: "esprima/invalid-syntax/migrated_0271/input.js"
								end: Object {
									column: 31
									index: 31
									line: 1
								}
								start: Object {
									column: 29
									index: 29
									line: 1
								}
							}
						}
						head: JSFunctionHead {
							async: false
							generator: false
							hasHoistedVars: false
							params: Array []
							rest: undefined
							returnType: undefined
							thisType: undefined
							typeParameters: undefined
							loc: Object {
								filename: "esprima/invalid-syntax/migrated_0271/input.js"
								end: Object {
									column: 29
									index: 29
									line: 1
								}
								start: Object {
									column: 27
									index: 27
									line: 1
								}
							}
						}
						meta: JSClassPropertyMeta {
							abstract: false
							accessibility: undefined
							optional: false
							readonly: false
							static: true
							typeAnnotation: undefined
							start: Object {
								column: 9
								index: 9
								line: 1
							}
							loc: Object {
								filename: "esprima/invalid-syntax/migrated_0271/input.js"
								end: Object {
									column: 27
									index: 27
									line: 1
								}
								start: Object {
									column: 9
									index: 9
									line: 1
								}
							}
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
