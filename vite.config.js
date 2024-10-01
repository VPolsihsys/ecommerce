import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  root: './src', // Change this if your index.html is in a different folder
  plugins: [react()],
});

