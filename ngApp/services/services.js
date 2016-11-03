var app;
(function (app) {
    var Services;
    (function (Services) {
        var MyService = (function () {
            function MyService($resource) {
                this.MyResource = $resource('/home');
            }
            MyService.prototype.getNames = function () {
                return this.MyResource.get().$promise;
            };
            return MyService;
        }());
        Services.MyService = MyService;
        angular.module('app').service('myService', MyService);
    })(Services = app.Services || (app.Services = {}));
})(app || (app = {}));
