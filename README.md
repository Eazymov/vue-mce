# @Eazymov/vue-mce

[![npm](https://img.shields.io/npm/v/@deveodk/vue-tinymce.svg)](https://www.npmjs.com/package/@deveodk/vue-tinymce) [![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

> Best VueJS component for TinyMCE

## Installation

### Direct <script /> include:
Include VueMce **after** vue and tinymce. VueMce will be registered as a global component.

```html
<script src="link/to/tinymce"></script>
<script src="link/to/vue"></script>
<script src="https://cdn.jsdelivr.net/npm/vue-mce@latest/dist/vue-mce.min.js"></script>
```

### NPM
```bash
npm install vue-mce --save
```
### Yarn
```bash
yarn add vue-mce
```
### When used with a module system, you must explicitly install VueMce via Vue.use():
```javascript
import Vue from 'vue';
import VueMce from 'vue-mce';

Vue.use(VueMce);
```
It is possible to import **only** component to have possibility register it locally:
```javascript
import { component } from 'vue-mce';

const MyComponent = {
  components: {
    'vue-mce': component,
    },
  },
};
```
You don't need to do this when using global script tags.

## [Live example](https://codepen.io/Eazymov/full/MEzGYv/)

<p align="center"><a href="https://codepen.io/Eazymov/full/MEzGYv/"><img alt="Logo" src="http://res.cloudinary.com/dbkd5ucah/image/upload/v1508395086/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_ycxfpq.png" style="display: block; margin: 0 auto;" /></a></p>

## Usage

## Props
By default VueMce requires no props, you can simply do this:
```html
<whatever>
  <vue-mce />
</whatever>
```
### Config
You can pass to VueMce component any valid tinymce config that you want to use:
```javascript
const config = {
  theme: 'modern',
  fontsize_formats: "8px 10px 12px 14px 16px 18px 20px 22px 24px 26px 28px 30px 34px 38px 42px 48px 54px 60px",
  plugins: 'print preview fullpage powerpaste searchreplace autolink',
  toolbar1: 'formatselect fontsizeselect | bold italic strikethrough forecolor backcolor link',
};
```
Make sure that you don't pass to config `selector` field because it have priority over the `target` field which VueMce uses to mount component
