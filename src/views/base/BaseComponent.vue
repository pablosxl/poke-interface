<template>
    <div id="main">
        <app-bar :disabled="true" />
        <v-content>
            <v-slide-x-reverse-transition mode="out-in">
                <router-view />
            </v-slide-x-reverse-transition>
        </v-content>
    </div>
</template>

<script>

import AppBar from  '../../components/core/AppBar'

export default {
    components: {
        "app-bar": AppBar
    },
    async created() {
    },
    
    computed: {
       
    },
    methods: {
        showSidebar() {
            this.$refs.sidebar.openSidebar();
        }
    }
}
</script>

<style lang="scss">
#main {
    height: 100%;
    main {
        height: 100%;
    }

    #wrapper {
        width: 100%;
        height: 100%;
        min-height: calc(100% - 80px);
        padding: 108px 28px 28px 116px;

    }

    @media screen and (max-width: 480px) {
        #wrapper {
            padding: 108px 28px 28px 28px;
        }
    }
}
</style>
