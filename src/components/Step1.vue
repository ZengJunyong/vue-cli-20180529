<template>
  <div>
    <div class="text-center top-bar"><span class="carousel-control-prev-icon"></span>GaiGai</div>
    <div class="text-center title">Image Consultancy</div>
    <b-carousel
      controls
      :interval="3000"
    >
      <b-carousel-slide img-src="static/Image_Coaching_1.jpg">
      </b-carousel-slide>
      <b-carousel-slide img-src="static/Image_Coaching_2.jpg">
      </b-carousel-slide>
      <b-carousel-slide img-src="static/Image_Coaching_3.jpg">
      </b-carousel-slide>
      <b-carousel-slide img-src="static/Image_Coaching_4.jpg">
      </b-carousel-slide>
    </b-carousel>
    <div class="p-3">
      <span class="badge badge-yes">Personal Shopping</span>
      <span class="badge badge-no">Personal Grooming</span>
      <span class="badge badge-no">Doll Up for Your Date</span>
      <span class="badge badge-no">Personal Capsule</span>
      <span class="badge badge-no">Wardrobe Audit</span>
      <span class="badge badge-no">Silhouette & Colour Talk</span>
    </div>
    <div class="text-center title">Date Coaching</div>
    <b-carousel
      controls
      :interval="3000"
    >
      <b-carousel-slide img-src="static/Fleek_Image_1.jpg">
      </b-carousel-slide>
      <b-carousel-slide img-src="static/Fleek_Image_2.jpg">
      </b-carousel-slide>
      <b-carousel-slide img-src="static/Fleek_Image_3.jpg">
      </b-carousel-slide>
      <b-carousel-slide img-src="static/Fleek_Image_4.jpg">
      </b-carousel-slide>
      <b-carousel-slide img-src="static/Fleek_Image_5.jpg">
      </b-carousel-slide>
      <b-carousel-slide img-src="static/Fleek_Image_6.jpg">
      </b-carousel-slide>
      <b-carousel-slide img-src="static/Fleek_Image_7.jpg">
      </b-carousel-slide>
      <b-carousel-slide img-src="static/Fleek_Image_8.jpg">
      </b-carousel-slide>
    </b-carousel>
    <div class="p-3">
      <span class="badge badge-yes">Body Language</span>
      <span class="badge badge-no">Art of Socialising</span>
      <span class="badge badge-no">Confidence Building</span>
      <span class="badge badge-no">Art of Conversation</span>
      <span class="badge badge-no">Art of Flirting & Texting</span>
      <span class="badge badge-no">Date Analysis</span>
      <span class="badge badge-no">Psyche of Yourself</span>
    </div>
    <div class="cta" @click="register()" style="background: #706ec8;">
      Register Your Interest
    </div>
    <div class="cta" @click="ignore()" style="background: #a1a2b3">
      I'm Not Interested
    </div>
    <b-modal ref="hold" title="Hold that thought!" ok-title="I'm Interested" cancel-title="Not Interested"
      @ok="register()">
      You might miss out on a chance to meet that special someone sooner! Also, you won’t be able to see this message again.
    </b-modal>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    methods: {
        register () {
          this.$router.push({name: 'Step2'})
        },
        ignore(){
          this.$refs.hold.show()
        }
    }
  }
</script>
