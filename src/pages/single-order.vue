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
                         <tr>
                              <th scope="row">{{order.id}}</th>
                              <td>{{order.created_at}}</td>
                              <td>{{order.address.address}}</td>
                              <td>{{order.user.name}}</td>
                              <td>{{order.total}}</td>
                         </tr>
                    </tbody>
               </table>
               <div class="row mt-4">
                    <div class="col col-md-2"><label for="price-input" class=" form-control-label">Shipment weight </label></div>
                    <div class="col-12 col-md-3">
                         <input type="text" placeholder="Enter weight" class="form-control" required>
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
                              <th scope="col">Product Image</th>
                         </tr>
                    </thead>
                    <tbody>
                         <tr v-for="item in order.items" :key="item.id">
                              <th scope="row">{{item.id}}</th>
                              <td>{{item.product.name}}</td>
                              <th>{{item.quantity}}</th>
                              <td v-if="item.has_sensor">
                                   <input placeholder="Enter Temp" class="degree-input form-control">
                              </td>
                              <td v-else>
                                   no sensor
                              </td>
                              <td><img :src="item.product.image" class="product-img"></td>
                         </tr>
                    </tbody>
               </table>
               </template>
               <template v-else>
                    <p class="text-center"> No products</p>
               </template>
          </div>
          <card header-text="Google Maps" class="row">
            <google-map></google-map>
          </card>
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
                    items:[]
               },
          }
     },
     mounted() {
          this.loadAllData();
     },
     methods:{
          loadAllData() {
               if (this.$route.params.id) {
                    this.axios.get(`api/admin/orders/${this.$route.params.id}`,
                    ).then((response) => {
                         if(response.status == 200){
                              if (response.data.status == true) {
                                   this.order = response.data.data
                              } 
                         }
                    })
               }
          },
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
   .google-maps-page .card-body{
      height: 600px;
      width: 100%;
      margin: 0;
    }

</style>
