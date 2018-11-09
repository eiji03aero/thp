import * as systemActions from '../modules/System.js';
import * as fileSystemActions from "../modules/FileSystem.js";
import * as terminalActions from '../modules/Terminal.js';

import { Directory } from "../models/Directory.js";
import { TextFile } from "../models/Files";

const varDirectory = new Directory({
  name: 'var',
  children: [
    new TextFile({
      name: 'error.log',
      content: 'your error is here',
    }),
  ],
});

const homeDirectory = new Directory({
  name: 'home',
  children: [
    new Directory({
      name: 'applications',
      children: [
        new TextFile({
          name: 'game.txt',
          content: 'game is here',
        }),
        new TextFile({
          name: 'editor.txt',
          content: 'editor will be here',
        }),
      ],
    }),
    new Directory({
      name: 'notes',
      children: [
        new TextFile({
          name: 'graduate_paper.txt',
          content: 'i will graduate from this college',
        }),
        new TextFile({
          name: 'memo.txt',
          content: 'you gonna need it',
        }),
      ]
    })
  ],
})

const initialFileNodes = [
  varDirectory,
  homeDirectory,
];

export const bootApp = () => dispatch => {
  dispatch(systemActions.beginBootApp());
  dispatch(fileSystemActions.setRootChildren(initialFileNodes));
  dispatch(fileSystemActions.setCurrentDirectory(homeDirectory));

  setTimeout(() => {
    dispatch(systemActions.completeBootApp());
    dispatch(terminalActions.addMessage({
      type: 'system',
      text: 'Log into ssh client',
    }));
    dispatch(terminalActions.addMessage({
      type: 'system',
      text: 'please wait ...',
    }));
    dispatch(terminalActions.addMessage({
      type: 'system',
      text: 'Log in succeeded!',
    }));
  }, 4000);
};
