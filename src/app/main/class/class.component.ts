import { Component, OnInit } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss'],
  animations   : fuseAnimations
})
export class ClassComponent implements OnInit {
  //Code style
  response: HighlightResult;
  code1 = `class Startup {
    private text: String;
    constructor(texto: String) {
        this.text = texto;
    }
    public main(): number {
        console.log(this.text);
        return 0;
    }
}
let s = new Startup("Hola mundo");
s.main();`
  code2 = `class Startup {
    public static main(): number {
        console.log('Hola mundo');
        return 0;
    }
}
Startup.main();`
  code3 = `//------ calculos.ts ------
class Calculo {
    // variables de clase declaradas y asignadas
    private x: number = 0;
    private y: number = 0;
    // constructor
    constructor(x: number, y: number) {
        // métodos del constructor
        this.setX(x);
        this.setY(y);
    }
    // Setters
    public setX(x: number): void {
        this.x = x;
    }
    public setY(y: number): void {
        this.y = y;
    }
    // Getters
    public getX(): number {
        return this.x;
    }
    public getY(): number {
        return this.y;
    }
    public sumar(): number {
        return (this.getX() + this.getY());
    }
    public restar(): number {
        return (this.mayor() - this.menor());
    }
    public menor(): number {
        if (this.getX() >= this.getY()) {
            return this.getY();
        }
        return this.getX();
    }
    public mayor(): number {
        if (this.getX() >= this.getY()) {
            return this.getX();
        }
        return this.getY();
    }
}
let calculo = new Calculo(30, 10);
console.log(calculo.restar());`
  code4 = `//------ calculos.js ------
var Calculo = (function () {
    // constructor
    function Calculo(x, y) {
        // variables de clase declaradas y asignadas
        this.x = 0;
        this.y = 0;
        // métodos del constructor
        this.setX(x);
        this.setY(y);
    }
    // Setters
    Calculo.prototype.setX = function (x) {
        this.x = x;
    };
    Calculo.prototype.setY = function (y) {
        this.y = y;
    };
    // Getters
    Calculo.prototype.getX = function () {
        return this.x;
    };
    Calculo.prototype.getY = function () {
        return this.y;
    };
    Calculo.prototype.sumar = function () {
        return (this.getX() + this.getY());
    };
    Calculo.prototype.restar = function () {
        return (this.mayor() - this.menor());
    };
    Calculo.prototype.menor = function () {
        if (this.getX() >= this.getY()) {
            return this.getY();
        }
        return this.getX();
    };
    Calculo.prototype.mayor = function () {
        if (this.getX() >= this.getY()) {
            return this.getX();
        }
        return this.getY();
    };
    return Calculo;
}());
var calculo = new Calculo(30, 10);
console.log(calculo.restar());`
  code5 = `class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
let greeter = new Greeter("world");
let button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function () {
    alert(greeter.greet());
}
document.body.appendChild(button);`
  code6 = `class Something {
    static instances = 0;
    constructor() {
        // Acedemos directamente mediante el nombre de la clase
        Something.instances++;
    }
}
var s1 = new Something();
var s2 = new Something();
console.log(Something.instances); // 2`
  code7 = `class FooBase {
    public x: number;
    private y: number;
    protected z: number;
}
// EFECTOS EN UNA INSTANCIA
var foo = new FooBase();
foo.x; // OK
foo.y; // ERROR : private
foo.z; // ERROR : protected
// EFECTOS EN UNA CLASE HIJA
class FooChild extends FooBase {
    constructor() {
        super();
        this.x; // OK
        this.y; // ERROR: private
        this.z; // okay
    }
}`
  code8 = `// ----- point.js ------
(function () {
    // BODY
    return Point;
})();`
  code9 = `// Clase padre
class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    add(point: Point) {
        return new Point(this.x + point.x, this.y + point.y);
    }
}
// clase hija
class Point3D extends Point {
    z: number;
    constructor(x: number, y: number, z: number) {
        super(x, y);
        this.z = z;
    }
    // función add
    add(point: Point3D) {
        // llamada a la función del padre
        var point2D = super.add(point);
        // devolvemos resultado
        return new Point3D(point2D.x, point2D.y, this.z + point.z);
    }
}`
  code10 = `// Método que implementa extends en TypeScript
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p)) d[p] = b[p];

    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Clase padre
var Point = (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.add = function (point) {
        return new Point(this.x + point.x, this.y + point.y);
    };
    return Point;
}());
// clase hija
var Point3D = (function (_super) {
    __extends(Point3D, _super);

    function Point3D(x, y, z) {
        _super.call(this, x, y);
        this.z = z;
    }
    // función add
    Point3D.prototype.add = function (point) {
        // llamada a la función del padre
        var point2D = _super.prototype.add.call(this, point);
        // devolvemos resultado
        return new Point3D(point2D.x, point2D.y, this.z + point.z);
    };
    return Point3D;
}(Point));`
  code11 = `// Herencia
class Animal {
    name: string;
    constructor(theName: string) {
        this.name = theName;
    }
    move(distanceInMeters: number = 0) {
        console.log(\`\${this.name} moved \${distanceInMeters}m.\`);
    }
}
class Snake extends Animal {
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}
class Rhino extends Animal {
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters = 10) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}
class Elephant extends Animal {
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters = 20) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}
// Para poder Crear un array con este typo de objetos tenemos que utilizar la clase Pa
dre Ej:
    let array: Animal[] = [new Rhino('Rinocerator'), new Snake("Serpentina"), new Elepha
        nt("Elefanton")
    ];
// El acceso a este ejemplo sería muchisimo más sencillo
let ej2 = {
    Rhino: new Rhino('Rinocerator'),
    Snake: new Snake("Serpentina"),
    Elephant: new Elephant("Elefanton")
};
console.log(array);`
  code12 = `var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({
                    __proto__: []
                }
                instanceof Array && function (d, b) {
                    d.__proto__ = b;
                }) ||
            function (d, b) {
                for (var p in b)
                    if (b.hasOwnProperty(p)) d[p] = b[p];
            };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);

        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Herencia
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) {
            distanceInMeters = 0;
        }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);

    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) {
            distanceInMeters = 5;
        }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(Animal));
var Rhino = /** @class */ (function (_super) {
    __extends(Rhino, _super);

    function Rhino(name) {
        return _super.call(this, name) || this;
    }
    Rhino.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) {
            distanceInMeters = 10;
        }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Rhino;
}(Animal));
var Elephant = /** @class */ (function (_super) {
    __extends(Elephant, _super);

    function Elephant(name) {
        return _super.call(this, name) || this;
    }
    Elephant.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) {
            distanceInMeters = 20;
        }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Elephant;
}(Animal));
// Para poder Crear un array con este typo de objetos tenemos que utilizar la clase Padre Ej:
var array = [new Rhino('Rinocerator'), new Snake("Serpentina"), new Elephant("Elefanton")];
// El acceso a este ejemplo sería muchisimo más sencillo
var ej2 = {
    Rhino: new Rhino('Rinocerator'),
    Snake: new Snake("Serpentina"),
    Elephant: new Elephant("Elefanton")
};
console.log(array);`
  code13 = `class Base {
  log() {
      console.log('hello world');
  }
}
class Child extends Base {
  log() {
      super.log()
  };
}`
  code14 = `class Base {
  // realizamos una función mediante el uso de fat arrow
  log = () => {
      console.log('hello world');
  }
}
class Child extends Base {
  logWorld() {
      this.log()
  };
}`
  code15 = `function a(x: number);
function a(x: String);
function a(x: boolean);
function a(x: Array < number > );
function a(x) {
    // implementación de la función
}`
  code16 = `// Disposable Mixin
class Disposable {
    isDisposed: boolean;
    dispose() {
        this.isDisposed = true;
    }
}
// Activatable Mixin
class Activatable {
    isActive: boolean;
    activate() {
        this.isActive = true;
    }
    deactivate() {
        this.isActive = false;
    }
}
class SmartObject implements Disposable, Activatable {
    // Este constructos lo que hará será que mostrará por pantalla
    // los estados isActive y isDisposed cada 500 ms
    constructor() {
        setInterval(() => console.log(this.isActive + " : " + this.isDisposed), 500);
    }
    interact() {
        this.activate();
    }
    // Disposable
    isDisposed: boolean = false;
    dispose: () => void;
    // Activatable
    isActive: boolean = false;
    activate: () => void;
    deactivate: () => void;
}
applyMixins(SmartObject, [Disposable, Activatable]);
let smartObj = new SmartObject();
// esto generará una interactuación cada segundo cambiando el estado de
// \`false - false\` a \`true - true\` la primera vez,
// luego como la variable ya valdría
\`true - true\`
// simplemente se dedicaría a mostrarla cada segundo
setTimeout(() => smartObj.interact(), 1000);
////////////////////////////////////////
// In your runtime library somewhere
////////////////////////////////////////
function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}`
  code17 = `// Disposable Mixin
class Disposable {
    isDisposed: boolean;
    dispose() {
        this.isDisposed = true;
    }
}
// Activatable Mixin
class Activatable {
    isActive: boolean;
    activate() {
        this.isActive = true;
    }
    deactivate() {
        this.isActive = false;
    }
}`
  code18 = `class SmartObject implements Disposable, Activatable {`
  code19 = `// Implementamos Disposable
isDisposed: boolean = false;
dispose: () => void; // esto es lo mismo que declarar una función vacía
// Implementamos Activatable
isActive: boolean = false;
activate: () => void;
deactivate: () => void;`
  code20 = `function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach(baseCtor => {
      Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
          derivedCtor.prototype[name] = baseCtor.prototype[name];
      });
  });
}`
  code21 = `applyMixins(SmartObject, [Disposable, Activatable]);`
  code22 = `interface a {
  b: number;
}
interface b extends a {
  c: string;
}
class test implements b {
  b: number;
  c: string;
  constructor(b: number, c: string) {
      this.b = b;
      this.c = c;
  }
}`

  constructor() { }

  ngOnInit() {
  }

}
