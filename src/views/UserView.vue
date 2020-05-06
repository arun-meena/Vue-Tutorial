<template>
    <div class="view">
        <div v-if="showAlert" class="alert-box-error"> Error Occured </div>
        <user-card
            v-if="user"
            :f-name="user.data.first_name"
            :l-name="user.data.last_name"
            :email="user.data.email"
            :avatar-url="user.data.avatar"
            :company="user.ad.company"
            :url="user.ad.url"
            :text="user.ad.text"
            :showAll="true"
            @edit="showEdit()"
        >
            Hi Arun
        </user-card>
        <div v-else>Loading...</div>
        <modal 
            v-if="showModal"
            :f-name="user.data.first_name"
            @close="closeModal()"
            @error="error()"
        >
            <span slot="header">Edit Arun user</span>
        </modal>
    </div>
</template>

<script>
import UserCard from '@/components/UserCard.vue'
import Modal from '@/components/Modal.vue'
import axios from 'axios'
export default {
    components: {
        UserCard,
        Modal
    },
    data() {
        return {
            user: null,
            showModal: false,
            showAlert: false 
        }
    },
    created() {
        this.getApi()
    },
    methods: {
        getApi() {
            console.log(this.$route.params.id)
            axios.get(`https://reqres.in/api/users/${this.$route.params.id}`)
            .then(response => {
                console.log(response)
                this.user = response.data
            })
            .catch(error => {
                console.log(error)
            })
        },
        showEdit() {
            this.showModal = true
        },
        closeModal(show) {
            this.showModal = false
            console.log('close event  value', show)
            if(show) {
                this.user = null
                this.getApi()
            }
        },
        error() {
            this.showAlert = true 
        }
    }
}
</script>

<style scoped>
.view {
    width: 40%;
    margin-left: 31%;
}
.alert-box-error {
    padding: 10px 20px;
    background: #f3beb8;
    border: 1px solid #f09898;
    margin: 20px 0;
}
</style>