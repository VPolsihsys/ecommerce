import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/ecommerce/',  // Add this line
  plugins: [react()],
});
