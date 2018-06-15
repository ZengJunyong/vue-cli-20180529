import Vue from 'vue'

// https://www.cnblogs.com/itbainianmei/p/7826742.html
export default {
  sendPaktorProfile: () => {
    let {name, email, country, phone, imageConsultancy, dateCoaching} = $g
    let profile = {
      firstName: name,
      lastName: name,
      email,
      mobile: '+' + country + ' ' + phone,
      imageConsultancy: imageConsultancy.join(','),
      dateCoaching: dateCoaching.join(',')
    }
    Vue.http.post('http://letsgaigai.com/sendPaktorProfile', profile)
  }
}
