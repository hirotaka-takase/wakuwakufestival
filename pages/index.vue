<template>
  <div>
    <v-img id="fv"
    :src="img_src.fv"
    height="650"
    width="100%"
    alt="わくわくフェスティバル">
    </v-img>
    <v-layout column justify-center align-center>
      <v-flex xs12 sm8 md6>

      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img_src: {
        fv: require("~/assets/img/fv.jpg")
      }
    }
  }
}
</script>
