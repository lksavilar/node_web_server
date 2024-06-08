const { envs } = require('./config/env')
const { startServer } = require('./server/server')

const main = () => {
    console.log(envs);
    startServer({
      port: envs.PORT,
      public_patch: envs.PUBLIC_PATH
    })
  };
  
  // Función agnóstica autoconvocada
    /* Una función es “agnóstica” cuando no tiene conocimiento ni dependencia de su entorno externo. Es decir, no depende de ninguna variable o estado fuera de su propio alcance.

    Por lo tanto, una función puede ser anónima (sin nombre) o nombrada y aún así ser agnóstica, siempre que no dependa de ninguna variable o estado fuera de su propio alcance. */
  // Autoconvocada porque la ejecutamos con los paréntesis
  (async () => {
    main();
  })();







