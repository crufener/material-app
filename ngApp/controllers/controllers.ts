namespace app.Controllers {
    export class MyController {
        public messsage = 'Hello to the home page!';
        public names;

        constructor(myService: app.Services.MyService) {
            this.names = myService.getNames();
        }
    }
    export class MenuController {
        public message = 'Hello to the menu page!';
    }
}