import {Action, createReducer, on} from '@ngrx/store';
import { Customer } from '../../../../models/customer';
import * as CustomerActions from '../../action/Customer/customer.action';

export const customerFeatureKey = 'customer';
export interface CustomerState {
    customers: Customer[];
}

export const initialState: CustomerState = {
    customers: []
};

export const customerReducer = createReducer(initialState, 
    on(CustomerActions.addCustomer, 
        (state: CustomerState, {customer}) => ({...state, customers: [...state.customers, customer]}))
    );
    on(CustomerActions.loadCustomerActionSuccess, (state, action) => {
        return {state, customers: action.customers};
    });

export function reducer(state: CustomerState | undefined, action: Action): any {
    return customerReducer(state, action);
}