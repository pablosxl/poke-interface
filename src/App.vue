<template>
    <v-app id="app">
        <app-bar />
        <router-view/>
        <notifications 
            :duration="6000"
            type="success"
            :ignoreDuplicates="true"
            position="top center" />
    </v-app>
</template>
<script>
import AppBar from '../src/components/core/AppBar'
export default {
    name: "App",
    components: {
        "app-bar": AppBar
    }
}
</script>

<style lang="scss">
    @import "@/assets/styles/inputs.scss";
    
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        //text-align: center;
        background: white;
    }
    
    body {
        &::-webkit-scrollbar-track {
        background-color: white;
        }
        &::-webkit-scrollbar {
            width: 8px;
            background-color: white;
        }
        &::-webkit-scrollbar-thumb {
            background-color: white;
        }
        @media screen and (max-width: 1920px) {
            .container {
                max-width: 1785px !important; 
            }
        }
    }

    
</style>