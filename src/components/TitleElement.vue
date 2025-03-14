<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'vue-title',
    props: ['title'],
    watch: {
        title: {
            immediate: true,
            handler() {
                document.title = this.title;
            }
        }
    },
    render() {
    },
})
</script>