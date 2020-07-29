<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <!-- Button trigger modal -->
      <button
        class="col-4 btn btn-primary m-3 border-dark shadow"
        data-toggle="modal"
        data-target="#addHouseForm"
      >List a House</button>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="addHouseForm" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">List a House</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form class="shadow-lg p-3 mb-5 bg-light rounded" @submit.prevent="createHouse">
              <h5 class="text-center">List a House</h5>
              <div class="form-group">
                <!-- <label for="price">Price</label> -->
                <input
                  type="number"
                  name="price"
                  class="form-control"
                  v-model="newHouse.price"
                  placeholder="Price..."
                />
              </div>
              <div class="form-group">
                <!-- <label for="levels">Levels</label> -->
                <input
                  type="number"
                  name="levels"
                  class="form-control"
                  v-model="newHouse.levels"
                  placeholder="Levels..."
                />
              </div>
              <div class="form-group">
                <!-- <label for="bedrooms">Bedrooms</label> -->
                <input
                  type="number"
                  name="bedrooms"
                  class="form-control"
                  v-model="newHouse.bedrooms"
                  placeholder="Bedrooms..."
                />
              </div>
              <div class="form-group">
                <!-- <label for="bathrooms">Bathrooms</label> -->
                <input
                  type="number"
                  name="bathrooms"
                  class="form-control"
                  placeholder="Bathrooms..."
                  v-model="newHouse.bathrooms"
                />
              </div>
              <div class="form-group">
                <!-- <label for="year">Year Built</label> -->
                <input
                  type="number"
                  name="year"
                  class="form-control"
                  v-model="newHouse.year"
                  placeholder="Year Built..."
                />
              </div>
              <div class="form-group">
                <!-- <label for="imgUrl">Image URL</label> -->
                <input
                  type="text"
                  name="imgUrl"
                  class="form-control"
                  v-model="newHouse.imgUrl"
                  placeholder="Image Url..."
                />
              </div>
              <button class="btn btn-block btn-primary mt-3" type="submit">Submit</button>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

    <div class="row justify-content-center">
      <houseCard v-for="house in houses" :houseData="house" :key="house.id"></houseCard>
    </div>
  </div>
</template>

<script>
import houseCard from "../components/HouseCard";
export default {
  name: "houses",
  data() {
    return {
      newHouse: {},
    };
  },

  mounted() {
    this.$store.dispatch("getHouses");
  },

  computed: {
    houses() {
      return this.$store.state.houses;
    },
  },

  methods: {
    createHouse() {
      this.$store.dispatch("createHouse", this.newHouse);
      this.newHouse = {};
      $("#addHouseForm").modal("hide");
    },
  },

  components: {
    houseCard,
  },
};
</script>


<style scoped>
</style>