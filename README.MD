##  🪄 Guia 👀

* 🔖​Crear carpeta "test-express-mvc"
* 🔖​Ingresar   ```cd test-express-mvc```
* 🔖​Ejecutar comando ```npm init -y```
* 🔖​Instalar todas la dependencias necesarias para iniciar el proyecto
    ```
    npm install node
    npm install express ejs typescript ts-node @types/express @types/node
    ```
* 🔖​Crear archivo tsconfig.json 👍
```
{
    "compilerOptions": {
        "target": "ES2018",
        "module": "commonjs",
        "outDir": "./dist",
        "rootDir": "./src",
        "strict": true,
        "esModuleInterop": true,
    }
}
```

* 🔖​Crear estructura 👍
```
test-mvc-express/
  ├─ src/
  │   ├─ app.ts
  │   ├─ views/
  │   │     ├─ home.ejs
  ├─ package.json
  ├─ tsconfig.json

```

* 🔖​agregar script en el package.json 👍
```
		"start": "ts-node src/app.ts" 🖱️​
```