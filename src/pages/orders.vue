<template>
     <section>
          <div class="animated fadeIn">
               <div class="row">
                    <div class="col-xs-12 col-md-12">
                    <card header-text="Orders">
                         <div class="table-responsive">
                         <table class="table table-striped first-td-padding">
                         <thead>
                         <tr>
                              <td>Change status</td>
                              <td>Address </td>
                              <td>Total </td>
                              <td>Delivery price</td>
                              <td>Date</td>
                              <td>User Name</td>
                              <td>Phone number</td>
                              <td>Status</td>
                         </tr>
                         </thead>
                         <tbody>
                         <tr v-for="order in orders.items" :key="order.id">
                              <td>
                                   <select name="select" id="select" class="form-control" @change="updataOrderStatus(order.id, order.status)">
                                        <option disabled value="null" selected>Change status</option>
                                        <option v-for="(status, index) in orderStatus" :key="index">{{status}}</option>
                                   </select>
                              </td>
                              <td class="text-capitalize">{{order.address.address}}</td>
                              <td>{{order.total}}</td>
                              <td>{{order.delivery_cost}}</td>
                              <td>{{order.created_at}}</td>
                              <td class="text-capitalize">{{order.user.name}}</td>
                              <td>{{order.user.phone}}</td>
                              <td class="text-capitalize">{{order.status}}</td>
                         </tr>
                         </tbody>
                         </table>
                         <nav class="mt-4" v-if="orders.paginate.total_pages > 1">
                              <paginate
                                   :page-count="orders.paginate.total_pages"
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
                    </card>
                    </div>
               </div>
          </div>
     </section>
</template>

<script>

export default {
     data () {
          return {
               orders:{},
               orderStatus:['finished', 'rejected', 'wait_for_delivery', 'accepted', 'on_deliver'],
               selectedOrderStatus:'',
               pageNum:1
          }
     },
     mounted(){
          this.loadOrders()
     },
     methods: {
       loadOrders() {
          //   pageNum = pageNum ? pageNum : '';
            this.axios.get(`api/admin/orders?page=${this.pageNum}`,
            ).then((response) => {
                 if(response.status == 200){
                    if (response.data.status == true) {
                         this.orders = response.data.data
                    } 
                 }
            })
     },
     updataOrderStatus(orderId, orderStatus) {
           let status = {
                status:orderStatus
           }
          this.axios.put(`api/admin/orders/${orderId}`,status
            ).then((response) => {
                 if(response.status == 200){
                    
                 }
            })
     },
     handlePgnation(pageNum){
          this.pageNum = pageNum;
          this.loadOrders();
          console.log(pageNum)
     }
    
  },
}
</script>

