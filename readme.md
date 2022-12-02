# DESPLIEGUE

# ATLAS MONGO - SERVICIO EN LA NUBE DE ALJAMIENTO DE BASES DE DATOS MONGODB

1. Registrarnos en Atlas https://www.mongodb.com/es/cloud/atlas/signup
2. Crear el cluster. Un cluster es un servidor que alojará nuestras bases de datos
4. Crear usuario que accederá al cluster y generar password de acceso (u6Mm35C1CrnnJL3X)
5. Elegir la politica de red, permitimos acceso a todas las ips con (0.0.0.0/0)
5. Modificar los privilegios(MongoDB Roles) por defecto del usuario para que le permita Administrar Atlas
6. Crear la Base de datos y colección (manual o automaticamente)
7. Obtener la URI del cluster para connectar desde servicios externos como Compass o Node mongodb+srv://api-movies:<password>@cluster0.kk0ou2i.mongodb.net/test
8. Sustituyo en la URI DE MONGO OBTENIDA <password> con los signos <> incluidos por la password creada  mongodb+srv://api-movies:u6Mm35C1CrnnJL3X@cluster0.kk0ou2i.mongodb.net/test
9. Sustituyo el /test por /Database mongodb+srv://api-movies:u6Mm35C1CrnnJL3X@cluster0.kk0ou2i.mongodb.net/movies
10. Probar en compass y en node la conexión

# RAILWAY - PLATAFORMA COMO SERVICIO (PaaS) para desplegar una app node.js https://railway.app/

1. Login con nuestra cuenta de github
2. Aceptar los terminos del servicio (Terms of Service.)
3. Tener el proyecto a desplegar en un repositorio puseado en una rama de github
4. Crear un nuevo proyecto para desplegar desde un repositorio en Github
5. Damos permisos para la rama y repo donde esté la aplicación a desplegar 
6. Añadimos las variables de entorno (MONGO_URI=MONGO_URI_VALUE)
7. Configuramos Comandos de START, POLITICA DE REINICIO CUANDO SE CAIGA, ENDPOINT HEALCHECK (/PING)
8. Exponer el servicio en un dominio generado por la plataforma  movies.up.railway.app↗
9. Comprobar logs
10. Comprobar que el servicio está funcionando en la url pública https://movies.up.railway.app/genres

