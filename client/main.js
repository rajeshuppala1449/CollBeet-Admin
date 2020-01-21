import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";

import "../imports/startup/accounts-config.js";
import Dashboard from "../imports/ui/Dashboard";
import AccountsMain from "../imports/ui/accounts/AccountsMain"

Meteor.startup(() => {
//render(<Dashboard />, document.getElementById("render-target"));
render(<AccountsMain />, document.getElementById("render-target"));
});
