<template>
  <div class="crypto">
    <table>
      <tr>
        <td>Pair</td>
        <td>Bid</td>
        <td>Ask</td>
      </tr>
      <tr v-for="(item, name) in cryptoList" :key="name">
        <td>{{item.name}}</td>
        <td>{{item.bid}}</td>
        <td>{{item.ask}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'CryptoList',
  data: function(){
    return {
      updateTime: 15000,
      intervalId: 0,
      pairs: [
        "XXBTZUSD",
        "XREPZUSD",
        "ADAUSD",
        "DAIUSD",
        "XETHZUSD",
      ]
    }
  },
  methods: {
    autoUpdate (){
      if(this.intervalId !== 0) return;
      this.intervalId = setInterval(() => {
        this.$store.dispatch('getCriptoFromKraken', this.pairs);
      }, this.updateTime);
    }
  },
  computed: {
    cryptoList (){
      return this.$store.getters['getItems'];
    },
  },
  created() {
    this.$store.dispatch('getCriptoFromKraken', this.pairs);
    this.autoUpdate();
  },
}
</script>

<style scoped>
table{
  width: 500px;
  border-collapse:collapse;
  margin: 50px auto;
}
tr:first-child, td:first-child{
  font-weight: bold;
}
td{
  border: 1px solid black;
  border-spacing: 0;
  height: 30px;
}
</style>
