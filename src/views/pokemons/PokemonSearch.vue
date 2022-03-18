<template>
    <div 
        class="d-flex align-center justify-center flex-column" 
        style="height: 100%">
        <v-img
            max-height="150"
            width="250"
            contain
            src="~@/assets/pokemon-png-logo.webp" />
        <v-col
            cols="12"
            sm="6"
            md="6">
            <div class="d-flex align-center justify-center ">
                <v-text-field
                    v-model="search"
                    max-width="250"
                    label="Pesquisar"
                    outlined
                    class="ma-0 mr-3"
                    hide-details=""
                    dense />
                <v-btn
                    color="primary"
                    :disabled="!search"
                    @click="searchPokemon">
                    Pesquisar
                </v-btn>
            </div>
        </v-col>
    </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
    data() {
        return {
            search: undefined,
            listRouter: "/pokemon/list"
        }
    },

    methods: {
        ...mapActions("pokemon", ["setPokemonName"]),
        
        searchPokemon() {
            this.setPokemonName(this.search.toLowerCase());
            this.$router.replace({path: this.listRouter}, () => {});
        }
    }
}
</script>
<style lang="scss">
    .v-input__append-outer {
        margin-top: 0;

    }
</style>