[![Build Status](https://travis-ci.com/pushkar100/setup-vanilla-js.svg?branch=master)](https://travis-ci.com/pushkar100/setup-vanilla-js)

# Setup 

Code repository containing all the tools needed to start off with a frontend project.

## How to use it?

Every folder caters to one type of setup. Copy the whole root directory. Inside each of them:
1. Run `npm i` or `yarn` to install dependencies. 
2. `config` containa all the webpack configs, `src` for the source of your project, `__tests__` for jest tests, etc
3. Config files include `.eslintrc.json`, `.prettierrc`, etc - the rules inside these can be modified later

Additionally, setup your editor for the dependecies such as linters and code formatters to perform actions on file save

## Changes to be made

Make sure `package.json` details are edited. If you are changing the license or code of conduct, make the appropriate changes in the corresponding file and `package.json` (if required)
