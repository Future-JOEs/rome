# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > declaration-function > dupe-param`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "esprima/declaration-function/dupe-param/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "esprima/declaration-function/dupe-param/input.js"
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
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse/js"}]
			location: Object {
				filename: "esprima/declaration-function/dupe-param/input.js"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 15
					index: 15
					line: 1
				}
				start: Object {
					column: 14
					index: 14
					line: 1
				}
			}
			description: Object {
				category: "parse/js"
				message: MARKUP {
					parts: Array [
						RAW_MARKUP {value: "Argument <emphasis>"}
						"x"
						RAW_MARKUP {value: "</emphasis> name clash in strict mode"}
					]
				}
				advice: Array [
					log {
						category: "info"
						text: MARKUP {parts: Array [RAW_MARKUP {value: "Defined already here"}]}
					}
					frame {
						location: Object {
							filename: "esprima/declaration-function/dupe-param/input.js"
							identifierName: "x"
							end: Object {
								column: 15
								index: 15
								line: 1
							}
							start: Object {
								column: 14
								index: 14
								line: 1
							}
						}
					}
				]
			}
		}
	]
	body: Array [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "a"
				loc: Object {
					filename: "esprima/declaration-function/dupe-param/input.js"
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
				filename: "esprima/declaration-function/dupe-param/input.js"
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
			body: JSBlockStatement {
				body: Array []
				loc: Object {
					filename: "esprima/declaration-function/dupe-param/input.js"
					end: Object {
						column: 32
						index: 32
						line: 1
					}
					start: Object {
						column: 17
						index: 17
						line: 1
					}
				}
				directives: Array [
					JSDirective {
						value: "use strict"
						loc: Object {
							filename: "esprima/declaration-function/dupe-param/input.js"
							end: Object {
								column: 31
								index: 31
								line: 1
							}
							start: Object {
								column: 18
								index: 18
								line: 1
							}
						}
					}
				]
			}
			head: JSFunctionHead {
				async: false
				generator: false
				hasHoistedVars: false
				rest: undefined
				returnType: undefined
				thisType: undefined
				typeParameters: undefined
				loc: Object {
					filename: "esprima/declaration-function/dupe-param/input.js"
					end: Object {
						column: 16
						index: 16
						line: 1
					}
					start: Object {
						column: 10
						index: 10
						line: 1
					}
				}
				params: Array [
					JSBindingIdentifier {
						name: "x"
						loc: Object {
							filename: "esprima/declaration-function/dupe-param/input.js"
							identifierName: "x"
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
						meta: JSPatternMeta {
							optional: undefined
							typeAnnotation: undefined
							loc: Object {
								filename: "esprima/declaration-function/dupe-param/input.js"
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
					}
					JSBindingIdentifier {
						name: "x"
						loc: Object {
							filename: "esprima/declaration-function/dupe-param/input.js"
							identifierName: "x"
							end: Object {
								column: 15
								index: 15
								line: 1
							}
							start: Object {
								column: 14
								index: 14
								line: 1
							}
						}
						meta: JSPatternMeta {
							optional: undefined
							typeAnnotation: undefined
							loc: Object {
								filename: "esprima/declaration-function/dupe-param/input.js"
								end: Object {
									column: 15
									index: 15
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
				]
			}
		}
	]
}
```

### `diagnostics`

```

 esprima/declaration-function/dupe-param/input.js:1:14 parse/js ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Argument x name clash in strict mode

  ℹ Defined already here

    function a(x, x) {'use strict';}
                  ^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
