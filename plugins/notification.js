import Vue from 'vue';
import Notifications from 'vue-notification/dist/ssr.js'
import velocity from 'velocity-animate';

Vue.use(Notifications, { velocity })

export default ({app}, inject) => {

    let showNotification = (dataObject) => {
        
        Vue.notify({
            group: 'All',
            position: 'top right',
            type: dataObject.type,
            title: dataObject.title,
            text: dataObject.text,
            duration: -1,
            speed: 300,
            duration: 3000,
            animation: {enter: {opacity: [1, 0]}, leave: {opacity: [0, 1]}}
        })
    }

    inject("showNotification", showNotification);

    let showToast = (string, type) => {
        let options = {
            position: 'bottom-center',
            duration: 10000,
            keepOnHover: true,
            type: type
        }
        app.$toast.show( string, options) 
    }

    inject("showToast", showToast);
}