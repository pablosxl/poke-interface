<template>
    <div id="header">       
        <v-app-bar
            app
            color="primary"
            dark>
            <v-toolbar-title>{{ pokemonName || "Habilidades Pokemons" }}</v-toolbar-title>
        </v-app-bar>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
    props: {
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            drawer : true
        }
    },

    computed: {
        ...mapState("pokemon", ["pokemonName"])
    },

    methods: {
    }
}
</script>

<style lang="scss">
#header {
    border-bottom: 1px solid blue; 
    width: calc(100% - 144px);
    position: absolute;
    left: 80px;
    top: 0;
}
</style>