<template>
  <section class="page-edit">
    <div>
      <p>teacher:</p>
      <p>name: <input type="text" v-model="teacher_name"></p>
      <p>age: <input type="text" v-model="teacher_age"></p>
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
        teacher_name: '',
        teacher_age: ''
      }
    },
    mounted () {
      this.teacher_name = this.$store.state.local_infos.teacher.name;
      this.teacher_age = this.$store.state.local_infos.teacher.age;
    },
    methods: {
      pushData () {
        this.$store.dispatch('SET_LOCAL_INFOS_TEACHER', { name: this.teacher_name, age: this.teacher_age });
        this.$router.replace({name: 'vuex_test'});
      }
    }
  }
</script>
