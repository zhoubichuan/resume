import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

export const cn_ZH = {
  resume: '个人简历',
  aboutMe: '关于我',
  frontEndSkill: '前端技能',
  worksShow: '作品展示',
  myExperience: '我的经历',
  linkMe: '联系我',
  leaveMessage: '留言板',
}
export const en_US = {
  resume: 'resume',
  aboutMe: 'about me',
  frontEndSkill: 'front end skill',
  worksShow: 'works show',
  myExperience: 'my experiece',
  linkMe: 'link me',
  leaveMessage: 'leave message',
}

const i18n = new VueI18n({
  locale: localStorage.getItem('lang') || 'cn_ZH', // 语言标识
  messages: {
    cn_ZH, // 中文语言包
    en_US, // 英文语言包
  },
})

export default i18n
