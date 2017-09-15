# Meteor Google Sheets Manager
Google Sheets API v4 abstracted modules for reading and manipulating Google Spreadsheets using service account access.

This package is a Meteor Wrapper for [google-sheets-manager](https://github.com/AbdelrahmanRamadan/google-sheets-manager) npm package

## Modules (WIKI)

### [google-sheets-manager wiki](http://gsheets-manager.bitballoon.com/)
Modules and code components breakdown and documentation on the wiki

-----------------------------------

All methods could be called asynchronousely with a `(err, res)` callback signature or synchronousely returning `{ err, res }` object thanks to future/fibers and Meteor's bindEnvironment
For Documentation and details refer to the original npm package [google-sheets-manager](https://github.com/AbdelrahmanRamadan/google-sheets-manager)