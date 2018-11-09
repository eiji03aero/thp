import * as terminalActions from "./Terminal.js";

/* -------------------- Constants -------------------- */
const BEGIN_BOOT_APP = 'BEGIN_BOOT_APP';
const COMPLETE_BOOT_APP = 'COMPLETE_BOOT_APP';

/* -------------------- Actions -------------------- */
export const beginBootApp = () => ({
  type: BEGIN_BOOT_APP
});

export const completeBootApp = () => ({
  type: COMPLETE_BOOT_APP
});

/* -------------------- Initial state -------------------- */
const initialState = {
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
