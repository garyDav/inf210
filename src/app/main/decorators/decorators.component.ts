import { Component, OnInit } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-decorators',
  templateUrl: './decorators.component.html',
  styleUrls: ['./decorators.component.scss'],
  animations   : fuseAnimations
})
export class DecoratorsComponent implements OnInit {
  //Code style
  response: HighlightResult;
  code1 = `"experimentalDecorators": true`
  code2 = `@miDecorador`
  code3 = `function log(constructor: Function): void {
  console.log('Registered Class: ' + constructor['name'] + ' at ' + Date.now());
}
function logm < T > (target: Object, propertyKey: string | symbol, descriptor: TypedProper tyDescriptor < T > ): void {
  console.log('Registered Method: ' + propertyKey.toString() + ' at ' + Date.now());
}
function logparam(target: Object, propertyKey: string | symbol, parameterIndex: number): void {
  console.log('Registered Parameter: ' + propertyKey.toString() + ' - ' + parameterI ndex + ' at ' + Date.now());
}
// Así se utiliza un decorador
@log
class MyClass {
  public name: string = 'name';
  constructor() {
      console.log('constructor');
  }
  @logm
  public myMethod() {
      console.log('method')
  }
  @logm
  public myMethod2(param1: number, @logparam param2: boolean) {
      console.log('method2')
  }
}
var myClass = new MyClass();
myClass.myMethod();
myClass.myMethod2(1, false);
// ---------- COMO SE USAN LOS DECORADORES
// type ClassDecorator = <TFunction extends Function>(target: TFunction): TFunction |
void;
// type MethodDecorator = <T>(target: Object, propertyKey: string | symbol, descriptor
: TypedPropertyDescriptor < T > ): TypedPropertyDescriptor < T > | void;
// type PropertyDecorator = (target: Object, propertyKey: string | symbol): void;
// type ParameterDecorator = (target: Object, propertyKey: string | symbol, parameterI
ndex: number): void;`
  code4 = `function ClassDecoratorParams(param1: number, param2: string) {
  return function (
      target: Function // The class the decorator is declared on
  ) {
      console.log("ClassDecoratorParams(" + param1 + ", '" + param2 + "') called on:", target);
  }
}
@ClassDecoratorParams(1, "a")
@ClassDecoratorParams(2, "b")
class ClassDecoratorParamsExample {}`
  code5 = `ClassDecoratorParams(2, 'b') called on: function ClassDecoratorParamsExample() {}
ClassDecoratorParams(1, 'a') called on: function ClassDecoratorParamsExample() {}`
  code6 = `function PropertyDecorator(
  target: Object, // The prototype of the class
  propertyKey: string | symbol // The name of the property
) {
  console.log("PropertyDecorator called on: ", target, propertyKey);
}
class PropertyDecoratorExample {
  @PropertyDecorator
  name: string;
}`
  code7 = `PropertyDecorator called on: {} name`
  code8 = `function MethodDecorator(
  target: Object, // The prototype of the class
  propertyKey: string, // The name of the method
  descriptor: TypedPropertyDescriptor < any >
) {
  console.log("MethodDecorator called on: ", target, propertyKey, descriptor);
}
class MethodDecoratorExample {
  @MethodDecorator
  method() {}
}`
  code9 = `MethodDecorator called on: {
  method: [Function]
}
method {
  value: [Function],
  writable: true,
  enumerable: true,
  configurable: true
}`
  code10 = `function StaticMethodDecorator(
  target: Function, // the function itself and not the prototype
  propertyKey: string | symbol, // The name of the static method
  descriptor: TypedPropertyDescriptor < any >
) {
  console.log("StaticMethodDecorator called on: ", target, propertyKey, descriptor);
}
class StaticMethodDecoratorExample {
  @StaticMethodDecorator
  static staticMethod() {}
}`
  code11 = `StaticMethodDecorator called on: function StaticMethodDecoratorExample() {}`
  code12 = `function ParameterDecorator(
  target: Function, // The prototype of the class
  propertyKey: string | symbol, // The name of the method
  parameterIndex: number // The index of parameter in the list of the function's par
  ameters
) {
  console.log("ParameterDecorator called on: ", target, propertyKey, parameterIndex);
}
class ParameterDecoratorExample {
  method(@ParameterDecorator param1: string, @ParameterDecorator param2: number) {}
}`
  code13 = `ParameterDecorator called on: {
  method: [Function]
}
method 1
ParameterDecorator called on: {
  method: [Function]
}
method 0`

  constructor() { }

  ngOnInit() {
  }

}
