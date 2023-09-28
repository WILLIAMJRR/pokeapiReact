import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],

	build: {
		// optimizaciones del build para que el código final sea generado de mejor manera
		incremental: true, // acelerar la generación del build
		rollupOptions: {
			// me permite configurar el rollup para que no me genere un archivo por cada librería que tenga en el proyecto
			external: ["react", "react-dom"],
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
				},
			},
		},
		// Configuración opcional para TS
		/*typescript: {
      tsconfig: "./tsconfig.json"
    }*/
		cache: true, // verificar si el código sigue siendo el mismo o no y cachear el código del build
		minify: true, // Habilitar la opción de compresión para minificar el tamaño de los archivos generados por el build para js
		cssMinify: true, // Habilitar la opción de compresión para minificar el tamaño del css generado por el build
		mode: "production", // Especificar un contexto de salida que será para un entorno de producción (opcional)
		chunks: true, // Habilitar el particionamiento para proveer por trozos el js
		moduleBundling: true, // me permite tomar el código de las librerías del proyecto para producción y bajarles el tamaño
	 prerenderPaths: ["/"], // pre-carga en memoria de rutas pesadas
		// watch: true, // observable de los cambios del código asociado al build
		modulePreload: true, // me permite a las rutas de pre-render ya tener a mano su código
		outDir: "build", // me permite cambiarle el nombre al directorio de salida
	},
});
