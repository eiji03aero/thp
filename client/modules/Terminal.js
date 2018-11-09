import uuid from 'uuid/v4';

/* -------------------- Constants -------------------- */
const TYPE_INTO_PROMPT = 'TYPE_INTO_PROMPT';
const UPDATE_PROMPT_CURSOR_POSITION = 'UPDATE_PROMPT_CURSOR_POSITION';
const ADD_MESSAGE = 'ADD_MESSAGE';
const CLEAR_CURRENT_MESSAGE = 'CLEAR_CURRENT_MESSAGE';

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

export const addMessage = ({ type, text }) => ({
  type: ADD_MESSAGE,
  payload: {
    id: uuid(),
    type,
    text,
  },
});

export const clearCurrentMessage = () => ({
  type: CLEAR_CURRENT_MESSAGE,
});

/* -------------------- Initial state -------------------- */
const initialState = {
  currentMessage: '',
  cursorPosition: 0,
  messages: [],
};

/* -------------------- Reducers -------------------- */

export const terminalReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE_INTO_PROMPT:
      return { ...state, currentMessage: action.payload.currentMessage };

    case UPDATE_PROMPT_CURSOR_POSITION:
      return { ...state, cursorPosition: action.payload.cursorPosition };

    case ADD_MESSAGE:
      const { type, text } = action.payload;
      return { ...state, messages: [ ...state.messages, makeMessage({ type, text })]};

    case CLEAR_CURRENT_MESSAGE:
      return { ...state, currentMessage: '' };

    default:
      return state;
  }
};

/* -------------------- Private functions -------------------- */
const makeMessage = ({ type, text }) => ({ id: uuid(), type, text });
