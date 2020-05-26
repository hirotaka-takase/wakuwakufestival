<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      color="warning"
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-content>
            <v-list-item-title class="white--text font-weight-black " v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app color="warning">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <nuxt-link to="/" class="pl-5 pr-1"><i class="gradation fas fa-paw" style="font-size: 20px;"></i></nuxt-link>
      <nuxt-link to="/" class="headline font-weight-black gradation " style="text-decoration: none;" v-text="title"></nuxt-link>
      <nuxt-link to="/" class="pl-1"><i class="gradation fas fa-paw" style="font-size: 20px;"></i></nuxt-link>
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
          title: 'HOME',
          to: '/'
        },
        {
          title: 'わくフェスとは',
          to: '/about'
        },
        {
          title: 'ダンスコンテスト',
          to: '/contest'
        },
        {
          title: '愛犬家の皆様へ',
          to: '/companion'
        },
        {
          title: 'お問い合わせ',
          to: '/form/contact'
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

<style scoped>
.gradation {
  background: -webkit-linear-gradient(0deg, #2196f3, #4caf50, #ff5252);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>