/* -------------------- Constants -------------------- */
const BEGIN_BOOT_APP = 'BEGIN_BOOT_APP';
const COMPLETE_BOOT_APP = 'COMPLETE_BOOT_APP';

/* -------------------- Actions -------------------- */
export type SystemActions =
  | ReturnType<typeof beginBootApp>
  | ReturnType<typeof completeBootApp>;

export const beginBootApp = () => ({
  type: BEGIN_BOOT_APP
});

export const completeBootApp = () => ({
  type: COMPLETE_BOOT_APP
});

/* -------------------- Initial state -------------------- */
export interface SystemStoreState {
  isBooting: boolean;
}

const initialState: SystemStoreState = {
  isBooting: false,
};

/* -------------------- Reducers -------------------- */
export const systemReducer = (state = initialState, action) => {
  switch (action.type) {
    case BEGIN_BOOT_APP:
      return { ...state, isBooting: true };

    case COMPLETE_BOOT_APP:
      return { ...state, isBooting: false };

    default:
      return state;
  }
};
