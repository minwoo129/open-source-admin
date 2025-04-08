import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

//import * as path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: [
      {
        find: '@components',
        replacement: '/src/components',
      },
      { find: '@config', replacement: '/src/config' },
      {
        find: '@constants',
        replacement: '/src/constants',
      },
      { find: '@css', replacement: '/src/css' },
      { find: '@hooks', replacement: '/src/hooks' },
      { find: '@pages', replacement: '/src/pages' },
      { find: '@utils', replacement: '/src/utils' },
    ],
  },
});
