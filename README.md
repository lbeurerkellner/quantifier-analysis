# Static Analysis of Quantifier Instantiations

This repository contains the implementation of an interactive construction editor for abstract instantiation graphs (AIG). AIGs can be used to model and analyse the instantiation behaviour of SMT solvers which implement universally quantified formulas using E-Matching \[1\].

## Build Instructions

The editor is implemented using TypeScript and the React.js library. To get a local development environment running. Execute the following commands:

```shell
yarn install # install dependencies
yarn run start # start development server
```

> See here for the Yarn Package Manager: https://yarnpkg.com

\[1\] De Moura, Leonardo, and Nikolaj Bjørner. "Efficient E-matching for SMT solvers." International Conference on Automated Deduction. Springer, Berlin, Heidelberg, 2007.