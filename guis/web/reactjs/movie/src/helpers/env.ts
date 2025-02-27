// src/env.ts
const appEnv = {
  API_URL: import.meta.env.VITE_API_URL ?? "http://localhost:3000",
  API_KEY: import.meta.env.VITE_API_KEY ?? "???????????",
};

export default appEnv;
