namespace app.Services {
    export class MyService {
        private MyResource;

        public getNames() {
            return this.MyResource.get().$promise;
        }

        constructor($resource: ng.resource.IResourceService) {
            this.MyResource = $resource('/home');
        }
    }
    angular.module('app').service('myService', MyService);
}