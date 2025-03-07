// src/env.ts
const appEnv = {
  API_URL: import.meta.env.VITE_API_URL ?? "http://localhost:3000",
  API_KEY: import.meta.env.VITE_API_KEY ?? "???????????",
  API_READ_ACCESS_KEY:
    import.meta.env.VITE_API_READ_ACCESS_KEY ?? "???????????",
  API_IMG_URL:
    import.meta.env.VITE_API_IMG_URL ?? "https://images.tmdb.org/t/p/original/",
};

export default appEnv;
