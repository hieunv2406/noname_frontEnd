import React from "react";
import { Route, Switch } from "react-router-dom";
import EmployeeSearch from "./Employee-search";

export default function EmployeePage() {
  return (
    <Switch>
      <Route path="/employee/employee-search" component={EmployeeSearch} />
    </Switch>
  );
}
