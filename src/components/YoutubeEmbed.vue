<template>
  <div ref="player" class="youtube-player"></div>
</template>

<script>
import { useYouTubePlayer } from '@vueuse/core'

export default {
  props: {
    videoId: String,
    width: {
      type: Number,
      default: 560
    },
    height: {
      type: Number,
      default: 315
    }
  },
  setup(props) {
    const { player } = useYouTubePlayer({
      element: ref(null),
      videoId: props.videoId,
      playerVars: {
        autoplay: 0,
        controls: 1
      }
    })

    return { player }
  }
}
</script>