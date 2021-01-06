<template>
     <div  class="modal-mask">
          <div class="modal-wrapper">
               <div class="modal fade show d-block" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                         <div class="modal-content">
                              <div class="modal-header">
                              <h5 class="modal-title display-5" id="exampleModalLongTitle" >Order</h5>
                              <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="closeEditModal">
                                   <span aria-hidden="true">&times;</span>
                              </button>
                              </div>
                              <div class="modal-body">
                                  <table class="table table-striped">
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
                                   <template v-if="order.items.length">
                                   <p class="text-center mt-4 mb-4">Products</p>
                                   <table class="table table-bordered">
                                        <thead>
                                             <tr>
                                                  <th scope="col">ID</th>
                                                  <th scope="col">Quantity</th>
                                                  <th scope="col">Current_temp</th>
                                                  <th scope="col">Product name</th>
                                                  <th scope="col">Product Image</th>
                                             </tr>
                                        </thead>
                                        <tbody>
                                             <tr v-for="item in order.items" :key="item.id">
                                                  <th scope="row">{{item.id}}</th>
                                                  <th>{{item.quantity}}</th>
                                                  <td>{{item.current_temp}}</td>
                                                  <td>{{item.product.name}}</td>
                                                  <td><img :src="item.product.image" class="product-img"></td>
                                             </tr>
                                        </tbody>
                                   </table>
                                   </template>
                                   <template v-else>
                                        <p class="text-center"> No products</p>
                                   </template>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     </div>
</template>

<script>
export default {
     props:['orderId'],
     data () {
          return {
               order:{},
          }
     },
     mounted() {
          this.loadAllData();
     },
     methods:{
          loadAllData() {
               if (this.orderId) {
                    this.axios.get(`api/admin/orders/${this.orderId}`,
                    ).then((response) => {
                         if(response.status == 200){
                              if (response.data.status == true) {
                                   this.order = response.data.data
                              } 
                         }
                    })
               }
          },
          closeEditModal() {
               this.$emit("closeModalEvent");
          },
     },
}

</script>

<style>
     .modal-mask {
     position: fixed;
     z-index: 9998;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     background-color: rgba(0, 0, 0, .5);
     display: table;
     transition: opacity .3s ease;
     }

     .modal-wrapper {
     display: table-cell;
     vertical-align: middle;
     }
     .product-img{
          width: 100px;
          height: auto;
     }

</style>
