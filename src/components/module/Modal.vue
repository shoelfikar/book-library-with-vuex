<template>
  <div>
    <!-- Button trigger modal -->
      <!-- <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        Launch demo modal
      </button> -->

      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-headers d-flex justify-content-between">
              <p class="mt-3 ml-2">Add Book</p>
              <button type="button" class="close mr-2" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-bodys">
              <form>
                <div class="form-group row">
                  <label for="judul" class="col-sm-2 col-form-label">Judul</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="judul">
                  </div>
                </div>
                <div class="form-group row">
                  <label for="author" class="col-sm-2 col-form-label">Author</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="author">
                  </div>
                </div>
                <div class="form-group row">
                  <label for="customFile" class="col-sm-2 col-form-label">Image</label>
                  <div class="custom-file col-sm-6 ml-3">
                      <input type="file" ref="file" class="custom-file-input" id="customFile">
                      <label class="custom-file-label" for="customFile">Choose file</label>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="status" class="col-sm-2 col-form-label">Status</label>
                  <select class="form-control col-sm-4 ml-3" id="status">
                    <option>1</option>
                    <option>2</option>
                  </select>
                </div>
                <div class="form-group row">
                  <label for="category" class="col-sm-2 col-form-label">Category</label>
                  <select class="form-control col-sm-4 ml-3" id="category">
                    <option>1</option>
                    <option>2</option>
                  </select>
                </div>
                <div class="form-group row">
                  <label class="col-sm-2 col-form-label">Deskripsi</label>
                  <div class="col-sm-10">
                    <textarea class="form-control deskripsi"></textarea>
                  </div>
                </div>
                <div class="save-data d-flex justify-content-end">
                  <button type="submit" class="btn btn-warning">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Modal' 
}
</script>

<style scoped>
  .modal-content{
    width: 600px;
    height: 100%;
    margin-left: -55px;
  }
  .modal-headers p{
    font-size: 20px;
  }
  .modal-bodys{
    padding: 20px;
  }
  .deskripsi{
    height: 150px;
  }
  .btn{
    width: 120px;
    height: 40px;
    color: #fff;
    border-radius: 5px;
  }
</style>
