<template>
  <v-app>
    <v-app-bar app color="primary" dark >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40" />
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100" />
      </div>
      <v-spacer></v-spacer>
      <v-btn href="#" target="_self" text>
        <span class="mr-2">My Pad</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content class="t-field">
      <router-view/>
    </v-content>

    <div class="text-center">
      <v-bottom-sheet v-model="sheet">
        <template v-slot:activator="{ on }">
          <v-bottom-navigation
            v-model="activeTab"
            shift
          >
            <v-btn to="/land" value="land">
              <span>Land</span>
              <v-icon>mdi-nature-people</v-icon>
            </v-btn>

            <v-btn to="/" value="home">
              <span>Home</span>
              <v-icon>mdi-home</v-icon>
            </v-btn>

            <v-btn to="/notifications" value="notifications">
              <span>Notifications</span>
              <v-icon>mdi-bell</v-icon>
            </v-btn>

            <v-btn to="/add-item" value="add-item" v-on="on">
              <span>Add-Item</span>
              <v-icon>mdi-plus-circle</v-icon>
            </v-btn>
          </v-bottom-navigation>
        </template>
        <v-list>
          <!-- <v-subheader>Bottom menu</v-subheader> -->
          <v-list-item
            v-for="tile in tiles"
            :key="tile.title"
            @click="close_sheet(tile.num)"
          >
            <v-list-item-avatar>
              <v-avatar size="32px" tile>
                <!-- <img
                  :src="`https://cdn.vuetifyjs.com/images/bottom-sheets/${tile.img}`"
                  :alt="tile.title"
                > -->
                <v-icon>{{ tile.icon }}</v-icon>
              </v-avatar>
            </v-list-item-avatar>
            <v-list-item-title>{{ tile.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-bottom-sheet>
    </div>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    activeTab: 'home',
    sheet: false,
      tiles: [
        // { img: 'keep.png', title: 'Add a Photo' },
        // { img: 'inbox.png', title: 'Scan a Barcode' },
        // { img: 'hangouts.png', title: 'Search the Web' },
        { icon: 'mdi-camera-outline', title: 'Add a Photo', num: 1 },
        { icon: 'mdi-barcode-scan', title: 'Scan a Barcode', num: 2 },
        { icon: 'mdi-web', title: 'Search the Web', num: 3 },
      ],

      // rules: [
      //   // value => !!value || 'Required.',
      //   // value => (value || '').length <= 20 || 'Max 20 characters',
      //   value => {
      //     const pattern = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
      //     return pattern.test(value) || 'Invalid url.'
      //   },
      // ],
      // images: [],
      // message: '',
      // url: '',
      // // diffbot: `http://api.diffbot.com/v3/image?&token=878c55163b7541c4455a7d7198468a70&url=https%3A//aleksandar.panov.rs`
  }),
  methods: {
    close_sheet(num) {
      this.sheet = false
      if(num == 3) {
        window.location.href = 'https://google.com'
      }
    },
    // get_images() {
    //   this.message = 'Wait, getting images'
    //   axios.get(`http://api.diffbot.com/v3/image?&token=878c55163b7541c4455a7d7198468a70&url=${this.url}`)
    //   .then((response) => {
    //     console.log(response.data.objects)
    //     this.images = response.data.objects
    //     this.message = `Found ${response.data.objects.length} images. Check console!`
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // }
  }
};
</script>

<style>
  .main_element {
    padding: 56px 10px 0 0;
  }
  .row {
    padding-top: 20px!important;
  }
  .t-field {
    width: 80%;
    margin: auto;
    padding: 0! important;
  }
</style>
