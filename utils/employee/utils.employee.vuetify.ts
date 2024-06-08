
import { computed } from 'vue'
import { useDisplay } from "vuetify"

export function useWidthTable() {
    const { name } = useDisplay()

    const width = computed(() => {
        switch (name.value) {
            case 'xs': return 400
            case 'sm': return 620
            case 'md': return 950
            case 'lg': return 1168
        }
    })

    return width;
}