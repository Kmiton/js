'use strict';

//Наш единственный контроллер
todomvc.controller('TodoCtrl', function TodoCtrl($scope, $location, todoStorage) {
	var todos = $scope.todos = todoStorage.get();

	$scope.$watch('todos', function () { 
			todoStorage.put(todos);
	}, true);

	if ($location.path() === '') {
		$location.path('/');
	}

	$scope.addTodo = function () {
		if (!$scope.newTodo.length) {
			return;
		}

		todos.push({
			title: $scope.newTodo,
			completed: false
		});

		$scope.newTodo = '';
	};
});
