<script>

export default{
    
    data(){
        return{
            users: [],
            isLoading: false,
            searchTerm: ""
        }
    },

    methods:{
        async fetchGitHubUsers(){
            const res = await fetch(
                `https://api.github.com/search/users?q=${this.searchTerm}`
            );
            const data = await res.json();
            this.isLoading = false;
            return data.items;
        },
        async onSubmit(e){
            this.isLoading = true;
            console.log(this.isLoading);
            this.users = await this.fetchGitHubUsers();
        },
    }
}

   

</script>
<template>
    <form @submit.prevent="onSubmit">
        <div class="mb-3">
            <input v-model="searchTerm" type="text" class="form-control">
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>
    </form>
    <div v-if="isLoading" class="spinner-boarder" role="status"></div>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Avatar</th>
                <th scope="col">Login</th>
                <th scope="col">URL</th>
            </tr>
        </thead>
        <tbody>
            <tr :key="users.id" v-for="user in users">
                <th scope="row">{{ user.id }}</th>
                <td><img :alt="user.login" :src="user.avatar_url" width="75" heignt="75" /></td>
                <td>{{ user.login }}</td>
                <td><a :href="user.html_url">{{ user.html_url }}</a></td>
            </tr>
        </tbody>
    </table>
</template>