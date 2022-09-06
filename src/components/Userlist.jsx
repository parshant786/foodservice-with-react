import React from "react";
import { List, Datagrid, TextField, DateField, EditButton, DeleteButton } from "react-admin";
export const Userlist = (props) => {
  return <List  {...props}>
      <Datagrid>
          <TextField source="id" />
      </Datagrid>
  </List>
};
