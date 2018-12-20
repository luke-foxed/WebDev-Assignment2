<template>
  <div id="app1" class="hero">
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">

        <template v-if="childDataLoaded">
          <device-form :device="device" deviceBtnTitle="Update Device"
                       @device-is-created-updated="updateDevice"></device-form>
        </template>
      </div><!-- /col -->
    </div><!-- /row -->
  </div><!-- /container -->

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
      specs: {},
      submitStatus: null,
      childDataLoaded: false
    }
  },
  components: {
    'device-form': DeviceForm
  },
  created () {
    this.getDevice()
  },
  methods: {
    getDevice: function () {
      DeviceService.fetchDevice(this.$router.params)
        .then(response => {
          this.temp = response.data
          this.device = this.temp[0]
          this.childDataLoaded = true
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },

    updateDevice: function (device) {
      DeviceService.putDevice(this.$router.params, device)
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
