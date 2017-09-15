// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by google-sheets-manager.js.
import { name as packageName } from "meteor/abdelrahman:google-sheets-manager";

// Write your tests here!
// Here is an example.
Tinytest.add('google-sheets-manager - example', function (test) {
  test.equal(packageName, "google-sheets-manager");
});
