# Vue ImageUploader

Vue ImageUploader is an easy and customizable component to upload and preview images to any project.

## Installation
```
yarn add farena/vue-imageuploader

    or with npm

npm install farena/vue-imageuploader
```
```
src/main.js or src/index.js

import Vue from 'vue';
import App from './App.vue';
import VueImageuploader from 'vue-imageuploader';

Vue.use(VueImageuploader);
```

## Basic Usage
```
Inside any component in the project

<template>
  <div>
    <imgUploader
        @error="displayError"
        @input="onUploadImage"
    >
      <button>Upload Photo</button>
    </imgUploader>
  </div>
</template>

<script>
export default {
  methods: {
    displayError(error) {
      alert(error);
    },
    onUploadImage({ imageFile, imageURL }) {
      // imageFile = FILE to upload to backend with axios.
      // imageURL = base64 encoded image to use on preview
      console.log(imageFile, imageURL);
    },
  },
}
</script>
```

## Preview
You can add the imageURL base64 encoded response to a IMG tag.
```
<template>
  <div id="app">
    <img
        :src="imgPreview"
        width="200"
        v-if="imgPreview"
    >
    <imgUploader
        @input="onUploadImage"
    >
      <button>Upload Photo</button>
    </imgUploader>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgPreview: null,
    };
  },
  methods: {
    onUploadImage({ imageFile, imageURL }) {
      console.log(imageFile, imageURL);
      this.imgPreview = imageURL;
    },
  },
}
</script>
```

## Custom MaxSize
```
<imgUploader
    @error="displayError"
    @input="onUploadImage"
    :max-size="1024" // MaxSize in KB's
>
  <button>Upload Photo</button>
</imgUploader>
```

## Custom Error Messages
In the "too-big-error-msg" you can bind the maxSize set up before with {maxSize}. This time is displayed in MB's. 
```
<imgUploader
    @error="displayError"
    @input="onUploadImage"
    :max-size="1024" // MaxSize in KB's
    not-image-error-msg="File is not an image"
    too-big-error-msg="Image is too big, it cannot be more than {maxSize} MB"
>
  <button>Upload Photo</button>
</imgUploader>
```
