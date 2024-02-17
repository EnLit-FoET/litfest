<template>
    <header class="container-fluid">
        <nav>
            <ul>
                <li><router-link to="/"><h2>Lit Fest <sup class="theme1">2024</sup></h2></router-link></li>
            </ul>
            <ul>
                <li><a href="#about" class="contrast">About</a></li>
                <li><a href="#events" class="contrast">Events</a></li>
                <li :aria-busy="this.loading">
                    <a v-if="!this.loading && !this.loggedIn" role="button" class="outline contrast" href="#">Login</a>
                    <a v-else-if="!this.loading && this.loggedIn" role="button" class="outline contrast" href="#">Dashboard</a>
                </li>
            </ul>
            </nav>
    </header>
</template>

<script>
export default {
    data() {
        return {
            loading : true,
            loggedIn : true
        }
    },
    mounted() {
        setTimeout(() =>{
            this.loading = false;
        },2000)
    }
    }

</script>
