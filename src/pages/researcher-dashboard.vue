<template>
    <section>
         <div class="container">
               <div class="card" v-if="orders.items.length">
                    <div class="card-header">
                         <strong> Researcher dashboard</strong> 
                    </div>
                    <div class="card-body card-block">
                         <div class="table-responsive">
                              <table class="table table-striped first-td-padding border-table">
                              <thead>
                              <tr>
                                   <td>ID</td>
                                   <!-- <td>Change status</td> -->
                                   <td>Address </td>
                                   <td>Total </td>
                                   <td>Delivery price</td>
                                   <td>Date</td>
                                   <td>User Name</td>
                                   <td>Phone number</td>
                                   <td>Status</td>
                                   <td>Show</td>
                              </tr>
                              </thead>
                              <tbody>
                              <tr v-for="order in orders.items" :key="order.id">
                                   <td>{{order.id}}</td>
                                   <!-- <td>
                                        <select name="select" id="select" class="form-control" @change="updataOrderStatus(order.id, order.status)" v-model="order.status">
                                             <option disabled value="null" selected>Change status</option>
                                             <option v-for="(status, index) in orderStatus" :key="index">{{status}}</option>
                                        </select>
                                   </td> -->
                                   <td class="text-capitalize">{{order.address.address}}</td>
                                   <td>{{order.total}}</td>
                                   <td>{{order.delivery_cost}}</td>
                                   <td>{{order.created_at}}</td>
                                   <td class="text-capitalize">{{order.user.name}}</td>
                                   <td>{{order.user.phone}}</td>
                                   <td class="text-capitalize">{{order.status}}</td>
                                   <td>
                                   <router-link :to="{ name: 'single-order', query: { id: order.id }}"> <span class="btn btn-info">Show</span> </router-link>
                                        
                                   </td>

                              </tr>
                              </tbody>
                              </table>
                              <nav class="mt-4" v-if="total_pages > 1">
                                   <paginate
                                        :page-count="total_pages"
                                        :margin-pages="2"
                                        :click-handler="handlePgnation"
                                        :prev-text="'Prev'"
                                        :next-text="'Next'"
                                        :container-class="'pagination justify-content-center'"
                                        active-class="active"
                                        :page-class="'page-item'"
                                        :page-link-class="'page-link'"
                                        :prev-class="'page-item'"
                                        :prev-link-class="'page-link'"
                                        :next-link-class="'page-link'"
                                        :next-class="'page-item'"
                                        >
                                   </paginate>
                              </nav>
                         </div>
                    </div>
               </div>
         </div>
    </section>
</template>
<script>
export default {
   data () {
     return {
         orders:{
              items:[]
         },
          orderStatus:['finished', 'rejected', 'wait_for_delivery', 'accepted', 'on_deliver'],
          selectedOrderStatus:'',
          pageNum:1,
          total_pages:null,
          showModal:false,
          orderId:null,
     }
  },
   mounted(){
     this.loadOrders();
     // this.getCategory();
  },
  methods: {
       loadOrders() {
          //   pageNum = pageNum ? pageNum : '';
            this.axios.get(`api/admin/orders?page=${this.pageNum}`,
            ).then((response) => {
                 if(response.status == 200){
                    if (response.data.status == true) {
                         this.orders = response.data.data
                         this.total_pages =response.data.data.paginate.total_pages
                    } 
                 }
            })
     },
     getCategory(){
          this.axios.get('api/admin/categories').then((response) => {
               if(response.status == 200){
                    if (response.data.status == true) {
                         this.categories = response.data.data
                    } 
               }
          })
    },
     handlePgnation(pageNum){
          this.pageNum = pageNum;
          this.loadOrders();
     }
  },
}
</script>
<style lang="scss">
     .product-img{
          width: 50px;
          height: auto;
     }
     .border-table{
          border: 1px solid #dee2e6;
     }
     .degree-input{
          width: 128px;
     }
</style>
