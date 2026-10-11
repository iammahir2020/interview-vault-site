var e=[{id:`ex-flatten`,domain:`frontend`,slug:`flatten`,title:`Flatten a nested array`,difficulty:`easy`,tags:[`arrays`,`recursion`],topics:[`frontend/javascript`],prompt:"Write `flatten(arr)` that turns `[1, [2, [3, [4]]], 5]` into `[1, 2, 3, 4, 5]` without using `Array.prototype.flat`.",hints:[`Each item is either a value or another array. What do you do with an array? The same thing again.`],solution:`\`\`\`js
const flatten = (arr) =>
  arr.reduce((acc, x) => acc.concat(Array.isArray(x) ? flatten(x) : x), []);

// built-in: arr.flat(Infinity)
\`\`\`
For very deep inputs, mention an iterative version with an explicit stack to avoid a stack overflow.`,hook:`🪆 Open every doll until there are no dolls left inside.`,html:{prompt:`<p>Write <code>flatten(arr)</code> that turns <code>[1, [2, [3, [4]]], 5]</code> into <code>[1, 2, 3, 4, 5]</code> without using <code>Array.prototype.flat</code>.</p>`,hints:[`<p>Each item is either a value or another array. What do you do with an array? The same thing again.</p>`],solution:`<div class="codeblock"><pre tabindex="0"><code class="language-js hljs"><span class="hljs-keyword">const</span> <span class="hljs-title function_">flatten</span> = (<span class="hljs-params">arr</span>) =>
  arr.<span class="hljs-title function_">reduce</span>(<span class="hljs-function">(<span class="hljs-params">acc, x</span>) =></span> acc.<span class="hljs-title function_">concat</span>(<span class="hljs-title class_">Array</span>.<span class="hljs-title function_">isArray</span>(x) ? <span class="hljs-title function_">flatten</span>(x) : x), []);

<span class="hljs-comment">// built-in: arr.flat(Infinity)</span>
</code></pre><button type="button" class="copy-btn" aria-label="Copy code">Copy</button></div>
<p>For very deep inputs, mention an iterative version with an explicit stack to avoid a stack overflow.</p>`,hook:`<p>🪆 Open every doll until there are no dolls left inside.</p>`}},{id:`ex-debounce`,domain:`frontend`,slug:`debounce`,title:`Implement debounce`,difficulty:`easy`,tags:[`closures`,`timers`],topics:[`frontend/javascript`],prompt:"Write `debounce(fn, ms)`. The returned function should call `fn` only after it has stopped being called for `ms` milliseconds, passing along the latest arguments.",hints:[`You need a variable that survives between calls. Where can it live? (Think closures.)`,`Every call should cancel the previously scheduled call and schedule a new one.`],solution:"```js\nfunction debounce(fn, ms) {\n  let timer;\n  return (...args) => {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn(...args), ms);\n  };\n}\n```\nEdge cases to mention: `this` binding (use a regular function and `fn.apply(this, args)` if needed), a `cancel()` method, and a leading-edge option.",hook:`🛗 Every new person entering resets the lift door timer.`,html:{prompt:`<p>Write <code>debounce(fn, ms)</code>. The returned function should call <code>fn</code> only after it has stopped being called for <code>ms</code> milliseconds, passing along the latest arguments.</p>`,hints:[`<p>You need a variable that survives between calls. Where can it live? (Think closures.)</p>`,`<p>Every call should cancel the previously scheduled call and schedule a new one.</p>`],solution:`<div class="codeblock"><pre tabindex="0"><code class="language-js hljs"><span class="hljs-keyword">function</span> <span class="hljs-title function_">debounce</span>(<span class="hljs-params">fn, ms</span>) {
  <span class="hljs-keyword">let</span> timer;
  <span class="hljs-keyword">return</span> <span class="hljs-function">(<span class="hljs-params">...args</span>) =></span> {
    <span class="hljs-built_in">clearTimeout</span>(timer);
    timer = <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =></span> <span class="hljs-title function_">fn</span>(...args), ms);
  };
}
</code></pre><button type="button" class="copy-btn" aria-label="Copy code">Copy</button></div>
<p>Edge cases to mention: <code>this</code> binding (use a regular function and <code>fn.apply(this, args)</code> if needed), a <code>cancel()</code> method, and a leading-edge option.</p>`,hook:`<p>🛗 Every new person entering resets the lift door timer.</p>`}},{id:`ex-deep-clone`,domain:`frontend`,slug:`deep-clone`,title:`Implement deep clone`,difficulty:`medium`,tags:[`objects`,`recursion`],topics:[`frontend/javascript`],prompt:"Write `deepClone(value)` that copies nested objects and arrays so that changing the copy never affects the original. Handle `Date`, and don't loop forever on circular references.",hints:[`Primitives can be returned as they are. Objects and arrays need recursion.`,"Use a `WeakMap` from original to copy to handle cycles."],solution:`\`\`\`js
function deepClone(value, seen = new WeakMap()) {
  if (value === null || typeof value !== 'object') return value;
  if (value instanceof Date) return new Date(value);
  if (seen.has(value)) return seen.get(value);
  const copy = Array.isArray(value) ? [] : Object.create(Object.getPrototypeOf(value));
  seen.set(value, copy);
  for (const key of Reflect.ownKeys(value)) copy[key] = deepClone(value[key], seen);
  return copy;
}
// built-in today: structuredClone(value)
\`\`\``,hook:`📸 Photocopy every page, and remember which pages you've already copied.`,html:{prompt:`<p>Write <code>deepClone(value)</code> that copies nested objects and arrays so that changing the copy never affects the original. Handle <code>Date</code>, and don't loop forever on circular references.</p>`,hints:[`<p>Primitives can be returned as they are. Objects and arrays need recursion.</p>`,`<p>Use a <code>WeakMap</code> from original to copy to handle cycles.</p>`],solution:`<div class="codeblock"><pre tabindex="0"><code class="language-js hljs"><span class="hljs-keyword">function</span> <span class="hljs-title function_">deepClone</span>(<span class="hljs-params">value, seen = <span class="hljs-keyword">new</span> <span class="hljs-built_in">WeakMap</span>()</span>) {
  <span class="hljs-keyword">if</span> (value === <span class="hljs-literal">null</span> || <span class="hljs-keyword">typeof</span> value !== <span class="hljs-string">'object'</span>) <span class="hljs-keyword">return</span> value;
  <span class="hljs-keyword">if</span> (value <span class="hljs-keyword">instanceof</span> <span class="hljs-title class_">Date</span>) <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(value);
  <span class="hljs-keyword">if</span> (seen.<span class="hljs-title function_">has</span>(value)) <span class="hljs-keyword">return</span> seen.<span class="hljs-title function_">get</span>(value);
  <span class="hljs-keyword">const</span> copy = <span class="hljs-title class_">Array</span>.<span class="hljs-title function_">isArray</span>(value) ? [] : <span class="hljs-title class_">Object</span>.<span class="hljs-title function_">create</span>(<span class="hljs-title class_">Object</span>.<span class="hljs-title function_">getPrototypeOf</span>(value));
  seen.<span class="hljs-title function_">set</span>(value, copy);
  <span class="hljs-keyword">for</span> (<span class="hljs-keyword">const</span> key <span class="hljs-keyword">of</span> <span class="hljs-title class_">Reflect</span>.<span class="hljs-title function_">ownKeys</span>(value)) copy[key] = <span class="hljs-title function_">deepClone</span>(value[key], seen);
  <span class="hljs-keyword">return</span> copy;
}
<span class="hljs-comment">// built-in today: structuredClone(value)</span>
</code></pre><button type="button" class="copy-btn" aria-label="Copy code">Copy</button></div>`,hook:`<p>📸 Photocopy every page, and remember which pages you've already copied.</p>`}},{id:`ex-group-by`,domain:`frontend`,slug:`group-by`,title:`Implement groupBy`,difficulty:`easy`,tags:[`arrays`,`reduce`],topics:[`frontend/javascript`],prompt:"Write `groupBy(items, keyFn)` that returns an object mapping each key to the array of items with that key, e.g. grouping orders by status.",hints:["`reduce` into an object, creating each group's array the first time you see its key."],solution:`\`\`\`js
const groupBy = (items, keyFn) =>
  items.reduce((groups, item) => {
    const key = keyFn(item);
    (groups[key] ??= []).push(item);
    return groups;
  }, {});

// built-in: Object.groupBy(items, keyFn)
\`\`\``,hook:`🗃️ Drop each card into the drawer with its label, making the drawer if it doesn't exist yet.`,html:{prompt:`<p>Write <code>groupBy(items, keyFn)</code> that returns an object mapping each key to the array of items with that key, e.g. grouping orders by status.</p>`,hints:[`<p><code>reduce</code> into an object, creating each group's array the first time you see its key.</p>`],solution:`<div class="codeblock"><pre tabindex="0"><code class="language-js hljs"><span class="hljs-keyword">const</span> <span class="hljs-title function_">groupBy</span> = (<span class="hljs-params">items, keyFn</span>) =>
  items.<span class="hljs-title function_">reduce</span>(<span class="hljs-function">(<span class="hljs-params">groups, item</span>) =></span> {
    <span class="hljs-keyword">const</span> key = <span class="hljs-title function_">keyFn</span>(item);
    (groups[key] ??= []).<span class="hljs-title function_">push</span>(item);
    <span class="hljs-keyword">return</span> groups;
  }, {});

<span class="hljs-comment">// built-in: Object.groupBy(items, keyFn)</span>
</code></pre><button type="button" class="copy-btn" aria-label="Copy code">Copy</button></div>`,hook:`<p>🗃️ Drop each card into the drawer with its label, making the drawer if it doesn't exist yet.</p>`}},{id:`ex-memoize`,domain:`frontend`,slug:`memoize`,title:`Implement memoize`,difficulty:`medium`,tags:[`closures`,`caching`],topics:[`frontend/javascript`],prompt:"Write `memoize(fn)` that caches results by arguments, so repeated calls with the same arguments return the cached result without calling `fn` again.",hints:[`The cache lives in a closure. What makes a good key for a list of arguments?`],solution:`\`\`\`js
function memoize(fn, key = (...args) => JSON.stringify(args)) {
  const cache = new Map();
  return (...args) => {
    const k = key(...args);
    if (!cache.has(k)) cache.set(k, fn(...args));
    return cache.get(k);
  };
}
\`\`\`
Mention the trade-offs: \`JSON.stringify\` keys fail for functions and object identity, and an unbounded cache can leak memory (use an LRU, or a \`WeakMap\` keyed by object).`,hook:`🧠 Work out the answer once; after that, just remember it.`,html:{prompt:`<p>Write <code>memoize(fn)</code> that caches results by arguments, so repeated calls with the same arguments return the cached result without calling <code>fn</code> again.</p>`,hints:[`<p>The cache lives in a closure. What makes a good key for a list of arguments?</p>`],solution:`<div class="codeblock"><pre tabindex="0"><code class="language-js hljs"><span class="hljs-keyword">function</span> <span class="hljs-title function_">memoize</span>(<span class="hljs-params">fn, key = (...args) => <span class="hljs-built_in">JSON</span>.stringify(args)</span>) {
  <span class="hljs-keyword">const</span> cache = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Map</span>();
  <span class="hljs-keyword">return</span> <span class="hljs-function">(<span class="hljs-params">...args</span>) =></span> {
    <span class="hljs-keyword">const</span> k = <span class="hljs-title function_">key</span>(...args);
    <span class="hljs-keyword">if</span> (!cache.<span class="hljs-title function_">has</span>(k)) cache.<span class="hljs-title function_">set</span>(k, <span class="hljs-title function_">fn</span>(...args));
    <span class="hljs-keyword">return</span> cache.<span class="hljs-title function_">get</span>(k);
  };
}
</code></pre><button type="button" class="copy-btn" aria-label="Copy code">Copy</button></div>
<p>Mention the trade-offs: <code>JSON.stringify</code> keys fail for functions and object identity, and an unbounded cache can leak memory (use an LRU, or a <code>WeakMap</code> keyed by object).</p>`,hook:`<p>🧠 Work out the answer once; after that, just remember it.</p>`}},{id:`ex-promise-all`,domain:`frontend`,slug:`promise-all`,title:`Implement Promise.all`,difficulty:`medium`,tags:[`promises`,`async`],topics:[`frontend/javascript`],prompt:"Write `promiseAll(items)` that behaves like `Promise.all`: resolve with all values **in input order**, reject as soon as any item rejects, and accept non-promise values too.",hints:[`Results arrive in any order. How do you keep them in input order?`,`You need a counter of how many have finished, and the empty-array case resolves immediately.`],solution:`\`\`\`js
function promiseAll(items) {
  return new Promise((resolve, reject) => {
    const results = [];
    let done = 0;
    if (items.length === 0) return resolve(results);
    items.forEach((item, i) => {
      Promise.resolve(item).then((value) => {
        results[i] = value;
        if (++done === items.length) resolve(results);
      }, reject);
    });
  });
}
\`\`\``,hook:`🏃 Wait for the whole team at the finish line, but the race ends the moment anyone falls.`,html:{prompt:`<p>Write <code>promiseAll(items)</code> that behaves like <code>Promise.all</code>: resolve with all values <strong>in input order</strong>, reject as soon as any item rejects, and accept non-promise values too.</p>`,hints:[`<p>Results arrive in any order. How do you keep them in input order?</p>`,`<p>You need a counter of how many have finished, and the empty-array case resolves immediately.</p>`],solution:`<div class="codeblock"><pre tabindex="0"><code class="language-js hljs"><span class="hljs-keyword">function</span> <span class="hljs-title function_">promiseAll</span>(<span class="hljs-params">items</span>) {
  <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve, reject</span>) =></span> {
    <span class="hljs-keyword">const</span> results = [];
    <span class="hljs-keyword">let</span> done = <span class="hljs-number">0</span>;
    <span class="hljs-keyword">if</span> (items.<span class="hljs-property">length</span> === <span class="hljs-number">0</span>) <span class="hljs-keyword">return</span> <span class="hljs-title function_">resolve</span>(results);
    items.<span class="hljs-title function_">forEach</span>(<span class="hljs-function">(<span class="hljs-params">item, i</span>) =></span> {
      <span class="hljs-title class_">Promise</span>.<span class="hljs-title function_">resolve</span>(item).<span class="hljs-title function_">then</span>(<span class="hljs-function">(<span class="hljs-params">value</span>) =></span> {
        results[i] = value;
        <span class="hljs-keyword">if</span> (++done === items.<span class="hljs-property">length</span>) <span class="hljs-title function_">resolve</span>(results);
      }, reject);
    });
  });
}
</code></pre><button type="button" class="copy-btn" aria-label="Copy code">Copy</button></div>`,hook:`<p>🏃 Wait for the whole team at the finish line, but the race ends the moment anyone falls.</p>`}},{id:`ex-throttle`,domain:`frontend`,slug:`throttle`,title:`Implement throttle`,difficulty:`easy`,tags:[`closures`,`timers`],topics:[`frontend/javascript`],prompt:"Write `throttle(fn, ms)`. The returned function should call `fn` at most once every `ms` milliseconds, however often it's called.",hints:[`Remember the time of the last call that actually ran.`,"On each call, compare `Date.now()` with that timestamp."],solution:`\`\`\`js
function throttle(fn, ms) {
  let last = 0;
  return (...args) => {
    const now = Date.now();
    if (now - last >= ms) {
      last = now;
      fn(...args);
    }
  };
}
\`\`\`
Mention that this version drops trailing calls; a trailing-edge version schedules one final call with the latest arguments.`,hook:`🚪 A turnstile: one person per second, everyone else waits or leaves.`,html:{prompt:`<p>Write <code>throttle(fn, ms)</code>. The returned function should call <code>fn</code> at most once every <code>ms</code> milliseconds, however often it's called.</p>`,hints:[`<p>Remember the time of the last call that actually ran.</p>`,`<p>On each call, compare <code>Date.now()</code> with that timestamp.</p>`],solution:`<div class="codeblock"><pre tabindex="0"><code class="language-js hljs"><span class="hljs-keyword">function</span> <span class="hljs-title function_">throttle</span>(<span class="hljs-params">fn, ms</span>) {
  <span class="hljs-keyword">let</span> last = <span class="hljs-number">0</span>;
  <span class="hljs-keyword">return</span> <span class="hljs-function">(<span class="hljs-params">...args</span>) =></span> {
    <span class="hljs-keyword">const</span> now = <span class="hljs-title class_">Date</span>.<span class="hljs-title function_">now</span>();
    <span class="hljs-keyword">if</span> (now - last >= ms) {
      last = now;
      <span class="hljs-title function_">fn</span>(...args);
    }
  };
}
</code></pre><button type="button" class="copy-btn" aria-label="Copy code">Copy</button></div>
<p>Mention that this version drops trailing calls; a trailing-edge version schedules one final call with the latest arguments.</p>`,hook:`<p>🚪 A turnstile: one person per second, everyone else waits or leaves.</p>`}},{id:`ex-use-debounce`,domain:`frontend`,slug:`use-debounce`,title:`Write a useDebounce hook`,difficulty:`medium`,tags:[`hooks`,`timers`],topics:[`frontend/react`],prompt:"Write `useDebounce(value, ms)` that returns `value` only after it has stopped changing for `ms` milliseconds. Typical use: debounce a search input before fetching.",hints:[`Keep the debounced value in state, and update it from an effect.`,"The effect's cleanup is what cancels the pending timer when `value` changes again."],solution:`\`\`\`tsx
function useDebounce<T>(value: T, ms = 300): T {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), ms);
    return () => clearTimeout(t);
  }, [value, ms]);
  return debounced;
}
\`\`\``,hook:`🧹 The cleanup is the "never mind" that cancels the last timer.`,html:{prompt:`<p>Write <code>useDebounce(value, ms)</code> that returns <code>value</code> only after it has stopped changing for <code>ms</code> milliseconds. Typical use: debounce a search input before fetching.</p>`,hints:[`<p>Keep the debounced value in state, and update it from an effect.</p>`,`<p>The effect's cleanup is what cancels the pending timer when <code>value</code> changes again.</p>`],solution:`<div class="codeblock"><pre tabindex="0"><code class="language-tsx hljs"><span class="hljs-keyword">function</span> useDebounce&#x3C;T>(<span class="hljs-attr">value</span>: T, ms = <span class="hljs-number">300</span>): T {
  <span class="hljs-keyword">const</span> [debounced, setDebounced] = <span class="hljs-title function_">useState</span>(value);
  <span class="hljs-title function_">useEffect</span>(<span class="hljs-function">() =></span> {
    <span class="hljs-keyword">const</span> t = <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =></span> <span class="hljs-title function_">setDebounced</span>(value), ms);
    <span class="hljs-keyword">return</span> <span class="hljs-function">() =></span> <span class="hljs-built_in">clearTimeout</span>(t);
  }, [value, ms]);
  <span class="hljs-keyword">return</span> debounced;
}
</code></pre><button type="button" class="copy-btn" aria-label="Copy code">Copy</button></div>`,hook:`<p>🧹 The cleanup is the "never mind" that cancels the last timer.</p>`}},{id:`ex-use-fetch`,domain:`frontend`,slug:`use-fetch`,title:`Write a useFetch hook with abort and typed state`,difficulty:`hard`,tags:[`hooks`,`async`,`typescript`],topics:[`frontend/react`,`frontend/typescript`],prompt:"Write `useFetch<T>(url)` that returns a discriminated-union state (`loading`, `success` with `data`, `error` with a message), aborts the previous request when `url` changes or the component unmounts, and treats non-2xx responses as errors.",hints:["Model the state as a union on `status`, so `data` can only exist in the success branch.","Create an `AbortController` inside the effect and call `abort()` in its cleanup. Ignore `AbortError` when catching."],solution:`\`\`\`tsx
type State<T> =
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: string };

function useFetch<T>(url: string): State<T> {
  const [state, setState] = useState<State<T>>({ status: 'loading' });
  useEffect(() => {
    const ctrl = new AbortController();
    setState({ status: 'loading' });
    fetch(url, { signal: ctrl.signal })
      .then((r) => { if (!r.ok) throw new Error(\`HTTP \${r.status}\`); return r.json() as Promise<T>; })
      .then((data) => setState({ status: 'success', data }))
      .catch((e: Error) => { if (e.name !== 'AbortError') setState({ status: 'error', error: e.message }); });
    return () => ctrl.abort();
  }, [url]);
  return state;
}
\`\`\`
Talk through the edge cases out loud: a slow network, unmounting mid-request, a rapidly changing URL, and an error body.`,hook:`🚦 One state light, and one cancel button per request.`,html:{prompt:`<p>Write <code>useFetch&#x3C;T>(url)</code> that returns a discriminated-union state (<code>loading</code>, <code>success</code> with <code>data</code>, <code>error</code> with a message), aborts the previous request when <code>url</code> changes or the component unmounts, and treats non-2xx responses as errors.</p>`,hints:[`<p>Model the state as a union on <code>status</code>, so <code>data</code> can only exist in the success branch.</p>`,`<p>Create an <code>AbortController</code> inside the effect and call <code>abort()</code> in its cleanup. Ignore <code>AbortError</code> when catching.</p>`],solution:`<div class="codeblock"><pre tabindex="0"><code class="language-tsx hljs"><span class="hljs-keyword">type</span> <span class="hljs-title class_">State</span>&#x3C;T> =
  | { <span class="hljs-attr">status</span>: <span class="hljs-string">'loading'</span> }
  | { <span class="hljs-attr">status</span>: <span class="hljs-string">'success'</span>; <span class="hljs-attr">data</span>: T }
  | { <span class="hljs-attr">status</span>: <span class="hljs-string">'error'</span>; <span class="hljs-attr">error</span>: <span class="hljs-built_in">string</span> };

<span class="hljs-keyword">function</span> useFetch&#x3C;T>(<span class="hljs-attr">url</span>: <span class="hljs-built_in">string</span>): <span class="hljs-title class_">State</span>&#x3C;T> {
  <span class="hljs-keyword">const</span> [state, setState] = useState&#x3C;<span class="hljs-title class_">State</span>&#x3C;T>>({ <span class="hljs-attr">status</span>: <span class="hljs-string">'loading'</span> });
  <span class="hljs-title function_">useEffect</span>(<span class="hljs-function">() =></span> {
    <span class="hljs-keyword">const</span> ctrl = <span class="hljs-keyword">new</span> <span class="hljs-title class_">AbortController</span>();
    <span class="hljs-title function_">setState</span>({ <span class="hljs-attr">status</span>: <span class="hljs-string">'loading'</span> });
    <span class="hljs-title function_">fetch</span>(url, { <span class="hljs-attr">signal</span>: ctrl.<span class="hljs-property">signal</span> })
      .<span class="hljs-title function_">then</span>(<span class="hljs-function">(<span class="hljs-params">r</span>) =></span> { <span class="hljs-keyword">if</span> (!r.<span class="hljs-property">ok</span>) <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Error</span>(<span class="hljs-string">\`HTTP <span class="hljs-subst">\${r.status}</span>\`</span>); <span class="hljs-keyword">return</span> r.<span class="hljs-title function_">json</span>() <span class="hljs-keyword">as</span> <span class="hljs-title class_">Promise</span>&#x3C;T>; })
      .<span class="hljs-title function_">then</span>(<span class="hljs-function">(<span class="hljs-params">data</span>) =></span> <span class="hljs-title function_">setState</span>({ <span class="hljs-attr">status</span>: <span class="hljs-string">'success'</span>, data }))
      .<span class="hljs-title function_">catch</span>(<span class="hljs-function">(<span class="hljs-params"><span class="hljs-attr">e</span>: <span class="hljs-title class_">Error</span></span>) =></span> { <span class="hljs-keyword">if</span> (e.<span class="hljs-property">name</span> !== <span class="hljs-string">'AbortError'</span>) <span class="hljs-title function_">setState</span>({ <span class="hljs-attr">status</span>: <span class="hljs-string">'error'</span>, <span class="hljs-attr">error</span>: e.<span class="hljs-property">message</span> }); });
    <span class="hljs-keyword">return</span> <span class="hljs-function">() =></span> ctrl.<span class="hljs-title function_">abort</span>();
  }, [url]);
  <span class="hljs-keyword">return</span> state;
}
</code></pre><button type="button" class="copy-btn" aria-label="Copy code">Copy</button></div>
<p>Talk through the edge cases out loud: a slow network, unmounting mid-request, a rapidly changing URL, and an error body.</p>`,hook:`<p>🚦 One state light, and one cancel button per request.</p>`}}];export{e as default};