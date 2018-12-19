<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-list" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div id="app1">
      <v-client-table :columns="columns" :data="users" :options="options">
        <a slot="upvote" slot-scope="props" class="fa fa-thumbs-up fa-2x" @click="upvote(props.row._id)">
        </a>
        <a slot="remove" slot-scope="props" class="fa fa-trash-o fa-2x" @click="deleteDevice(props.row._id)"></a>
        <a slot="edit" slot-scope="props" class="fa fa-edit fa-2x" @click="editDevice(props.row._id)"></a>

      </v-client-table>
    </div>
  </div>
</template>

<script>
import DeviceService from '@/services/deviceservice'
import Vue from 'vue'
import VueTables from 'vue-tables-2'

Vue.use(VueTables.ClientTable, {compileTemplates: true, filterByColumn: true})

export default {
  name: 'Users',
  data () {
    return {
      messagetitle: ' User List ',
      props: ['_id'],
      users: [],
      errors: [],
      columns: ['_id', 'username', 'edit', 'remove'],
      options: {
        perPage: 10,
        filterable: ['id', 'username'],
        headings: {
          _id: 'ID',
          username: 'Username',
          edit: 'Edit',
          remove: 'Remove'
        }
      }
    }
  },
  // Fetches Donations when the component is created.
  created () {
    this.loadUsers()
  },
  methods: {
    loadUsers: function () {
      console.log('INSIDE')
      DeviceService.fetchUsers()
        .then(response => {
          // JSON responses are automatically parsed.
          this.users = response.data
          console.log(this.users)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },

    editDevice: function (id) {
      this.$router.params = id
      this.$router.push('edit')
    },

    deleteDevice: function (id) {
      this.$swal({
        title: 'Are you totaly sure?',
        text: 'You can\'t Undo this action',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'OK Delete it',
        cancelButtonText: 'Cancel',
        showCloseButton: true,
        showLoaderOnConfirm: true
      }).then((result) => {
        console.log('SWAL Result : ' + result)
        if (result === true) {
          DeviceService.deleteDevice(id)
            .then(response => {
              // JSON responses are automatically parsed.
              this.message = response.data
              console.log(this.message)
              this.loadDevices()
              // Vue.nextTick(() => this.$refs.vuetable.refresh())
              this.$swal('Deleted', 'You successfully deleted this Device ' + JSON.stringify(response.data, null, 5), 'success')
            })
            .catch(error => {
              this.$swal('ERROR', 'Something went wrong trying to Delete ' + error, 'error')
              this.errors.push(error)
              console.log(error)
            })
        } else {
          this.$swal('Cancelled', 'Your Donation still Counts!', 'info')
        }
      })
    }

  }
}
</script>

<style scoped>
  #app1 {
    width: 65%;
    margin: 0 auto;
  }

  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }

</style>
