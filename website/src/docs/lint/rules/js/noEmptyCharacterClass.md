---
title: Lint Rule js/noEmptyCharacterClass
layout: layouts/page.njk
description: MISSING DOCUMENTATION
eleventyNavigation:
	key: lint-rules/js/noEmptyCharacterClass
	parent: lint-rules
	title: js/noEmptyCharacterClass
---

# js/noEmptyCharacterClass

MISSING DOCUMENTATION

<!-- EVERYTHING BELOW IS AUTOGENERATED. SEE SCRIPTS FOLDER FOR UPDATE SCRIPTS hash(5933366440fae642d613ea523db475cc0be00f66) -->

## Examples
### Invalid
<pre class="language-text"><code class="language-text"><span class="token keyword">let</span> <span class="token variable">foo</span> <span class="token operator">=</span> <span class="token regex">/^abc[]/</span><span class="token punctuation">;</span><span class="token variable">foo</span><span class="token punctuation">;</span></code></pre>
<pre class="language-text"><code class="language-text">
 <span style="text-decoration-style: dotted;">file.ts:1:15</span> <strong>lint/js/noEmptyCharacterClass</strong> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  <strong><span style="color: Tomato;">✖ </span></strong><span style="color: Tomato;">Do not use </span><span style="color: Tomato;"><strong>empty character classes in regular expressions</strong></span><span style="color: Tomato;">.</span>

    <span class="token keyword">let</span> <span class="token variable">foo</span> <span class="token operator">=</span> <span class="token regex">/^abc[]/</span><span class="token punctuation">;</span><span class="token variable">foo</span><span class="token punctuation">;</span>
                   <span style="color: Tomato;"><strong>^</strong></span>

  <strong><span style="color: DodgerBlue;">ℹ </span></strong><span style="color: DodgerBlue;">Empty character classes are usually typos.</span>

</code></pre>

---------------

<pre class="language-text"><code class="language-text"><span class="token keyword">let</span> <span class="token variable">foo</span> <span class="token operator">=</span> <span class="token regex">/foo[]bar/</span><span class="token punctuation">;</span><span class="token variable">foo</span><span class="token punctuation">;</span></code></pre>
<pre class="language-text"><code class="language-text">
 <span style="text-decoration-style: dotted;">file.ts:1:14</span> <strong>lint/js/noEmptyCharacterClass</strong> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  <strong><span style="color: Tomato;">✖ </span></strong><span style="color: Tomato;">Do not use </span><span style="color: Tomato;"><strong>empty character classes in regular expressions</strong></span><span style="color: Tomato;">.</span>

    <span class="token keyword">let</span> <span class="token variable">foo</span> <span class="token operator">=</span> <span class="token regex">/foo[]bar/</span><span class="token punctuation">;</span><span class="token variable">foo</span><span class="token punctuation">;</span>
                  <span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span>

  <strong><span style="color: DodgerBlue;">ℹ </span></strong><span style="color: DodgerBlue;">Empty character classes are usually typos.</span>

</code></pre>

---------------

<pre class="language-text"><code class="language-text"><span class="token punctuation">;</span><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">foo</span><span class="token punctuation">.</span><span class="token variable">match</span><span class="token punctuation">(</span><span class="token regex">/^abc[]/</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token variable">foo</span><span class="token punctuation">;</span> <span class="token punctuation">}</span></code></pre>
<pre class="language-text"><code class="language-text">
 <span style="text-decoration-style: dotted;">file.ts:1:20</span> <strong>lint/js/noEmptyCharacterClass</strong> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  <strong><span style="color: Tomato;">✖ </span></strong><span style="color: Tomato;">Do not use </span><span style="color: Tomato;"><strong>empty character classes in regular expressions</strong></span><span style="color: Tomato;">.</span>

    <span class="token punctuation">;</span><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">foo</span><span class="token punctuation">.</span><span class="token variable">match</span><span class="token punctuation">(</span><span class="token regex">/^abc[]/</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token variable">foo</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
                        <span style="color: Tomato;"><strong>^</strong></span>

  <strong><span style="color: DodgerBlue;">ℹ </span></strong><span style="color: DodgerBlue;">Empty character classes are usually typos.</span>

</code></pre>

---------------

<pre class="language-text"><code class="language-text"><span class="token keyword">let</span> <span class="token variable">foo</span> <span class="token operator">=</span> <span class="token regex">/[]]/</span><span class="token punctuation">;</span><span class="token variable">foo</span><span class="token punctuation">;</span></code></pre>
<pre class="language-text"><code class="language-text">
 <span style="text-decoration-style: dotted;">file.ts:1:11</span> <strong>lint/js/noEmptyCharacterClass</strong> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  <strong><span style="color: Tomato;">✖ </span></strong><span style="color: Tomato;">Do not use </span><span style="color: Tomato;"><strong>empty character classes in regular expressions</strong></span><span style="color: Tomato;">.</span>

    <span class="token keyword">let</span> <span class="token variable">foo</span> <span class="token operator">=</span> <span class="token regex">/[]]/</span><span class="token punctuation">;</span><span class="token variable">foo</span><span class="token punctuation">;</span>
               <span style="color: Tomato;"><strong>^</strong></span><span style="color: Tomato;"><strong>^</strong></span>

  <strong><span style="color: DodgerBlue;">ℹ </span></strong><span style="color: DodgerBlue;">Empty character classes are usually typos.</span>

</code></pre>

---------------

