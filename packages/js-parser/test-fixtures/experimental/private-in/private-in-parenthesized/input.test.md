# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/js-parser/index.test.ts --update-snapshots` to update.

## `experimental > private-in > private-in-parenthesized`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: true
	directives: Array []
	filename: "experimental/private-in/private-in-parenthesized/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "experimental/private-in/private-in-parenthesized/input.js"
		end: Object {
			column: 0
			index: 55
			line: 7
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
				message: MARKUP {
					parts: Array [
						RAW_MARKUP {value: "Unknown start to an "}
						"statement expression"
					]
				}
			}
			location: Object {
				filename: "experimental/private-in/private-in-parenthesized/input.js"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 5
					index: 38
					line: 4
				}
				start: Object {
					column: 5
					index: 38
					line: 4
				}
			}
		}
	]
	body: Array [
		JSClassDeclaration {
			id: JSBindingIdentifier {
				name: "Foo"
				loc: Object {
					filename: "experimental/private-in/private-in-parenthesized/input.js"
					identifierName: "Foo"
					end: Object {
						column: 9
						index: 9
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
				filename: "experimental/private-in/private-in-parenthesized/input.js"
				end: Object {
					column: 1
					index: 54
					line: 6
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
					filename: "experimental/private-in/private-in-parenthesized/input.js"
					end: Object {
						column: 1
						index: 54
						line: 6
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
				body: Array [
					JSClassPrivateProperty {
						key: JSPrivateName {
							id: JSIdentifier {
								name: "x"
								loc: Object {
									filename: "experimental/private-in/private-in-parenthesized/input.js"
									identifierName: "x"
									end: Object {
										column: 4
										index: 16
										line: 2
									}
									start: Object {
										column: 3
										index: 15
										line: 2
									}
								}
							}
							loc: Object {
								filename: "experimental/private-in/private-in-parenthesized/input.js"
								end: Object {
									column: 4
									index: 16
									line: 2
								}
								start: Object {
									column: 2
									index: 14
									line: 2
								}
							}
						}
						value: JSNumericLiteral {
							value: 1
							format: undefined
							loc: Object {
								filename: "experimental/private-in/private-in-parenthesized/input.js"
								end: Object {
									column: 8
									index: 20
									line: 2
								}
								start: Object {
									column: 7
									index: 19
									line: 2
								}
							}
						}
						typeAnnotation: undefined
						loc: Object {
							filename: "experimental/private-in/private-in-parenthesized/input.js"
							end: Object {
								column: 9
								index: 21
								line: 2
							}
							start: Object {
								column: 2
								index: 14
								line: 2
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
								column: 2
								index: 14
								line: 2
							}
							loc: Object {
								filename: "experimental/private-in/private-in-parenthesized/input.js"
								end: Object {
									column: 4
									index: 16
									line: 2
								}
								start: Object {
									column: 2
									index: 14
									line: 2
								}
							}
						}
					}
					JSClassMethod {
						kind: "method"
						key: JSStaticPropertyKey {
							value: JSIdentifier {
								name: "test"
								loc: Object {
									filename: "experimental/private-in/private-in-parenthesized/input.js"
									identifierName: "test"
									end: Object {
										column: 6
										index: 28
										line: 3
									}
									start: Object {
										column: 2
										index: 24
										line: 3
									}
								}
							}
							loc: Object {
								filename: "experimental/private-in/private-in-parenthesized/input.js"
								end: Object {
									column: 6
									index: 28
									line: 3
								}
								start: Object {
									column: 2
									index: 24
									line: 3
								}
							}
						}
						loc: Object {
							filename: "experimental/private-in/private-in-parenthesized/input.js"
							end: Object {
								column: 3
								index: 52
								line: 5
							}
							start: Object {
								column: 2
								index: 24
								line: 3
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
								filename: "experimental/private-in/private-in-parenthesized/input.js"
								end: Object {
									column: 8
									index: 30
									line: 3
								}
								start: Object {
									column: 6
									index: 28
									line: 3
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
								column: 2
								index: 24
								line: 3
							}
							loc: Object {
								filename: "experimental/private-in/private-in-parenthesized/input.js"
								end: Object {
									column: 6
									index: 28
									line: 3
								}
								start: Object {
									column: 2
									index: 24
									line: 3
								}
							}
						}
						body: JSBlockStatement {
							directives: Array []
							loc: Object {
								filename: "experimental/private-in/private-in-parenthesized/input.js"
								end: Object {
									column: 3
									index: 52
									line: 5
								}
								start: Object {
									column: 9
									index: 31
									line: 3
								}
							}
							body: Array [
								JSExpressionStatement {
									loc: Object {
										filename: "experimental/private-in/private-in-parenthesized/input.js"
										end: Object {
											column: 6
											index: 39
											line: 4
										}
										start: Object {
											column: 4
											index: 37
											line: 4
										}
									}
									expression: JSReferenceIdentifier {
										name: "INVALID_PLACEHOLDER"
										loc: Object {
											filename: "experimental/private-in/private-in-parenthesized/input.js"
											end: Object {
												column: 6
												index: 39
												line: 4
											}
											start: Object {
												column: 5
												index: 38
												line: 4
											}
										}
									}
								}
								JSExpressionStatement {
									loc: Object {
										filename: "experimental/private-in/private-in-parenthesized/input.js"
										end: Object {
											column: 7
											index: 40
											line: 4
										}
										start: Object {
											column: 6
											index: 39
											line: 4
										}
									}
									expression: JSReferenceIdentifier {
										name: "x"
										loc: Object {
											filename: "experimental/private-in/private-in-parenthesized/input.js"
											identifierName: "x"
											end: Object {
												column: 7
												index: 40
												line: 4
											}
											start: Object {
												column: 6
												index: 39
												line: 4
											}
										}
									}
								}
								JSExpressionStatement {
									loc: Object {
										filename: "experimental/private-in/private-in-parenthesized/input.js"
										end: Object {
											column: 15
											index: 48
											line: 4
										}
										start: Object {
											column: 7
											index: 40
											line: 4
										}
									}
									expression: JSBinaryExpression {
										operator: "in"
										loc: Object {
											filename: "experimental/private-in/private-in-parenthesized/input.js"
											end: Object {
												column: 14
												index: 47
												line: 4
											}
											start: Object {
												column: 7
												index: 40
												line: 4
											}
										}
										left: JSReferenceIdentifier {
											name: "INVALID_PLACEHOLDER"
											loc: Object {
												filename: "experimental/private-in/private-in-parenthesized/input.js"
												end: Object {
													column: 8
													index: 41
													line: 4
												}
												start: Object {
													column: 7
													index: 40
													line: 4
												}
											}
										}
										right: JSObjectExpression {
											properties: Array []
											loc: Object {
												filename: "experimental/private-in/private-in-parenthesized/input.js"
												end: Object {
													column: 14
													index: 47
													line: 4
												}
												start: Object {
													column: 12
													index: 45
													line: 4
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
		}
	]
}
```

### `diagnostics`

```

 experimental/private-in/private-in-parenthesized/input.js:4:5 parse/js ━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unknown start to an statement expression

    2 │   #x = 1;
    3 │   test() {
  > 4 │     (#x) in {};
      │      ^
    5 │   }
    6 │ }

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
