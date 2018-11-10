import { Directory } from "../models/Directory.js";
import { TextFile } from "../models/Files";

/* -------------------- var directory -------------------- */
const varDirectory = new Directory({
  name: 'var',
  children: [
    new TextFile({
      name: 'error.log',
      content: 'your error is here',
    }),
  ],
});

/* -------------------- home directory -------------------- */
const applicationsDirectory = new Directory({
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
});

const gamesDirectory = new Directory({
  name: 'games',
  children: [
    new TextFile({
      name: 'ox',
      content: 'ox game dayo',
    }),
  ],
});

const musicDirectory = new Directory({
  name: 'music',
  children: [
    new TextFile({
      name: 'uverworld',
      content: 'awesome',
    }),
    new TextFile({
      name: 'tamaki koji',
      content: 'classic',
    }),
  ],
});

const configDirectory = new Directory({
  name: 'config',
  children: [
    new TextFile({
      name: '.vimrc',
      content: 'set nocompatible',
    }),
    new TextFile({
      name: '.tmux.conf',
      content: 'set super tmuxinator',
    }),
    new TextFile({
      name: '.mash_profile',
      content: 'export PATH=/mama/momn',
    }),
  ],
});

const shareDirectory = new Directory({
  name: 'share',
  children: [
    new Directory({
      name: 'picture',
      child: [
        new TextFile({
          name: 'mamma.png',
          content: 'yes',
        }),
      ],
    }),
    new Directory({
      name: 'movie',
      children: [
        new TextFile({
          name: 'supernatural',
          content: 'Dean, check this out',
        }),
      ],
    }),
  ],
});

const desktopDirectory = new Directory({
  name: 'desktop',
  children: [
    new TextFile({
      name: 'memo.txt',
      content: 'do some study',
    }),
    new Directory({
      name: 'work',
      children: [
        new TextFile({
          name: 'todos',
          content: 'send an email',
        }),
        new TextFile({
          name: 'stats.excel',
          content: 'name,domo,kore,'
        }),
      ],
    }),
  ],
});

export const homeDirectory = new Directory({
  name: 'home',
  children: [
    applicationsDirectory,
    gamesDirectory,
    musicDirectory,
    configDirectory,
    shareDirectory,
    desktopDirectory,
  ],
})

/* -------------------- etc directory -------------------- */

const etcDirectory = new Directory({
  name: 'etc',
  children: [
    new TextFile({
      name: 'null',
      content: 'null file is here',
    }),
  ],
});

export const initialFileNodes = [
  varDirectory,
  homeDirectory,
  etcDirectory,
];
