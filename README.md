# @Eazymov/vue-mce

[![npm](https://img.shields.io/npm/v/@deveodk/vue-tinymce.svg)](https://www.npmjs.com/package/@deveodk/vue-tinymce) [![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

> Best VueJS component for TinyMCE

## Installation

### Direct `<script />` include:
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
### Value
You can pass the `value` prop to VueMce component:
```html
<template>
  <vue-mce :value="myValue" />
</template>
```
```javascript
new Vue({
  data: () => ({
    myValue: 'Hello World!',
  }),
});
```
**Important:** if you will change the value **after** VueMce component init, it won't trigger update in editor.
### v-model
You can use the `v-model` directive to create data-binding. Every time you change content in editor, your value updates
```html
<template>
  <vue-mce v-model="myValue" />
</template>
```
**Important:** in this case `v-model` provides only **one-way-data-binding**, i.e VueMce will set your value as editor content only when tinymce init. If you need to update editor content **after** tinymce init, you should read more further.
## ref
If you need to set editor content after init, you can simply set ref to this component and call this.$refs['YOUR_REF'].setContent(yourContent)
```html
<template>
  <vue-mce ref="editor" />
</template>
```
```javascript
new Vue({

  methods: {
    getData () {
      API.get()
        .then((res) => {
          this.$refs['myRef'].setContent(res.content);
        });
    },
  },
  
  created () {
    this.getData();
  },
});
```
## Events
VueMce provides 4 types of events: init, input, change, destroy
```html
<template>
  <vue-mce
    @init="handleInit"
    @input="handleInput"
    @change="handleChange"
    @destroy="handleDestroy"
  />
</template>
```
```javascript
new Vue({

  methods: {
    handleInit (editor) {
      /* This handler fires when tinymce editor is successfully initialized. Receives tinymce editor instance as argument
      
         You can save the editor instance to variable and call editor.setContent(yourContent) any time you want */
    },
    
    handleInput (value) {
      /* Fires whenever editor content changes. Receives generated HTML */
    },
    
    handleChange (value) {
      /* Fires only when editor emits focusout event. Receives generated HTML */
    },
    
    handleDestroy (editor) {
      /* Fires before VueMce component destroys. Receives tinymce editor instance */
    },
  },
});
```
