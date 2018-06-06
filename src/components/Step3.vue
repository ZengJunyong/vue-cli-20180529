<template>
  <div>
    <div class="text-center top-bar"><span @click="back()" class="carousel-control-prev-icon"></span>GaiGai</div>
    <img src="static/Fleek_Image_2.jpg" style="width: 100%;">
    <div class="p-3" style="font-size: 12px;">
      <p>
        As one of the largest offline dating agencies in Singapore, GaiGai offers an extensive database of quality
        clientele, experienced dating practitioners, engaging events and modern matching technology.
      </p>
      <p>
        Through varied channels and a personalised touch, GaiGai meaningfully connects singles from all walks of life.
      </p>
    </div>
    <div class="cta" @click="register()" style="background: #706ec8;">
      Register Your Interest
    </div>
    <div class="cta" @click="ignore()" style="background: #a1a2b3">
      I'm Not Interested
    </div>

    <b-modal ref="hold" title="Hold that thought!" ok-title="I'm Interested" cancel-title="Not Interested"
             @ok="register()">
      You might miss out on a chance to meet that special someone sooner! Also, you won’t be able to see this message
      again.
    </b-modal>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {
      register() {
        this.$router.push({name: 'Step2'})
      },
      ignore() {
        this.$refs.hold.show()
      }
    }
  }
</script>
