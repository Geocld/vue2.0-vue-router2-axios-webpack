<template>
  <section class="page-date-edit">
    <input type="date" v-model="date">
    <button @click="pushData">commit</button>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        date: ''
      }
    },
    mounted () {
      this.date = this.$store.state.local_infos.date[0]
    },
    methods: {
      pushData () {
        this.$store.dispatch('SET_LOCAL_INFOS_DATE', [this.date]);
        this.$router.replace({name: 'vuex_test'});
      }
    }
  }
</script>
