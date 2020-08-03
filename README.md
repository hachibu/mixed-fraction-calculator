# mixed-fraction-calculator

A command line tool to evaluate mixed fraction math.

## Implementation

Under the hood, this tool uses [MathJS](https://mathjs.org/) to evaluate
expressions. Currently, MathJS does not support mixed fractions. Before the
expression is passed to MathJS, this tool rewrites mixed fractions as
parenthesized addition.

For example, the expression `1 1/2` will be rewritten as `(1 + 1/2)`, so that
MathJS can understand it.

## Installation

    $ yarn
    $ bin/run "1 + 1/2 + 0.5"
    2

## Commands

| Command     | Description                    |
| :---------- | :----------------------------- |
| yarn        | Install and compile TypeScript |
| yarn build  | Compile TypeScript             |
| yarn link   | Add to $PATH                   |
| yarn unlink | Remove from $PATH              |
