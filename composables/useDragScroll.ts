import { useState } from '#app'
import type { Ref } from 'vue'

export const useDragScroll = (ref: Ref<HTMLDivElement>) => {


    onMounted(() => {
        let isDown = false;
        let startX: number;
        let scrollLeft: number;

        ref.value.addEventListener('mousedown', (e) => {
            isDown = true;
            ref.value.classList.add('active');
            startX = e.pageX - ref.value.offsetLeft;
            scrollLeft = ref.value.scrollLeft;
          });
          ref.value.addEventListener('mouseleave', () => {
            isDown = false;
            ref.value.classList.remove('active');
          });
          ref.value.addEventListener('mouseup', () => {
            isDown = false;
            ref.value.classList.remove('active');
          });
          ref.value.addEventListener('mousemove', (e) => {
            if(!isDown) return;
            e.preventDefault();
            const x = e.pageX - ref.value.offsetLeft;
            const walk = (x - startX) * 1.2; //scroll-fast
            ref.value.scrollLeft = scrollLeft - walk;
          });
    })

    return null
}