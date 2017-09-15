import { manager } from 'google-sheets-manager';

export const name = 'google-sheets-manager';

// reimplementation of Meteor.wrapAsync because error handling bug issue #2774
const wrapFunction = function wrapFunction(fn, context) {
	return function () {
		var self = context || this;
		var newArgs = _.toArray(arguments);
		var callback;

		for (var i = newArgs.length - 1; i >= 0; --i) {
			var arg = newArgs[i];
			var type = typeof arg;
			if (type !== "undefined") {
				if (type === "function") {
					callback = arg;
				}
				break;
			}
		}

		if (!callback) {
			var fut = new Future();
			callback = function (err, res) {
				fut.return({err: err, res: res});
			};
			++i; 
		}
		
		newArgs[i] = Meteor.bindEnvironment(callback);
		var result = fn.apply(self, newArgs);
		return fut ? fut.wait() : result;
	};
};

export class ServiceAccount extends manager.ServiceAccount {
	constructor(creds, googleAuthScopes) {
		super(creds, googleAuthScopes);
	}
	
	get authClient(): any {
		return super.authClient;
	}

	authorize(callback) {
		const wrappedFunction = wrapFunction(super.authorize, super);
		return wrappedFunction(callback);
	}

	isAuthorized() {
		return super.isAuthorized();
	}

	ensureValid(callback) {
		const wrappedFunction = wrapFunction(super.ensureValid, super);
		return wrappedFunction(callback);
	}
}

export class GoogleSheet extends manager.GoogleSheet {
	constructor(authClass, spreadsheetId, sheetId) {
		super(authClass, spreadsheetId, sheetId);
	}

	getInfo(callback) {
		const wrappedFunction = wrapFunction(super.getInfo, super);
		return wrappedFunction(callback);
	}

	getSheetTitle(callback) {
		const wrappedFunction = wrapFunction(super.getSheetTitle, super);
		return wrappedFunction(callback);
	}

	getBatchData(options, callback) {
		if (typeof options === "function") {
			callback = options;
			options = {};
		}
		options || (options = {});

		const wrappedFunction = wrapFunction(super.getBatchData, super);
		return wrappedFunction(options, callback);
	}

	getData(options, callback) {
		if (typeof options === "function") {
			callback = options;
			options = {};
		}
		options || (options = {});

		const wrappedFunction = wrapFunction(super.getData, super);
		return wrappedFunction(options, callback);
	}

	setBatchData(data, options, callback) {
		if (typeof options === "function") {
			callback = options;
			options = {};
		}
		options || (options = {});

		const wrappedFunction = wrapFunction(super.setBatchData, super);
		return wrappedFunction(options, callback);
	}

	setData(data, options, callback) {
		if (typeof options === "function") {
			callback = options;
			options = {};
		}
		options || (options = {});

		const wrappedFunction = wrapFunction(super.setData, super);
		return wrappedFunction(options, callback);
	}	
}
