# `harness.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/compiler/lint/rules/harness.test.ts --update-snapshots` to update.

## `jsx-a11y/mediaHasCaption`

### `0`

```

 lint/jsx-a11y/mediaHasCaption/reject/1/file.tsx:1 lint/jsx-a11y/mediaHasCaption ━━━━━━━━━━━━━━━━━━━

  ✖ Provide a track for captions when using audio or video elements.

    <audio {...props} />
    ^^^^^^^^^^^^^^^^^^^^

  ℹ Captions support users with hearing-impairments. They should be a transcription or translation
    of the dialogue, sound effects, musical cues, and other relevant audio information.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `0: formatted`

```
<audio {...props} />;

```

### `1`

```

 lint/jsx-a11y/mediaHasCaption/reject/2/file.tsx:1 lint/jsx-a11y/mediaHasCaption ━━━━━━━━━━━━━━━━━━━

  ✖ Provide a track for captions when using audio or video elements.

    <video {...props} />
    ^^^^^^^^^^^^^^^^^^^^

  ℹ Captions support users with hearing-impairments. They should be a transcription or translation
    of the dialogue, sound effects, musical cues, and other relevant audio information.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `1: formatted`

```
<video {...props} />;

```

### `2`

```

 lint/jsx-a11y/mediaHasCaption/reject/3/file.tsx:1 lint/jsx-a11y/mediaHasCaption ━━━━━━━━━━━━━━━━━━━

  ✖ Provide a track for captions when using audio or video elements.

    <audio>child</audio>
    ^^^^^^^^^^^^^^^^^^^^

  ℹ Captions support users with hearing-impairments. They should be a transcription or translation
    of the dialogue, sound effects, musical cues, and other relevant audio information.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `2: formatted`

```
<audio>
	child
</audio>;

```

### `3`

```

 lint/jsx-a11y/mediaHasCaption/reject/4/file.tsx:1:1 parse/js ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Expected a corresponding JSX closing tag for video

  ℹ Originated from opening tag of video

    <video>child</audio>
     ^^^^^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `3: formatted`

```javascript
undefined
```

### `4`

```
✔ No known problems!

```

### `4: formatted`

```
<audio>
	<track kind="captions" {...props} />
</audio>;

```

### `5`

```
✔ No known problems!

```

### `5: formatted`

```
<video>
	<track kind="captions" {...props} />
</video>;

```

### `6`

```
✔ No known problems!

```

### `6: formatted`

```
<video muted={true} {...props}>
</video>;

```
