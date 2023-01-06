# ProjectDemo

Repositorio solo para práctica colaborativa. Algo importante en el mundo de un dev es el uso de contro de versiones... por ello compañero les dejo una breve ayudita cuando no sepan que hacer (Esta de más recordarles que se DEBEN apoyar sus invesigaciones leyendo docs).

## Buenas prácticas en GIT

En el mundo de GIT siempre existira la rama "principal" o "producción", esta rama no debería tocarte directamente a no ser que sea ultra necesario debdo a un hotfix o algo parecido. Cada desarrollo deberia implementarse en una rama creada a partir de la rama principal (```master```) según su version más actualizada.

**Ej**: Se crea una rama llamada ```feature-branch-01``` para sacar adelante un desarrollo.

Un vez terminado el desarrollo en la rama ```feature-branch-01``` se debe deja pusheda al repositorio.

Luego debería existir una revision del desarrollo por parte de algun miembro que conforme el equipo (Idealmente debe pasar por una revisión)

Y por ultimo se realiza la integración a la rama ```master```.

## Comandos frecuentes de GIT

| Comando | Argumento | Descripción | Linea final |
|---------|-----------|-------------|-------------|
| ```status``` | **N/A** | Muestra el estado de los archivos | ```git status``` |
| ```log``` | **N/A** | Lista los commits según la rama en donde estes | ```git log``` |
| ```add``` | **N/A** | Agrega archivos al "stage" de GIT | ```git add <file>``` |
| ```commit``` | **-m**: Pasa un mensaje al commit | Crea un punto en el historial de versiones | ```git commit -m "message"``` |
| ```branch``` | **N/A** | Se usa para crear una nueva rama | ```git branch <nombre_nueva_rama>``` |
| ```checkout``` | **-b**: Si se agrega, git creara una rama nueva y se cambiara a dicha rama | Se usa para moverse entre ramas | ```git checkout``` o ```git checkout -b <nombre_nueva_rama>``` |
