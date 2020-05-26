<template>
    <v-container fill-width py-12 mb-5>
        <v-card class="mx-auto">
            <v-card-text>
                <h3 class="d-inline-block wf-roundedmplus1c mb-9 pa-4">会社概要</h3>
                <v-simple-table>
                    <template v-slot:default>
                    <tbody>
                        <tr v-for="profile in profiles" :key="profile.name">
                            <td width="30%">{{ profile.title }}</td>
                            <td width="70%">{{ profile.text }}</td>
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>
            </v-card-text>
        </v-card>
    </v-container> 
</template>

<script>
export default {
    data () {
      return {
        profiles: [
          {
            title: '本店（昭和63年9月設立）',
            text: '〒500-8842　岐阜市金町8丁目20番地　株式会社スタイルクリエーション',
          },
          {
            title: '東京営業所',
            text: '〒105-0004　東京都港区新橋2-16-1',
          },
          {
            title: '代表',
            text: '中山　大治郎',
          },
        ],
      }
    },
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