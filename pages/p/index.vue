<template>

</template>

<script>

export default {
    components: {
    },
    middleware: [
        function({ redirect }) {
            redirect('/');
        },
    ],
}
</script>

