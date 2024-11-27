import { defineConfig } from 'vite'
import dotenv from 'dotenv';

export default defineConfig(() => {
  dotenv.config();

  return {
      define: {
          'process.env': process.env
      },
  };
})