[![npm version](https://badge.fury.io/js/angular2-expandable-list.svg)](https://badge.fury.io/js/angular2-expandable-list)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# Power Styles

> The power styles provider dynamic style properties for svelte

## Prerequisites

This library requires Svelte 3.x.x (version 3 or later).
[Svelte](https://svelte.dev/) are really easy to install.


## Table of contents

- [Project Name](#project-name)
  - [Prerequisites](#prerequisites)
  - [Table of contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
    - [useBasic](#usebasic)
  - [Contributing](#contributing)
  - [Versioning](#versioning)
  - [Authors](#authors)
  - [License](#license)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

To install and set up the library, run:

```sh
$ npm install power-styles
```

Or if you prefer using Yarn:

```sh
$ yarn add --dev myLib
```

## Usage

Supported options and result fields for the `useBasicFetch` hook are listed below.

### useBasic

`property from props`

| Property | Type | Default value | 
| --- | --- | --- |
| FontSize | String | "4em" |

if you what style from props

Example:

```html
<script>
	import { FontSize } from "power-styles";
	export let name, fontSize = "4em";
</script>

<main>
	<p
		use:FontSize={fontSize}
	>{name}</p>
</main>

<style>
	p {
		color: #ff3e00;
		text-transform: uppercase;
		font-weight: 100;
	}
</style>
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Add your changes: `git add .`
4.  Commit your changes: `git commit -am 'Add some feature'`
5.  Push to the branch: `git push origin my-new-feature`
6.  Submit a pull request :sunglasses:

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/JuanDAC/power-styles/tags).

## Authors

* **JuanDAC** - *Initial work* - [JuanDAC](https://github.com/JuanDAC)

See also the list of [contributors](https://github.com/JuanDAC/power-styles/contributors) who participated in this project.

## License

[MIT License](https://andreasonny.mit-license.org/2019)
