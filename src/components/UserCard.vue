<template>
    <div class="card" :class="{'show-all' : showAll}">
        <div class="img-wrapper">
            <img :src="avatarUrl">
        </div>
        <div class="info">
            <div v-if="showAll" class="custom-avatar"> {{ fName + ' ' + lName | avatarName | uniquId }} </div>
            <div class="name"> {{ fName + ' ' + lName }} </div>
            <pre class="email"> {{ email | capitalize }} </pre>
            <i v-if="showAll" class="material-icons edit" @click="edit()">edit</i>
        </div>
        <div v-if="showAll" class="others">
            <div class="company"> {{ company }} </div>
            <blockquote class="text">
                "{{ text }}"
                <div class="date">
                    - Arun on {{ date | formatedDateTime }}
                </div>
            </blockquote>
            
            <a :href="url" class="website-link"> {{ url }} </a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        fName: {
            type: [String, Number],
            required: true
        },
        lName: {
            type: String
        },
        email: {
            type: String,
            required: false
        },
        avatarUrl: {
            type: String,
            required: true
        },
        company: {
            type: String,
            required: false,
            default: 'Credit Saison'
        },
        url: {
            type: String
        },
        text: {
            type: String
        },
        showAll: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            date: Date.now()
        }
    },
    methods: {
        edit() {
            this.$emit('edit')
        }
    },
    filters: {
        capitalize(value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        },
        avatarName(value) {
            if (!value) return ''
            value = value.toString()
            const arr = value.split(' ')
            let avatar = ''
            if(arr[0]) avatar = arr[0].charAt(0).toUpperCase()
            if(arr[1]) avatar += arr[1].charAt(0).toUpperCase()
            return avatar
        },
        uniquId(value) {
            if (!value) return ''
            value = value.toString()
            if(value[0]) value += value[0].charCodeAt(0)
            if(value[1]) value += value[1].charCodeAt(0)
            return value
        },
        formatedDateTime(value) {
            if (value === '-') {
                return value
            } else if (!value) {
                return '-'
            }
            const dt = new Date(value)
            if (dt == null) return ''
            const f = function(d) {
                return d < 10 ? '0' + d : d
            }
            return f(dt.getDate()) + '/' + f(dt.getMonth() + 1) + '/' + dt.getFullYear()
        }
    }
}
</script>

<style scoped>
.card {
    display: flex;
    flex-direction: row;
    border-radius: 4px;
    border: 1px solid #ebeef5;
    background-color: #fff;
    overflow: hidden;
    color: #303133;
    transition: .3s;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
}
.custom-avatar {
    margin-left: 7px;
    font-size: 11px;
    font-weight: bold;
    color: #fff;
    padding: 2px 8px;
    background-color: #ff8d00;
    border-radius: 4px;
    width: 42px;
    margin-bottom: 10px;
}
.img-wrapper {
    width: 40%;
    height: 150px;
}

.img-wrapper img {
    height: 100%;
    width: 100%;
    object-fit: contain;
}

.info {
    width: 60%;
    padding: 15px;
    text-align: left;
}
.info .name {
    margin-left: 7px;
    font-size: 16px;
    color: #333;
    font-weight: 500;
}
.info .email {
    color: #909090;
}
.show-all {
    flex-wrap: wrap;
    position: relative;
}
.show-all .info {
    width: 64%;
}
.show-all .img-wrapper {
    width: 30%;
    height: 170px;
}
.others {
    padding: 20px;
    border-top: 1px solid #ddd;
    margin-top: 20px;
}
.text {
  position: relative;
  padding-left: 1em;
  border-left: 0.2em solid #4d91b3;
  font-family: 'Roboto', serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 100;
  text-align: left;
}
text:before, text:after {
    content: '\201C';
    font-family: 'Sanchez';
    color: #4d91b3;
}
text:after {
    content: '\201D';
}
.website-link {
    text-decoration: none;
    color: #4d91b3;
}
.website-link:hover {
    color: #0088FF;
}
.edit {
    position: absolute;
    right: 10px;
    top: 10px;
    background-color: rgba(0, 136, 255, 0.2);
    color: rgba(0, 136, 255, 0.6);
    padding: 5px;
    border-radius: 50%;
    font-size: 20px;
    cursor: pointer;
    transition: .2s ease-in-out;
}
.edit:hover {
    color: #FFF;
    background: #0088FF;
    transition: .2s ease-in-out;
}
.date {
    display: flex;
    justify-content: flex-end;
    font-style: italic;
}
</style>