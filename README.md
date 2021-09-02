Very basic demo of Netlify functions.

1. netlify.toml file gives location of functions, which is `netlify/functions`

2. Requires latest version of netlify adatper:

```shell
pnpm i -D @sveltejs/adapter-netlify@next    
```

3. Requires import of the adapter in `svelte.config.js`

4. Add functions to `netlify/functions/`


Test the two functions:

<a aria-label="Test client I P function" href="https://sveltekit-netlify-functions.rodneylab.com/.netlify/functions/client-ip" target="_blank" rel="nofollow noopener noreferrer">https://sveltekit-netlify-functions.rodneylab.com/.netlify/functions/client-ip</a>

<a aria-label="Test Good Morning function" href="https://sveltekit-netlify-functions.rodneylab.com/.netlify/functions/good-morning" target="_blank" rel="nofollow noopener noreferrer">https://sveltekit-netlify-functions.rodneylab.com/.netlify/functions/good-morning</a>