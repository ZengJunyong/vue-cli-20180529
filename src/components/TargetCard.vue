<template>
  <div>
    <div v-if="which == 0">
      <img style="width: 100%;" src="/static/TC_4.jpg" alt="">
      <div class="fixed-bottom p-3 _1">
        [Name], meet someone who is specially picked for you.
        <br>
        <div class="fs12">
          Swipe right to find out more now
        </div>
      </div>
    </div>
    <div v-if="which == 1">
      <img style="width: 100%;" src="/static/TC_2.jpg" alt="">
      <div style="position: absolute;height: 100%;top: 0;width: 100%;padding: 15px;color:#706EC8;">
        <div style="border: 1px solid #706EC8;height: 100%;position: relative;">
          <div class="p-3" style="position: absolute;bottom: 0px;">
            [Name], go 1-on-1 dating!
            <br>
            <div class="fs12">Get an exclusive match today! </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="which == 2">
      <img style="width: 100%;" src="/static/Group2.jpg" alt="">
      <div class="fixed-top p-3 _2">
        [Name], try offline dating?
        <br>
        <div class="fs12">
          Swipe right, to find out more
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    computed: {
      which(){
        return Math.floor(Math.random()*3)
      }
    },
    methods: {}
  }
</script>

<style scoped>
  ._1,._2 {
    color: white;
    font-size: 15px;
  }

  ._1{
    background: #0000008a;
  }

  .fs12 {
    padding-top: 6px;
    font-size: 12px;
  }
</style>
