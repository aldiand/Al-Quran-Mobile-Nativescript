<template>
    <Page>
        <ActionBar title="Surah"/>
        <StackLayout>
          <SearchBar hint="Search" v-model="searchKeyword"  @textChange="onTextChanged" @submit="onSubmit" />
          <GridLayout columns="*" rows="*">
              <ListView for="item in surahList" @itemTap="onItemTap">
                <v-template>
                  <surah-item :item="item" />
                </v-template>
              </ListView>
          </GridLayout>
        </StackLayout>
    </Page>
</template>

<script lang="ts">
import { isEmpty } from 'lodash' 
import SurahItem from '../components/surah-item.vue'
import Detail from '../screens/surah-detail.vue'
export default {
  components: {
      SurahItem
  },
  data() {
    return {
      searchKeyword: '',
      surahList: this.$store.state.surah
    }
  },
  methods : {
      onItemTap(event) {
        this.$store.commit('read', event.item.id)
        this.$navigateTo(Detail)
      },
      onTextChanged() {
        if(isEmpty(this.searchKeyword)) {
          this.surahList = this.$store.state.surah
        }
      },
      onSubmit() {
        const searchKey = this.searchKeyword
        if(isEmpty(searchKey)) return
        this.surahList = this.$store.state.surah.filter(obj => Object.keys(obj).some(key => typeof obj[key] !== 'object' && (obj[key] + '').toLowerCase().indexOf(searchKey.toLowerCase()) != -1))
      }
  }
}
</script>