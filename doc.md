# TypeScript

#### Evolución de javacript

Javascript pasó de crear aplicaciones web muy limitadas, ha las potentes aplicaciones actuales, ésto dejó muy claro las especificaciones de `ES5` de Javascript con graves problemas de escalabilidad y capacidad de mantenimiento, el problema sé agravó a medida que aumentaron el número de librerías y módulos que seguían una perfecta integración en las nuevas aplicaciones, éstas limitaciones obligaron a soluciones complicadas y poco eficaces que perjudicaban el desarrollo de esta tecnología.

Como respuesta a éstas preocupaciones se desarrolló `ECMAScript 6` también conocido como `ES6` ó `ES2015`, mejorando las funcionalidades para **Carga de Módulos**, pero también la propia **Arquitectura** del lenguaje y su sintaxis, la introducción de programación basado en clases fue una oportunidad para adoptar un enfoque más de **Programación Orientada a Objetos (POO)**, cuando se construyen aplicaciones a gran escala.

El objetivo es convertir **Javascript** en un lenguaje capaz de desarrollar aplicaciones empresariales, como lo hacen **java** ó **C++**, mejorando las herramientas y sistemas de análisis del código. Insistir en que **TypeScript** es un super conjunto de **ECMAScript 6**, así que si conoces ECMAScript 6 ya tienes mucho más avanzado para usar TypeScript ó TypeScript te puede servir para introducirte aprender ECMAScript 6, todas las características adicionales que incluye TypeScript que no está en ECMAScript 6, son totalmente opcionales.

Antes de empezar a ver en detalle el lenguaje, reunimos un grupo de sitios impresindibles para el trabajo diario con TypeScript:

* El primero es el [sitio oficial](https://www.typescriptlang.org/) muy completo, pero en el que destaca sobre todo la `Documentation` con información muy completa que se está actualizando constantemente. También destacar el `Playground`, se trata de un auténtico sandbox que yá incluye trozos de código TypeScript, que hacen referencia a sus características más comunes, y se vé como inmediatamente lleva su conversión a Javascript plano, puedes utilizarlo para familiarizarte con su arquitectura y sintaxis, también nos vá a servir para ir provando los ejemplos que vayamos viendo en el curso

* El código para TypeScript es completamente **Open Source** lo tienes completo en [GitHub](https://github.com/Microsoft/TypeScript) y los desarrolladores han hecho un grán esfuerzo para documentar las diferentes facetas del código que se encuentran en una Wiki disponible en el sitio del repositorio en GitHub, un magnífico recurso para encontrar respuestas a dudas, o para profundizar en algunas de las características del lenguaje y su sintaxis.

Trabajar con TypeScript ó con cualquier otro lenguaje de programación, significa básicamente trabajar con datos, y tales datos puede representar diferentes tipos de contenidos, ésto es lo que se conoce en programación como tipos **(Types)** un nombre usado para representar el hecho de que los datos pueden ser texto string, un valor entero ó un array de estos tipos de valores, ésto no es nada nuevo en Javascript donde siempre se trabaja de modo implísito con tipos (Types) péro de una forma flexible, ésto significa que cualquier variable dada puede asumir o devolver en el caso de funciones, cualquier tipo de valor, péro esto aveces lleva a errores y excepciones en nuestro código por colición de tipos entre lo que nuestro código devuelve y lo que esperábamos que debía devolver, por eso en ECMAscript 6 y en TypeScript por lo tanto se utiliza en denominado, tipado estático que nos garantiza saber que tipo de dato nos vamos encontrar en cada instancia de código muy valioso para ayudar a depurar nuestras aplicaciones en tiempo de compilación.

Probablemente uno de los más ampliamente usados tipos primitivos en nuestro código será el tipo **string** en el que poblamos una variable con un trozo de texto.

```html
<!DOCTYPE html>
<html>
    <head>
        <mate charest="utf-8" />
        <title>Hello world!</title>
    </head>
    <body>
        <h1>Hello world!</h1>
    </body>
</html>
```
