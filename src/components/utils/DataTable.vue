<template>
    <v-data-table
        v-bind="{...$props, ...$attrs}"
        id="table"
        :item-key="$attrs['item-key'] ||'name'"
        :items-per-page="$attrs['items-per-page'] || 10"
        loading-text="Carregando... Por favor aguarde"
        class="elevation-1">
        <template v-slot:item.actions="{ item }">
            <slot v-bind="item" />
        </template>
        <template 
            v-for="(_, slot) of $scopedSlots"
            v-slot:[slot]="scope">
            <slot 
                :name="slot" 
                v-bind="scope" />
        </template>
    </v-data-table>
</template>

<script>
//import { mapState } from "vuex"

export default {
    computed: {
        //...mapState("subHeaders", ["itemSearch"])
    }
}
</script>