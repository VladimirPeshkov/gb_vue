<template>
  <div id="personal-costs">
    <h1 class="personal-costs-title">My personal costs</h1>
    <Add-cost-module :maxCostID="maxCostID" @addCost="addCostToCosts()"/>
    <Costs-table :costs="costs"/>
  </div>
</template>

<script>
  import AddCostModule from './components/AddCostModule.vue';
  import CostsTable from './components/Costs-table.vue'

  export default {

    name: 'Persona-costs',
    
    components: {
      AddCostModule,
      CostsTable
    },


    data(){
      return {
        costs: [],
        maxCostID: '',
      }
    },


    methods: {
      fetchData(){
        return [
          {
            id: '1',
            date: '28.03.2020',
            category: 'Food',
            value: '169'
          },
          {
            id: '2',
            date: '24.03.2020',
            category: 'Transport',
            value: '350'
          },
          {
            id: '3',
            date: '24.03.2020',
            category: 'Food',
            value: '530'
          },
        ]
      },

      getMaxId(){
        this.maxCostID = this.costs[this.costs.length - 1].id
      },

      addCostToCosts(cost){
        console.log(cost);
        this.costs = [...this.costs, cost]
      }
    },

    created() {
      this.costs = [...this.fetchData()];
      this.getMaxId();
    }
  }


</script>

<style>

</style>