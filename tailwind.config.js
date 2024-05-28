/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'worlds3': "url('https://images.squarespace-cdn.com/content/v1/581c7148be6594d155f50234/1581617132961-PNOIJYH2ZYILG6JP9XRV/macroarq_arquitetura_interiores_corporativo_projeto_escritorio_advocacia_hall_entrada_piso_elevado_carpete_madeira_cumaru_divisoria_serralheria_vidro_funcional_clean.jpg')"
      }
    },
  },
  plugins: [],
}