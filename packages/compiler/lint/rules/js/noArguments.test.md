# `harness.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/compiler/lint/rules/harness.test.ts --update-snapshots` to update.

## `js/noArguments`

### `0`

```

 lint/js/noArguments/reject/1/file.ts:2:13 lint/js/noArguments ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Use the rest parameters instead of arguments.

    1 │ function f() {
  > 2 │   console.log(arguments);
      │               ^^^^^^^^^
    3 │ }

  ℹ Arguments does not have Array.prototype methods and can be inconvenient to use.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `0: formatted`

```
function f() {
	console.log(arguments);
}

```

### `1`

```

 lint/js/noArguments/reject/2/file.ts:2:13 lint/js/noArguments ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Use the rest parameters instead of arguments.

    1 │ (function () {
  > 2 │   console.log(arguments);
      │               ^^^^^^^^^
    3 │ })();

  ℹ Arguments does not have Array.prototype methods and can be inconvenient to use.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `1: formatted`

```
(function() {
	console.log(arguments);
})();

```

### `2`

```

 lint/js/noArguments/reject/3/file.ts:3:14 lint/js/noArguments ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Use the rest parameters instead of arguments.

    1 │ class C {
    2 │   fn() {
  > 3 │     console.log(arguments);
      │                 ^^^^^^^^^
    4 │   }
    5 │ }

  ℹ Arguments does not have Array.prototype methods and can be inconvenient to use.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `2: formatted`

```
class C {
	fn() {
		console.log(arguments);
	}
}

```

### `3`

```

 lint/js/noArguments/reject/4/file.ts:3:14 lint/js/noArguments ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Use the rest parameters instead of arguments.

    1 │ const o = {
    2 │   fn() {
  > 3 │     console.log(arguments);
      │                 ^^^^^^^^^
    4 │   },
    5 │ };

  ℹ Arguments does not have Array.prototype methods and can be inconvenient to use.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `3: formatted`

```
const o = {
	fn() {
		console.log(arguments);
	},
};

```
