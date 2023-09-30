# API-de-Star-Wars-Upskilling-Microservicios
 Creacion de un micro servicio con maquinas virtuales con Docker

# Este proyecto ha sido creado para implementar una plataforma básica de microservicios.

Siguiendo la arquitectura de microservicios, proporciona la funcionalidad de crear, encontrar, actualizar o borrar información sobre personajes, planetas y películas de la saga StarWars.

Está desarrollado en base al Framework ExpressJS, implementa MongoDB como plataforma de información persistente y Mongoose como ORM para enviar y recuperar la información desde/hacia la base de datos.

# Este proyecto está conformado por 5 aplicaciones standalone interconectadas vía HTTPRequests:

Gateway como punto de entrada Personajes, Películas y Planetas todos ellos servicios CRUD ready que gestionan la manipulación de datos, sólo accesibles desde el gateway Database es el servicio que gestiona la conexión, envío y recuperación de datos desde/hacia la base de datos

Este proyecto está en contenedores usando Docker Compose. Para ejecutar este proyecto debes hacer un fork del repo, y ejecutar localmente docker-compose up