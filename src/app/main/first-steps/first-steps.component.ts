import { Component, OnInit } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';

import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-first-steps',
  templateUrl: './first-steps.component.html',
  styleUrls: ['./first-steps.component.scss'],
  animations   : fuseAnimations
})
export class FirstStepsComponent implements OnInit {
  //Code style
  response: HighlightResult;
  code1 = `var a=3;
var b="hola";
var c=a+b; // Resultado 3hola
if ("0" == 0) // es true
if ("3" === 3) // es false`
  code2 = `let isDone: boolean = false;`
  code3 = `let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;`
  code4 = `let color: string = "blue"; //
color = 'red';`
  code5 = `let fullName: string = \`Bob Bobbington\`;
let age: number = 37;
let sentence: string = \`Hello, my name is \${ fullName }. I'll be \${ age + 1 } years old next month.\``
  code6 = 
  `let sentence: string = "Hello, my name is " + fullName + "." + "I'll be " + (age + 1) + " years old next month."`
  code7 = `var lyrics = 'Never gonna give you up'; // entre comillas simples
var html = \`<div>\${lyrics}</div>\`; // entre tilde inversa`
  code8 = `let literalString = 'Hello';`
  code9=`let literalString = 'Hello';
literalString = 'Bye'; // Error: "Bye" is not assignable to type "Hello"`
  code10=`type CardinalDirection =
      "North"
      | "East"
      | "South"
      | "West";
function move(distance: number, direction: CardinalDirection) {
  // ...
}
move(1,"North"); // Okay
move(1,"Nurth"); // Error!`
  code11=`let list: number[] = [1, 2, 3];`
  code12=`let list: Array<number> = [1, 2, 3];`
  code13=`// ----- ejemplo.ts -----------
console.log(undefined == undefined); // true
console.log(null == undefined); // true
console.log(0 == undefined); // false
console.log('' == undefined); // false
console.log(false == undefined); // false`
  code14=`// Declaración de tublas
let x: [string, number];
// Inicialización correcta
x = ["hello", 10]; // OK
// Inicialización incorrecta
x = [10, "hello"]; // Error`
  code15=`onsole.log(x[0].substr(1)); // OK
console.log(x[1].substr(1)); // Error, Un tipo 'number' no tiene la función 'substr'`
  code16=`x[3] = "world"; // OK, Un tipo 'string' puede ser asignado a una tupla que contenga 'string | number'
console.log(x[5].toString()); // OK, Un tipo 'string' y un tipo 'number' tienen la función 'toString'
x[6] = true; // Error,El tipo 'boolean' no es 'string | number'`
  code17=`enum Direction {
  Up = 1, // Si se le asigna un valor numerico primero, los siguientes valores empi
  ezan desde el número especificado
  Down = NaN, // Si le ponemos un NaN despúes de haber inicializado un valor nos ob
  liga a inicializar el siguiente desués de este, esto no solo pasa con Nan, pasa con St
  ring.length, etc.
  Left = "asdasd".length,
  Right = 1 << 1 // También admiten operadores binarios
}
var a = Direction.Up;
console.log(Direction.Down);`
  code18=`enum Color {Red, Green, Blue};
let c: Color = Color.Green;// 1`
  code19=`enum Color {Red = 1, Green = 2, Blue = 4};
let c: Color = Color.Green; // 2`
  code20=`enum Color {Red = 1, Green, Blue};
let colorName: string = Color[2];
alert(colorName); // Green`
  code21=`// FOO
enum FooIdBrand {}
type FooId = FooIdBrand & string;
// BAR
enum BarIdBrand {}
type BarId = BarIdBrand & string;
/**
* Demo
*/
var fooId: FooId;
var barId: BarId;
// Por seguridad
fooId = barId; // error
barId = fooId; // error
// Newing up
fooId = 'foo' as FooId;
barId = 'bar' as BarId;
// Los dos tipos son compatibles con la base
// que en este caso es string
var str: string;
str = fooId;
str = barId;`
  code22=`let notSure: any = 4;
notSure = "maybe a string instead"; // typeof = string
notSure = false;; // typeof = boolean

let notSure: any = 4;
notSure.ifItExists(); // OK, ifItExists puede existir
notSure.toFixed(); // OK, toFixed existe, pero no es comprobado por el compilador
let prettySure: Object = 4;
prettySure.toFixed(); // Error: La propiedad 'toFixed' no existe en un 'Object'.

let list: any[] = [1, true, "free"];
list[1] = 100;`
  code23=`function warnUser(): void {
  alert("This is my warning message");
}`
  code24=`let unusable: void = undefined;`
  code25=`var foo = 123;
if (true) {
  var foo = 456;
}
console.log(foo); // 456`
  code26=`let foo = 123;
if (true) {
  let foo = 456;
}
console.log(foo); // 123`
  code27=`const foo = 123;
foo = 456; // NO permitido`
  code28=`const foo = { bar: 123 };
foo = { bar: 456 }; // ERROR no se permite la modificación de objeto`
  code29=`const foo = { bar: 123 };
foo.bar = 456; // Permitido
console.log(foo); // { bar: 456 }`
  code30=`let list = {a: 1, b: 2, c:3};
for(let i in list) {
  console.log(list[i]); // 1, 2, 3
}`
  code31=`var list = { a: 1, b: 2, c: 3 };
for (var i in list) {
  console.log(list[i]); // 1, 2, 3
}`
  code32=`let list = {a: 1, b: 2, c:3};
for(let i in list) {
  console.log(i); // a, b, c
}`
  code33=`var list = { a: 1, b: 2, c: 3 };
for (var i in list) {
  console.log(i); // a, b, c
}`
  code34=`let list = ["a", "b", "c"];
for (let b of list) {
  console.log(b); // a, b, c
}`
  code35=`var list = ["a", "b", "c"];
for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
  var b = list_1[_i];
  console.log(b); // a, b, c
}`
  code36=`let string = "is it me you're looking for?";
for (let char of string) {
  console.log(char); // is it me you're looking for?
}`
  code37=`var string = "is it me you're looking for?";
for (var _i = 0, string_1 = string; _i < string_1.length; _i++) {
  var char = string_1[_i];
  console.log(char); // is it me you're looking for?
}`
  code38=`let obj = {a: 1, b: 2, c:3};
for(let i of obj) {
  console.log(i); // Error
}`
  code39=`var obj = { a: 1, b: 2, c: 3 };
for (var _i = 0, obj_1 = obj; _i < obj_1.length; _i++) {
  var i = obj_1[_i];
  console.log(i); // Error
}`
  code40=`setTimeOut(function(){
  console.log(this); // Elemento Que llama a la función
}, 2000);`
  code41=`setTimeOut(() => {
  console.log(this);// Elemento que contiene esta función
},2000);`
  code42=`// para poder definir tipos utilizaremos el O lógico
function padLeft(value: string, padding: string | number) {
  if(typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if(typeof padding === "string") {
    return Array(padding.length + 1).join(" ") + value;
  }
  // Si existiera Any tendriamos que controlar la excepción
  // Como buenas practicas y ya que este código al fin y al cabo
  // será javascript y es vulnerable a inyeción siempre está bien
  // realizar el control de las posibles excepciones
  throw new Error(\`Expected String or number, got '\${padding}' \`);
}
console.log(padLeft("hello", "aaa")); // Ejemplo de función con texto -> Funciona
console.log(padLeft("hello", 5)); // Ejemplo de función con número -> Funciona
console.log(padLeft("hello", true)); // Ejemplo de función con texto -> NO FUNCIONA (no compila)`
  code43=`// Compiled with --strictNullChecks
function validateEntity(e: Entity?) {
  // Throw exception if e is null or invalid entity
}
function processEntity(e: Entity?) {
  validateEntity(e);
  let s = e!.name;
  // Assert that e is non-null and access name
}`
  code44=`let x = (a: number) => 0;
let y = (b: number, s: string) => 0;
y = x; // OK
x = y; // Error`
  code45=`let x = () => ({name: 'Alice'});
let y = () => ({name: 'Alice', location: 'Seattle'});
x = y; // OK
y = x; // Error porque x()nmo tiene la propiedad location`
  code46=`function echo<T>(arg: T) : T {
  return arg;
}
let a = echo<number>(1); // El typeof es Number
let b = echo<String>("Hola mundo"); // El typeof es String`
  code47=`function echo(arg) {
  return arg;
}
var a = echo(1); // El typeof es Number
var b = echo("Hola mundo"); // El typeof es String`
  code48=`class Generic<T> {
  add: (X: T, y:T) => T;
}
let myGeneric = new Generic<number>();
console.log(myGeneric.add = function (x,y) {return x + y});
console.log(myGeneric.add(3,4));`
  code49=`var Generic = (function () {
  function Generic() {
  }
  return Generic;
}());
var myGeneric = new Generic();
console.log(myGeneric.add = function (x, y) { return x + y; });
console.log(myGeneric.add(3, 4));`
  code50=`// Interfaz que asegura que el parametro tenga el metodo length
interface withLength {
  length: number;
}
// El parametro hereda de la interfaz la cual fuerza al parametro tenga el método leng
th
function echo<T extends withLength>(arg: T): T {
  console.log(arg.length);
  return arg;
}
// Esto funcionará
let a = echo("aaa");
let t = echo({length: 2, name: "aa"});
// Esto NO funcionará
let b = echo(1);`
  code51=`// El parametro hereda de la interfaz la cual fuerza al parametro tenga el método length
function echo(arg) {
  console.log(arg.length);
  return arg;
}
// Esto funcionará
var a = echo("aaa");
var t = echo({ length: 2, name: "aa" });
// Esto NO funcionará
var b = echo(1);`
  code52=`function copyFields<T extends U, U>(source: T, target: U) : U {
  for(let id in source) {
    if(target[id] != undefined) {
      source[id] = target[id];
    } else {
      target[id] = source[id];
    }
  }
  return target;
}
let a = {a: 1, b: 2, c: 3};
let b = copyFields (a, {b: 10, c:20}); // Esto funcionará
let c = copyFields (a, {Q: 20}); // Esto NO funcionará
console.log(b); // 1, 10, 20
console.log(c); // Lo devuelve si lo compilas a pesar de saber que está mal`
  code53=`class Bird {
  fly() {
    console.log("Pajaro");
  }
  layEggs() {
    console.log("Pone huevos");
  }
}
class Fish {
  constructor() {
    // Solo para el ejemplo
  }
  swim() {
    console.log("PEZ")
  }
  layEggs() {
    console.log("Pone huevos");
  }
}
function getAnimal() : Fish | Bird {
  var a : Fish = new Fish();
  return a;
}
let pet = getAnimal();
console.log(getAnimal());
pet.layEggs();
// ASERCIÓN
if((<Fish>pet).swim) {
  (<Fish>pet).swim();
} else if((<Bird>pet).fly) {
  (<Bird>pet).fly();
}`
  code54=`type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
  if (typeof n === "string") {
    return n;
  }
  else {
    return n();
  }
}`
  code55=`type Container<T> = { value: T };`
  code56=`type Tree<T> = {
  value: T;
  left: Tree<T>;
  right: Tree<T>;
}`
  code57=`// FOO
enum FooIdBrand {}
type FooId = FooIdBrand & string;
// BAR
enum BarIdBrand {}
type BarId = BarIdBrand & string;`
  code58=`interface Bird {
  fly();
  layEggs(); // Los 2 pueden
}
interface Fish {
  swim();
  layEggs(); // Los 2 pueden
}
function getAnimal() : Fish | Bird {
  var a : Fish;
  return a;
}
let pet = getAnimal();
pet.layEggs(); // Esto funcionaría
pet.swim() // Esto da error`
  code59=`interface Bird {
  fly();
  layEggs();
}
interface Fish {
  swim();
  layEggs();
}
function getAnimal() : Fish | Bird {
  var a : Fish;
  return a;
}
function isFish(pet: Fish |Bird): pet is Fish {
  return (<Fish>pet).swim != undefined;
}
let pet = getAnimal();
if(isFish(pet)) {
  (<Fish>pet).swim();
  console.log('glup');
} else {
  console.log('believe i can fly');
  pet.fly();
}`
  code60=`var inc = (x)=>x+1;`
  code61=`function Person(age) {
  this.age = age
  // ejecutandola en el navegador el this es window
  // ya que es quien hace la llamada
  this.growOld = function() {
    this.age++;
  }
}
var person = new Person(1);
setTimeout(person.growOld,1000); // debería incrementar 1 + 1 = 2
setTimeout(function() { console.log(person.age); },2000); // Devuelve 1, debería ser 2`
  code62=`function Person(age) {
  this.age = age
  // aquí el this es el objeto y no quien hace la llamada
  this.growOld = () => {
    this.age++;
  }
}
var person = new Person(1);
setTimeout(person.growOld,1000);
setTimeout(function() { console.log(person.age); },2000); // devuelve 2`
  code63=`class Person {
  constructor(public age:number) {}
  growOld = () => {
    this.age++;
  }
}
var person = new Person(1);
setTimeout(person.growOld,1000);
setTimeout(function() { console.log(person.age); },2000); // 2`
  code64=`// Se iguala la función de la clase a una variable de otra clase
var growOld = person.growOld;
// más adelante se llama
growOld();`
  code65=`let _self = this;
something.each(function() {
  console.log(_self); // the lexically scoped value
  console.log(this); // the library passed value
});`
  code66=`class Adder {
  // This function is now safe to pass around
  add = (b: string): string => {
    return this.a + b;
  }
}
class ExtendedAdder extends Adder {
  // Create a copy of parent before creating our own
  private superAdd = this.add;
  // Now create our override
  add = (b: string): string => {
    return this.superAdd(b);
  }
}`
  code67=`// A curried function
let add = (x: number) => (y: number) => x + y;
// Simple usage
add(123)(456);
// partially applied
let add123 = add(123);
// fully apply the function
add123(456);`
  code68=`var obj = {x: 1, y: 2, z: 3};
console.log(obj.x); // 1
var {x, y, z} = obj;
console.log(x); // 1`
  code69=`var array = [1, 2, 3];
console.log(array[0]); // 1
var [x, y, z] = array;
console.log(x); // 1`
  code70=`var array = [1, 2, 3, 4];
var [x, y, ...rest] = array;
console.log(x, y, rest); // 1, 2, [3,4]`
  code71=`function rest(first, second, ...allOthers) {
  console.log(allOthers);
}
rest('foo', 'bar'); // []
rest('foo', 'bar', 'bas', 'qux'); // ['bas','qux']`
  code72=`var list = [1, 2];
list = [...list, 3, 4];
console.log(list); // [1,2,3,4]`
  code73=`const promise = new Promise((resolve, reject) => {
  resolve(123);
});
promise.then((res) => {
  console.log('I get called:', res === 123); // Devuelve: true
});
promise.catch((err) => {
  // Nuca es utilizado
});`
  code74=`const promise = new Promise((resolve, reject) => {
  reject(new Error("Algo malo a pasado"));
});
promise.then((res) => {
  // This is never called
});
promise.catch((err) => {
  console.log('Tengo una llamada: ', err.message); // Tengo una llamada: 'Algo malo a pasado'
});`
  code75=`Promise.resolve(123)
  .then((res) => {
    console.log(res); // 123
    return 456;
  })
  .then((res) => {
    console.log(res); // 456
    return Promise.resolve(123);
  })
  .then((res) => {
    console.log(res); // 123 : Notice that this \`this\` is called with the resolved value
    return Promise.resolve(123);
  })`
  code76=`Promise.reject(new Error('something bad happened'))
  .then((res) => {
    console.log(res); // not called
    return 456;
  })
  .then((res) => {
    console.log(res); // not called
    return Promise.resolve(123);
  })
  .then((res) => {
    console.log(res); // not called
    return Promise.resolve(123);
  })
  .catch((err) => {
    console.log(err.message); // something bad happened
  });`
  code77=`Promise.reject(new Error('something bad happened'))
  .then((res) => {
    console.log(res); // not called
    return 456;
  })
  .catch((err) => {
    console.log(err.message); // something bad happened
    return Promise.resolve(123);
  })
  .then((res) => {
    console.log(res); // 123
  })`
  code78=`Promise.resolve(123)
  .then((res) => {
    throw new Error('something bad happened')
    return 456;
  })
  .then((res) => {
    console.log(res); // never called
    return Promise.resolve(789);
  })
  .catch((err) => {
    console.log(err.message); // something bad happened
  })`
  code79=`function iReturnPromiseAfter1Second():Promise<string> {
  return new Promise((resolve)=>{
    setTimeout(()=>resolve("Hello world!"), 1000);
  });
}
Promise.resolve(123)
  .then((res)=>{
    // res is inferred to be of type \`number\`
    return iReturnPromiseAfter1Second();
  })
  .then((res) => {
    // res is inferred to be of type \`string\`
    console.log(res); // Hello world!
  });`
  code80=`// good json file
loadJSONAsync('good.json')
  .then(function (val) { console.log(val); })
  .catch(function (err) {
    console.log('good.json error', err.message); // never called
  })
  // non-existent json file
  .then(function () {
    return loadJSONAsync('absent.json');
  })
  .then(function (val) { console.log(val); }) // never called
  .catch(function (err) {
    console.log('absent.json error', err.message);
  })
  // invalid json file
  .then(function () {
    return loadJSONAsync('bad.json');
  })
  .then(function (val) { console.log(val); }) // never called
  .catch(function (err) {
    console.log('bad.json error', err.message);
  });`
  code81=`//-------- main.ts ---------
// Una función asincróna simulando la petición desde el servidor
function loadItem(id: number): Promise<{id: number}> {
  return new Promise((resolve) => {
    console.log('loading item', id);
    setTimeout(() => { // simulate a server delay
      resolve({ id: id });
    }, 1000);
  });
}
// Cadena (serie)
let item1, item2;
loadItem(1)
  .then((res) => {
    item1 = res;
    return loadItem(2);
  })
  .then((res) => {
    item2 = res;
    console.log('done');
  }); // overall time will be around 2s
// Paralelo
Promise.all([loadItem(1),loadItem(2)])
  .then((res) => {
    [item1,item2] = res;
    console.log('done')
  }); // overall time will be around 1s`
  code82=`//-------- main.js ---------
// Una función asincróna simulando la petición desde el servidor
function loadItem(id) {
  return new Promise((resolve) => {
    console.log('loading item', id);
    setTimeout(() => {
      resolve({ id: id });
    }, 1000);
  });
}
// Cadena (serie)
let item1, item2;
loadItem(1)
  .then((res) => {
    item1 = res;
    return loadItem(2);
  })
  .then((res) => {
    item2 = res;
    console.log('done');
  }); // overall time will be around 2s
// Paralelo
Promise.all([loadItem(1), loadItem(2)])
  .then((res) => {
    [item1, item2] = res;
    console.log('done');
  }); // overall time will be around 1s`
  code83=`function* infiniteSequence() {
  var i = 0;
  while(true) {
    yield i++;
  }
}
var iterator = infiniteSequence();
while (true) {
  console.log(iterator.next()); // { value: xxxx, done: false } para siempre
}`
  code84=`function* idMaker() {
  let index = 0;
  while (index < 3)
    yield index++;
}
let gen = idMaker();
console.log(gen.next()); // { value: 0, done: false }
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: undefined, done: true }
// Accede a la variable por que se le ha dicho apesar de que el 'yield' no ha sido efectuado.`
  code85=`//------ main.ts --------
function* generator() {
  console.log('Execution started');
  yield 0;
  console.log('Execution resumed');
  yield 1;
  console.log('Execution resumed');
}
var iterator = generator();
console.log('Starting iteration'); // Esto se ejecutará antes que nada de dentro del método generator()
console.log(iterator.next()); // { value: 0, done: false }
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: undefined, done: true }`
  code86=`$ node main.js
Starting iteration
Execution started
{ value: 0, done: false }
Execution resumed
{ value: 1, done: false }
Execution resumed
{ value: undefined, done: true }`
  code87=`// ------- ejemplo.js ----------
function* generator() {
  var bar = yield 'Console log';
  console.log(bar); // 'Un testo inyectado' -> asignado por nextThing = iterator.next('bar')
  yield 1;
}.
const iterator = generator();
// Start execution till we get first yield value
const foo = iterator.next();
console.log(foo.value); // Console log
// Resume execution injecting bar
const nextThing = iterator.next('Un texto inyectado'); // Aqui se le asigna el value al foo.value
console.log(nextThing);`
  code88=`Console log
Un texto inyectado
{ value: 1, done: false }`
  code89=`function* logGenerator() {
    console.log(yield);
    console.log(yield);
    console.log(yield);
  }
var gen = logGenerator();
// the first call of next executes from the start of the function
// until the first yield statement
gen.next();
gen.next('pretzel'); // pretzel
gen.next('california'); // california
gen.next('mayonnaise'); // mayonnaise`
  code90=`// --------- test.ts ------
function* generator() {
  try {
    yield 'foo';
    throw Error("Test");
  }
    catch(err) {
    console.log(err.message); // bar!
  }
}
var iterator = generator();
// Start execution till we get first yield value
var foo = iterator.next();
console.log(foo.value);
// como está comentado la excepción no se ejuta ya que no hay un 'next()'
//var foo = iterator.next();`
  code91=`foo`
  code92=`// --------- test.ts ------
function* generator() {
  try {
    yield 'foo';
    throw Error("Test");
  }
    catch(err) {
    console.log(err.message); // bar!
  }
}
var iterator = generator();
// Start execution till we get first yield value
var foo = iterator.next();
console.log(foo.value);
var foo = iterator.next();`
  code93=`foo
Test`
  code94=`function getFirstName() {
  setTimeout(function() {
    gen.next('alex')
  }, 1000);
}
function getSecondName() {
  setTimeout(function() {
    gen.next('perry')
  }, 1000);
}
function *sayHello() {
  var a = yield getFirstName();
  var b = yield getSecondName();
  console.log(a, b); //alex perry
}
var gen = sayHello();
gen.next();`
  code95=`// ----------- test.ts -----------
// No es código de verdad solamente es la prueba de concepto
async function foo() {
  try {
    var val = await getMeAPromise();
    console.log(val);
  }
  catch(err) {
    console.log('Error: ', err.message);
  }
}`
  code96=`// No olvideís que al no tener la función que genera las peticiones
// Este código no funciona
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
    function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
    step((generator = generator.apply(thisArg, _arguments)).next());
  });
};
// No es código de verdad solamente es la prueba de concepto
function foo() {
  return __awaiter(this, void 0, void 0, function* () {
    try {
      var val = yield getMeAPromise();
      console.log(val);
    }
    catch (err) {
      console.log('Error: ', err.message);
    }
  });
}`

  constructor() {
  }

  /**
   * On init
   */
  ngOnInit(): void {
  }
}
