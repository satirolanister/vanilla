# Prerequisitos

  1) NODE.JS y NPM
  
en caso de no contar con el node desde este link se puede descargar https://nodejs.org/en/download/

# Ejecución

  1) Abrir terminal y ejecutar sobre el directorio del proyecto npm install, para descargar dependencias de node.js.
  2) Ejecutar por terminal sobre el directorio del proyecto npm run dev, ejecución del servidor node.js.
  3) Ingresar por el navegador de su elección a http://localhost:3000/.

# Tecnologias
  
  1) node.js https://nodejs.org/en/about/
  2) vue.js https://vuejs.org/v2/guide/
  3) webpack https://webpack.js.org/concepts/
  4) babel https://babeljs.io/docs/en/
 
# caracteristicas
  
 Todo el proyecto se crea con tecnológias javascript.
    
    Backend
    Es la parte que se encarga de la lógica de la aplicación.
    
    Frontend
    Es la parte que se encarga de presentar los datos al usuario que una manera comoda, 
    es la capa de presentación del aplicativo.


# Acceso
 
   Aqui se presentan los endpoint del apirest 
    
  1)  Acceso a datos de usuarios.
  
    ## URL http://localhost:3000/api/users
    
    En esta ruta o endpoint se pude visualizar la información de users en formato json.
    
    
  2) Acceso a datos de cursos.
  
    ## URL http://localhost:3000/api/courses
    
    En esta ruta o endpoint se pude visualizar la información de courses en formato json.

  
  3) Acceso a relación users y course
  
    ## URL http://localhost:3000/api/enroll
    
    En esta ruta o endpoint se puede visualizar la información de las relaciones entre users y course.
    
 Dichas rutas solo hacen peticiones get, para la presentación en el frontend, ya que solo se configuran dichas peticiones.
 
 # cliente 
    
   Aqui se presentan las rutas correpondientes a la capa de presentación
   
   1) Acceso a login
      
     ##URL http://localhost:3000/
     
     En esta ruta se presentara el formulario de login para realizar ingreso a la plataforma, dicho ingreso por el 
     momento no realiza autenticación, simplemente con dar Click en el boton ingresar permite el acceso.
   
   2) Acceso a home 
     
     ##URL http://localhost:3000/#/home
     
     En esta ruta nos presentara los cursos que el usuario que ingresa esta inscrito y a su vez nos presenta la 
     información de en que estado de cursos ya sea aprobado o reprobado, pero a su vez permite ver el contenido 
     programatico del curso.
     
     
   3) Acceso a cursos A1, B1, C1
      
     ##URL http://localhost:3000/#/content/courses/'curso que desee ingresar'
     
     En esta ruta nos presentara el contenido programatico del curso, pero a diferencia de los anteriores rutas, 
     dicha ruta es dinamica por que cambia de acuerdo a la elección en la ruta anterior '/#/home' 
     
  # comentarios
      
      En este proyecto se usan tecnologias modernas de javascript, se emplean transpiladores como babel, webpack
      en conjunto ya que los navegadores no reconocen archivos con extensión .vue y tampoco caracteristicas modernas
      de javascript, dichas configuraciones se encuentran el los archivos webpack.config.js y .babelrc.
      
      En la parte referente a el front se utilizan librerias y componentes tal como vue-router, el cual permite realizar
      enrotamiento de los diferentes componentes que se generan con el framework de vue.js, a su vez también se usa axios
      libreria que permite el uso de peticiones http de una manera mas sencilla y facil y algo importante y sin dejar pasar
      tenemos Eventbus, dicho bus es una de las facilidades que tiene vue.js para comunicar componentes.
      
      La parte del diseño responsive y demas diseño de pagina que realiza con el framework de css bootstrap el cual nos permite
      con sus clase predefinidas dar un diseño bonito y simple a una aplicación web.
      
      El proceso de transpilado de ejecuta con el comando npm run webpack(solo modo desarrollo) con este comando se realiza la 
      transpilación del codigo y este codigo transpilado se posicionan en una carpeta public definida en el proyecto y que desde
      el backend se define como ruta publica y renderizara el contenido colocado en la carpeta anteriormente mencionada.
    
    
    

  
