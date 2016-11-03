var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var MyController = (function () {
            function MyController(myService) {
                this.messsage = 'Hello to the home page!';
                this.names = myService.getNames();
            }
            return MyController;
        }());
        Controllers.MyController = MyController;
        var MenuController = (function () {
            function MenuController() {
                this.message = 'Hello to the menu page!';
            }
            return MenuController;
        }());
        Controllers.MenuController = MenuController;
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
