"use strict";
function Launcher() {};

Launcher.prototype.canLaunch = function (options, successCallback, errorCallback) {
	cordova.exec(successCallback, errorCallback, "Launcher", "canLaunch", [options]);
};

Launcher.prototype.launch = function(options, successCallback, errorCallback) {
	cordova.exec(successCallback, errorCallback, "Launcher", "launch", [options]);
}