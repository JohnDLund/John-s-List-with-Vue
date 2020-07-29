<template>
  <div class="card m-3 p-3 bg-secondary text-white shadow border border-dark" style="width: 18rem;">
    <img
      class="card-img-top shadow border border-dark"
      :src="houseData.imgUrl"
      alt="Card image cap"
    />
    <div class="card-body">
      <h5 class="card-title">Price: {{houseData.price}}</h5>
      <p>Levels: {{houseData.levels}}</p>
      <p>Bedrooms: {{houseData.bedrooms}}</p>
      <p>Bathrooms: {{houseData.bathrooms}}</p>
      <p>Year: {{houseData.year}}</p>
    </div>
  </div>
</template>


<script>
export default {
  name: "houseCard",
  props: ["houseData"],
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {},
};
</script>


<style scoped>
</style>