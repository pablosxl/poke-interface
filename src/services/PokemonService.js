import HttpClientBuilder from "../mixins/HttpClientBuilder"

export default class PokemonService {

    constructor() {
        let client = HttpClientBuilder.buildClient({
            baseURL: process.env.VUE_APP_API
        });

        this.client = client;
    }

    async getPokemonsByName(name) {
        const response = await this.client.get(`/api/pokemons/${name}`);
        return response
    }
}