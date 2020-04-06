<template>
    <div @click="launchFilePicker">
        <slot/>
        <input type="file" ref="file" @change="imageSelected" style="display: none">
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        props: {
            maxSize:{
                type:Number,
                default(){
                    return 1024 * 2; // 2 MB
                }
            },
            value:{},
            notImageErrorMsg: {
                type: String,
                default: 'The file you chose is invalid.',
            },
            tooBigErrorMsg: {
                type: String,
                default: 'The image max size is {maxSize} MB',
            },
        },
        computed: {
            tooBigMsg() {
                if (this.tooBigErrorMsg.includes('{maxSize}')) {
                    return this.tooBigErrorMsg.replace(
                        '{maxSize}',
                        (this.maxSize / 1024).toFixed(2),
                    )
                }
                return this.tooBigErrorMsg;
            },
        },
        methods: {
            launchFilePicker(){
                this.$refs.file.click();
            },
            imageSelected(evt) {
                const fieldName=evt.target.name;
                const file=evt.target.files;
                const maxSize = this.maxSize;
                let imageFile = file[0];

                // check if user actually selected a file
                if (file.length > 0) {
                    let size = imageFile.size / maxSize / maxSize;

                    if (!imageFile.type.match('image.*')) {
                        // check whether the upload is an image
                        this.$emit('error',this.notImageErrorMsg);
                    } else if (size > 1) {
                        // check whether the size is greater than the size limit
                        this.$emit('error',this.tooBigMsg);
                    } else {
                        let imageURL = URL.createObjectURL(imageFile);
                        this.$emit('input', { imageFile, imageURL })
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>

