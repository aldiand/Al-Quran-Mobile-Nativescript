<template>
    <StackLayout>
      <GridLayout rows="*" columns="40, *, auto">
        <Label textAlignment="center" class="h4 nomor" :text="item.id" row="0" col="0" />
        <StackLayout row="0" col="1">
          <Label class="h5 surah-latin" :text="`${item.surat_name} (${item.count_ayat})`" textWrap="true" />
          <Label :text="item.surat_terjemahan" textWrap="true" />
        </StackLayout>
        <Label class="arab h3 surah-arab" :text="item.surat_text" row="0" col="2" textWrap="true" />
      </GridLayout>
    </StackLayout>
</template>

<script lang="ts">
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.nomor {
    font-size: 16;
}
.surah-arab {
    font-size: 24;
}
.surah-latin {
    font-size: 18;
}
</style>