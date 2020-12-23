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
                              <td>Order status</td>
                              <td>Address </td>
                              <td>Total </td>
                              <td>Delivery price</td>
                              <td>Date</td>
                              <td>Name</td>
                              <td>Phone number</td>
                         </tr>
                         </thead>
                         <tbody>
                         <tr>
                              <td>
                                   <select name="select" id="select" class="form-control">
                                        <option>status</option>
                                        <option>status</option>
                                        <option>status</option>
                                   </select>
                              </td>
                              <td>matthew30@mail.ol</td>
                              <td>Vancouver</td>
                              <td>93</td>
                              <td>dsd</td>
                              <td>dsd</td>
                              <td>dsd</td>
                         </tr>
                         <tr>
                              <td>Nancy Bo</td>
                              <td>nancy@boonweb.com</td>
                              <td>Washington</td>
                              <td>280</td>
                              <td></td>
                              <td>dsd</td>
                              <td>dsd</td>
                         </tr>
                         </tbody>
                         </table>
                         <nav class="mt-4">
                              <paginate
                                   :page-count="20"
                                   :margin-pages="2"
                                   :click-handler="handlePgnation"
                                   :prev-text="'Prev'"
                                   :next-text="'Next'"
                                   :container-class="'pagination justify-content-center'"
                                   :active-class="active"
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
// import Paginate from 'vuejs-paginate';

export default {
     components: {
          // Paginate
     },
     data () {
     return {
         
     }
  },
  methods: {
    handleSubmit(){
     let formData = new FormData();
     //  Add the form data we need to submit
     formData.append('image', this.file, this.file.name);
     let rawData = JSON.stringify(this.client);
     formData.append('client', rawData)
     this.axios.post('https://jsonplaceholder.typicode.com/todos/1',
          formData,
          {headers: {'Content-Type': 'multipart/form-data'}}
      ).then((response) => {
          console.log(response)
     })
    },
    handlePgnation(){

    }
  },
}
</script>

