<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      dark
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text" v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app color="warning">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title class="white--text" v-text="title" />
    </v-app-bar>
    <v-content>
      <transition name="page">
      <nuxt />
      </transition>
    </v-content>
    <v-footer color="warning" class="lighten-1" padless>
      <v-row class="py-3 white--text text-center" no-gutters>
        <v-col cols="12">
          <v-btn
          v-for="link in footerLinks"
          :key="link.name"
          color="white"
          text
          :to="link.to"
          nuxt
          class="subtitle-2 font-weight-bold"
          rounded>
          {{ link.name }}
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
          v-for="icon in footerIcons"
          :key="icon.name"
          :href="icon.to"
          target="_blank"
          class="mx-4"
          icon>
            <v-icon size="27px">{{ icon.name }}</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="12" class="my-4 body-2">
          わくわくフェスティバル運営企画部<br>
          TEl: 058-263-5577 （平日 9:00〜18:00)
        </v-col>
        <v-col class="body-2" cols="12">
          Copyright © 2020 - STYLE CREATION INC.
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'HOME',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'ダンスコンテスト',
          to: '/contest'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'アイドル男女でショー',
          to: '/show'
        },
        {
          icon: 'mdi-chart-bubble',
          title: '愛犬家の皆様へ',
          to: '/companion'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'お問い合わせ',
          to: '/contact'
        }
      ],
      footerLinks: [
        {
          name: 'Home', 
          to: '/'
        },
        {
          name: '会社概要', 
          to: '/company'
        },
        {
          name: '前売り券コンビニで販売中！', 
          to: '/ticket'
        },
      ],
      footerIcons: [
        {
          name: 'mdi-facebook',
          to: 'https://www.facebook.com/wakuwaku.fs'
        },
        {
          name: 'mdi-twitter',
          to: 'https://www.instagram.com/wakuwakufestival/'
        },
        {
          name: 'mdi-instagram',
          to: 'https://twitter.com/waku_fes'
        }
      ],
      miniVariant: false,
      title: 'わくわくフェステバル'
    }
  }
}
</script>
