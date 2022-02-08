<template>
    <StackLayout>
        <GridLayout rows="*" columns="auto, *">
            <FlexboxLayout class="circle -primary hr" justifyContent="center" row="0" col="0" >
                <Label class="nomor" :text="num(item.aya_number)"/>
            </FlexboxLayout>
          <Label lineHeight="20" class="arab ayat" :text="`${item.aya_text}`" row="0" col="1" textWrap="true" />
        </GridLayout>
    </StackLayout>
</template>

<script lang="ts">
import { replaceAr } from '../utils/textutils'
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    methods: {
        num: replaceAr
    }
}
</script>

<style scoped>
.circle {
    border-radius: 100;
    height:50;
    width:50;
    border-width: 1;
}
.nomor {
    font-size: 25;
}
.ayat {
    font-size: 20
}
</style>