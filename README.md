# Aplicación Vite con TypeScript, Formik, React y RTK Query

Esta es una aplicación básica que utiliza Vite como bundler, TypeScript para el tipado estático, Formik para la gestión de formularios, React como biblioteca de interfaz de usuario y RTK Query para el manejo de solicitudes de API.

## Características

- Desarrollo rápido con Vite.
- Tipado estático con TypeScript.
- Gestión de formularios simplificada con Formik.
- Interfaz de usuario dinámica y reactiva con React.
- Integración fácil de solicitudes de API con RTK Query.

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu_usuario/nombre_del_repositorio.git

2. Navega hasta el directorio del proyecto:
   ```bash 
   cd nombre_del_repositorio

3. Instala las dependencias:    
   ```bash 
   npm install  

## Uso

1. Inicia el servidor de desarrollo:
    npm run dev

Esto iniciará la aplicación en modo de desarrollo. Navega a http://localhost:5173 en tu navegador para ver la aplicación.

## Estructura del Proyecto
La estructura del proyecto es la siguiente:

  ```bash
src
|   App.css
|   App.tsx
|   index.css
|   main.tsx
|   store.ts
|   vite-env.d.ts|
+---api
|       product.ts|
+---assets
|       react.svg|
+---components
|       GridResults.tsx
|       Header.tsx
|
\---Types
        Product.ts
