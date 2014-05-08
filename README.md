# AngularJS MVC TODO

### Build a simple AngularJS app from scratch

## 1) Start with bare html file.

```
<!DOCTYPE html>
<html>

  <head>
    <meta charset="utf-8" />
    <title>AngularJS TODO Plunker</title>
    <script>document.write('<base href="' + document.location + '" />');</script>
  </head>

  <body>
  </body>

</html>
```

## 2) Style it up.

### Add file: style.css

```
.done-true {
  text-decoration: line-through;
  color: grey;
}
```

### Add reference to index.html

```
<link rel="stylesheet" href="style.css" />
```

## 3) Enter AngularJS, stage right.

You might see the data-require and data-semver HTML5 attributes in AngularJS examples.

```
<script data-require="angular.js@1.2.x" src="https://code.angularjs.org/1.2.16/angular.js" data-semver="1.2.16"></script>
```

## 4) Create module.

### Add file: app.js

#### Create a new Angular module
```
var app = angular.module('todoApp', []);
```

#### Add an ng-app attribute to the html tag
```
<html ng-app="todoApp">
```

#### ng-whatchutalkinboutwillis
Is this a valid html5 attribute?  No.  The [W3C spec] does not list ng-app as a content attribute.
AngularJS essentially adds another layer of attributes and tags on top of HTML.


*The below is from the [AngularJS Module Guide]*

### What is a Module?
You can think of a module as a container for the different parts of your app - controllers, services, filters, directives, etc. 

### Why?
Most applications have a main method that instantiates and wires together the different parts of the application. Angular apps don't have a main method. Instead modules declaratively specify how an application should be bootstrapped.

### Things to notice
* The reference to myApp module in ```<html ng-app="myApp">```. This is what bootstraps the app using your module.
* The empty array in ```angular.module('myApp', [])```. This array is the list of modules ```myApp``` depends on.

## 5) Create controller.

### Add this to the app.js file

```js
app.controller('TodoCtrl', function($scope) {
  
});
```

*The below is from the [AngularJS Scope Guide]*
### Scope as Data-Model
Scope is the glue between application controller and the view. During the template linking phase the directives set up ```$watch``` expressions on the scope. 
The ```$watch``` allows the directives to be notified of property changes, which allows the directive to render the updated value to the DOM.

## 6) Build out controller

*Add the following sections to the body of the TodoCtrl function*

### Init scope; Add some default todos

```
$scope.todos = [
  {text:'learn angular', done:true},
  {text:'build an angular app', done:false}];

$scope.oldTodos = [];
$scope.todoText = '';
```

### FUNC: Add new todo

```
$scope.addTodo = function() {
  $scope.todos.push({text:$scope.todoText, done:false});
  $scope.todoText = '';
};
```

### FUNC: Calculate remaining todos

```
$scope.remaining = function() {
  var count = 0;
  angular.forEach($scope.todos, function(todo) {
    count += todo.done ? 0 : 1;
  });
  return count;
};
```

### FUNC: Archive

```
$scope.archive = function() {
  var tempTodos = $scope.todos;
  $scope.todos = [];
  
  angular.forEach(tempTodos, function(todo) {
    if (!todo.done) $scope.todos.push(todo);
    else $scope.oldTodos.push(todo);
  });
};
```

## 7) Todo with a view

### Add app.js to head

```
<script src="app.js"></script>
```

### Modify body

The body tag needs to be told which controller to use

```
<body ng-controller="TodoCtrl">
```

## 8) Et cetera

* Here's the [complete application]



[AngularJS Module Guide]: https://docs.angularjs.org/guide/module
[Semantic Versioning]: http://semver.org/
[W3C spec]: http://www.w3.org/html/wg/drafts/html/CR/semantics.html#the-html-element
[AngularJS Scope Guide]: https://docs.angularjs.org/guide/scope
[complete application]: http://plnkr.co/edit/yrks9a0ecIaleWl5UxqS
