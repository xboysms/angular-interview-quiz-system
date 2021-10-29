import { createAction, props } from '@ngrx/store';
import { Customer } from '../../../../models/customer';

// Define action variables
export const addCustomer_action = '[Customer] add customer';

export const loadCustomer_action = '[Customer] get customer';
export const loadCustomerSuccess_action = '[Customer] get customer';

export const deleteCustomer_action = '[Customer] delete customer';

export const updateCustomer_action = '[Customer] update customer';

// Create actions
export const loadCustomerAction = createAction(loadCustomer_action);
export const loadCustomerActionSuccess = createAction(loadCustomerSuccess_action, props<{customers: Customer[]}>());

export const addCustomer = createAction(
    addCustomer_action, (customer: Customer) => ({customer})
);

export const updateCustomer = createAction(updateCustomer_action, props<{customer: Customer}>())

export const deleteCustomerAction = createAction(deleteCustomer_action, props<{id: string}>());
