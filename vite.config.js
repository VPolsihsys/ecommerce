import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: '/workspaces/ecommerce/index.html',  // Ensure this points to your actual HTML file
    },
  },
});
