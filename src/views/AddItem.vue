<template>
  <div> <!-- no class 'main_element' here on purpose -->
      <Gallery :images="images" />

      <vue-select-image :dataImages="dataImages"
        :is-multiple="true"
        :selectedImages="initialSelected"
        @onselectmultipleimage="onSelectMultipleImage">
      </vue-select-image>

      <v-btn depressed color="primary" @click="testButton">Test</v-btn>

      <v-text-field v-model="url" placeholder="Paste url here" :rules="rules"></v-text-field>
      <v-btn depressed color="primary" @click="get_images">Get Images</v-btn>
      <br>
      <span>{{ message }}</span>
      <!-- <div v-for="image in images" :key="image.url"><v-img :src="image.url" aspect-ratio="1.7"></v-img></div> -->
  </div>
</template>

<script>
import Gallery from '../components/ImageGallery.vue'
import VueSelectImage from 'vue-select-image'

let images

export default {
  components:{
    Gallery,
    VueSelectImage
  },
  data() {
    return {
      rules: [
        // value => !!value || 'Required.',
        // value => (value || '').length <= 20 || 'Max 20 characters',
        value => {
          const pattern = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
          return pattern.test(value) || 'Invalid url.'
        },
      ],
      images: [],
      message: '',
      initialSelected: [],
      dataImages: [],
      url: '',
      // diffbot: `http://api.diffbot.com/v3/image?&token=878c55163b7541c4455a7d7198468a70&url=https%3A//aleksandar.panov.rs`
    }
  },
  methods: {
    get_images() {
      this.message = 'Wait, getting images'
      axios.get(`http://api.diffbot.com/v3/image?&token=878c55163b7541c4455a7d7198468a70&url=${this.url}`)
      .then((response) => {
        this.images = response.data.objects // this is temporary
        this.dataImages = response.data.objects
        this.message = `Found ${response.data.objects.length} images!`
      })
      .catch((error) => {
        console.log(error);
      });
    },
    onSelectMultipleImage(e) {
      images = JSON.parse(JSON.stringify(e))
    },
    testButton() {
      console.log(images)
    }
  }
}
</script>