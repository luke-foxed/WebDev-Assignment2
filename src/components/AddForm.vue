<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-plus-square" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <form @submit.prevent="submit">
            <div class="form-group">
              <label class="form-label">Select Device Type</label>
              <select id="devicetype" name="devicetype" class="form-control" type="text" v-model="devicetype">
                <option value="null" selected disabled hidden>Choose Device Type</option>
                <option value="Phone">Phone</option>
                <option value="Tablet">Laptop</option>
                <option value="Laptop">Tablet</option>
              </select>
            </div>
            <div class="form-group" :class="{ 'form-group--error': $v.devicename.$error }">
              <label class="form__label">Device Name</label>
              <input class="form__input" v-model.trim="$v.devicename.$model"/>
            </div>
            <div class="error" v-if="!$v.devicename.required">Name is Required</div>
            <div class="form-group" :class="{ 'form-group--error': $v.price.$error }">
              <label class="form-control-label" name="price">Price (Must be greater than 0)</label>
              <input class="form__input" type="number" v-model.trim="price"/>
            </div>
            <div class="error" v-if="!$v.rating.between">Rating must be greater than 0</div>
            <div class="form-group" :class="{ 'form-group--error': $v.rating.$error }">
              <label class="form-control-label" name="rating">Rating (Must be greater than 0)</label>
              <input class="form__input" type="number" v-model.trim="rating"/>
            </div>
            <div class="error" v-if="!$v.rating.between">Rating must be greater than 0</div>

            <div class="form-group" :class="{ 'form-group--error': $v.ram.$error }">
              <label class="form-control-label" name="ram">RAM (Must be greater than 0)</label>
              <input class="form__input" type="number" v-model.trim="ram"/>
            </div>
            <div class="error" v-if="!$v.ram.between">RAM must be greater than 0</div>

            <div class="form-group" :class="{ 'form-group--error': $v.camera.$error }">
              <label class="form-control-label" name="camera">Camera (Must be greater than 0)</label>
              <input class="form__input" type="number" v-model.trim="camera"/>
            </div>
            <div class="error" v-if="!$v.camera.between">Camera must be greater than 0</div>

            <div class="form-group" :class="{ 'form-group--error': $v.processor }">
              <label class="form-control-label" name="processor">Processor</label>
              <input class="form__input" v-model.trim="processor"/>
            </div>

            <div class="form-group" :class="{ 'form-group--error': $v.screen.$error }">
              <label class="form-control-label" name="screen">Screen (Must be greater than 0)</label>
              <input class="form__input" type="number" v-model.trim="screen"/>
            </div>
            <div class="error" v-if="!$v.screen.between">Screen must be greater than 0</div>

            <div class="form-group" :class="{ 'form-group--error': $v.battery.$error }">
              <label class="form-control-label" name="battery">Battery (Must be greater than 0)</label>
              <input class="form__input" type="number" v-model.trim="battery"/>
            </div>
            <div class="error" v-if="!$v.battery.between">Screen must be greater than 0</div>

            <p>
              <button class="btn btn-secondary btn1" type="submit" :disabled="submitStatus === 'PENDING'">Add Device
              </button>
            </p>
            <p class="typo__p" v-if="submitStatus === 'OK'">Thanks for adding your device!</p>
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
import {required, minLength, between} from 'vuelidate/lib/validators'

Vue.use(VueForm, {
  inputClasses: {
    valid: 'form-control-success',
    invalid: 'form-control-danger'
  }
})

Vue.use(Vuelidate)
Vue.use(VueSweetalert)

export default {
  name: 'Add Device',
  data () {
    return {
      devicetype: '',
      messagetitle: ' Add Device ',
      devicename: '',
      price: 0,
      upvotes: 0,
      rating: 0,
      specs: {
        processor: '',
        ram: 0,
        camera: 0,
        screen: 0,
        battery: 0
      },
      props: ['deviceBtnTitle'],
      submitStatus: null
    }
  },
  validations: {
    devicename: {
      required,
      minLength: minLength(5)
    },
    price: {
      required,
      between: between(1, 1000)
    },
    rating: {
      required,
      between: between(1, 1000)
    },
    ram: {
      required,
      between: between(1, 1000)
    },
    camera: {
      required,
      between: between(1, 1000)
    },
    screen: {
      required,
      between: between(1, 1000)
    },
    battery: {
      required,
      between: between(1, 1000)
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
          var adddevice = {
            producttype: this.devicetype,
            specs: [{
              battery: this.battery,
              camera: this.camera,
              screen: this.screen,
              processor: this.processor,
              ram: this.ram
            }
            ],
            price: this.price,
            upvotes: this.upvotes,
            productname: this.devicename,
            rating: this.rating
          }
          this.adddevice = adddevice
          console.log('Submitting in DeviceForm : ' + JSON.stringify(this.adddevice, null, 5))
          this.$emit('device-is-created-updated', this.adddevice)
        }, 500)
      }
    }
  }
}
</script>

<style scoped>
  .vue-title {
    margin-top: 90px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
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
