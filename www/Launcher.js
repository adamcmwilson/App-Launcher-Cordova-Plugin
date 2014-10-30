console.log("[Launcher] installing...");

var exec = require("cordova/exec");

function Launcher() {}

Launcher.prototype.canLaunch = function (options, successCallback, errorCallback) {
	console.log("[Launcher] canLaunch: " + JSON.stringify(options));
    cordova.exec(successCallback, errorCallback, "Launcher", "canLaunch", [options]);
};

Launcher.prototype.launch = function(options, successCallback, errorCallback) {
	console.log("[Launcher] launch: " + JSON.stringify(options));
    cordova.exec(successCallback, errorCallback, "Launcher", "launch", [options]);
};

module.exports = new Launcher();

console.log("[Launcher] installed.");