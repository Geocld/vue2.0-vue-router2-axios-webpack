<template>
  <section class="page-edit">
    <div>
      <p>student:</p>
      <p>name: <input type="text" v-model="student_name"></p>
      <p>age: <input type="text" v-model="student_age"></p>
    </div>

    <button @click="pushData">commit</button>
  </section>
</template>

<style scoped>
  .page-edit input { border: 1px solid #eee; height: 18px; line-height: 18px; }
</style>

<script>
  export default {
    data() {
      return {
        student_name: '',
        student_age: ''
      }
    },
    mounted () {
      this.student_name = this.$store.state.local_infos.student.name;
      this.student_age = this.$store.state.local_infos.student.age;
    },
    methods: {
      pushData () {
        this.$store.dispatch('SET_LOCAL_INFOS_STUDENT', { name: this.student_name, age: this.student_age });
        this.$router.replace({name: 'vuex_test'});
      }
    }
  }
</script>
