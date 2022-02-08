<template>
    <Page>
        <ActionBar :title="surah.surat_name || 'test'">
              <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
        </ActionBar>
        <GridLayout columns="*" rows="*">
            <ActivityIndicator v-if="!surah.data" width="50" height="50" busy="true" />
            <ListView v-if="surah.data" for="item in surah.data">
              <v-template>
                <ayat-item :item="item"/>
              </v-template>
            </ListView>
            
        </GridLayout>
    </Page>
</template>

<script lang="ts">
import { isEmpty } from 'lodash'
import { mapGetters } from 'vuex'
import AyatItem from '../components/ayat-item.vue'

export default {
    components: {
        AyatItem
    },
    data() {
      return {
      }
    },
    computed: {
        ...mapGetters({ surah: 'readSurah'})
    },
    mounted() {
        if(isEmpty(this.surah.data)) {
            console.log('empty data')
            this.$store.dispatch('getAyat')
        }
    }
}
</script>