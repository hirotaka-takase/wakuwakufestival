<template>
    <v-container fill-width py-12 mb-5>
        <v-card class="mx-auto">
            <v-card-text>
                <h3 class="d-inline-block wf-roundedmplus1c mb-9 pa-4">愛犬家のみなさまへ</h3>
                <ul class="text--primary">
                    <li v-for="rule in rules" :key="rule.id" class="subtitle-1 mb-5">
                        {{ rule.text }}
                    </li>            
                </ul>
                <p class="font-weight-bold">※主催者が同伴の愛犬に対して体調不良と認めた場合、または主催者のルールに従って頂けない場合は、ご退場いただくことがあります。あらかじめご了承ください。</p>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
export default {
  data() {
    return {
      rules: [
        {id: 1,text: '・ルール、マナーの順守をお願い致します。'},
        {id: 2,text: '・ワンちゃんの管理は自己の責任で行っていただきます。'},
        {id: 3,text: '・トラブルの原因となりますので会場内では必ずリードをつけてください。'},
        {id: 4,text: '・ワンちゃんのトイレは所定の場所をご利用ください。（マナーベルトの着用を推奨しています）'},
      ]
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
</style>