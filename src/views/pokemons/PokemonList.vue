<template>
    <v-container fluid>
        <div class="d-flex my-3" style="width: 100%">
            <div class="d-flex align-center ">
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
            <v-btn
                dark
                class="ml-auto mr-3 my-3"
                color="primary"
                @click="returnPagePrincipal">
                Voltar
            </v-btn>
        </div>
        <div
            class="d-flex mx-auto"
            style="width: 600px">
            <data-table
                :headers="headers"
                :items="pokemons"
                :item-key="'id'"
                :loading="loading"
                class="elevation-1">
            </data-table>
        </div>
    </v-container>
</template>
<script>

import PokemonService from '@/services/PokemonService';
import DataTable from '@/components/utils/DataTable';

import { mapActions, mapState } from 'vuex';

const pokemonService = new PokemonService();

export default {
    components: {
        "data-table": DataTable
    },
    data() {
        return {
            search: undefined,
            searchRouter: "/",
            loading: false,
            pokemons: [],
            headers:[
                { text: "Id", value: "slot"},
                { text: "Nome", value:"name"},
                { text: "Caminho", value:"url"},
            ],
        }
    },

    async created() {
        await this.getPokemonsByName();
    },

    computed: {
        ...mapState("pokemon", ["pokemonName"])
    },

    methods: {
        ...mapActions("pokemon", ["setPokemonName"]),

        returnPagePrincipal() {
            this.setPokemonName(undefined);
            this.$router.replace({path: this.searchRouter}, () => {});
        },

        async searchPokemon() {
            this.setPokemonName(this.search.toLowerCase());
            await this.getPokemonsByName();
        },

        async getPokemonsByName() {
            try {
                const response = await pokemonService.getPokemonsByName(this.pokemonName);

                this.pokemons = response.data.map(item => {
                    return {
                        slot: item.slot,
                        ...item.ability
                    }
                });
            } catch (error) {
                this.pokemons = [];
                this.$notify({
                    type: "error",
                    title: `Erro retornar as habilitdades do ${this.pokemonName}!`,
                    text: `${error.status} ${error.data.message}` 
                });
            }
        }
    }
}
</script>