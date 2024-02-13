<template>
    <header class="container-fluid">
        <nav>
            <ul>
                <li><router-link to="/"><h2>Lit Fest <sup class="teal">2024</sup></h2></router-link></li>
            </ul>
            <ul>
                <li>
                    <a class="contrast" href="#" @click="this.toggleTheme">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" fill="currentColor" class="icon-theme-toggle theme-toggle"><clipPath id="theme-toggle-cutout"><path d="M0-11h25a1 1 0 0017 13v30H0Z"></path></clipPath><g clip-path="url(#theme-toggle-cutout)"><circle cx="16" cy="16" r="8.4"></circle><path d="M18.3 3.2c0 1.3-1 2.3-2.3 2.3s-2.3-1-2.3-2.3S14.7.9 16 .9s2.3 1 2.3 2.3zm-4.6 25.6c0-1.3 1-2.3 2.3-2.3s2.3 1 2.3 2.3-1 2.3-2.3 2.3-2.3-1-2.3-2.3zm15.1-10.5c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3-1 2.3-2.3 2.3zM3.2 13.7c1.3 0 2.3 1 2.3 2.3s-1 2.3-2.3 2.3S.9 17.3.9 16s1-2.3 2.3-2.3zm5.8-7C9 7.9 7.9 9 6.7 9S4.4 8 4.4 6.7s1-2.3 2.3-2.3S9 5.4 9 6.7zm16.3 21c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3-1 2.3-2.3 2.3zm2.4-21c0 1.3-1 2.3-2.3 2.3S23 7.9 23 6.7s1-2.3 2.3-2.3 2.4 1 2.4 2.3zM6.7 23C8 23 9 24 9 25.3s-1 2.3-2.3 2.3-2.3-1-2.3-2.3 1-2.3 2.3-2.3z"></path></g></svg>
                    </a>
                    
                </li>
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
    },
    methods : {
        toggleTheme(){
            let htmlTag = document.getElementsByTagName("html")[0]
            let theme = htmlTag.dataset.theme
            if (theme == "dark") {
                htmlTag.dataset.theme = "light"
            }else if (theme == "light") {
                htmlTag.dataset.theme = "dark"
            }
            else{
                htmlTag.dataset.theme = "light"
            }
        }
    }
}

</script>
