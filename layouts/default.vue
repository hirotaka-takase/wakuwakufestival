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
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
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
      miniVariant: false,
      title: 'わくわくフェステバル'
    }
  }
}
</script>
