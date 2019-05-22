# React-cg


[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

React-cg is simple component generator for react with some boiler code.

```sh
$ react-cg -h
Usage: react-cg [options] [command]

rgc

Options:
  -V, --version      output the version number
  -h, --help         output usage information

Commands:
  generate|g <name>  generate component

```

# Commads
 > react-cg has only one command generate alias 'g' to generate component.
```sh
$ react-cg generate PostsList
? select js type (Press <space> to select, <a> to toggl
e all, <i> to invert selection)
❯◯ js
 ◯ jsx
```
> it will ask for extension use space to select, which extension you want.
> after selecting for javascript extension you will see another prompt for style sheet extension.
```sh
? select js type js
? Select css type (Press <space> to select, <a> to toggle all, <i> to 
invert selection)
❯◯ css
 ◯ scss
 ◯ sass
```
>after selecting style sheet you can see your component folder in current directory.
```sh
? select js type js
? Select css type css
file : PostList.component.js genrated in PostList folder
file : PostList.component.css generated in PostList folder
```
