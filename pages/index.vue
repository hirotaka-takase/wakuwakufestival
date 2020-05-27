<template>
  <div>
    <v-img id="fv"
    :src="img_src.fv"
    height="650"
    width="100%"
    alt="わくわくフェスティバル">
    </v-img>
    <v-parallax
    height="250"
    class="parallax"
    :src="img_src.test">
      <v-row
        align="center"
        justify="center"
      >
        <v-col class="text-center" cols="12">
          <p class="mb-0 text_aiken font-weight-black" style="letter-spacing: 0.4rem !important;">愛犬家<br class="sp">大集合!</p>
        </v-col>
      </v-row>
    </v-parallax>
    <v-container>
      <v-layout column justify-center align-center class="layout1 text-center">
        <v-flex xs12 sm8 md6 class="py-4 font-weight-bold" style="margin-bottom: 90px;">
          <v-row style="margin-bottom: 30px;">
            <v-col cols="12" md="12" sm="12" class="mb-6">            
              <v-chip
              class="chip pa-4 caption fuwafuwa font-weight-black"
              color="error"
              text-color="white"
              x-large
              >
                お子様から大人まで<br>ご家族で楽しめるイベントです!
              </v-chip>
            </v-col>
            <v-col cols="12" md="12" sm="12" class="pa-0 display-1 font-weight-black">東海ペットイベント!</v-col>
            <v-col cols="12" md="12" sm="12" class="pt-0 display-1 mb-4 font-weight-black">たくさんのワンちゃんも見られますよ!</v-col>
          </v-row>
          <v-row class="kouryu text-center py-4" style="border: 1px solid #000;">
            <v-col cols="12" md="12" sm="12" class="display-1 font-weight-black pb-0" style="color: #1976d2;">交流広場</v-col>
            <v-col cols="12" md="6" sm="12">
              <ul>
                  <li>
                    ・ペットカット選手権 
                  </li>
                  <li>
                    ・わん芸 IT'sショータイム!
                  </li>
                  <li>
                    ・うちの子自慢トークショー
                  </li>
                  <li>
                    ・全員参加でじゃんけんポン! 
                  </li>              
                </ul>
            </v-col>
            <v-col cols="12" md="6" sm="12">
              <ul class="">
                  <li>
                    ・縁日・キッズパーク
                  </li>
                  <li>
                    ・キッズダンスコンテスト 
                  </li>
                  <li>
                    ・ご当地アイドル男女でショー 
                  </li>            
                </ul>
            </v-col>
            <v-col class="py-4 mb-4" cols="12">
              <h2 class="text-center py-2">
                <v-btn x-large height="80" to="/about" outlined color="primary">2020わくわく<br>フェスティバル東海とは</v-btn>
              </h2>
            </v-col>
          </v-row>
        </v-flex>   
        <v-flex class="py-4">
          <h3 class="display-1 font-weight-bold py-4 mb-4" style="color: #ff5252;"><i class="fas fa-clock px-1"></i>日時・場所</h3>
          <v-row>
            <v-col class="font-weight-bold" cols="12" md="6" sm="12">
              <p>日時</p>
              <p class="mb-4 pb-4">4月25日（土）4月26日（日）<br>10：00～17：00</p>
            </v-col> 
            <v-col class="font-weight-black" cols="12" md="6" sm="12">
              <p class="mb-0">会場</p>
              <p class="mb-4">（10,000人収容）</p>
              <p><a href="https://www.aichiskyexpo.com/access/" target="_blank" class="font-weight-medium">AICHI SKY EXPO 屋内ホールA</a><br>愛知県常滑市セントレア5丁目10番地1号<br>（名鉄中部国際空港駅より徒歩5分）</p>
              <p>〔お車でお越しのお客様〕<br>セントレア東ICを降りて直進約2Kｍ<br>大駐車場有（24時間最大800円）</p>
            </v-col>
            <v-col>
            </v-col>
          </v-row>
        </v-flex>
        <v-flex class="py-4">
          <h3 class="display-1 font-weight-bold py-4 mb-4" style="color: #ff5252;"><i class="fas fa-clock px-1"></i>料金</h3>
          <v-row class="pb-4 mb-4 font-weight-bold">
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
          <p class="mb-0 font-weight-bold">※3歳未満無料</p>
          <p class="mb-4 font-weight-bold">※ご入場の際、お子様には縁日、キッズパークで使えるお楽しみ券を１枚進呈します。</p>
        </v-flex>  
      </v-layout>
      <v-card
      width="700"
      class="mb-5 white--text"
      color="pink">
        <p class="card_title mb-0 py-3 px-5 font-weight-black" style="border-bottom: 1px solid #fff;">
        交流広場
        </p>
        <v-card-text class="white--text card-text font-weight-bold">
            <p>「オフ会しよう!」オフ会には最適広場! <br>事前にお申入いただければスペース確保いたします。(無料）</p>
            <p>「ペットカット選手権」ライブ形式。好みのスタイル見つけて下さい。</p>
            <p>「わん芸 IT's ショータイム」芸達者なワンちゃんが登場します。</p>
            <p>「うちの子自慢 トークショー」こんなことあんなこと何でもアリアリ!<br>自慢して下さい! </p>
            <ul>
              <li>◉ 愛犬お手入簡単アドバイス</li>
              <li>◉ プロトリマー向けアレンジレッスン</li>
              <li>◉ プロの訓練士によるワンポイントアドバイス</li>
              <li>◉ セラピードックで癒し効果</li>
            </ul>
        </v-card-text>
      </v-card>
      <v-card
      width="480"
      class="ml-auto mr-9 mb-5 white--text"
      color="#1F7087">
        <p class="card_title mb-0 py-3 px-5 font-weight-black" style="border-bottom: 1px solid #fff;">じゃんけん大会</p>
        <v-card-text class="card-text white--text font-weight-bold">
          <p>ご来場者様全員でじゃんけん大会! </p>
          <p>一日3回開催豪華賞品ご期待下さい</p>
          <p>その他催しありますよ!楽しみにして下さい! </p>
        </v-card-text>
      </v-card>
      <v-card
      width="700"
      class="mb-5 white--text"
      color="#952175">
        <p class="card_title mb-0 py-3 px-5 font-weight-black" style="border-bottom: 1px solid #fff;">縁日コーナー・<br>キッズパーク</p>
        <v-divider></v-divider>
        <v-card-text class="white--text card-text font-weight-black">
          <div class="arrow d-flex mb-6" style="position: relative;">
            <p style="width: 20%;">縁日</p>
            <ul>
              <li>・射的</li>
              <li>・輪投げ</li>
              <li>・スイカ割り</li>
              <li>・ラッキーボール</li>
              <li>・カラス倒しゲーム </li>
            </ul>
            <div class="arrow_box">
              <p>
              お祭り気分でワクワク!! <br>
              お母さんもお父さんも <br>
              お楽しみください! 
              </p>
            </div>
          </div>
          <div class="arrow d-flex mb-6" style="position: relative;">
            <p style="width: 20%;">キッズパーク</p>
            <ul>
              <li>・フワフワトランポリン</li>
              <li>・ボールプール</li>
              <li>・巨大迷路</li>
              <li>・キッズスペース(幼児対象)</li>
            </ul>
            <div class="arrow_box arrow_box_add">
              <p>
              遊び場 <br>
              満載!! 
              </p>
            </div>
          </div>
          <p class="card-text">※一部有料のコンテンツあります。</p>
        </v-card-text>
      </v-card>
      <v-card
      width="600"
      class="ml-auto mr-9 mb-9 white--text"
      color="#4169E1">
        <p class="card_title mb-0 py-3 px-5 font-weight-black" style="border-bottom: 1px solid #fff;">フードコート</p>
        <v-card-text class="white--text card-text font-weight-bold">
          <p>飲食ゾーンあります</p>
          <p>・カレーライス・牛丼・焼きそば / ・タピオカジュース・フレッシュジュース</p>
          <p>・フランクフルト・サンドウィッチ / ・ウーロン茶・コーラ等</p>
        </v-card-text>
      </v-card>
      <p class="px-5 text-center silver-text font-weight-bold" style="color: #444444;">※シルバー優先席あります。ごゆっくりおくつろぎください</p>
      <v-layout column justify-center align-center class="text-center py-4 mb-4">
      <v-card class="mb-4">
        <v-img
          class="white--text"
          height="320px"
          :src="img_src.banner"
        >
          <v-card-title
          id="banner-text">

            <v-row class="font-weight-bold wf-roundedmplus1c">
              <v-col cols="12" md="3" class="pa-0">           
                <v-chip
                class="chip fuwafuwa font-weight-black"
                color="error"
                text-color="white"
                large>
                  わくフェス
                </v-chip>
              </v-col>
              <v-col cols="12" md="12"><p style="color: #6495ED">キッズダンスコンテスト<br><small>「子供と言ってあなどらないで！」</small></p></v-col>
              <v-col cols="12" md="12"><p style="color: #FA8072">ご当地アイドル男女でショー<br><small>「どんなかんじ？こんなかんじ！」</small></p></v-col>
            </v-row>
          </v-card-title>
        </v-img>
        <v-card-text class="text--primary font-weight-black headline">東京から急遽出演決定！</v-card-text>
        <v-card-text class="text--primary title font-weight-bold">
          <p><span class="display-1 iris font-weight-bold" style="line-height: 2.0;">男性ボーカルユニットBLACK IRIS</span><br>オリコンデイリーランキング1位<br>オリコンウィークリーランキング3位</p>
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn
            color="orange"
            text
            to="/contest"
            class="font-weight-black"
            style="font-size: 22px; border-bottom: 2px solid #ff9800; boder-radius: 0;"
          >
            詳細へ
          </v-btn>
        </v-card-actions>
      </v-card>
      </v-layout>
      <div class="top-btn text-center d-flex justify-space-around">
        <div class="mb-5 mx-1">
          <v-btn height="100" x-large class="btns" tile outlined color="info" to="/form/store">
            出展情報！
          </v-btn>    
        </div>
        <div class="mb-5 mx-1">
          <v-btn height="100" x-large class="btns" tile outlined color="success" to="/form/trim">
            ペットカット選手権出場者募集!
          </v-btn>    
        </div>
        <div class="mb-5 mx-1">
          <v-btn height="100" x-large class="btns" tile outlined color="indigo" to="/form/freemarket">
            フリーマーケット出店募集！
          </v-btn>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img_src: {
        fv: require("~/assets/img/fv.jpg"),
        banner: require("~/assets/img/bg1.jpg"),
        test: require("~/assets/img/dog1.jpg"),
      }
    }
  }
}
</script>

