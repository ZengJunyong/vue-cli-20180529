<template>
  <div>
    <div class="text-center top-bar">
      <img src="static/back.png" @click="cancel()" alt="">
      GaiGai
    </div>
    <div class="text-center title">Image Consultancy</div>
    <b-carousel
      controls
      :interval="0"
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
    <div class="p-4">
      <template v-for="(o, index) in optionsImageConsultancy">
        <input type="checkbox" :id="'optionsImageConsultancy' +index" :value="o" v-model="g.imageConsultancy">
        <label :for="'optionsImageConsultancy' + index" :class="{'badge-yes': g.imageConsultancy.indexOf(o)!=-1}"
               class="badge">{{o}}</label>
      </template>
    </div>
    <div class="text-center title">Date Coaching</div>
    <b-carousel
      controls
      :interval="0"
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
    <div class="p-4">
      <template v-for="(o, index) in optionsDateCoaching">
        <input type="checkbox" :id="'optionsDateCoaching' +index" :value="o" v-model="g.dateCoaching">
        <label :for="'optionsDateCoaching' + index" :class="{'badge-yes': g.dateCoaching.indexOf(o)!=-1}" class="badge">{{o}}</label>
      </template>
    </div>
    <div class="cta" @click="ok()" style="background: #706ec8;">
      Register Your Interest
    </div>
    <div class="cta" @click="ignore()" style="background: #a1a2b3;">
      I'm Not Interested
    </div>
    <b-modal ref="hold" :title="'Hold that thought! ' + g.name" ok-title="I'm Interested" cancel-title="Not Interested"
             @ok="ok()" @cancel="cancel()">
      You might miss out on a chance to meet that special someone sooner! Also, you won’t be able to see this message
      again.
    </b-modal>
  </div>
</template>

<script>
  // http://localhost:8080/#/?name=Yong&email=yong@gopaktor.com&country=86&phone=15873157653&token=EAAIbG96t1IYBAOw5Sf4r8ZAtTCSgoXUMmhucM2bH4vx1dXpnyDGEsxdMwcSsNCQqHhCiZATPw7MmRu5BoDYsKsdSYMEgG4lpMFqihxL6JBW697Hf2SS2tFPVCKssP6IiDwmYrKjKfvJGnHIihz2E9VehjDqETW2yftH9ssT9MGZA5i6oYRBT3p6jZCvKS9CggUfsZBBIhC5gUcqZCdD5nGZCrrGnDEQhoxHQ7FiyZCThVwZDZD
  // https://static.gopaktor.com/cards/card_offline_signup_201808/index.html#/?name=Yong&email=yong%40gopaktor.com&country=86&phone=15873157653&token=EAAIbG96t1IYBAOw5Sf4r8ZAtTCSgoXUMmhucM2bH4vx1dXpnyDGEsxdMwcSsNCQqHhCiZATPw7MmRu5BoDYsKsdSYMEgG4lpMFqihxL6JBW697Hf2SS2tFPVCKssP6IiDwmYrKjKfvJGnHIihz2E9VehjDqETW2yftH9ssT9MGZA5i6oYRBT3p6jZCvKS9CggUfsZBBIhC5gUcqZCdD5nGZCrrGnDEQhoxHQ7FiyZCThVwZDZD
  // http://192.168.1.102:8080/#/?name=Yong&email=yong@gopaktor.com&token=EAAIbG96t1IYBAOw5Sf4r8ZAtTCSgoXUMmhucM2bH4vx1dXpnyDGEsxdMwcSsNCQqHhCiZATPw7MmRu5BoDYsKsdSYMEgG4lpMFqihxL6JBW697Hf2SS2tFPVCKssP6IiDwmYrKjKfvJGnHIihz2E9VehjDqETW2yftH9ssT9MGZA5i6oYRBT3p6jZCvKS9CggUfsZBBIhC5gUcqZCdD5nGZCrrGnDEQhoxHQ7FiyZCThVwZDZD
  // https://static.gopaktor.com/cards/card_offline_signup_201808/index.html#/?name=Yong&email=yong@gopaktor.com&token=xxx
  // https://static.gopaktor.com/cards/card_offline_signup_201808/index.html#/?name=Yong&email=yong@gopaktor.com&token=EAAIbG96t1IYBAOw5Sf4r8ZAtTCSgoXUMmhucM2bH4vx1dXpnyDGEsxdMwcSsNCQqHhCiZATPw7MmRu5BoDYsKsdSYMEgG4lpMFqihxL6JBW697Hf2SS2tFPVCKssP6IiDwmYrKjKfvJGnHIihz2E9VehjDqETW2yftH9ssT9MGZA5i6oYRBT3p6jZCvKS9CggUfsZBBIhC5gUcqZCdD5nGZCrrGnDEQhoxHQ7FiyZCThVwZDZD
  import services from '../services'

  export default {
    data() {
      return {
        g: $g, // IMPORTANT: can't use $g as the key!
        optionsImageConsultancy: [
          'Personal Shopping',
          'Personal Grooming',
          'Doll Up for Your Date',
          'Personal Capsule',
          'Wardrobe Audit',
          'Silhouette & Colour Talk',
        ],
        optionsDateCoaching: [
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
    mounted() {
      let {name, email, phone, country, token} = this.$route.query
      if (name) {
        $g.name = name
      }
      if (email) {
        $g.email = email
      }
      if (country) {
        $g.country = country
      } else {
        $g.country = '65' // SG
      }
      if (phone) {
        $g.phone = phone
      }
      if (token) {
        $g.token = token
      }
    },
    methods: {
      ok() {
        this.$router.push({name: 'Step2'})
      },
      cancel() {
        services.unsubscribePaktorProfile().then((res) => {
          document.location = 'http://overlay-close/'
        })
      },
      ignore() {
        this.$refs.hold.show()
      }
    }
  }
</script>
