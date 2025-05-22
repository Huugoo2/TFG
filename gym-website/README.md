# Gym Website

Este proyecto es un sitio web para un gimnasio que permite a los usuarios registrarse, iniciar sesión, gestionar citas y explorar los servicios y actividades disponibles. A continuación se detalla la estructura del proyecto y su funcionalidad.

## Estructura del Proyecto

```
gym-website
├── public/
│   ├── css/
│   │   └── estilos.css
│   ├── js/
│   │   └── main.js
│   └── img/
├── views/
│   ├── index.ejs
│   ├── login.ejs
│   ├── register.ejs
│   ├── actividades.ejs
│   ├── tienda.ejs
│   ├── servicios.ejs
│   ├── citas.ejs
│   └── perfil.ejs
├── routes/
│   ├── authRoutes.js
│   ├── citasRoutes.js
│   └── mainRoutes.js
├── controllers/
│   ├── authController.js
│   ├── citasController.js
│   └── mainController.js
├── models/
│   └── citaModel.js
├── .env
├── .gitignore
├── app.js
└── package.json
```

## Instalación

1. Clona el repositorio en tu máquina local.
2. Navega al directorio del proyecto.
3. Ejecuta `npm install` para instalar las dependencias.

## Uso

- Inicia el servidor con `node app.js`.
- Accede a la aplicación en tu navegador en `http://localhost:3000`.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.