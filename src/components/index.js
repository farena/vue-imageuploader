import Vue from "vue";
import ImgUploader from "./ImgUploader.vue";

const Components = {
    ImgUploader
};

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
});

export default Components;
