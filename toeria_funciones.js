const main = () => {
    console.log(`Aquí comenzamos el servidor`);
  };
  
  // Función agnóstica autoconvocada
  // Agnóstica porque no tiene nombre
  // Autoconvocada porque la ejecutamos con los paréntesis
  (async () => {
    main();
  })();
  
/* Una función es “agnóstica” cuando no tiene conocimiento ni dependencia de su entorno externo. Es decir, no depende de ninguna variable o estado fuera de su propio alcance.

Por lo tanto, una función puede ser anónima (sin nombre) o nombrada y aún así ser agnóstica, siempre que no dependa de ninguna variable o estado fuera de su propio alcance. */


  /* En Node.js, una Función Agnóstica Autoconvocada es un patrón de diseño de software que se utiliza para mantener el alcance de las variables dentro de la función y evitar posibles conflictos con otras partes del código.
  
  La palabra “agnóstica” se refiere a que la función no tiene conocimiento ni dependencia de su entorno externo. Es decir, no depende de ninguna variable o estado fuera de su propio alcance.
  
  La palabra “autoconvocada” significa que la función se invoca a sí misma automáticamente tan pronto como se define.
  
  Aquí tienes un ejemplo de cómo se ve una Función Agnóstica Autoconvocada en JavaScript (que también es válido para Node.js): */
  
  const mensaje = () => {
    console.log("Ejemplo de Una Función agnóstica autoconvocada");
  };
  (function () {
    mensaje();
  })();
  
  /* En este ejemplo, la función se define y se invoca inmediatamente. Cualquier variable o función definida dentro de esta función no estará disponible fuera de ella, lo que ayuda a evitar conflictos de nombres y a mantener el código más limpio y organizado. */
  
  
  //FUNCIONES
  //==========
  // Función en forma de expresión
  //-------------------------------
  // Sin nombre, tambie  conocida como funcion anonima
  {
      console.log('\nFunción en forma de expresión');
      const sumar = function (a, b) {
          return a + b;
        };
        console.log(`sumar(21,2) = ${sumar(21,2)}`)
        
        // Con nombre
        const sumando = function sume(a, b) {
          return a + b;
        };
        console.log(`sumando(5,2) = ${sumando(5,2)}`)
        
        const calculadora = {
          sumar: function (a, b) {
            return a + b;
          },
        };
        console.log(`calculadora.sumar(13,7) = ${calculadora.sumar(13,7)}`)
        
        const persona = {
          // como propiedad de un objeto
          comer: function () {
            return "Comiendo...";
          },
        };
        console.log(`persona.comer() = ${persona.comer()}`)
  }
  
  
  // Funciones flecha
  //-----------------
  /* Cuando queremos que el cuerpo de la función tenga varias líneas de sentencias, se usan llaves. Además si queremos que la función regrese algún valor, entonces explícitamente usamos la sintaxis del return. */
  {
      console.log('\nFunciones flecha')
      const calcularCuadrado = a => a * a;
      const sumar = (a, b) => a + b;
      const saludar = () => 'Hola';
      // invocaciones
      console.log(`calcularCuadrado(7) = ${calcularCuadrado(7)}`); // 49
      console.log(`sumar(1, 2) = ${sumar(1, 2)}`); // 3
      console.log(`saludar() = ${saludar()}`); // 'Hola'
  
  }
  
  {
      const calcularCuadrado = a => {
          const result = a * a;
          return result;
      };
      const sumar = (a, b) => {
          const result = a + b;
          return result;
      };
        // invocaciones
        console.log(`calcularCuadrado(5) = ${calcularCuadrado(5)}`); // 25
        console.log(`sumar(3, 2) = ${sumar(3, 2)}`); // 5
  }
  
  /* Funciones anidadas o internas
  Una función se puede definir dentro de otra función, es decir, dinámicamente podemos crear funciones internas dentro de otra función principal e invocarlas. */
  {
      console.log('\nFunciones anidadas o internas')
      function saludar() {
          function saludarInterna() {
            return 'Hola';
          }
          const saludo = saludarInterna();
          console.log(`saludo = ${saludo}`);
        }
        saludar(); // 'Hola'
  }
  
  /* Ámbito local de funciones
  Las funciones en Node.js y JavaScript proporcionan un ámbito de valores, local al cuerpo de la función, es decir, lo que está definido en el cuerpo de la función solo puede ser referenciado dentro de la misma. */
  {
      console.log('\nÁmbito local de funciones')
      function abuelo() {
          const nombre = 'Jaime';
          const apellido = 'Cervantes'
          function padre() {
            const apellido = 'Buendía';
            function hijo() {
              const apellido = 'Pérez';
              const nombreCompleto = `${nombre} ${apellido}`;
              console.log(nombreCompleto); // Jaime Pérez
            }
            hijo();
            const nombreCompleto = `${nombre} ${apellido}`;
            console.log(nombreCompleto); // Jaime Buendía
          }
          padre();
          const nombreCompleto = `${nombre} ${apellido}`;
          console.log(nombreCompleto); // Jaime Cervantes
        }
        abuelo();
  }
  
  /* Closures o cierres
  El anidado de funciones permite que las funciones hijas tengan su propio ámbito local, oculto de las funciones padres. Al mismo tiempo estas funciones internas tienen acceso a los valores definidos en las funciones padres. Este encapsulamiento de información y al mismo tiempo acceso a información externa, se le llama closure o cierre. */
  {
      console.log('\nClosures o cierres')
      function abuelo() {
          const nombre = 'Jaime';
          const apellido = 'Cervantes'
          function padre() {
            const apellido = 'Buendía';
            function hijo() {
              const apellido = 'Pérez';
              const nombreCompleto = `${nombre} ${apellido}`;
              console.log(`${nombreCompleto} --> Desde función hijo`); // Jaime Pérez
            }
            hijo();
            const nombreCompleto = `${nombre} ${apellido}`;
            console.log(`${nombreCompleto} --> Desde función padre`); // Jaime Buendía
          }
          padre();
          const nombreCompleto = `${nombre} ${apellido}`;
          console.log(`${nombreCompleto} --> Desde función abuelo`); // Jaime Cervantes
        }
        abuelo();
  }
  
  
  /* POO surgio de funciones
  Ya que vimos un poco de las funciones anidadas y closures, podemos hablar de como se descubrió la programación orientada a objetos. Esto refleja la importancia de las funciones en los lenguajes de programación.
  
  Ole Johan Dahl y Kristen Nygaard se dieron cuenta de que la pila de llamadas de las funciones en ALGOL, podía ser movida a un Heap. Esto permite que las variables declaradas por una función puedan existir incluso después de que la función termine su ejecución y retorne algún valor.
  
  De esta manera la función se convirtió en el constructor de la clase, las variables locales en propiedades de la instancia de clase y las funciones internas en sus métodos. Y así en 1966 la programación orientada a objetos fue descubierta.
  
  Este comportamiento lo podemos implementar usando funciones en Node.js y JavaScript y aprovechando su habilidad de crear closures. */
  
  {
      console.log('\nPOO surgio de funciones')
      function crearPersona(nombre, apellido) {
          function saludar() {
            return `Hola soy ${nombre}...`;
          }
          function comer() {
            return 'Comiendo...';
          }
          function getNombre() {
            return `${nombre} ${apellido}`;
          }
          const instancia = {};
          instancia.saludar = saludar;
          instancia.comer = comer;
          instancia.getNombre = getNombre;
          return instancia
        }
        const jaime = crearPersona('Jaime', 'Cervantes');
        console.log(`jaime.comer() --> ${jaime.comer()}`);  // Comiendo...
        console.log(`jaime.saludar() --> ${jaime.saludar()}`); // Hola soy Jaime
        console.log(`jaime.getNombre() --> ${jaime.getNombre()}`); // Jaime Cervantes
  }
  
  
  /* FUNCIÓN AGNÓSTICA AUTOCONVOCADA
  En Node.js, una **función agnóstica autoconvocada** es un término que se refiere a una función que se ejecuta de forma automática sin necesidad de ser invocada por el usuario de manera explícita. Este tipo de función se caracteriza por ser independiente y autoconvocada, es decir, se activa por sí sola en determinadas circunstancias.
  
  Aquí hay una explicación más detallada sobre cada parte del término:
  
  - **Función agnóstica**: En este contexto, "agnóstica" significa que la función no depende de un contexto específico para ejecutarse. Puede ser utilizada en diferentes situaciones sin necesidad de adaptaciones adicionales.
  
  - **Autoconvocada**: Significa que la función se activa automáticamente sin requerir una llamada directa desde otro punto del código. En Node.js, esto puede ocurrir, por ejemplo, al cargar un módulo que contiene la función, lo que desencadena su ejecución sin necesidad de invocarla explícitamente.
  
  En resumen, una función agnóstica autoconvocada en Node.js es una función que se ejecuta de forma automática y autónoma, sin depender de un contexto específico y sin necesidad de ser invocada directamente por el usuario. */
  
  // La sintaxis de una IIFE es la siguiente:
  (function() {
      // Código dentro del IIFE
  })();
  
  // Definición de una función agnóstica autoconvocada
  
  (function() {
      console.log('\nEsta es una función agnóstica autoconvocada que se ejecuta automáticamente.');
  })();