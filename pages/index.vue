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
            <v-col class="py-4 mb-4" cols="12">
              <h2 class="text-center py-2">
                <v-btn x-large height="80" outlined color="primary">2020わくわく<br>フェスティバル東海とは</v-btn>
              </h2>
            </v-col>
          </v-row>
        </v-flex>   
        <v-flex class="py-4">
          <h3 class="headline py-4 mb-4">日時・場所</h3>
          <v-row>
            <v-col cols="12" md="6" sm="12">
              <p>日時</p>
              <p class="mb-4 pb-4">4月25日（土）4月26日（日）<br>10：00～17：00</p>
            </v-col> 
            <v-col cols="12" md="6" sm="12">
              <p class="mb-0">会場</p>
              <p class="mb-4">（10,000人収容）</p>
              <p><a href="https://www.aichiskyexpo.com/access/" target="_blank">AICHI SKY EXPO 屋内ホールA</a><br>愛知県常滑市セントレア5丁目10番地1号<br>（名鉄中部国際空港駅より徒歩5分）</p>
              <p>〔お車でお越しのお客様〕<br>セントレア東ICを降りて直進約2Kｍ<br>大駐車場有（24時間最大800円）</p>
            </v-col>
            <v-col>
            </v-col>
          </v-row>
        </v-flex>
        <v-flex class="py-4">
          <h3 class="headline py-4 mb-4">料金</h3>
          <v-row class="pb-4 mb-4">
            <v-col cols="12" md="6" sm="12">
              <p>前売り券</p>
              <p>（ローソン、セブンイレブン、ファミリーマート各コンビニにて2020年2月15日（土）より販売開始）</p>
              <p>大人（高校生以上）：1,400円<br>子供（中学生以下）：700円</p>
            </v-col>
            <v-col cols="12" md="6" sm="12">
              <p>当日券</p>
              <p>大人（高校生以上）：1,600円<br>子供（中学生以下）：900円</p>
            </v-col>
          </v-row>
          <p class="mb-0">※3歳未満無料</p>
          <p class="mb-4">※ご入場の際、お子様には縁日、キッズパークで使えるお楽しみ券を１枚進呈します。</p>
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
  padding-bottom: 90px;
}
.chip {
  position: absolute;
  bottom: 25px;
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