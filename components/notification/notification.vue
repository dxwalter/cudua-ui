<template>
        <transition v-on:enter="enter" v-on:leave="leave">
            <notifications group="All" classes="vue-notification" style="position:absolute" animation-type="velocity"  id="notificationToast" />
        </transition>
</template>

<script>
export default {
    data: function () {
        return {
            element: "",
              leave: {
                height: 0,
                opacity: 0
            }
        }
    },
    methods: {
        enter () {
            /*
            *  "element" - is a notification element
            *    (before animation, meaning that you can take it's initial height, width, color, etc)
            */
            let height = this.element.clientHeight

            return {
                // Animates from 0px to "height"
                height: [height, 0],

                // Animates from 0 to random opacity (in range between 0.5 and 1)
                opacity: [Math.random() * 0.5 + 0.5, 0]
            }  
        },
    },
    mounted () {
        this.element = document.getElementById('notificationToast')
    }
}
</script>

<style>

</style>