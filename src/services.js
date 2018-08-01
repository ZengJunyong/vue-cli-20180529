import Vue from 'vue'

// https://www.cnblogs.com/itbainianmei/p/7826742.html
export default {
  sendPaktorProfile: () => {
    let {name, email, country, phone, imageConsultancy, dateCoaching, token} = $g
    let profile = {
      firstName: name,
      lastName: name,
      email,
      mobile: '+' + country + ' ' + phone,
      imageConsultancy: imageConsultancy.join(','),
      dateCoaching: dateCoaching.join(','),
      accessToken: token
    }
    Vue.http.post('https://letsgaigai.com/sendPaktorProfile', profile)
  },
  unsubscribePaktorProfile: () => {
    Vue.http.post('https://letsgaigai.com/unsubscribePaktorProfile', {accessToken: $g.token})
  }
}
