<template>
     <section>
          <div class="animated fadeIn">
               <div class="row">
                    <div class="col-xs-12 col-md-12">
                    <card header-text="Orders">
                         <div class="table-responsive">
                         <table class="table table-striped first-td-padding border-table">
                         <thead>
                         <tr>
                              <td>ID</td>
                              <td>Change status</td>
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
                              <td>
                                   <select name="select" id="select" class="form-control" @change="updataOrderStatus(order.id, order.status)" v-model="order.status">
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
                              <td @click="showEditModal(order.id)"><button type="button" class="btn btn-info">show</button></td>

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
                    </card>
                    </div>
               </div>
          </div>
           <transition enter-active-class="animated fadeIn">
               <showModal @closeModalEvent="closeEditModal" :orderId="orderId" v-if="showModal" :key="showModal"/>
          </transition>
     </section>
</template>

<script>
import showModal from './models/showOrder'

export default {
     components:{showModal},
     data () {
          return {
               orders:{},
               orderStatus:['finished', 'rejected', 'wait_for_delivery', 'accepted', 'on_deliver'],
               selectedOrderStatus:'',
               pageNum:1,
               total_pages:null,
               showModal:false,
               orderId:null,
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
                         this.total_pages =response.data.data.paginate.total_pages
                    } 
                 }
            })
     },
     updataOrderStatus(orderId, orderStatus) {
          console.log('orderStatus', orderStatus)
           let formData = new FormData();
           formData.append('_method', 'PUT')
           let status = {
                status:orderStatus
           }
          formData.set('status',status.status);
          this.axios.post(`api/admin/orders/${orderId}`,formData
            ).then((response) => {
                 if(response.status == 200){
                    this.loadOrders();
                 }
            })
     },
     showEditModal(orderId){
          this.showModal = true;
          this.orderId = orderId;
     },
     closeEditModal() {
          this.showModal = !this.showModal;
     },
     handlePgnation(pageNum){
          this.pageNum = pageNum;
          this.loadOrders();
     }
    
  },
}
</script>

<style>
     .border-table{
          border: 1px solid #dee2e6;
     }
</style>
