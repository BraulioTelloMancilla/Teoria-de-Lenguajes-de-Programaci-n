# Motor de Inferencia Lógica como Servicio

Servicio web que expone un motor de inferencia simbólica basado en lógica declarativa (Prolog) a través de una API REST desarrollada con Node.js y Express.

Permite ejecutar consultas lógicas sobre una base de conocimiento y obtener resultados derivados automáticamente mediante reglas.

## Descripcion

El sistema actua como un motor de inferencia simbolica, donde el usuario puede enviar consultas logicas y recibir resultados inferidos a partir de hechos y reglas definidos en Prolog.

Integra distintos paradigmas de programacion:

| Paradigma | Tecnologia | Rol en el Sistema |
|-----------|------------|-------------------|
| Programacion Logica | Prolog | Define hechos y reglas para la inferencia |
| Programacion Funcional | JavaScript | Transformacion y normalizacion de datos |
| Programacion Asincrona | Node.js | Manejo de multiples solicitudes concurrentes |

## Objetivo

Desarrollar un sistema que demuestre la interaccion entre diferentes paradigmas de programacion:

- **Programacion logica (Prolog)**: Representacion del conocimiento y reglas de inferencia
- **Programacion funcional (JavaScript)**: Procesamiento de entradas y salidas de datos
- **Programacion asincrona (Node.js)**: Manejo eficiente de solicitudes HTTP concurrentes

El sistema permite evaluar consultas sobre una base de conocimiento y retornar resultados inferidos de forma automatica.

## Arquitectura

El sistema esta compuesto por los siguientes componentes:

+-------------+ +--------------+ +-----------------+ | Cliente |---->| Servidor |---->| Motor Prolog | | (HTTP) | | (Express.js) | | (Tau Prolog) | +-------------+ +--------------+ +-----------------+ | v +--------------+ | Base de | | Conocimiento | | (.pl) | +--------------+

Componentes
Componente	Tecnologia	Funcion
Servidor HTTP	Express.js	Expone el endpoint /query y recibe consultas en formato Prolog
Motor de inferencia logica	Tau Prolog	Ejecuta consultas sobre la base de conocimiento
Base de conocimiento	Archivo .pl	Contiene hechos y reglas definidos en Prolog
Capa asincrona	async/await + Promises	Maneja multiples solicitudes simultaneas
Flujo de ejecucion

    El cliente envia una consulta logica (ej: penalty_applicable(contract1).)
    El servidor recibe y valida la entrada
    Se carga la base de conocimiento
    El motor Prolog ejecuta la consulta
    Se realiza la inferencia basada en reglas
    El resultado se retorna como JSON

Ejemplos de uso
Consulta basica

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

Instalacion

# Clonar el repositorio
git clone https://github.com/usuario/repositorio.git](https://github.com/BraulioTelloMancilla/Teoria-de-Lenguajes-de-Programaci-n)

# Entrar al directorio del proyecto
cd motor-inferencia

# Instalar dependencias
npm install

Ejecucion

# Iniciar el servidor
npm start

# El servidor estara disponible en http://localhost:3000

Base de conocimiento de ejemplo

Archivo knowledge.pl:

% Hechos
contract(contract1).
breach(contract1).

% Reglas
penalty_applicable(X) :- contract(X), breach(X).
