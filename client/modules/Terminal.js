/* -------------------- Constants -------------------- */
const TYPE_INTO_PROMPT = 'TYPE_INTO_PROMPT';
const UPDATE_PROMPT_CURSOR_POSITION = 'UPDATE_PROMPT_CURSOR_POSITION';
const SUBMIT_PROMPT = 'SUBMIT_PROMPT';
const ADD_MESSAGE = 'ADD_MESSAGE';

/* -------------------- Actions -------------------- */
export const typeIntoPrompt = currentMessage => ({
  type: TYPE_INTO_PROMPT,
  payload: {
    currentMessage,
  }
});
export const updatePromptCursorPosition = position => ({
  type: UPDATE_PROMPT_CURSOR_POSITION,
  payload: {
    cursorPosition: position,
  }
});

export const submitPrompt = () => ({
  type: SUBMIT_PROMPT,
});

export const addMessage = ({ type, text }) => ({
  type: ADD_MESSAGE,
  payload: {
    type,
    text,
  },
});

/* -------------------- Initial state -------------------- */
const initialState = {
  currentMessage: '',
  cursorPosition: 0,
  prompt: 'username:~',
  messages: [],
};

/* -------------------- Reducers -------------------- */

export const terminalReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE_INTO_PROMPT:
      return { ...state, currentMessage: action.payload.currentMessage };

    case UPDATE_PROMPT_CURSOR_POSITION:
      return { ...state, cursorPosition: action.payload.cursorPosition };

    case SUBMIT_PROMPT:
      return { ...state, currentMessage: '', messages: [ ...state.messages, { type: 'user', text: state.currentMessage }]};

    case ADD_MESSAGE:
      const { type, text } = action.payload;
      return { ...state, messages: [ ...state.messages, { type, text }]};

    default:
      return state;
  }
};
