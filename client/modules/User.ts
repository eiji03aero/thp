/* -------------------- Constants -------------------- */

/* -------------------- Actions -------------------- */

/* -------------------- Initial state -------------------- */
export interface UserStoreState {
  name: string;
}

const initialState = {
  name: 'local_user',
};

/* -------------------- Reducers -------------------- */

export const userReducer = (state: UserStoreState = initialState, action: any) => {
  switch (action.type) {

    default:
      return state;
  }
};
