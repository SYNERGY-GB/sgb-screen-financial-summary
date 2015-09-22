<h1>SGB-screen-financial-summary</h1>

<h3>Propósito</h3>

Esta pantalla maneja lo que es el resumen financiero de cuentas y tarjetas de creditos.

<h3>Datos esperados</h3>

- **screenTitle**: Título de la pantalla 
- **infoMessage** ; Muestra nombre y apellido de usuario y la fecha
- **PantallaPrincipal** : Muestra la cantidad de cuentas y tarjetas que el usuario posee en la aplicacion.
- **account**: es la opcion de verificar el monto disponible y el tipo de cuenta


<h3>Parametros de la pantalla</h3>

Se trata de una pantalla de resumen financiero, donde muestra el monto disponible de cada cuenta, e cual posee un icono de tarjeta y una flecha para consultar monto, dichos icpnps se encuentran parametrizados para que puedan cambiar dependiendo de los requerimientos. Adicionalmente en la aplicacion estos iconos son mostrados como recursos. La configuración debe recibirse en los parámetros de la pantalla.

- **accountType: es una funcion que muestra en data los ultimos 4 digitos de las cuentas. 
- **accountAmount: funcion que muestra la cantida disponible en cuentas.
- **cardsType: igualmente muestra informacion de la tarjeta de credito los 4 ultimos digitos.
- **screenParams: es todo lo que muestra en el config

- **onScreenValidation**: booleano que indica si se quiere validar el formato de los campos en la pantalla
- **usernameValidation**: expresión regular correspondiente a la validación del nombre de usuario
- **passwordValidation**: expresión regular correspondiente a la validación de la contraseña del usuario
- **maxAttempts**: número máximo de intentos que tiene el usuario para iniciar sesión
- **loginHandler**: en caso de que se necesite un manejador de sesión muy especifico, sino se utilizará un manejador por defecto. 
- **templateType**: función o nombre que permita identificar el template a utilizar para la pantalla
- **forgotPassword**: Booleano que indica si se quiere dar la opción al usuario de recuperar su contraseña
- **clearSubmitButtons**: Booleano que indica si se quiere colocar un botón para limpiar los campos
- **rememberMe** : Booleano que indica si se quiere colocar un toggle para que el usuario pueda mantener su sesión

<h3> Diseño </h3>

![Alt Text] (https://s3.amazonaws.com/megazord-framework/balsamiq+mockups/sgb-screen-financial-summary.png)

