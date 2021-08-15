# PRUEBA TÉCNICA IONIX

## Tabla de contenido

1. [General](#General)
2. [Tecnologías](#Tecnologías)
3. [Instalación](#Instalación)
4. [TODO](#todo)

## General

Aplicación mobile híbrida de los memes de Chile implementando los servicios básicos de la API de Reddit.

## Tecnologías

1. IDE: VsCode v1.59
2. Extensiones VSCode: Eslint v2.1.23 - Prettier (Code formatter) v8.1.0
3. Gestor de dependencias: yarn v1.22.10
4. Node v13.8.0
5. React Native v0.63
6. git 2.32.0 (utilización de git flow)

### Dependencias

1. react-native-splash-screen: Para configuración de SplasScreen
2. axios: Cliente HTTP basado en Promise (utilizado para la conexión al api de Reddit)
3. redux: Librería para el manejo de estado global de la aplicación
4. redux-ersist: para persistencia de estados
5. eslint: Herramienta para el análisis de código
6. jest - testing library: Suites para pruebas unitarias

## Instalación

1. Realizar clone de proyecto (git clone)
2. Ingresar por consola a raíz del proyecto crear archivo .env
3. En archivo agregar línea: API_URL=https://www.reddit.com
4. Ejecutar yarn install
5. Dependencias de ios, ejecutar en raíz: cd ios && pod install && cd ..
6. Ejecutar yarn android o yarn ios

### Para ejecutar pruebas unitarias

1. yarn test

## TODO

A modo de transparencia los puntos que quedaron pendientes fueron:

1. Solicitud de permisos en IOS (en caso de utilizar IOS: dispositivo o emulador) avanzar pantallas mediante botón Cancel
2. En android no existe el permiso de push notification que se indica en las especificaciones de la prueba, por lo que
   solamente se solicita permiso de cámara y ubicación
