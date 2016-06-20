# **react-browserify-example-app**

Aplicación creada con **ReactJs**, **jQuery** y **Browserify**

Instalar previamente Node con **NPM**.

Instalar el módulo Browserify:

`npm install -g browserify`

Clonar el proyecto en tu pc.

Para instalar todos los módulos requeridos ejecutamos el siguiente
comando:

`npm update`

Para cambiar la ruta del API de noticias abrimos [src/const/consts.js]()
y cambiamos la propiedad **path**.

`'path' : '//localhost:4000/news_mock.json'`

Luego ejecutamos el siguiente comando para compilar el código Javascript:

`browserify -t [ babelify --presets [ react ] ] src/index.js -o build/bundle.js`

Ejecutar el archivo **rappi.html**

![alt tag](https://raw.githubusercontent.com/miguelcast/react-browserify-example-app/master/20160620-112355_capture.gif)
