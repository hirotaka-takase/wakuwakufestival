<template>
  <div>
    <v-img id="fv"
    :src="img_src.fv"
    height="650"
    width="100%"
    alt="わくわくフェスティバル">
    </v-img>
    <v-container fluid>
      <v-layout column justify-center align-center class="text-center">
        <v-flex xs12 sm8 md6 class="py-4">
          <div style="position: relative;" class="py-4">
            <p class="text_aiken">愛犬家大集合!</p>
            <v-chip
              class="chip pa-3 body-1 caption fuwafuwa font-weight-black"
              color="error"
              text-color="white"
              x-large
            >
              お子様から大人まで<br>ご家族で楽しめるイベントです!
            </v-chip>
          </div>
          <v-row>
            <v-col cols="12" md="12" sm="12" class="pa-0 headline">東海ペットイベント!</v-col>
            <v-col cols="12" md="12" sm="12" class="pt-0 headline mb-4">たくさんのワンちゃんも見られますよ!</v-col>
            <v-col cols="12" md="12" sm="12" class="headline">交流広場</v-col>
          </v-row>
          <v-row class="text-left">
            <v-col cols="12" md="6" sm="12">
              <ul>
                  <li>
                    ペットカット選手権 
                  </li>
                  <li>
                    わん芸 IT'sショータイム!
                  </li>
                  <li>
                    うちの子自慢トークショー
                  </li>
                  <li>
                    全員参加でじゃんけんポン! 
                  </li>              
                </ul>
            </v-col>
            <v-col cols="12" md="6" sm="12">
              <ul>
                  <li>
                    縁日・キッズパーク
                  </li>
                  <li>
                    キッズダンスコンテスト 
                  </li>
                  <li>
                    ご当地アイドル男女でショー 
                  </li>            
                </ul>
            </v-col>
            <v-col class="pt-4" cols="12">
              <h2 class="text-center">
                <v-btn class="ma-2" x-large height="80" outlined color="primary">2020わくわく<br>フェスティバル東海とは</v-btn>
              </h2>
            </v-col>
          </v-row>
        </v-flex>
      </v-layout>
    </v-container>
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

<style>
.text_aiken {
  font-size: 50px;
  padding-bottom: 70px;
}
.chip {
  position: absolute;
  bottom: 10px;
  right: 280px;
} 
.fuwafuwa {
-webkit-animation:fuwafuwa 3s infinite linear alternate;
animation:fuwafuwa 3s infinite linear alternate;
}

@-webkit-keyframes fuwafuwa {
0% {-webkit-transform:translate(0, 0) rotate(-5deg);}
50% {-webkit-transform:translate(0, -5px) rotate(0deg);}
100% {-webkit-transform:translate(0, 0)rotate(5deg);}
}

@keyframes fuwafuwa {
0% {transform:translate(0, 0) rotate(-5deg);}
50% {transform:translate(0, -5px) rotate(0deg);}
100% {transform:translate(0, 0)rotate(5deg);}
}

@media (max-width: 750px) {
#fv {
   max-height: 250px;
}
  .text_aiken {
  font-size: 43px;
  padding-top: 0px !important;
}
  .chip {
  bottom: 20px;
  right: 40px;
}
}
</style>