<pre class="language-text"><code class="language-text"><span class="token keyword">let</span> <span class="token variable">foo</span> <span class="token operator">=</span> <span class="token regex">/\[[]/</span><span class="token punctuation">;</span><span class="token variable">foo</span><span class="token punctuation">;</span></code></pre>
<pre class="language-text"><code class="language-text">
 <span style="text-decoration-style: dotted;">file.ts:1:13</span> <strong>lint/js/noEmptyCharacterClass</strong> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  <strong><span style="color: Tomato;">✖ </span></strong><span style="color: Tomato;">Do not use </span><span style="color: Tomato;"><strong>empty character classes in regular expressions</strong></span><span style="color: Tomato;">.</span>

    <span class="token keyword">let</span> <span class="token variable">foo</span> <span class="token operator">=</span> <span class="token regex">/\[[]/</span><span class="token punctuation">;</span><span class="token variable">foo</span><span class="token punctuation">;</span>
                 <span style="color: Tomato;"><strong>^</strong></span>

  <strong><span style="color: DodgerBlue;">ℹ </span></strong><span style="color: DodgerBlue;">Empty character classes are usually typos.</span>

</code></pre>

---------------

<pre class="language-text"><code class="language-text"><span class="token keyword">let</span> <span class="token variable">foo</span> <span class="token operator">=</span> <span class="token regex">/\[\[\]a-z[]/</span><span class="token punctuation">;</span><span class="token variable">foo</span><span class="token punctuation">;</span></code></pre>
<pre class="language-text"><code class="language-text">
 <span style="text-decoration-style: dotted;">file.ts:1:20</span> <strong>lint/js/noEmptyCharacterClass</strong> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  <strong><span style="color: Tomato;">✖ </span></strong><span style="color: Tomato;">Do not use </span><span style="color: Tomato;"><strong>empty character classes in regular expressions</strong></span><span style="color: Tomato;">.</span>

    <span class="token keyword">let</span> <span class="token variable">foo</span> <span class="token operator">=</span> <span class="token regex">/\[\[\]a-z[]/</span><span class="token punctuation">;</span><span class="token variable">foo</span><span class="token punctuation">;</span>
                        <span style="color: Tomato;"><strong>^</strong></span>

  <strong><span style="color: DodgerBlue;">ℹ </span></strong><span style="color: DodgerBlue;">Empty character classes are usually typos.</span>

</code></pre>
### Valid
<pre class="language-text"><code class="language-text"><span class="token keyword">let</span> <span class="token variable">foo</span> <span class="token operator">=</span> <span class="token regex">/^abc[a-zA-Z]/</span><span class="token punctuation">;</span><span class="token variable">foo</span><span class="token punctuation">;</span></code></pre>
<pre class="language-text"><code class="language-text"><span class="token keyword">let</span> <span class="token variable">regExp</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token variable">RegExp</span><span class="token punctuation">(</span><span class="token string">&apos;^abc[]&apos;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token variable">regExp</span><span class="token punctuation">;</span></code></pre>
<pre class="language-text"><code class="language-text"><span class="token keyword">let</span> <span class="token variable">foo</span> <span class="token operator">=</span> <span class="token regex">/^abc/</span><span class="token punctuation">;</span><span class="token variable">foo</span><span class="token punctuation">;</span></code></pre>
<pre class="language-text"><code class="language-text"><span class="token keyword">let</span> <span class="token variable">foo</span> <span class="token operator">=</span> <span class="token regex">/[\[]/</span><span class="token punctuation">;</span><span class="token variable">foo</span><span class="token punctuation">;</span></code></pre>
<pre class="language-text"><code class="language-text"><span class="token keyword">let</span> <span class="token variable">foo</span> <span class="token operator">=</span> <span class="token regex">/[\]]/</span><span class="token punctuation">;</span><span class="token variable">foo</span><span class="token punctuation">;</span></code></pre>
<pre class="language-text"><code class="language-text"><span class="token keyword">let</span> <span class="token variable">foo</span> <span class="token operator">=</span> <span class="token regex">/[a-zA-Z\[]/</span><span class="token punctuation">;</span><span class="token variable">foo</span><span class="token punctuation">;</span></code></pre>
<pre class="language-text"><code class="language-text"><span class="token keyword">let</span> <span class="token variable">foo</span> <span class="token operator">=</span> <span class="token regex">/[[]/</span><span class="token punctuation">;</span><span class="token variable">foo</span><span class="token punctuation">;</span></code></pre>
<pre class="language-text"><code class="language-text"><span class="token keyword">let</span> <span class="token variable">foo</span> <span class="token operator">=</span> <span class="token regex">/[\[a-z[]]/</span><span class="token punctuation">;</span><span class="token variable">foo</span><span class="token punctuation">;</span></code></pre>
<pre class="language-text"><code class="language-text"><span class="token keyword">let</span> <span class="token variable">foo</span> <span class="token operator">=</span> <span class="token regex">/[\-\[\]\/\{\}\(\)\*\+\?\.\\^\$\|]/g</span><span class="token punctuation">;</span><span class="token variable">foo</span><span class="token punctuation">;</span></code></pre>
<pre class="language-text"><code class="language-text"><span class="token keyword">let</span> <span class="token variable">foo</span> <span class="token operator">=</span> <span class="token regex">/[\]]/uy</span><span class="token punctuation">;</span><span class="token variable">foo</span><span class="token punctuation">;</span></code></pre>
<pre class="language-text"><code class="language-text"><span class="token keyword">let</span> <span class="token variable">foo</span> <span class="token operator">=</span> <span class="token regex">/[\]]/s</span><span class="token punctuation">;</span><span class="token variable">foo</span><span class="token punctuation">;</span></code></pre>
<pre class="language-text"><code class="language-text"><span class="token keyword">let</span> <span class="token variable">foo</span> <span class="token operator">=</span> <span class="token regex">/\[]/</span><span class="token punctuation">;</span><span class="token variable">foo</span><span class="token punctuation">;</span></code></pre>
