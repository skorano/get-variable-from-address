// manipulate or get data from browser's address bar
// k.skorupski november 2014
var addressBar = {
    getVariable : function (name) {
        "use strict";
        var url = document.URL, variable = "";
        url = url.split("?");
        url = url[1].split("&");
        url.forEach(function (elem) {
            elem = elem.split("=");
            if (elem[0] === name) {
				variable = elem[1];
			}
		});
		return variable;
    },
    addVariable : function () {
        "use strict";
    },
    get : function () {
        "use strict";
    },
    push : function () {
        "use strict";
    }
};

// addressBar.getVariable(name) - returns value of selected value from addres bar eg. /?name=value
// addressBar.addVariable(name, value) - will add new variable into address bar. Also will return error if variable already exists
// addressBar.updateVariable(name, value) - will change value of already existing variable in address bar
// addressBar.get() - returns current address
// addressBar.push() - sets new address and push it into history state