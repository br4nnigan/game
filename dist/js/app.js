System.register("constants/config", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("default", {
                key: "value"
            });
        }
    };
});
System.register("Main", [], function (exports_2, context_2) {
    "use strict";
    var Main;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
            Main = (function () {
                function Main(config) {
                    "hi";
                }
                return Main;
            }());
            exports_2("default", Main);
        }
    };
});
System.register("app", ["constants/config", "Main"], function (exports_3, context_3) {
    "use strict";
    var config_1, Main_1, app;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [
            function (config_1_1) {
                config_1 = config_1_1;
            },
            function (Main_1_1) {
                Main_1 = Main_1_1;
            }
        ],
        execute: function () {
            app = new Main_1.default(config_1.default);
        }
    };
});
//# sourceMappingURL=app.js.map