<style>
.sp {
    display: none;
}
.parallax {
  margin-bottom: 60px;
}
ul {
  list-style-type: none;
}
.layout1 {
  margin-bottom: 180px;
}
.text_aiken {
  font-size: 75px;
  color: #FF7C00;
  background: -webkit-linear-gradient(top, #FFB76B 0%, #FFA73D 50%, #FF7C00 51%, #FF7F04 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.chip {
  font-size: 1.3rem !important;
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
.layout1 ul li {
  margin: 20px 0px;
}
.card_title {
  font-size: 30px;
}
.arrow_box {
	position: absolute;
  right: 50px;
  padding: 20px 40px;
	background: #fff;
  border-radius: 50%;
  color: #000000;
}
.arrow_box p {
  position: relative;
  margin-bottom: 0;
}
.arrow_box p:before {
  position: absolute;
  left : -75px;
  top: 20px;
  bottom: 0;
  content: "";
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 15px 50px 15px 0;
  border-color: transparent #fff transparent transparent;
}

.arrow_box_add p:before {
  top: 10px;
}

.silver-text {
  margin-bottom: 160px !important;
}

#banner-text p {
  font-size: 2.8rem!important;
  line-height: 0.8;
}
#banner-text small {
  font-size: 1.5rem!important;
}
.btns {
  width: 300px;
}
@media (max-width: 750px) {
.sp {
    display: block;
}
#fv {
   max-height: 250px;
}
.parallax {
  margin-bottom: 30px;
}
.layout1 {
  margin-bottom: 90px;
}
.text_aiken {
  font-size: 50px;
}
.kouryu {
  width: 100%;
  margin: 0 auto;
}
.arrow {
  padding-bottom: 140px;
}
.arrow_box {
  right: 30px;
  bottom: 0;
  padding: 20px 40px;
  border-radius: 50%;
}
.arrow_box p {
  position: relative;
  margin-bottom: 0;
}
.arrow_box p:before {
  position: absolute;
  left : calc(50% - 20px);
  top: -30px;
  bottom: 0;
  content: "";
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 17.5px 20px 17.5px;
  border-color: transparent transparent #fff transparent;
}
.arrow_box_add p:before {
  top: -35px;
}

.silver-text {
  margin-bottom: 100px !important;
}
#banner-text p {
  font-size: 1.5rem!important;
  line-height: 1;
}
#banner-text small {
  font-size: 1rem!important;
}
.chip {
font-size: 1.0rem !important;
}
.btns {
  width: 280px;
}
.top-btn {
  flex-direction: column;
}

}
</style>