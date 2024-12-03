# API para Gestión de Autos

Esta API permite gestionar un listado de autos mediante operaciones CRUD. Está conectada a MongoDB Atlas y utiliza autenticación JWT para proteger ciertas rutas. Ideal para probar y expandir conocimientos sobre APIs RESTful.

# Índice
- [Características](##características)
- [Responsabilidades](##responsabilidades)
- [Estructura del Proyecto](##estructura-del-proyecto)
- [Instalación](##instalación)
- [Endpoints](##endpoints)
- [Tecnologías Usadas](##tecnologías-usadas)

## Características
1. CRUD para la gestión de autos con al menos 7 características: marca, modelo, año, cilindrada, combustible, transmisión y precio.
2. Conexión con MongoDB Atlas.
3. Autenticación basada en JWT para las rutas de creación, actualización y eliminación.
4. Protección de rutas mediante middleware.
5. Respuestas JSON detalladas.

## Responsabilidades:

- Lionel Almaida: desarrollo, creación de BDD, control de versiones.
- Roberto Barragán: desarrollo, testing.
- William Romero: estructuración de repositorio, desarrollo, conexión la BDD.

## Estructura del Proyecto

```
.
├── server.js
├── .env
├── package.json
├── src
│   ├── config
│   │   └── database.js
│   ├── controllers
│   │   └── autosController.js
│   ├── middlewares
│   │   └── authMiddleware.js
│   ├── models
│   │   └── autoModel.js
│   ├── routes
│       ├── autosRoutes.js
│       └── authRoutes.js
```

## Instalación
Clonar el repositorio:
```
git clone https://github.com/vikingoDev/back16-final.git .
```
Instalar las dependencias:
```
npm install
```
Iniciar el servidor:
```
node server.js
```

## Endpoints
### Público

#### 1. GET
- /
  - Descripción: Verifica que la API esté funcionando correctamente.
  - Respuesta:
  ```
  { "message": "API funcionando correctamente" }
  ```

- /api/autos/  
  - Descripción: Lista todos los autos previamente cargados en la BDD. 

#### 2. POST
- /api/auth/login
  - Descripción: Genera un token JWT.
  - Ingresar en Body (JSON):
  ```
  {
    "email": "admin@example.com",
    "password": "admin"
  }
  ```
  - Respuesta esperada:
  ```
  {
    "message": "Inicio de sesión exitoso",
    "token": "<JWT TOKEN GENERADO"
  }
  ```
  (Duración del token JWT: 1 hora)

### Privado (rutas con autenticación):

#### 4. POST
- /api/autos/agregar
  - Descripción: Crea un nuevo auto.
  - Seleccionar la pestaña "Headers" e ingresa los siguientes valores en las columnas Key / Value respectivamente:
  ```
  {
    "Authorization" : "Bearer <tu_token>"
  }
  ```
  - Ingresar en Body (JSON):
  ```
  {
    "marca": "<MARCA>",
    "modelo": "<MODELO>",
    "anio": <AÑO>,
    "cilindrada": "<CILINDRADA DEL AUTO>",
    "combustible": "<PUES ESO...>",
    "transmision": "<MANUAL/AUTOMÁTICA, DATO REQUERIDO>",
    "precio": <...>
  }
  ```
  - Respuesta esperada: array con todos los autos agregados a la BDD.

#### 5. PUT
- /api/autos/:id
  - Descripción: Actualiza un auto existente.
  - Body: Campos que deseas actualizar.
  - Respuesta: Auto actualizado.

#### 6. DELETE
- /api/autos/:id
  - Descripción: Elimina un auto por ID.
  - Respuesta: Confirmación de eliminación.

## Tecnologías Usadas
- Node.js
- Express
- MongoDB Atlas
- Mongoose
- JWT
- dotenv
- bcrypt