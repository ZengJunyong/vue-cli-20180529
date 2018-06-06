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
      <template v-for="(o, index) in options" v-if="index<6">
        <input type="checkbox" :id="'a' +index" :value="o" v-model="keywords">
        <label :for="'a' + index" :class="{'badge-yes': keywords.indexOf(o)!=-1}" class="badge">{{o}}</label>
      </template>
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
      <template v-for="(o, index) in options" v-if="index>=6">
        <input type="checkbox" :id="'a' +index" :value="o" v-model="keywords">
        <label :for="'a' + index" :class="{'badge-yes': keywords.indexOf(o)!=-1}" class="badge">{{o}}</label>
      </template>
    </div>
    <div class="cta" @click="ok()" style="background: #706ec8;">
      Register Your Interest
    </div>
    <div class="cta" @click="ignore()" style="background: #a1a2b3">
      I'm Not Interested
    </div>
    <b-modal ref="hold" title="Hold that thought!" ok-title="I'm Interested" cancel-title="Not Interested"
             @ok="ok()" @cancel="cancel()">
      You might miss out on a chance to meet that special someone sooner! Also, you won’t be able to see this message
      again.
    </b-modal>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        keywords: [],
        options: [
          'Personal Shopping',
          'Personal Grooming',
          'Doll Up for Your Date',
          'Personal Capsule',
          'Wardrobe Audit',
          'Silhouette & Colour Talk',

          'Body Language',
          'Art of Socialising',
          'Confidence Building',
          'Art of Conversation',
          'Art of Flirting & Texting',
          'Date Analysis',
          'Psyche of Yourself',
        ]
      }
    },
    methods: {
      ok() {
        this.$router.push({name: 'Step2'})
      },
      cancel() {
        document.location = 'http://overlay-close/'
      },
      ignore() {
        this.$refs.hold.show()
      }
    }
  }
</script>
