import { defineConfig } from '@rsbuild/core';

export default defineConfig({
  tools: {
    rspack: {
      module: {
        rules: [
          {
            test: /\.html$/,
            use: ['html-loader']
          },
        ]
      }
    }
  },
  html: {
    template: 'src/template.html',
  }
});
