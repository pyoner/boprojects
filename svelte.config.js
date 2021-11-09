import vercel from '@sveltejs/adapter-vercel';
import { optimizeImports } from 'carbon-preprocess-svelte';
import content from '@originjs/vite-plugin-content';

console.log(content.default);
export default {
  preprocess: [optimizeImports()],
  kit: {
    adapter: vercel(),
    target: '#svelte',
    vite: {
      plugins: [content.default()]
    }
  }
};
