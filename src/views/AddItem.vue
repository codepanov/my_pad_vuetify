<template>
  <div> <!-- no class 'main_element' here on purpose -->
      <Gallery :images="images"/>

      <v-text-field v-model="url" placeholder="Paste url here" :rules="rules"></v-text-field>
      <v-btn depressed color="primary" @click="get_images">Get Images</v-btn>
      <br>
      <span>{{ message }}</span>
      <!-- <div v-for="image in images" :key="image.url"><v-img :src="image.url" aspect-ratio="1.7"></v-img></div> -->
  </div>
</template>

<script>
import Gallery from '../components/ImageGallery.vue'

export default {
  components:{
    Gallery
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
      url: '',
      // diffbot: `http://api.diffbot.com/v3/image?&token=878c55163b7541c4455a7d7198468a70&url=https%3A//aleksandar.panov.rs`
    }
  },
  methods: {
    get_images() {
      this.message = 'Wait, getting images'
      axios.get(`http://api.diffbot.com/v3/image?&token=878c55163b7541c4455a7d7198468a70&url=${this.url}`)
      .then((response) => {
        console.log(response.data.objects)
        this.images = response.data.objects
        this.message = `Found ${response.data.objects.length} images. Check console!`
      })
      .catch((error) => {
        console.log(error);
      });
    }
  }
}
</script>