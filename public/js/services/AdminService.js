angular.module('AdminService', []).factory('AdminFactory', [
	'$http',
	'$q',
	'$resource',
	'GlobalFactory',
	function($http, $q, $resource, global) {
		var AddGiftAPI = $resource('/api/gift/add', {
			name: '@name',
			value: '@value',
			url: '@url',
			code: '@code',
			category: '@category',
			password: '@password'
		});
		var EditGiftAPI = $resource('/api/gift/edit', {
			_id: '@_id',
			name: '@name',
			value: '@value',
			url: '@url',
			code: '@code',
			category: '@category',
			bought: '@bought',
			password: '@password'
		});
		var GetGiftsAPI = $resource('/api/gift/get');
		var RemoveGiftAPI = $resource('/api/gift/remove', {
			id: '@id',
			password: '@password'
		});
		return {
			addGift: global.get.bind(null, AddGiftAPI),
			getGifts: global.get.bind(null, GetGiftsAPI),
			removeGift: global.get.bind(null, RemoveGiftAPI),
			editGift: global.get.bind(null, EditGiftAPI)
		};
	}
]);
