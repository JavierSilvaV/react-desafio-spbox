Dependencias usadas en este proyecto

react-scroll => npm i react-scroll

react-router-dom => npm i react-router-dom

@material-ui/core
@material-ui/icons 
=> npm i --save-dev @material-ui/core @material-ui/icons

express
cors
nodemailer
=> npm i express cors nodemailer

react-google-recaptcha => npm i react-google-recaptcha

Para que funcione el formulario de "Contactenos" se debe modificar e iniciar el archivo server.js

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "tuemail@gmail.com",
    pass: "tucontraseña",
  },
});

node server.js
