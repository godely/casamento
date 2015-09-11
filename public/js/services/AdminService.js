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
		var AddRSVPAPI = $resource('/api/rsvp/add', {
			name: '@name',
			count: '@count',
			rsvp: '@rsvp'
		});
		var GetRSVPSAPI = $resource('/api/rsvp/get');
		var AddDepoimentAPI = $resource('/api/depo/add', {
			name: '@name',
			text: '@text'
		});
		var GetDepoimentsAPI = $resource('/api/depo/get');
		var AddBuyerAPI = $resource('/api/buyer/add', {
			name: '@name',
			message: '@message',
			gift: '@gift'
		});
		return {
			addGift: global.get.bind(null, AddGiftAPI),
			getGifts: global.get.bind(null, GetGiftsAPI),
			removeGift: global.get.bind(null, RemoveGiftAPI),
			editGift: global.get.bind(null, EditGiftAPI),
			addRsvp: global.get.bind(null, AddRSVPAPI),
			getRsvps: global.get.bind(null, GetRSVPSAPI),
			addDepo: global.get.bind(null, AddDepoimentAPI),
			getDepos: global.get.bind(null, GetDepoimentsAPI),
			addBuyer: global.get.bind(null, AddBuyerAPI)
		};
	}
]);
