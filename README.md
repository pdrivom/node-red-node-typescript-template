# Node-RED Node TypeScript Template

Forked from: [alexk111/node-red-node-typescript-starter](https://github.com/alexk111/node-red-node-typescript-starter)

This is a quick-start template repository for creating new Node-RED node sets in TypeScript.

> Consult Node-RED [Documentation](https://nodered.org/docs/creating-nodes/) for further info.

## Template Features

- pre-commit,
- Linting,
- Dependencies auto-updates,
- Yarn command to add/remove nodes folder,
- Tests on Node v16/18/20,
- Local Node-RED on docker container.

## Supported and tested versions

| Node Version | Node-RED version             |
| ------------ | ---------------------------- |
| 20.x         | Node-RED 3.x or earlier only |
| 18.x         | Node-RED 3.x or earlier only |
| 16.x         | Node-RED 3.x or earlier only |

> :warning: Development using **Node v16**

## Project Structure

```
node-red-node-typescript-starter/
 ├──src/                             * source files of the node set
 │   ├──__tests__/                   * tests for the node set (test file names should match *.test.ts glob pattern)
 │   │   └──transform-text.test.ts   * tests for the transform-text node
 │   │
 │   └──nodes/                       * node set folder, where subfolder names = node types
 │       ├──shared/                  * folder for .ts files shared across multiple nodes in the node set
 │       │
 │       └──transform-text/          * source files of the transform-text node
 │           ├──icons/               * custom icons used by the node set in the editor
 │           │
 │           ├──modules/             * .ts modules for the runtime side (transform-text.js file) of the node
 │           │
 │           ├──shared/              * folder for .ts files shared between the runtime side (.js file) and the editor side (.html file) of the node
 │           │
 │           ├──transform-text.html/ * files for compiling and bundling into the editor side (transform-text.html file) of the node
 │           │   ├──modules/         * .ts modules
 │           │   ├──editor.html      * html template for the edit dialog
 │           │   ├──help.html        * html template for the help in the info tab
 │           │   └──index.ts         * entry file
 │           │
 |           └──transform-text.ts    * entry file for the runtime side (transform-text.js file) of the node
 |
 ├──package.json                     * dependencies and node types for the Node-RED runtime to load
 |
 ├──rollup.config.editor.json        * rollup config for building the editor side of the nodes
 |
 ├──tsconfig.json                    * base typescript config, for the code editor
 ├──tsconfig.runtime.json            * config for creating a production build of the runtime side of the nodes
 └──tsconfig.runtime.watch.json      * config for watching and incremental building the runtime side of the nodes
```

## Getting Started

1. Generate a new GitHub repository by clicking the **`Use this template`** button at the top of the repository homepage.
2. This project is designed to work with `yarn`. If you don't have `yarn` installed, you can install it with `npm install -g yarn`.
3. Install dependencies: `yarn install`.

## Using pre-commit

```
npm install -g pre-commit

pre-commit install
```

## Adding Nodes

You can quickly scaffold a new node and add it to the node set. Use the following command to create `my-new-node-type` node:

```
yarn add-node <my-new-node-type>
```

The node generator is based on mustache templates. At the moment there are three templates available:

- `blank` (used by default) - basic node for Node-RED >=1.0
- `blank-0` - node with a backward compatibility for running on Node-RED **(not recommended)** <1.0
- `config` - configuration node

To generate a node using a template, specify it as the third argument:

```
yarn add-node <my-new-node-type> blank
```

or

```
yarn add-node <my-new-node-config> config
```

### Adding Node Templates

If you want to make your own template available, add it to `./utils/templates/`.

## Developing Nodes

Build & Test in Watch mode:

```
yarn dev
```

## Building Node Set

Create a production build:

```
yarn build
```

## Test on local Node-RED installation (docker)

```
yarn dev:docker
```

## Validate Node

```
yarn validate
```

## Configure [Publishing on npm](https://docs.npmjs.com/cli/v10/using-npm/developers)

1. Create [npm token](https://docs.npmjs.com/creating-and-viewing-access-tokens),
2. Create GitHub [actions secret](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions),
3. Add to `.github/workflows/ci.yml` steps:

```
- run: yarn npm publish
env:
    NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```
