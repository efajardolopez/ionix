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

## Instalación

1. Realizar clone de proyecto (git clone)
2. Ingresar por consola a raíz del proyecto
3. Ejecutar yarn install
4. Ejecutar yarn android y/o yarn ios

## TODO

A modo de transparencia los puntos que quedaron pendientes fueron:

1. Pruebas unitarias con Jest
2. Solicitud de permisos en IOS (en caso de utilizar IOS: dispositivo o emulador) avanzar pantallas mediante botón Cancel
3. En android no existe el permiso de push notification que se indica en las especificaciones de la prueba, por lo que
   solamente se solicita permiso de cámara y ubicación
