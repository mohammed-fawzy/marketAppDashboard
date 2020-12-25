<template>
     <section>
          <div class="animated fadeIn">
               <div class="row">
                    <div class="col-xs-12 col-md-12">
                    <card header-text="Messages">
                         <div class="table-responsive">
                         <table class="table table-striped first-td-padding">
                         <thead>
                              <tr>
                                   <td>Name</td>
                                   <td>Email</td>
                                   <td>Phone</td>
                                   <td>Date</td>
                                   <td>Message</td>
                              </tr>
                         </thead>
                         <tbody>
                              <tr v-for="message in messsages.items" :key="message.id">
                                   <td>{{message.name}}</td>
                                   <td>{{message.email}}</td>
                                   <td>{{message.phone}}</td>
                                   <td>{{message.created_at}}</td>
                                   <td>{{message.message}}</td>
                              </tr>
                         </tbody>
                         </table>
                              <nav class="mt-4" v-if="messsages.paginate.total_pages > 1">
                                   <paginate
                                        :page-count="messsages.paginate.total_pages"
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
         messsages:{},
         pageNum:1
     }
  },
   mounted(){
     this.loadMessages()
   },
  methods: {
      loadMessages() {
          //   pageNum = pageNum ? pageNum : '';
            this.axios.get(`api/admin/contacts`,
            ).then((response) => {
                 if(response.status == 200){
                    if (response.data.status == true) {
                         this.messsages = response.data.data
                    } 
                 }
            })
     },
     handlePgnation(pageNum){
          this.pageNum = pageNum;
          this.loadMessages();
     }
  },
}
</script>

<style lang="scss">
     img.preview {
          background-color: white;
          border: 1px solid #DDD;
          height: 200px;
          width: auto;
          border-radius: 5px;
     }
     .custom-file-label{
          left: 14px;
     }
</style>
