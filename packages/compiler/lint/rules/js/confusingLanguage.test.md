# `harness.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/compiler/lint/rules/harness.test.ts --update-snapshots` to update.

## `js/confusingLanguage`

### `0`

```

 lint/js/confusingLanguage/reject/1/file.ts:1:5 lint/js/confusingLanguage  FIXABLE  ━━━━━━━━━━━━━━━━

  ✖ The word blacklist can be considered racially charged language.

    //  the  blacklist
          ^^^^^^^^^^

  ℹ See https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6148600/ for a more detailed explanation.

  ℹ Consider using denylist instead

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `0: formatted`

```
//	the	denylist

```

### `1`

```

 lint/js/confusingLanguage/reject/2/file.ts:2 lint/js/confusingLanguage  FIXABLE  ━━━━━━━━━━━━━━━━━━

  ✖ The word blacklist can be considered racially charged language.

    1 │ /*  the
  > 2 │ blacklist  */
      │ ^^^^^^^^^

  ℹ See https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6148600/ for a more detailed explanation.

  ℹ Consider using denylist instead

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `1: formatted`

```
/*	the
denylist	*/

```

### `2`

```

 lint/js/confusingLanguage/reject/3/file.ts:1 lint/js/confusingLanguage  FIXABLE  ━━━━━━━━━━━━━━━━━━

  ✖ The word blacklist can be considered racially charged language.

    blacklist;
    ^^^^^^^^^

  ℹ See https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6148600/ for a more detailed explanation.

  ℹ Consider using denylist instead

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `2: formatted`

```
denylist;

```

### `3`

```

 lint/js/confusingLanguage/reject/4/file.ts:1 lint/js/confusingLanguage  FIXABLE  ━━━━━━━━━━━━━━━━━━

  ✖ The word blacklist can be considered racially charged language.

    BLACKLIST;
    ^^^^^^^^^

  ℹ See https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6148600/ for a more detailed explanation.

  ℹ Consider using DENYLIST instead

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `3: formatted`

```
DENYLIST;

```

### `4`

```

 lint/js/confusingLanguage/reject/5/file.ts:1:4 lint/js/confusingLanguage  FIXABLE  ━━━━━━━━━━━━━━━━

  ✖ The word blacklist can be considered racially charged language.

    someBlacklist;
        ^^^^^^^^^

  ℹ See https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6148600/ for a more detailed explanation.

  ℹ Consider using Denylist instead

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `4: formatted`

```
someDenylist;

```

### `5`

```

 lint/js/confusingLanguage/reject/6/file.ts:1:5 lint/js/confusingLanguage  FIXABLE  ━━━━━━━━━━━━━━━━

  ✖ The word blacklist can be considered racially charged language.

    SOME_BLACKLIST;
         ^^^^^^^^^

  ℹ See https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6148600/ for a more detailed explanation.

  ℹ Consider using DENYLIST instead

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `5: formatted`

```
SOME_DENYLIST;

```
