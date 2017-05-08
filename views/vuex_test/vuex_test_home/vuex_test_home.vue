<template>
  <section class="page-vuex-test">
    <div class="infos">
      {{ $store.state.local_infos }}
    </div>

    <button @click="$router.push({name: 'vuex_student_edit'})">edit student</button>
    <button @click="$router.push({name: 'vuex_teacher_edit'})">edit teacher</button>
    <button @click="$router.push({name: 'vuex_date_edit'})">edit date</button>

  </section>
</template>

