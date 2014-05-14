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

You might see the data-require and data-semver HTML5 attributes in AngularJS examples.  These exist for dependency management.

```
<script data-require="angular.js@1.2.x" src="https://code.angularjs.org/1.2.16/angular.js" data-semver="1.2.16"></script>
```

## 4) Create module.

### Add file: app.js

#### Add reference to app.js
```
<script src="app.js"></script>
```

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
AngularJS essentially adds another layer of attributes and tags on top of HTML.  Angular also supports ```data-ng-*``` style tags that you can use if you want the html to pass validation.


### What is a Module?
*The below is from the [AngularJS Module Guide]*

You can think of a module as a container for the different parts of your app - controllers, services, filters, directives, etc. 

#### Why?
Most applications have a main method that instantiates and wires together the different parts of the application. Angular apps don't have a main method. Instead modules declaratively specify how an application should be bootstrapped.

#### Things to notice
* The reference to myApp module in ```<html ng-app="myApp">```. This is what bootstraps the app using your module.
* The empty array in ```angular.module('myApp', [])```. This array is the list of modules ```myApp``` depends on.

## 5) Commercial break: declarative vs. imparative

### Declarative
The framework looks for common functional entry points and attaches code to those points.

#### e.g.
```
<html ng-app="myApp">
```
```
<button ng-click="heyThereScopeDoSomethingCool()">
```

### Imparative
The developer explicitly codes all interactions

#### e.g.
```
$( document ).ready(function() {
  ...
});
```
```
$( '#myButton' ).click(function() {
  ...
});
```

## 6) Create controller.

### Add this to the app.js file

```
app.controller('TodoCtrl', function($scope) {
  
});
```

### Modify body

Tell the framework to use the ```TodoCtrl``` to control the body's contents.

```
<body ng-controller="TodoCtrl">
```

### Scope as Data-Model
*The below is from the [AngularJS Scope Guide]*

Scope is the glue between application controller and the view. During the template linking phase the directives set up ```$watch``` expressions on the scope. 
The ```$watch``` allows the directives to be notified of property changes, which allows the directive to render the updated value to the DOM.

## 7) Build out controller

*Add the following sections to the body of the TodoCtrl function*

### Init scope; Add some default todos

```
$scope.todos = [
  {text:'learn angular', done:true, ach: false},
  {text:'build an angular app', done:false, ach: false}];

$scope.todoText = '';
```

### FUNC: Add new todo

```
$scope.addTodo = function() {
  $scope.todos.push({text:$scope.todoText, done:false, ach: false});
  $scope.todoText = '';
};
```

### FUNC: Count remaining todos

```
$scope.remaining = function() {
  var count = 0;
  angular.forEach($scope.todos, function(todo) {
    if (!todo.done) { count++ }
  });
  return count;
};
```

### FUNC: Count active todos

```
$scope.activeTodos = function() {
  var count = 0;
  angular.forEach($scope.todos, function(todo) {
    if (!todo.ach) { count++ }
  });
  return count;
};
```

## 8) Todo with a view

### Add app.js to head

```
<script src="app.js"></script>
```

### Add a form to submit new todos

The form's submit event is bound to ```addTodo()``` and the text input is bound to the ```todoText``` property.

```
<h2>Todo App</h2>
<form ng-submit="addTodo()">
  <input type="text" ng-model="todoText"  size="30"
         placeholder="add new todo here">
  <input class="btn-primary" type="submit" value="add">
</form>
```

### Display the todos

```
<h3>Active Todos</h3>
<span>{{remaining()}} of {{activeTodos()}} remaining</span>
[ <a href="" ng-click="archive()">archive</a> ]
<ul class="unstyled">
  <li ng-repeat="todo in todos | filter:{ach: false}">
    <input type="checkbox" ng-model="todo.done">
    <span class="done-{{todo.done}}">{{todo.text}}</span>
  </li>
</ul>
```

## 9) Extra Credit

### Add functions to archive and count

```
$scope.archive = function() {
  angular.forEach($scope.todos, function(todo) {
    todo.ach = todo.done;
  });
};

$scope.archivedTodos = function() {
  var count = 0;
  angular.forEach($scope.todos, function(todo) {
    if (todo.ach) { count++ }
  });
  return count;
};
```

### Add UI component to call archive function

```
[ <a href="" ng-click="archive()">archive</a> ]
```

### Display the archived todos

```
<div ng-show="archivedTodos() > 0">
  <h3>Archived Todos</h3>
  <ul class="unstyled">
    <li ng-repeat="todo in todos | filter:{ach: true}">
      <span>{{todo.text}}</span>
    </li>
  </ul>
</div>
```

## 10) Et cetera

* Want to [run it] in your browser?
* Thanks to [this tutorial] for inspiration.
* Read [Pro AngularJS] on Safari Books.
* Watch [Build a Strong AngularJS Foundation] on Safari Books.

[AngularJS Module Guide]: https://docs.angularjs.org/guide/module
[Semantic Versioning]: http://semver.org/
[W3C spec]: http://www.w3.org/html/wg/drafts/html/CR/semantics.html#the-html-element
[AngularJS Scope Guide]: https://docs.angularjs.org/guide/scope
[run it]: http://rawgit.com/ghoti143/MyFirstNgApp/master/index.html
[this tutorial]: http://todo
[Pro AngularJS]: http://techbus.safaribooksonline.com/9781430264484
[Build a Strong AngularJS Foundation]: http://techbus.safaribooksonline.com/video/web-design-and-development/9781491905661
