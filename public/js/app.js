var thaguiApp = angular.module('thaguiApp', [
	'ngResource',
	'ui.bootstrap',
	'ui-notification',
  'uiGmapgoogle-maps',
  'timer',

	'GiftsCtrl',
	'AdminCtrl',
  'RSVPCtrl',
  'WeddingCtrl',
  'DepoCtrl',

	'AdminService',
	'GlobalService'

]).config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        //    key: 'your api key',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'visualization'
    });
});
