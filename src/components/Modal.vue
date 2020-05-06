<template>
    <!-- The Modal -->
    <div id="myModal" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
            <div class="modal-header">
                <slot name="header"></slot>
                <span class="close" @click="close()">
                    <i class="material-icons">close</i>
                </span>
            </div>
            <div>
                <label for="name">Name</label>
                <input v-model="name" type="text" name="name" />
            </div>
            <div class="modal-footer">
                <button class="btn" @click="close()">Cancel</button>
                <button class="btn primary" @click="save()">Save</button>
            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios'
export default {
    props: ['fName'],
    data () {
        return {
            name: this.fName
        }
    },
    methods: {
        close() {
            this.$emit('close', false)
        },
        save() {
            const obj = { name: this.name }
            this.$store.dispatch('userData', {
                user: this.name
            })
            axios.put(`https://reqres.in/api/users/${this.$route.params.id}`, obj)
            .then(response => {
                console.log('Updated:', response)
                this.$emit('close', true)
            })
            .catch(error => {
                console.log(error)
                this.$emit('close', false)
                this.$emit('error')
            })
        }
    }
}
</script>

<style scoped>
    /* The Modal (background) */
.modal {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

.modal-header {
    font-size: 24px;
    margin-bottom: 20px;
    font-weight: bold;
}

.modal-footer {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
}

.primary:hover {
    color: #fff;
    background-color: #40a9ff;
    border-color: #40a9ff;
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 40%; /* Could be more or less, depending on screen size */
  text-align: left;
  border-radius: 4px;
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
label {
    font-weight: 600;
}
input[type=text] {
    width: 81%;
    padding: 12px 20px;
    margin: 8px 0;
    margin-left: 15px;
}
.btn {
    margin-right: 8px;
    margin-bottom: 12px;
    line-height: 1.5715;
    position: relative;
    display: inline-block;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    background-image: none;
    border: 1px solid transparent;
    height: 32px;
    padding: 4px 15px;
    font-size: 14px;
    border-radius: 2px;
    color: rgba(0,0,0,.65);
    background-color: #fff;
    border-color: #d9d9d9;
    cursor: pointer;
    transition: all .3s cubic-bezier(.645,.045,.355,1);
}

.btn:hover {
    color: #40a9ff;
    background-color: #fff;
    border-color: #40a9ff;
    transition: all .3s cubic-bezier(.645,.045,.355,1);
}

.primary {
    color: #fff;
    background-color: #1890ff;
    border-color: #1890ff;
    text-shadow: 0 -1px 0 rgba(0,0,0,.12);
    box-shadow: 0 2px 0 rgba(0,0,0,.045);
}
</style>