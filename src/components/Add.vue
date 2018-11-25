<template>
  <div id="app1" class="hero">
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <device-form :device="device" deviceBtnTitle="Add Device" @device-is-created-updated="submitDevice"></device-form>
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
      paymenttype: 'Direct',
      price: 0,
      upvotes: 0,
      rating: 0,
      specs: {},
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
  #app1 {
    width: 95%;
    margin: 0 auto;
  }

</style>
