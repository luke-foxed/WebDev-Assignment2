<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-plus-square" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <form @submit.prevent="submit">

            <div class="form-group" :class="{ 'form-group--error': $v.username.$error }">
              <label class="form__label">Username</label>
              <input class="form__input" v-model.trim="$v.username.$model"/>
            </div>
            <div class="error" v-if="!$v.username.required">Name is Required</div>

            <div class="form-group" :class="{ 'form-group--error': $v.email.$error }">
              <label class="form__label">Email</label>
              <input class="form__input" type="text" v-model.trim="$v.email.$model"/>
            </div>
            <div class="error" v-if="!$v.email.required">Email is Required</div>

            <div class="form-group" :class="{ 'form-group--error': $v.password.$error }">
              <label class="form__label">Password</label>
              <input class="form__input" type="password" v-model.trim="$v.password.$model"/>
            </div>
            <div class="error" v-if="!$v.password.required">Password is Required</div>

            <p>
              <button class="btn btn-secondary btn1" type="submit" :disabled="submitStatus === 'PENDING'">Create User
              </button>
            </p>
            <p class="typo__p" v-if="submitStatus === 'OK'">Thanks for creating an account!</p>
            <p class="typo__p" v-if="submitStatus === 'ERROR'">Please Fill in the Form Correctly.</p>
            <p class="typo__p" v-if="submitStatus === 'PENDING'">Adding...</p>
          </form>
        </div><!-- /col -->
      </div><!-- /row -->
    </div><!-- /container -->
  </div>
</template>

<script>
import Vue from 'vue'
import VueForm from 'vueform'
import Vuelidate from 'vuelidate'
import VueSweetalert from 'vue-sweetalert'
import DeviceService from '@/services/deviceservice'
import {minLength, required} from 'vuelidate/lib/validators'

Vue.use(VueForm, {
  inputClasses: {
    valid: 'form-control-success',
    invalid: 'form-control-danger'
  }
})

Vue.use(Vuelidate)
Vue.use(VueSweetalert)

export default {
  name: 'CreateAccount',
  data () {
    return {
      messagetitle: ' Create Account ',
      username: '',
      email: '',
      password: '',
      props: ['deviceBtnTitle'],
      submitStatus: null
    }
  },
  validations: {
    username: {
      required,
      minLength: minLength(5)
    },
    email: {
      required,
      minLength: minLength(5)
    },
    password: {
      required,
      minLength: minLength(5)
    }
  },
  methods: {
    submit () {
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
          var user = {
            username: this.username,
            email: this.email,
            password: this.password
          }
          this.user = user
          console.log('Submitting in UserForm : ' + JSON.stringify(this.user, null, 5))
          this.submitUser(this.user)
        }, 500)
      }
    },
    submitUser: function (user) {
      console.log('submitUser!')
      console.log('Submitting in submitUser : ' + user)
      DeviceService.addUser(user)
        .then(response => {
          // JSON responses are automatically parsed.
          console.log(response)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
  .vue-title {
    margin-top: 160px;
    text-align: center;
    font-size: 45pt;

  }

  #app1 {
    width: 95%;
    margin: 0 auto;
  }

  .required-field > label::after {
    content: '*';
    color: red;
    margin: 0 auto;
  }

  .device-form .form-control-label.text-left {
    text-align: left;
  }

  label {
    display: inline-block;
    width: 540px;
    text-align: left;
    font-size: x-large;
  }

  .typo__p {
    width: 540px;
    font-size: x-large;
  }

  .btn1 {
    width: 300px;
    font-size: x-large;
    background: #fb9919;
    outline-color: #fb9919;
  }

  .btn1:active {
    background: yellow;
  }

  p {
    margin-top: 20px;
  }

  input {
    border: 1px solid silver;
    border-radius: 4px;
    background: white;
    padding: 5px 10px;
    width: 540px;
  }

  .dirty {
    border-color: #5A5;
    background: #EFE;
  }

  .dirty:focus {
    outline-color: #8E8;
  }

  .error {
    border-color: red;
    background: #fb9919;
    color: whitesmoke;
  }

  .error:focus {
    outline-color: #ffa519;
  }
</style>
