import { createLogger, defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import replace from "@rollup/plugin-replace";

// https://vitejs.dev/config/

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  const isUI5 = mode === "UI5";
  return defineConfig({
    plugins: [
      react(),
      replace({ "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV) }),
    ],
 
    build: isUI5
      ? {
          outDir: "distUI5",
          target: "esnext",
          lib: {
            entry: "src/UI5.main.jsx",
            name: "<%= reactappId %>",
            fileName: "<%= reactappId %>" ,
            formats: ["umd"]           
          }
        }
      : undefined ,
   
  });
}
