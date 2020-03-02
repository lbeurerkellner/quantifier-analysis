# Static Analysis of Quantifier Instantiations

This repository contains the implementation of an interactive construction editor for abstract instantiation graphs (AIG). AIGs can be used to model and analyse the instantiation behaviour of SMT solvers which implement universally quantified formulas using E-Matching \[1\].

## Building the Project

The editor is implemented using TypeScript and the React.js library. To get a local development environment running, execute the following commands:

```shell
yarn install # install dependencies
yarn run start # start development server
```

> See here for the Yarn Package Manager: https://yarnpkg.com

### Production Builds

For a web-based production build run the following commands in the top-level project.

```shell
yarn install # install dependencies
yarn run build # outputs a production web-build to subfolder build/
```

To package the application as a desktop app, additionally run the following commands.

```shell
cd desktop/
yarn install # install desktop-app dependencies
yarn dist # outputs production desktop-builds to the desktop/dist/ subfolder
```

## References

\[1\] De Moura, Leonardo, and Nikolaj Bjørner. "Efficient E-matching for SMT solvers." International Conference on Automated Deduction. Springer, Berlin, Heidelberg, 2007.