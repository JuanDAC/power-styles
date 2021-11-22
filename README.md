<p align="center">
<img alt="Icon power styles" src="https://github.com/JuanDAC/power-styles/blob/main/examples/power-styles-logo.svg?raw=true"/> 
</p>
<h1 align="center">Power Styles</h1>

[![license](https://img.shields.io/npm/l/svelte.svg)](https://raw.githubusercontent.com/JuanDAC/power-styles/main/LICENSE) 

> The power styles provides dynamic style properties for svelte

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

### `Font.svelte`:

![Font](https://github.com/JuanDAC/power-styles/blob/main/examples/simple_font.png?raw=true)

```html
<!-- Font.svelte -->
<script>
  import powerStyles from "power-styles";
  export let fontSize = CSS.em(2);
  const { FontSize } = powerStyles;
</script>

<p use:FontSize={fontSize}>
  <slot />
</p>
```

you can use like that

```html
<script>
  import Font from "./Font.svelte";
</script>

<main>
  <Font fontSize={CSS.em(4)}> Ex fugiat laboris dolore id culpa. </Font>

  <Font>
    Pariatur reprehenderit pariatur voluptate ea ipsum ullamco Lorem aliquip
    magna duis qui proident.
  </Font>
</main>
```

### `Flip.svelte:`

![Flip](https://github.com/JuanDAC/power-styles/blob/main/examples/advance.gif?raw=true) 


```html
<!-- Flip.svelte -->
<script>
  import powerStyles from "power-styles";
  export let onActive = new Function();

  const ACTIVE = 0,
    MOVE = 90,
    INACTIVE = 180;

  const { CustomRotateFlip } = powerStyles;
  let customRotateFlip = CSS.deg(90);

  const launchOnActive = () => {
    if (onActive instanceof Function) {
      onActive(customRotateFlip.value === ACTIVE);
    }
  };

  const activeOff = () => {
    customRotateFlip =
      customRotateFlip.value == INACTIVE
        ? CSS.deg(90)
        : CSS.deg(customRotateFlip.value + MOVE);
    launchOnActive();
  };

  const activeOn = () => {
    customRotateFlip =
      customRotateFlip.value == ACTIVE
        ? CSS.deg(MOVE)
        : CSS.deg(customRotateFlip.value - MOVE);
    launchOnActive();
  };
</script>

<div class="flip">
  <span class="on" on:click={activeOn}>ON</span>
  <span class="off" on:click={activeOff}>OFF</span>
  <div class="door" use:CustomRotateFlip={customRotateFlip} />
</div>

<style>
  .flip {
    margin: auto;
    height: 100px;
    width: 400px;
    display: grid;
    position: relative;
    grid-template-columns: repeat(2, 1fr);
    border-radius: 25px;
    overflow: hidden;
    cursor: pointer;
    user-select: none;
  }
  .flip :is(.on, .off, .door) {
    color: aliceblue;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 2em;
    font-weight: 900;
    word-spacing: 0pt;
    display: grid;
    place-content: center;
    background-color: brown;
  }
  .flip .on {
    background-color: green;
  }
  .door {
    box-shadow: -1px 0px 0px 0px aliceblue;
    position: absolute;
    transition: 300ms all;
    left: 50%;
    height: 100%;
    width: 50%;
    transform-origin: left;
    transform-style: preserve-3d;
    transform: rotateY(var(--rotate-flip));
  }
  .door:after {
    position: absolute;
    background-color: green;
    content: "";
    height: 100%;
    width: 100%;
    backface-visibility: hidden;
  }
</style>
```

how to register custom property 

Selector label in CSS file

```css
power-styles {
  --rotate-flip: ;
}
```

or style label in `public/index.html` file

```html
<style id='power-styles'>
  @property --rotate-flip {
    syntax: "<angle>";
    inherits: false;
    initial-value: 90deg;
  }
</style>
```
you can use like that

```html
<script>
  import Flip from "./Flip.svelte";
</script>

<main>
  <Flip />
</main>
```

or

```html
<script>
  import Flip from "./Flip.svelte";
  const onActive = (state) => {
    console.log(state ? "Is active" : "Is not active");
  };
</script>

<main>
  <Flip onActive={onActive} />
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

[MIT License](https://raw.githubusercontent.com/JuanDAC/power-styles/main/LICENSE)
