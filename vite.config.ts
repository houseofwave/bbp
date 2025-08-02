import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
   // <-- add this line or update if it's different
  plugins: [react()],
});
