# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > invalid-syntax > migrated_0268`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "esprima/invalid-syntax/migrated_0268/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "esprima/invalid-syntax/migrated_0268/input.js"
		end: Object {
			column: 0
			index: 14
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
			location: Object {
				filename: "esprima/invalid-syntax/migrated_0268/input.js"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 10
					index: 10
					line: 1
				}
				start: Object {
					column: 10
					index: 10
					line: 1
				}
			}
			description: Object {
				category: "parse/js"
				advice: Array [
					log {
						category: "info"
						text: MARKUP {parts: Array [RAW_MARKUP {value: "To enable <emphasis>TypeScript</emphasis> support, the file extension should end in <emphasis>.ts</emphasis> or <emphasis>.tsx</emphasis>"}]}
					}
				]
				message: MARKUP {
					parts: Array [
						RAW_MARKUP {value: "A "}
						"type annotation"
						RAW_MARKUP {value: " is only valid inside of a TypeScript file"}
					]
				}
			}
		}
	]
	body: Array [
		JSClassDeclaration {
			id: JSBindingIdentifier {
				name: "A"
				loc: Object {
					filename: "esprima/invalid-syntax/migrated_0268/input.js"
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
				filename: "esprima/invalid-syntax/migrated_0268/input.js"
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
			meta: JSClassHead {
				implements: undefined
				superClass: undefined
				superTypeParameters: undefined
				typeParameters: undefined
				loc: Object {
					filename: "esprima/invalid-syntax/migrated_0268/input.js"
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
				body: Array [
					JSClassProperty {
						key: JSStaticPropertyKey {
							value: JSIdentifier {
								name: "a"
								loc: Object {
									filename: "esprima/invalid-syntax/migrated_0268/input.js"
									identifierName: "a"
									end: Object {
										column: 10
										index: 10
										line: 1
									}
									start: Object {
										column: 9
										index: 9
										line: 1
									}
								}
							}
							loc: Object {
								filename: "esprima/invalid-syntax/migrated_0268/input.js"
								end: Object {
									column: 10
									index: 10
									line: 1
								}
								start: Object {
									column: 9
									index: 9
									line: 1
								}
							}
						}
						value: undefined
						definite: undefined
						loc: Object {
							filename: "esprima/invalid-syntax/migrated_0268/input.js"
							end: Object {
								column: 12
								index: 12
								line: 1
							}
							start: Object {
								column: 9
								index: 9
								line: 1
							}
						}
						typeAnnotation: TSNumericLiteralTypeAnnotation {
							value: 0
							format: undefined
							loc: Object {
								filename: "esprima/invalid-syntax/migrated_0268/input.js"
								end: Object {
									column: 12
									index: 12
									line: 1
								}
								start: Object {
									column: 11
									index: 11
									line: 1
								}
							}
						}
						meta: JSClassPropertyMeta {
							abstract: false
							accessibility: undefined
							optional: false
							readonly: false
							static: false
							typeAnnotation: undefined
							start: Object {
								column: 9
								index: 9
								line: 1
							}
							loc: Object {
								filename: "esprima/invalid-syntax/migrated_0268/input.js"
								end: Object {
									column: 10
									index: 10
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

 esprima/invalid-syntax/migrated_0268/input.js:1:10 parse/js ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ A type annotation is only valid inside of a TypeScript file

    class A {a:0}
              ^

  ℹ To enable TypeScript support, the file extension should end in .ts or .tsx

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
