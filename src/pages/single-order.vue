<template>
     <section>
          <div class="container">
              <router-link :to="{ name: 'researcher-dashboard'}"> <p> <i class="fa fa-arrow-left mr-2" aria-hidden="true"></i>Back to Researcher dashboard</p></router-link>
               <table class="table table-striped table-bordered mb-3" v-if="order">
                    <thead>
                         <tr>
                              <th scope="col">ID</th>
                              <th scope="col">Date</th>
                              <th scope="col">To</th>
                              <th scope="col">Name</th>
                              <th scope="col">Total</th>
                         </tr>
                    </thead>
                    <tbody>
                         <tr v-if="order">
                              <th scope="row">{{order.id}}</th>
                              <td>{{order.created_at}}</td>
                              <td>{{order.address.address}}</td>
                              <td>{{order.user.name}}</td>
                              <td>{{order.total}}</td>
                         </tr>
                    </tbody>
               </table>
               <form v-on:submit.prevent="handleSubmit" class="mb-1">
                    <div class="row mt-4">
                         <div class="col col-md-2"><label for="price-input" class=" form-control-label">Shipment weight </label></div>
                         <div class="col-12 col-md-3">
                              <input type="text" placeholder="Enter weight" class="form-control" v-model="order.weight" required>
                         </div>
                    </div>
                    <template v-if="order.items.length">
                    <p class="text-center mt-4 mb-4">Products</p>
                    <table class="table table-bordered">
                         <thead>
                              <tr>
                                   <th scope="col">ID</th>
                                   <th scope="col">Product name</th>
                                   <th scope="col">Quantity</th>
                                   <th scope="col">Current_temp</th>
                                   <th scope="col">Spoiled</th>
                                   <th scope="col">Min Max</th>
                                   <th scope="col">Product Image</th>
                              </tr>
                         </thead>
                         <tbody>
                              <tr v-for="item in order.items" :key="item.id">
                                   <th scope="row">{{item.id}}</th>
                                   <td>{{item.product.name}}</td>
                                   <th>{{item.quantity}}</th>
                                   <td v-if="item.has_sensor">
                                        <input placeholder="Enter Temp" class="degree-input form-control" v-model="item.current_temp">
                                   </td>
                                   <td v-else>
                                        no sensor
                                   </td>
                                   <td>
                                        {{item.is_spoiled}}
                                   </td>
                                   <td v-if="item.has_sensor">
                                        min: {{item.product.sensor.min}}<br>
                                        max: {{item.product.sensor.max}}
                                   </td>
                                   <td><img :src="item.product.image" class="product-img"></td>
                              </tr>
                         </tbody>
                    </table>
                    </template>
                    <template v-else>
                         <p class="text-center"> No products</p>
                    </template>
                    <card header-text="Google Maps" class="row">
                    <google-map @chooseMapEvent="chooseMapEvent"></google-map>
                    </card>
                    <button class="btn btn-success w-50 d-block mx-auto mt-2" type="submit">Submit <span v-if="loading"> Loading...</span></button>
               </form>
               <basix-alert v-if="dataAdedd" type="success" :withCloseBtn="true" class="col-6 mx-auto mt-2">
                    <span class="badge badge-pill badge-success">Success</span>
                    Data Added Successfully
               </basix-alert>

               <basix-alert v-if="errorMessage" type="danger" :withCloseBtn="true" class="col-12 col-md-6 mx-auto mt-2 text-center">
                    <span class="badge badge-pill badge-danger">{{errorMessage}}</span>
               </basix-alert>
          </div>
     </section>
</template>

<script>
import GoogleMap from './GoogleMap.vue';
export default {
     components: {
          GoogleMap
     },
     data () {
          return {
               order:{
                    user: {name:''},
                    quantity:null,
                    created_at:'',
                    total:null,
                    address:{
                         address:''
                    },
                    items:[]

               },
               loading: false,
               dataAdedd:false,
               errorMessage:false
          }
     },
     mounted() {
          this.loadAllData();
     },
     methods:{
          loadAllData() {
               if (this.$route.query.id) {
                    this.axios.get(`api/admin/orders/${this.$route.query.id}`,
                    ).then((response) => {
                         if(response.status == 200){
                              if (response.data.status == true) {
                                   this.order = response.data.data
                              } 
                         }
                    })
               }
          },
          chooseMapEvent(latLng){
              this.order.current_location.lat = latLng.lat
              this.order.current_location.lng = latLng.lng
          },
          handleSubmit(){
               this.loading = true;
               this.errorMeg ='';
               // let formData = new FormData();
               let mapedItems = this.order.items.map(item => {return  {'id': item.id, "current_temp": item.current_temp}} )
               let order = {
                    weight:this.order.weight,
                    current_lat:this.order.current_location.lat,
                    current_lng:this.order.current_location.lng,
                    items:mapedItems,
                    '_method': 'PUT'
               }
               this.axios.post(`api/admin/orders/${this.$route.query.id}`, order
               ).then((response) => {
                    if(response.status == 200){
                         if (response.data.status == true) {
                              this.loading = false;
                              this.dataAdedd = true;
                              let self = this;
                              setTimeout(
                              function() {
                                   self.loadAllData()
                                   this.dataAdedd = false;
                              }, 2000);
                         }
                         else{
                              this.errorMessage = response.data.msg;
                              this.loading = false;
                         }
                    }
               })
          }
          
     },
}

</script>

<style>
     .product-img{
          width: 100px;
          height: auto;
     }
     .degree-input{
          width: 128px;
     }
     .card-body{
          height: 400px;
     }
   .google-maps-page .card-body{
      height: 600px;
      width: 100%;
      margin: 0;
    }

</style>
