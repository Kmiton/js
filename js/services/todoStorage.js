	/*global todomvc */
'use strict';

/**
 * Служба для извлечения сохраненных заданий из локального хранилища.
 */
todomvc.factory('todoStorage', function () {
	var STORAGE_ID = 'todos-angularjs';

	return {
		get: function () {
			return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
		},

		put: function (todos) {
			localStorage.setItem(STORAGE_ID, JSON.stringify(todos));
		}
	};
});
