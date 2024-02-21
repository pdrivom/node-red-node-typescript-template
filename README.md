# Node-RED Node TypeScript Template

This is a quick-start template repository for creating new Node-RED node sets in TypeScript.

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

1. Generate a new GitHub repository by clicking the `Use this template` button at the top of the repository homepage, then clone your new repo.
2. This project is designed to work with `yarn`. If you don't have `yarn` installed, you can install it with `npm install -g yarn`.
3. Install dependencies: `yarn install`.

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

## Testing Node Set in Node-RED

Once you have created a basic node module as described above, you can install it into your Node-RED runtime.

To test a node module locally the npm install <folder> command can be used. This allows you to develop the node in a local directory and have it linked into a local node-red install during development.

In your node-red user directory, typically `~/.node-red`, run:

```
npm install <location of node module>
```

For example, on Mac OS or Linux, if your node is located at `~/dev/node-red-contrib-<example-lower-case>` you would do the following:

```
cd ~/.node-red
npm install ~/dev/node-red-contrib-example-lower-case
```

On Windows you would do:

```
cd C:\Users\my_name\.node_red
npm install C:\Users\my_name\Documents\GitHub\node-red-contrib-<example-lower-case<>
```

This creates a symbolic link to your node module project directory in ~/.node-red/node_modules so that Node-RED will discover the node when it starts. Any changes to the node’s file can be picked up by simply restarting Node-RED. On Windows, again, using npm 5.x or greater:

> Note : npm will automatically add an entry for your module in the package.json file located in your user directory. If you don't want it to do this, use the --no-save option to the npm install command.
