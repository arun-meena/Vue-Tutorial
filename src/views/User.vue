<template>
    <div>
        <div class="row">
            <div class="col" v-for="(user, index) in userList" :key="index">
                <router-link class="normal-text" :to="'/user/'+user.id">
                    <user-card
                        :f-name="user.first_name"
                        :l-name="user.last_name"
                        :email="user.email"
                        :avatar-url="user.avatar"
                    />
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import UserCard from '@/components/UserCard.vue'
import axios from 'axios'
export default {
    components: {
        UserCard
    },
    data() {
        return {
            userList: null
        }
    },
    created() {
        axios.get('https://reqres.in/api/users')
        .then(response => {
            // console.log(response)
            this.userList = response.data.data
            console.log('USer List', this.userList)
        })
        .catch(error => {
            console.log(error)
        })
    },
    methods: {

    }
}
</script>

<style scoped>
.row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 20px 60px;
}

.col {
    width: 30%;
    padding: 10px;
}
.normal-text {
    text-decoration: none;
}
</style>
