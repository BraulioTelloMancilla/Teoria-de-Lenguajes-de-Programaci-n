# Motor de Inferencia Lógica como Servicio

Servicio web que expone un motor de inferencia simbólica basado en lógica declarativa (Prolog) a través de una API REST desarrollada con Node.js y Express. Permite ejecutar consultas lógicas sobre una base de conocimiento y obtener resultados derivados automáticamente mediante reglas.

## Descripción

Este sistema actúa como un motor de inferencia simbólica donde el usuario puede enviar consultas lógicas y recibir resultados inferidos a partir de hechos y reglas definidos en Prolog. El proyecto integra tres paradigmas de programación fundamentales:

La programación lógica se implementa mediante Prolog, que define los hechos y reglas para la inferencia. La programación funcional se utiliza en JavaScript para la transformación y normalización de datos. La programación asíncrona, propia del modelo de ejecución de Node.js, maneja múltiples solicitudes concurrentes de manera eficiente.

## Objetivo

Desarrollar un sistema que demuestre la interacción entre diferentes paradigmas de programación:

- Programación lógica (Prolog): Representación del conocimiento y reglas de inferencia
- Programación funcional (JavaScript): Procesamiento de entradas y salidas de datos
- Programación asíncrona (Node.js): Manejo eficiente de solicitudes HTTP concurrentes

El sistema permite evaluar consultas sobre una base de conocimiento y retornar resultados inferidos de forma automática.

## Arquitectura del Sistema

El sistema se compone de cuatro capas principales:

El servidor HTTP, desarrollado con Express.js, expone el endpoint `/query` y recibe las consultas en formato Prolog. El motor de inferencia lógica, implementado con la biblioteca Tau Prolog, ejecuta las consultas sobre la base de conocimiento. La base de conocimiento es un archivo `.pl` que contiene los hechos y reglas definidos en Prolog. Finalmente, la capa asíncrona utiliza async/await y Promises para manejar múltiples solicitudes simultáneas.

## Flujo de Ejecución

1. El cliente envía una consulta lógica (por ejemplo: `penalty_applicable(contract1).`)
2. El servidor recibe y valida la entrada
3. Se carga la base de conocimiento
4. El motor Prolog ejecuta la consulta
5. Se realiza la inferencia basada en reglas
6. El resultado se retorna como JSON

## Ejemplos de Uso

### Consulta básica

Request:
POST /query
Content-Type: application/json

{
  "query": "penalty_applicable(contract1)."
}

Response:

{
  "success": true,
  "result": "true."
}

Consulta con variables

Request:

POST /query
Content-Type: application/json

{
  "query": "contract(X)."
}

Response:

{
  "success": true,
  "result": "X = contract1."
}

Consulta falsa

Request:

POST /query
Content-Type: application/json

{
  "query": "breach(contract2)."
}

Response:

{
  "success": true,
  "result": "false."
}

Requisitos

    Node.js v18 o superior
    npm v9 o superior

Instalación

# Clonar el repositorio
git clone https://github.com/usuario/repositorio.git

# Entrar al directorio del proyecto
cd motor-inferencia

# Instalar dependencias
npm install

Ejecución

# Iniciar el servidor
npm start

# El servidor estará disponible en http://localhost:3000

Base de Conocimiento de Ejemplo

Archivo knowledge.pl:

% Hechos
contract(contract1).
breach(contract1).

% Reglas
penalty_applicable(X) :- contract(X), breach(X).
