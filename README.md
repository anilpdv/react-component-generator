# React-cg


[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger) [![Greenkeeper badge](https://badges.greenkeeper.io/anilpdv/react-component-generator.svg)](https://greenkeeper.io/)

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
> it will ask for which component type you want like class or hook, use space to select.

```sh
$ react-cg generate PostsList
? select component type (Press <space> to select, <a> t
o toggle all, <i> to invert selection)
❯◯ class
 ◯ hook
```
> it will ask for which javascript extension type you want like js or jsx, use space to select.

```sh
? select component type class
? select js type (Press <space> to select, <a> to toggle all, <i> to i
nvert selection)
❯◯ js
 ◯ jsx

```
> after selecting for javascript extension you will see another prompt for style sheet extension.
```sh
? select component type class
? select js type jsx
? Select css type (Press <space> to select, <a> to toggle all, <i> to 
invert selection)
❯◯ css
 ◯ scss
 ◯ sass
```
>after selecting style sheet you can see your component folder in current directory.
```sh
? select component type class
? select js type jsx
? Select css type css
file : PostList.component.jsx genrated in PostList folder
file : PostList.component.css generated in PostList folder
```
