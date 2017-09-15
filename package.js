Package.describe({
	name: 'abdelrahman:google-sheets-manager',
	version: '0.0.1',
	// Brief, one-line summary of the package.
	summary: 'Google Sheets API v4 abstracted modules for reading and manipulating Google Spreadsheets using service account access.',
	// URL to the Git repository containing the source code for this package.
	git: 'https://github.com/AbdelrahmanRamadan/meteor-google-sheets-manager.git',
	// By default, Meteor will default to using README.md for documentation.
	// To avoid submitting documentation, set this field to null.
	documentation: 'README.md'
});

Package.onUse(function(api) {
	api.versionsFrom('1.5.1');
	api.use('ecmascript');
	api.mainModule('google-sheets-manager.js');
});

Package.onTest(function(api) {
	api.use('ecmascript');
	api.use('tinytest');
	api.use('abdelrahman:google-sheets-manager');
	api.mainModule('google-sheets-manager-tests.js');
});

Npm.depends({
	'google-sheets-manager': '^1.0.4',
});