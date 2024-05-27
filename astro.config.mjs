import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  // if 使用 docker, 请将 adapter 切换到 node
  // adapter: node({
  //   mode: 'standalone'
  // }),
  site: 'https://4lifeshop.co',
  adapter: vercel({
    analytics: true,
  }),
  integrations: [
    react(), 
    tailwind(),
    mdx(), 
		sitemap(),
		partytown({
			config: {
			  forward: ["dataLayer.push"],
			},
		}),
  ],
  markdown: {
    // Example: Switch to use prism for syntax highlighting in Markdown
    syntaxHighlight: 'prism',
  },
});
