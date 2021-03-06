# `check.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/core/server/commands/check.test.ts --update-snapshots` to update.

## `smoke`

### `console`

```

 index.js:1 lint/js/undeclaredVariables ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ The unknownVariable variable is undeclared

    unknownVariable
    ^^^^^^^^^^^^^^^

 index.js lint/pendingFixes  FIXABLE  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Pending formatting and recommended autofixes

    1   │ - unknownVariable
      1 │ + unknownVariable;
      2 │ +

  ℹ To apply fixes and formatting run
  $ rome check index.js --apply

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ℹ Fixes available. To apply recommended fixes and formatting run
$ rome check --apply
ℹ To choose fix suggestions run
$ rome check --review
✖ Found 2 problems

```

### `files`

```
# index.js
unknownVariable

# rome.json
{
	"files": {
		"vendorPath": "../remote"
	}
}


```

## `smoke save`

### `console`

```

 index.js:1:4 lint/js/undeclaredVariables ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ The unformatted variable is undeclared

  > 1 │ if (unformatted) {
      │     ^^^^^^^^^^^
    2 │   swag;
    3 │ }

 index.js:2:1 lint/js/undeclaredVariables ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ The swag variable is undeclared

    1 │ if (unformatted) {
  > 2 │   swag;
      │   ^^^^
    3 │ }

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✔ 1 file updated
ℹ You can revert these changes with the rome recover pop command
✖ Found 2 problems

```

### `files`

```
# index.js
if (unformatted) {
	swag;
}


# rome.json
{
	"files": {
		"vendorPath": "../remote"
	}
}


```
