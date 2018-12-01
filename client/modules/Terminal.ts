import * as React from "react";
import { Message } from "../models/Message";
import { TextBasis } from "../models/Text";

/* -------------------- Constants -------------------- */
export const UPDATE_PROMPT_STATUS = 'UPDATE_PROMPT_STATUS';
export const UPDATE_CURRENT_MESSAGE = 'UPDATE_CURRENT_MESSAGE';
export const UPDATE_PROMPT_CURSOR_POSITION = 'UPDATE_PROMPT_CURSOR_POSITION';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const POST_CURRENT_MESSAGE = 'POST_CURRENT_MESSAGE';
export const CLEAR_CURRENT_MESSAGE = 'CLEAR_CURRENT_MESSAGE';

export const SUBMIT_PROMPT = 'SUBMIT_PROMPT';
export const DETECT_KEY_INTO_PROMPT = 'DETECT_KEY_INTO_PROMPT';

/* -------------------- Actions -------------------- */
export type TerminalActions =
  | ReturnType<typeof updatePromptStatus>
  | ReturnType<typeof updateCurrentMessage>
  | ReturnType<typeof updatePromptCursorPosition>
  | ReturnType<typeof addMessage>
  | ReturnType<typeof postCurrentMessage>
  | ReturnType<typeof clearCurrentMessage>;

export const updatePromptStatus = ({
  userName,
  directoryName,
}: {
  userName: string,
  directoryName: string,
}): any => ({
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

export const updateCurrentMessage = (currentMessage: string): any => ({
  type: UPDATE_CURRENT_MESSAGE,
  payload: {
    currentMessage,
  }
});

export const updatePromptCursorPosition = (cursorPosition: number): any => ({
  type: UPDATE_PROMPT_CURSOR_POSITION,
  payload: {
    cursorPosition,
  }
});

export const addMessage = ({ type, texts }: { type: string; texts: TextBasis[]; }): any => ({
  type: ADD_MESSAGE,
  payload: {
    message: new Message({
      type: type,
      texts: texts,
    }),
  },
});

export const postCurrentMessage = (): any => ({
  type: POST_CURRENT_MESSAGE,
});

export const clearCurrentMessage = (): any => ({
  type: CLEAR_CURRENT_MESSAGE,
});


export const submitPrompt = (): any => ({
  type: SUBMIT_PROMPT,
});

export const detectKeyIntoPrompt = (e: React.KeyboardEvent): any => ({
  type: DETECT_KEY_INTO_PROMPT,
  payload: {
    event: e,
  }
});

/* -------------------- Initial state -------------------- */
export interface TerminalStoreState {
  prompt: TextBasis[];
  currentMessage: string;
  cursorPosition: number;
  messages: Message[];
}

const initialState: TerminalStoreState = {
  prompt: [],
  currentMessage: '',
  cursorPosition: 0,
  messages: [],
};

/* -------------------- Reducers -------------------- */

export const terminalReducer = (state = initialState, action: TerminalActions) => {
  switch (action.type) {
    case UPDATE_PROMPT_STATUS:
      return { ...state, prompt: action.payload.prompt };

    case UPDATE_CURRENT_MESSAGE:
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
