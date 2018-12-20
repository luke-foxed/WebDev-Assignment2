<template>
  <div id="app" class="hero">
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <device-form :device="device" deviceBtnTitle="Add Device"
                     @device-is-created-updated="submitDevice"></device-form>
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
import DeviceForm from '@/components/AddForm'

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
      specs: [
        {
          batterysize: 0,
          cameraquality: 0,
          screensize: 0,
          processor: '',
          ram: 0
        }
      ],

      submitStatus: null
    }
  },
  components: {
    'device-form': DeviceForm
  },
  methods: {
    submitDevice: function (device) {
      DeviceService.postDevice(device)
        .then(response => {
          console.log(response)
          console.log('Added device to database', device)
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
  #app {
    width: 95%;
    margin: 0 auto;
  }

</style>
