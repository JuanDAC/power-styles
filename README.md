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
    - [Use basic](#use-basic)
  - [Contributing](#contributing)
  - [Versioning](#versioning)
  - [Authors](#authors)
  - [License](#license)

## Getting Started

Provide style actions for each css rule. Provide style actions for each css rule. and can be applied to any HTML element by applying svelte's reactivity to css properties.

## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

To install and set up the library, run:

```sh
$ npm install power-styles
```

Or if you prefer using Yarn:

```sh
$ yarn add power-styles
```

## Usage

### property from prop

| Property | Type | Default value | 
| --- | --- | --- |
| FontSize | String | "4em" |

If you what style from props

Example:

```html
<script>
	import powerStyles from "power-styles";
  const {FontSize} = powerStyles;
	export fontSize = "4em";
</script>

<main>
	<p
		use:FontSize={fontSize}
	>
  <slot/>
  </p>
</main>
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

<details  style="user-select: none;">
	<summary>
		<strong style="user-select: none;cursor: pointer;">Juan David Avila</strong> - <a href="https://github.com/JuanDAC" target="_blank">JuanDAC</a>
	</summary>
	<img align="center" src="https://github-readme-stats.vercel.app/api/top-langs/?username=JuanDAC&layout=compact&theme=vue&langs_count=6" alt="adri-er github stats"/>
</details>

<br/>

See also the list of [contributors](https://github.com/JuanDAC/power-styles/contributors) who participated in this project.

## License

[MIT License](https://andreasonny.mit-license.org/2019)
