# API para Gestión de Autos

Esta API permite gestionar un listado de autos mediante operaciones CRUD. Está conectada a MongoDB Atlas y utiliza autenticación JWT para proteger ciertas rutas. Ideal para probar y expandir conocimientos sobre APIs RESTful.

## Índice
- [Características](#características)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación](#instalación)
- [Variables de Entorno](#variables-de-entorno)
- [Endpoints](#endpoints)
- [Autenticación](#autenticación)
- [Tecnologías Usadas](#tecnologías-usadas)

## Características
- CRUD para la gestión de autos con al menos 7 características: marca, modelo, año, cilindrada, combustible, transmisión y precio.
- Conexión con MongoDB Atlas.
- Autenticación basada en JWT para las rutas de creación, actualización y eliminación.
- Protección de rutas mediante middleware.
- Respuestas JSON detalladas.

## Estructura del Proyecto

```plaintext
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

### Instalación
Clona este repositorio:
```
git clone <url_del_repo>
cd <nombre_del_repo>
```
Instala las dependencias:
```
npm install
```

Configura las variables de entorno en un archivo .env:
```
PORT=3000
MONGO_URI=your_mongo_uri_here
JWT_SECRET=your_super_secret_key
```

Inicia el servidor:
```
node server.js
```

# Variables de Entorno
- PORT: Puerto donde correrá el servidor.
- MONGO_URI: URI de conexión a MongoDB Atlas.
- JWT_SECRET: Clave secreta para generar y verificar JWT.


# Endpoints
## Público
1. GET /
Descripción: Verifica que la API esté funcionando correctamente.
Respuesta:
```
{ "message": "API funcionando correctamente" }
```
2. POST /api/auth/login
Descripción: Genera un token JWT.
Body:
```
{
  "email": "admin@example.com",
  "password": "admin"
}
```
- Respuesta:
```
{
  "message": "Inicio de sesión exitoso",
  "token": "JWT_TOKEN"
}
```

## Privado (Requieren Token JWT)

3. GET /api/autos/
- Descripción: Lista todos los autos.
- Seleccionar la pestaña "Headers" e ingresar los siguientes valores en su respectiva columna:
```
{
  "Authorization" : "Bearer <tu_token>"
}
```
- Respuesta:
```
[
  {
    "_id": "id_auto",
    "marca": "Toyota",
    "modelo": "Corolla",
    "anio": 2022,
    "cilindrada": "1.8L",
    "combustible": "Gasolina",
    "transmision": "Automática",
    "precio": 30000
  }
]
```
4. POST /api/autos/agregar
- Descripción: Crea un nuevo auto.
Body:
```
{
  "marca": "Toyota",
  "modelo": "Corolla",
  "anio": 2022,
  "cilindrada": "1.8L",
  "combustible": "Gasolina",
  "transmision": "Automática",
  "precio": 30000
}
```
- Respuesta:
```
{
  "_id": "id_auto",
  "marca": "Toyota",
  "modelo": "Corolla",
  "anio": 2022,
  "cilindrada": "1.8L",
  "combustible": "Gasolina",
  "transmision": "Automática",
  "precio": 30000
}
```

5. PUT /api/autos/:id
- Descripción: Actualiza un auto existente.
- Body: Campos que deseas actualizar.
- Respuesta: Auto actualizado.

7. DELETE /api/autos/:id
- Descripción: Elimina un auto por ID.
- Respuesta: Confirmación de eliminación.

# Autenticación

- Inicia sesión en el endpoint /api/auth/login.
- Copia el token proporcionado.
- Añade el token al header de las solicitudes protegidas:
```
{
    "Authorization": "Bearer <tu_token>"
}
```

# Tecnologías Usadas
- Node.js
- Express
- MongoDB Atlas
- Mongoose
- JWT
- dotenv
- bcrypt


# Notas
## Usuario de prueba:
- Email: admin@example.com
- Password: admin
- Duración del token JWT: 1 hora
