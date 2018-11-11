import uuid from 'uuid/v4';
import { Message } from "../models/Message.js";
import { colors } from "../utils/colors.js";

/* -------------------- Constants -------------------- */
const UPDATE_PROMPT_STATUS = 'UPDATE_PROMPT_STATUS';
const TYPE_INTO_PROMPT = 'TYPE_INTO_PROMPT';
const UPDATE_PROMPT_CURSOR_POSITION = 'UPDATE_PROMPT_CURSOR_POSITION';
const ADD_MESSAGE = 'ADD_MESSAGE';
const CLEAR_CURRENT_MESSAGE = 'CLEAR_CURRENT_MESSAGE';

/* -------------------- Actions -------------------- */
export const updatePromptStatus = ({ userName, directoryName }) => ({
  type: UPDATE_PROMPT_STATUS,
  payload: {
    prompt: [
      { text: userName },
      { text: ':' },
      { text: directoryName, color: 'blue' },
      { text: '$ ' },
    ],
  },
})
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

export const addMessage = ({ type, texts }) => ({
  type: ADD_MESSAGE,
  payload: {
    message: new Message({
      type: type,
      texts: texts,
    }),
  },
});

export const clearCurrentMessage = () => ({
  type: CLEAR_CURRENT_MESSAGE,
});

/* -------------------- Initial state -------------------- */
const initialState = {
  prompt: [],
  currentMessage: '',
  cursorPosition: 0,
  messages: [],
};

/* -------------------- Reducers -------------------- */

export const terminalReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROMPT_STATUS:
      return { ...state, prompt: action.payload.prompt };

    case TYPE_INTO_PROMPT:
      return { ...state, currentMessage: action.payload.currentMessage };

    case UPDATE_PROMPT_CURSOR_POSITION:
      return { ...state, cursorPosition: action.payload.cursorPosition };

    case ADD_MESSAGE:
      return { ...state, messages: [ ...state.messages, action.payload.message ]};

    case CLEAR_CURRENT_MESSAGE:
      return { ...state, currentMessage: '' };

    default:
      return state;
  }
};

/* -------------------- Private functions -------------------- */
const makeMessage = ({ type, text }) => ({ id: uuid(), type, text });
