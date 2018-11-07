/* -------------------- Constants -------------------- */
const TYPE_INTO_PROMPT = 'TYPE_INTO_PROMPT';
const SUBMIT_PROMPT = 'SUBMIT_PROMPT';

/* -------------------- Actions -------------------- */
export const typeIntoPrompt = currentMessage => ({
  type: TYPE_INTO_PROMPT,
  payload: {
    currentMessage,
  }
});

export const submitPrompt = () => ({
  type: SUBMIT_PROMPT,
});

/* -------------------- Initial state -------------------- */
const initialState = {
  currentMessage: '',
  prompt: 'username:~',
  messages: [
    {
      type: 'system',
      text: 'Log into ssh client ...',
    },
    {
      type: 'system',
      text: 'wait ...',
    },
    {
      type: 'system',
      text: 'Log in successed!',
    },
  ],
};

/* -------------------- Reducers -------------------- */

export const terminalReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE_INTO_PROMPT:
      return { ...state, currentMessage: action.payload.currentMessage };

    case SUBMIT_PROMPT:
      return { ...state, currentMessage: '', messages: [ ...state.messages, { type: 'user', text: state.currentMessage }]};

    default:
      return state;
  }
};
