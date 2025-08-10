import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(), // JSX/TSX 변환 + Fast Refresh
        tailwindcss(), // TailwindCSS 빌드/HMR
    ],
    server: {
        port: 5173, // 개발 서버 포트
        open: true, // 브라우저 자동 오픈
    },
    build: {
        outDir: "dist", // 빌드 출력 폴더
        sourcemap: true, // 디버깅용 소스맵 생성
    },
});
