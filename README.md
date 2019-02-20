# Speedy-Dashboard

## Status

[![GitHub tag (latest SemVer)](https://img.shields.io/github/tag/wilsonj806/speedy-dashboard.svg)](https://github.com/wilsonj806/speedy-dashboard)
![Current package.json version](https://img.shields.io/github/package-json/v/wilsonj806/speedy-dashboard.svg?label=current%20version)
![Top language](https://img.shields.io/github/languages/top/wilsonj806/speedy-dashboard.svg)

## Extra Documentation

Extra documentation is listed below:
- [Current Progress](doc/current-progress.md)
- [Issues](doc/ISSUES.md)
- [Features](doc/FEATURES.md)

## General Description

A dashboard made with React, with part of the ideas for managing cards/ presentational containers already being done by my previous project, [React Array Method Visualizer](https://github.com/wilsonj806/react-array-method-visualizer).

## Goals and roadmap

### General goals

The goal of this project is to build off of the work done by [React Array Method Visualizer](https://github.com/wilsonj806/react-array-method-visualizer), and build a dashboard with some number of selectable items.

### Features to be implemented by v0.25.0

- Basic GUI for viewing added cards
- Implementation for Modal templating
- Implementation for at least one card that requires an API call(Simple GET calls)

### Features to be implemented by v0.5.0

- Implementation for all cards requiring simple API calls
- Modals for adding cards, and an information/ help dialog
- Start integration for all components

### Features to be implemented by v0.75.0

- Partial styling, probably based on something on Dribble
- **Ideally** a proxy set up for development to help handle API calls

### Features to be implemented by v1.0.0

- Support for drag and dropping cards around
- Full styling for components
- Sidebar for adding preset cards quickly

### Post v1.0.0

- Tests for components using Jest, Enzyme, and etc
- Multiple cards that display API data
- Redux integration to accomodate the above

## Cloning instructions

### General Overview

You'll need to have some version of Node.js(and subsequently npm, which is included) installed. Currently running everything on Node v10.10.0/ NPM v6.4.1 but it should work fine on older versions of Node/ NPM.
- if you do need to download Node, you can download it through the below links:
  - [Offical Node site](https://nodejs.org/en/download/)
  - [Node Version Manager Windows(requires more setup)](https://github.com/coreybutler/nvm-windows)
  - [Node Version Manager Mac(requires more setup)](https://github.com/creationix/nvm)


Clone the repo with your favorite SCM or manually download it
```
git clone https://github.com/wilsonj806/speedy-dashboard.git
```

Change your working directory to the folder of the newly cloned repo and run ```npm install``` in your command line interface.

### Using TypeScript

**NOTE** As this project uses a large amount of TypeScript, a code editor/ IDE with TypeScript/ TSLint support is **STRONGLY** recommended.
- Visual Studio/ Visual Studio Code is recommended, but Sublime, WebStorm, Eclipse and other editors support it as well
  - See the [official site](https://www.typescriptlang.org/index.html#download-links) for more

### Running Storybook

To run Storybook on the repo, after you clone the repo and install the dependencies, run ```npm run sb```.

Components are listed in the right side bar and lower level components are nested in the corresponding list item.

## License

Code released under the [MIT License](LICENSE).