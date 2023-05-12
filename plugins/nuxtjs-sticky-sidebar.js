// plugins/nuxtjs-sticky-sidebar.js
import Vue from 'vue'
import StickySidebar from 'sticky-sidebar'

let isMobile = window.innerWidth <= 870

Vue.directive('sticky-sidebar', {
  bind(el, binding, vnode) {
    if (isMobile) return
    vnode.context.$nextTick(() => {
      new StickySidebar(el, binding.value || {})
    })
  },
  update(el, binding, vnode) {
    if (isMobile) return
    vnode.context.sidebar?.updateSticky()
  },
  unbind(el, binding, vnode) {
    vnode.context.sidebar?.destroy()
  },
})
