# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > statements > label-invalid-func-strict`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "es2015/statements/label-invalid-func-strict/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "es2015/statements/label-invalid-func-strict/input.js"
		end: Object {
			column: 0
			index: 54
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
				message: MARKUP {parts: Array [RAW_MARKUP {value: "In strict mode code, functions can only be declared at top level or inside a block"}]}
			}
			location: Object {
				filename: "es2015/statements/label-invalid-func-strict/input.js"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 34
					index: 34
					line: 1
				}
				start: Object {
					column: 35
					index: 35
					line: 1
				}
			}
		}
	]
	body: Array [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "foo"
				loc: Object {
					filename: "es2015/statements/label-invalid-func-strict/input.js"
					identifierName: "foo"
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
			}
			loc: Object {
				filename: "es2015/statements/label-invalid-func-strict/input.js"
				end: Object {
					column: 53
					index: 53
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
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
					filename: "es2015/statements/label-invalid-func-strict/input.js"
					end: Object {
						column: 14
						index: 14
						line: 1
					}
					start: Object {
						column: 12
						index: 12
						line: 1
					}
				}
			}
			body: JSBlockStatement {
				loc: Object {
					filename: "es2015/statements/label-invalid-func-strict/input.js"
					end: Object {
						column: 53
						index: 53
						line: 1
					}
					start: Object {
						column: 15
						index: 15
						line: 1
					}
				}
				directives: Array [
					JSDirective {
						value: "use strict"
						loc: Object {
							filename: "es2015/statements/label-invalid-func-strict/input.js"
							end: Object {
								column: 29
								index: 29
								line: 1
							}
							start: Object {
								column: 16
								index: 16
								line: 1
							}
						}
					}
				]
				body: Array [
					JSLabeledStatement {
						loc: Object {
							filename: "es2015/statements/label-invalid-func-strict/input.js"
							end: Object {
								column: 52
								index: 52
								line: 1
							}
							start: Object {
								column: 30
								index: 30
								line: 1
							}
						}
						label: JSIdentifier {
							name: "bar"
							loc: Object {
								filename: "es2015/statements/label-invalid-func-strict/input.js"
								identifierName: "bar"
								end: Object {
									column: 33
									index: 33
									line: 1
								}
								start: Object {
									column: 30
									index: 30
									line: 1
								}
							}
						}
						body: JSFunctionDeclaration {
							id: JSBindingIdentifier {
								name: "baz"
								loc: Object {
									filename: "es2015/statements/label-invalid-func-strict/input.js"
									identifierName: "baz"
									end: Object {
										column: 47
										index: 47
										line: 1
									}
									start: Object {
										column: 44
										index: 44
										line: 1
									}
								}
							}
							loc: Object {
								filename: "es2015/statements/label-invalid-func-strict/input.js"
								end: Object {
									column: 52
									index: 52
									line: 1
								}
								start: Object {
									column: 35
									index: 35
									line: 1
								}
							}
							body: JSBlockStatement {
								body: Array []
								directives: Array []
								loc: Object {
									filename: "es2015/statements/label-invalid-func-strict/input.js"
									end: Object {
										column: 52
										index: 52
										line: 1
									}
									start: Object {
										column: 50
										index: 50
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
									filename: "es2015/statements/label-invalid-func-strict/input.js"
									end: Object {
										column: 49
										index: 49
										line: 1
									}
									start: Object {
										column: 47
										index: 47
										line: 1
									}
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

 es2015/statements/label-invalid-func-strict/input.js:1:35 parse/js ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ In strict mode code, functions can only be declared at top level or inside a block

    function foo() {"use strict"; bar: function baz() {}}
                                       ^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
