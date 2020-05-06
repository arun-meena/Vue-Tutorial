<template>
  <div class="contact">
    <h1>Hi Hello Vue.js</h1>
    <div class="container">
      <div style="text-align:center">
        <h2>Contact Us</h2>
        <p>Swing by for a cup of coffee, or leave us a message:</p>
      </div>
      <div class="row">
        <div v-bind:id="srcUrl" class="column">
          <img :src="srcUrl" style="width:100%">
        </div>
        {{ fname ? fname : 'NULL' }}
        <div class="column">
          <label>First Name</label>
          <input type="text" v-model="fname" placeholder="Your name..">
          <label>Last Name</label>
          <input type="text" v-model="lname" placeholder="Your last name.." v-on:keyup.enter="submit()">
          <label>Country</label>
          <select v-model="country">
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>
          <label>Subject</label>
          <textarea id="subject" placeholder="Write something.." style="height:170px"></textarea>
          <button type="submit" :class="{ 'disbaled-btn' : disableBtn }" :disabled="disableBtn" v-on:[eventName]="submit()">Submit</button>
          <br>
          <!-- <button type="submit" @click="disableBtn = false">Submit</button> -->
        </div>
      </div>
      Computed : {{ fullName }} <br/>
      Computed Reverse : {{ fullName.split(' ').reverse().join(' ') }} <br/>
      Method : {{ fullNameMethod() }} <br/>

      <div class="list">
        <ul v-if="list.length > 0" :class="[noPadding, width200]" v-bind:style="{ fontSize: fontSize + 'px' }">
          <li v-for="(obj,index) in list" :key="index">{{ obj.fName + ' ' + (obj.lName ? obj.lName : '') }}</li>
        </ul>
        <div v-else>
          No List
        </div>
        <div v-show="false">
          Not visible
        </div>
      </div>
      <div class='list'>
        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
        <label for="jack">Jack</label>
        <input type="checkbox" id="john" value="John" v-model="checkedNames">
        <label for="john">John</label>
        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
        <label for="mike">Mike</label>
        <br>
        <span>Checked names: {{ checkedNames }}</span>
      </div>
      <div class="list">
        <input type="radio" id="one" value="One" v-model="picked">
        <label for="one">One</label>
        <br>
        <input type="radio" id="two" value="Two" v-model="picked">
        <label for="two">Two</label>
        <br>
        <span>Picked: {{ picked }}</span>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fname: '',
      lname: '',
      country: '',
      eventName: 'click',
      disableBtn: false,
      srcUrl: 'https://www.w3schools.com/w3images/map.jpg',
      // list: [],
      list: [
        {
          fName: 'Aryan',
          lName: 'Sood'
        },
        {
          fName: 'Niks',
          lName: null
        },
        {
          fName: 'Sam',
          lName: null
        }
      ],
      activeColor: 'red',
      fontSize: 14,
      noPadding: 'no-p',
      width200: 'width-200',
      checkedNames: [],
      picked: ''
    }
  },
  computed: {
    fullName() {
      return this.fname + ' ' + this.lname 
    }
  },
  methods: {
    submit() {
      alert('Hello ' + this.fname + ' ' + this.lname + ' from ' + this.country)
      this.disableBtn = true
      // dispatch with a payload
      this.$store.dispatch('userData', {
        user: this.fname + ' ' + this.lname
      })
    },
    fullNameMethod() {
      return this.fname + ' ' + this.lname
    }
  }
}
</script>

<style scoped>
input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

button[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  cursor: pointer;
}

button[type=submit]:hover {
  background-color: #45a049;
}
button.disbaled-btn {
  background-color: #7fd082;
  cursor: not-allowed;
}
button.disbaled-btn:hover {
  background-color: #7fd082;
}

/* Style the container/contact section */
.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 10px 100px;
}

/* Create two columns that float next to eachother */
.column {
  float: left;
  width: 50%;
  margin-top: 6px;
  padding: 20px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column, input[type=submit] {
    width: 100%;
    margin-top: 0;
  }
}

.list {
  width: 30%;
  border: 1px solid #ddd;
  margin: 10px;
  padding: 20px;
}
ul li {
  text-align: left;
}
.no-p {
  padding: 0;
}
.width-200 {
  width: 200px;
}
</style>