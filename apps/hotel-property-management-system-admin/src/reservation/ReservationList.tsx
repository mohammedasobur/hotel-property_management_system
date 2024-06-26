import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { GUEST_TITLE_FIELD } from "../guest/GuestTitle";

export const ReservationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Reservations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="checkInDate" source="checkInDate" />
        <TextField label="checkOutDate" source="checkOutDate" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="guest" source="guest.id" reference="Guest">
          <TextField source={GUEST_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="roomNumber" source="roomNumber" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
