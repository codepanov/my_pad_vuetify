<template>
  <div> <!-- no class main_element here on purpose -->
      <Gallery />

      <v-text-field v-model="url" placeholder="Paste url here" :rules="rules"></v-text-field>
      <v-btn depressed color="primary" @click="get_images">Get Images</v-btn>
      <br>
      <span>{{ message }}</span>
      <div v-for="image in images" :key="image.url"><v-img :src="image.url" aspect-ratio="1.7"></v-img></div>
  </div>
</template>

<script>
import Gallery from '../components/ImageGallery.vue'

export default {
  components:{
    Gallery
  }
}
</script>