/* -------------------- Constants -------------------- */
const BEGIN_BOOT_APP = 'BEGIN_BOOT_APP';
const COMPLETE_BOOT_APP = 'COMPLETE_BOOT_APP';

/* -------------------- Actions -------------------- */
export const onBeginBootApp = () => ({
  type: BEGIN_BOOT_APP
});

export const onCompleteBootApp = () => ({
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
