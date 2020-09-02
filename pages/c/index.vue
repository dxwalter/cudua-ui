<template>

</template>

<script>

export default {
    components: {
    },
    middleware: [
        function({ redirect }) {
           return redirect('/');
        },
    ],
}
</script>

