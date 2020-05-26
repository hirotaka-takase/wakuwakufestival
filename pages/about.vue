<template>
    <v-container fill-width py-12 mb-5>
        <v-card class="mx-auto">
            <v-card-text>
                <h3 class="d-inline-block wf-roundedmplus1c mb-9 pa-4">2020わくわくフェスティバル東海</h3>
                <p class="font-weight-bold">令和2年4月25日（土）26日（日）の2日間におきまして、愛知国際会議展示場
AICHI SKY EXPO屋内展示ホールＡ（1万人収容）にて、ペットイベント【2020わくわくフェ
スティバル東海（呼称わくフェス）】を開催致します。（目標動員数２日間で16.000人）
【わくフェス】は、キッズダンスコンテスト・ご当地アイドル（男女）でショーやキッズパーク・
縁日等を盛り込み、愛犬家はもとよりお子様から大人までご家族で楽しめる室内イベントです。</p>
                <v-simple-table class="mb-5">
                    <template v-slot:default>
                    <tbody>
                        <tr v-for="item in items" :key="item.name">
                            <td width="30%">{{ item.title }}</td>
                            <td width="70%">{{ item.text }}</td>
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>
                <div class="text d-flex justify-space-around">
                    <div>
                        <p>【備考】</p>
                        <ul>
                            <li>出展ブース</li>
                            <li>愛犬家広場</li>
                            <li>ペットカット選手権</li>
                            <li>オフ会しよう</li>
                            <li>キッズダンスコンテスト</li>
                            <li>ご当地アイドルでショー</li>
                            <li>キッズパーク</li>
                            <li>縁日etc</li>
                        </ul>
                    </div>     
                    <div>
                        <p>【主催】</p>
                        <p>株式会社スタイルクリエーション</p>
                        <p>【問い合わせ先】</p>
                        <p>HP：<a href="https://wakuwakufes.com">https://wakuwakufes.com</a>(わくわくフェスティバル)<br>E-mail:info@wakufes.sakura.ne.jp</p>
                    </div>               
                </div>
            </v-card-text>
        </v-card>
    </v-container>
</template> 

<script>
export default {
  data() {
    return {
        items: [
          {
            title: '名称',
            text: '2020わくわくフェスティバル東海　',
          },
          {
            title: '開催日時',
            text: '令和2年4月25日（土）・26日（日）開場10時～終了5時',
          },
          {
            title: '会場',
            text: '愛知国際会議展示場（AICHI SKY EXPO）屋内展示ホールＡ（1万人収容）',
          },
          {
            title: '住所',
            text: '愛知県常滑市セントレア5丁目10番地1号',
          },
          {
            title: '交通手段',
            text: `名鉄中部国際空港駅より徒歩5分
お車でお越しの場合、セントレア東ICを降りて直進約2Km
大駐車場有（24時間最大800円）
`,
          },
          {
            title: '入場料',
            text: `前売 大人（高校生以上）1,400円／子ども（中学生以下）700円
当日 大人（高校生以上）1,600円／子ども（中学生以下）900円
前売チケット購入方法
〔ローソン・ミニストップ〕ローチケLコード：43228
〔セブンイレブン〕チケットぴあ Pコード：644841
〔ファミリーマート〕ファミポートで「わくわくフェスティバル」を検索ください。
`,
          },
        ],
    }
  }
}
</script>

<style scoped>
h3 {
    border-bottom: #ffa72d 3px solid;
    font-size: 1.8rem !important;
    padding-bottom: 3px;
    color: #696969;
    line-height: 30px;
}
@media (max-width: 750px) {
.text {
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.text div:first-child {
    margin-bottom: 15px;
}
}


</style>