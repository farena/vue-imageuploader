<template>
  <div id="app">
    <img
        :src="imgPreview"
        width="200"
        v-if="imgPreview"
    >
    <imgUploader
        @error="displayError"
        @input="onUploadImage"
        :max-size="1024"
        not-image-error-msg="Error no image"
        too-big-error-msg="error too big"
    >
      <button>Upload Photo</button>
    </imgUploader>
  </div>
</template>

<script>
import imgUploader from './components/ImgUploader.vue';

export default {
  data() {
    return {
      imgPreview: null,
    };
  },
  components: {
    imgUploader,
  },
  methods: {
    displayError(error) {
      alert(error);
    },
    onUploadImage({ imageFile, imageURL }) {
      console.log(imageFile, imageURL);
      this.imgPreview = imageURL;
    },
  },
}
</script>
