<template>
    <div class="nav-links">
        <ul> 
            <li v-for="nav in NavContent" :key="nav.id">{{ nav.text }}</li>
        </ul>
    </div>
</template>

<script>

    import NavigationContent from ".././Navigation-Content.json"
    export default {
        name:"NavLinks",
        props:{
            NavContent:Object
        },
        created(){
            console.log(NavigationContent.Links)
        }
        
    }
</script>

<style scoped>
    .nav-links ul{
        display: flex;
        justify-content: space-evenly;
        list-style: none;
    }
    .nav-links li{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 17px;
        line-height: 20px;
        /* identical to box height, or 143% */
        letter-spacing: -0.1px;
        font-feature-settings: 'pnum' on, 'lnum' on;
        color: #001325;
    }

</style>