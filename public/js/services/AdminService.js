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
		var DeleteRSVPAPI = $resource('/api/rsvp/delete', {
			id: '@id'
		});
		var AddDepoimentAPI = $resource('/api/depo/add', {
			name: '@name',
			text: '@text'
		});
		var GetDepoimentsAPI = $resource('/api/depo/get/all');
		var GetActiveDepoimentsAPI = $resource('/api/depo/get/active');
		var DeleteDepoimentAPI = $resource('/api/depo/delete', {
			id: '@id'
		});
		var UpdateDepoimentAPI = $resource('/api/depo/update', {
			id: '@id',
			active: '@active'
		});
		var AddBuyerAPI = $resource('/api/buyer/add', {
			name: '@name',
			message: '@message',
			gift: '@gift'
		});
		var GetBuyersAPI = $resource('/api/buyer/get');
		var DeleteBuyerAPI = $resource('/api/buyer/delete', {
			id: '@id'
		});
		return {
			addGift: global.get.bind(null, AddGiftAPI),
			getGifts: global.get.bind(null, GetGiftsAPI),
			removeGift: global.get.bind(null, RemoveGiftAPI),
			editGift: global.get.bind(null, EditGiftAPI),
			addRsvp: global.get.bind(null, AddRSVPAPI),
			deleteRsvp: global.get.bind(null, DeleteRSVPAPI),
			getRsvps: global.get.bind(null, GetRSVPSAPI),
			addDepo: global.get.bind(null, AddDepoimentAPI),
			getActiveDepos: global.get.bind(null, GetActiveDepoimentsAPI),
			getDepos: global.get.bind(null, GetDepoimentsAPI),
			deleteDepo: global.get.bind(null, DeleteDepoimentAPI),
			updateDepo: global.get.bind(null, UpdateDepoimentAPI),
			addBuyer: global.get.bind(null, AddBuyerAPI),
			getBuyers: global.get.bind(null, GetBuyersAPI),
			deleteBuyer: global.get.bind(null, DeleteBuyerAPI)
		};
	}
]);
