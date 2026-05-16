# Teoria-de-Lenguajes-de-Programaci-n
# 🧠 Motor de Inferencia Lógica como Servicio

Servicio web que expone un motor de inferencia simbólica basado en **lógica declarativa (Prolog)** a través de una **API REST** desarrollada con **Node.js y Express**.

Permite ejecutar consultas lógicas sobre una base de conocimiento y obtener resultados derivados automáticamente mediante reglas.

---

## 📌 Descripción

El sistema actúa como un **motor de inferencia simbólica**, donde el usuario puede enviar consultas lógicas y recibir resultados inferidos a partir de hechos y reglas definidos en Prolog.

Integra distintos paradigmas de programación:

- 🧩 **Programación lógica** → Prolog (hechos y reglas)
- ⚙️ **Programación funcional** → JavaScript (transformación de datos)
- 🔄 **Programación asíncrona** → Node.js (manejo de múltiples solicitudes)

---

## 🎯 Objetivo

Desarrollar un sistema que demuestre la interacción entre diferentes paradigmas de programación:

- Programación lógica (Prolog)
- Programación funcional (JavaScript)
- Programación asíncrona (Node.js)

El sistema permite evaluar consultas sobre una base de conocimiento y retornar resultados inferidos de forma automática.

---

## 🏗️ Arquitectura

El sistema está compuesto por los siguientes componentes:

- **Servidor HTTP (Express)**  
  Expone el endpoint `/query` y recibe consultas en formato Prolog.

- **Motor de inferencia lógica (Tau Prolog)**  
  Ejecuta consultas sobre la base de conocimiento.

- **Base de conocimiento**  
  Archivo `.pl` con hechos y reglas.

- **Capa asíncrona**  
  Maneja múltiples solicitudes usando `async/await` y Promesas.

---

## 🔄 Flujo de ejecución

1. El cliente envía una consulta lógica (ej: `penalty_applicable(contract1).`)
2. El servidor recibe y valida la entrada
3. Se carga la base de conocimiento
4. El motor Prolog ejecuta la consulta
5. Se realiza la inferencia basada en reglas
6. El resultado se retorna como JSON

---

## 🧪 Ejemplo de uso

### 🔹 Request

```http
POST /query
Content-Type: application/json

{
  "query": "penalty_applicable(contract1)."
}
