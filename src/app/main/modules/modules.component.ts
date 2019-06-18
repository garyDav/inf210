import { Component, OnInit } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss'],
  animations   : fuseAnimations
})
export class ModulesComponent implements OnInit {
  //Code style
  response: HighlightResult;
code1 = `export clas MyClass {
  ...
}
import {
  MyClass
} from './class'`
code2 = `//------ calculos.js ------
export function sumar(x, y) {
    return x + y;
}
export function restar(x, y) {
    return x - y;
}`
code3 = `//------ main.js ------
import {
    sumar,
    restar
} from 'calculos';
console.log(sumar(2, 3)); // 5
console.log(restar(4, 3)); // 1`
code4 = `//------ main.js ------
import * as calc from 'calculos';
console.log(calc.sumar(2, 3)); // 7
console.log(calc.restar(4, 3)); // 1`
code5 = `export default class {
  ...
}
import MyClass from './class'`
code6 = `//------ miFunc.js ------
export default function () {
    ...
};`
code7 = `//------ main1.js ------
import miFunc from 'miFunc';
miFunc();`
code8 = `//------ modulo.js ------ (PARA IMPORTAR)
export const SECRETO = "Me gustan los robots";
export var opciones = {
    color: 'rojo',
    imagen: false,
};
export function suma(a, b) {
    return a + b;
}`
code9 = `//------ importado.js ------
const SECRETO = "Me gustan los robots";
var opciones = {
    color: 'rojo',
    imagen: false,
};
function suma(a, b) {
    return a + b;
}
export default {
    SECRETO,
    opciones,
    suma,
};`
code10 = `export default {
  SECRETO,
  opciones,
  suma,
};`
code11 = `//------ exportación.js ------
module exports = {
    MyClass: MyClass
}`
code12 = `//------ main.js ------
var Test = required('./exportación')
Test.MyClass`
code13 = `//------ exportación.js ------
var multiplicar = function (x) {
    return x * 3;
}
var sumar = function (x) {
    return x + 2;
}
exports.multiplicar = multiplicar;
exports.sumar = sumar;
// Código añadido...
var saludo = 'Hola mundo';
module.exports = saludo;`
code14 = `//------ main.js ------
var importacion =
    require('./importacion');
console.log('Este es el resultado de la importación ' + importacion);
var tipo = typeof importacion;
console.log('Este es el tipo del contenido importado ' + tipo);`
code15 = `Este es el resultado de la importación Hola mundo
Este es el tipo del contenido importado string
/Users / usuario / Projects / Importacion / main.js: 12
var multiplicacion = importacion.multiplicar(5); ^
TypeError: undefined is not a function`
code16 = `//------ HealthComponent.js ------
var HealthComponent = function (initialHealth) {
    this.health = initialHealth;
    this.getHit = function (amount) {
        this.health -= amount;
    }
    return this;
}
module.exports = HealthComponent;`
code17 = `//------ main.js ------
var HealthComponent = require('./HealthComponent.js');
var myHealthComponent = new HealthComponent(10);`
code18 = `define([], function () {
  return MyClass
});
var Test = require('./class');`
code19 = `npm install - g webpack`
code20 = `<!DOCTYPE html>
<html lang="ES">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Introducción a Webpack</title>
    <link rel="stylesheet" href="">
</head>

<body>
    <!-- carga del script -->
    <script type="text/javascript" src="script.js" charset="utf-8"></script>
</body>

</html>`
code21 = `//------ mensajes.js ------
var mensaje = "Hola, qué tal?"
exports.saludo = mensaje`
code22 = `//------ entry.js ------
var mensajes = require('./mensajes.js')
document.write(mensajes.saludo)`
code23 = `$ webpack. / entry.js script.js`
code24 = `// source/scripts/app.persona.js
var Persona = function (nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    var self = this;
    return {
        saludar: function () {
            alert("Hola, mi nombre es " + self.nombre);
        },
        presentar: function () {
            alert("Tengo " + self.edad + " años.");
        }
    };
}
module.exports = Persona;`
code25 = `var $ = require('jquery');
var persona = require('./app.persona');
$('h1').html('Hola Browserify');
var carlos = new persona("Carlos", 30);
carlos.saludar();
carlos.presentar();`
code26 = `//------ a.ts ------
var a = 123;`
code27 = `//------ b.ts ------
var b = a; // Permitido`
code28 = `//------ a.ts ------
export var a = 123;`
code29 = `//------ b.ts ------
var b = a; // NO permitido - no encontraria el valor de a`
code30 = `//------ b.ts ------
import {
    a
} from "./a";
var b = a; // Permitido, ahora si encontraria el valor`
code31 = `//------ a.ts ------
// Se puede realizar un módulo sin emplear declare
declare module "a" {
    // Contenido de la clase
    export var a: number; /*sample*/
}
declare var hello = 'Hello world';`
code32 = `//------ b.ts ------
import
var a = require("./a");
var b = a;`
code33 = `//------ namespace.ts ------
// Módulos internos TypeScript
namespace MySpace {
    export class MyClass {
        public static myProperty: number = 1;
    }
}`
code34 = `//------ importacionReference.ts ------
/// <reference path="namespace.ts" />
console.log(MySpace.MyClass.MyProperty);`
code35 = `//------ importacionImport.ts ------
import {
    MySpace
} from 'namespace.ts'; // Cuidado
console.log(MySpace.MyClass.MyProperty);`
code36 = `# Install Typings CLI utility.
npm install typings --global
# Search for definitions.
typings search tape
# Find a definition by name.
typings search --name react
# If you use the package as a module:
# Install non-global typings (defaults to "npm" source, configurable through \`defaultSource\` in \`.typingsrc\`).
typings install debug --save
# If you use the package through \`<script>\`, it is part of the environment, or
# the module typings are not yet available, try searching and installing with \`--global\`:
typings install dt~mocha --global --save
# Install typings from a particular source (use \`<source>~<name>\` or \`--source <source>\`).
typings install env~atom --global --save
typings install bluebird --source npm --save
# Use \`typings/index.d.ts\` (in \`tsconfig.json\` or as a \`///\` reference).
cat typings/index.d.ts`

  constructor() { }

  ngOnInit() {
  }

}
