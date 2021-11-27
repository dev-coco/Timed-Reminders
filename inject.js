$(document).ready(function () {
  newButton = `<button style="border:1px solid;padding:3px 12px;font-size:18px;line-height:1.5;border-radius:10px;color:#fff;margin:9px;background-color:#007bff;border-color:#007bff;bottom:auto;left:auto;right:240px;z-index:9999;position:fixed;" onclick="start()">开始</button>
  <script>
    function start () {
        function getRandom (n, m) {
          const num = Math.floor(Math.random() * (m - n + 1) + n)
          return num
        }
        const setTime = prompt('请设置时间，分钟单位。', '')
        const check = getRandom(0, 1)
        const p = window.document.getElementById('movie_player')
        p.setPlaybackQualityRange('hd1080')
        p.unMute()
        p.setVolume(100)
      
        if (setTime < 20) {
          setTimeout(function () {
            const speechInstance = new SpeechSynthesisUtterance('计时结束，请返回查看')
            speechSynthesis.speak(speechInstance)
          }, setTime * 60000)
        } else if (setTime >= 20 && setTime < 30) {
          const videoTime = getRandom(13, setTime - 5)
          if (check === '0') {
            setTimeout(function () {
              p.pauseVideo()
            }, videoTime * 60000)
      
            setTimeout(function () {
              p.playVideo()
            }, (videoTime + getRandom(2, 5)) * 60000)
      
            setTimeout(function () {
              const speechInstance = new SpeechSynthesisUtterance('计时结束，请返回查看')
              speechSynthesis.speak(speechInstance)
            }, setTime * 60000)
          } else if (check === '1') {
            setTimeout(function () {
              p.seekTo(p.getCurrentTime() + getRandom(-300, 240))
            }, videoTime * 60000)
      
            setTimeout(function () {
              const speechInstance = new SpeechSynthesisUtterance('计时结束，请返回查看')
              speechSynthesis.speak(speechInstance)
            }, setTime * 60000)
          }
        } else if (setTime >= 30) {
          const videoEarly = getRandom(12, 20)
          const videoLater = getRandom(20, setTime)
      
          setTimeout(function () {
            p.pauseVideo()
          }, videoEarly * 60000)
      
          setTimeout(function () {
            p.playVideo()
          }, (videoEarly + getRandom(2, 5)) * 60000)
      
          setTimeout(function () {
            p.seekTo(p.getCurrentTime() + getRandom(-360, 360))
          }, videoLater * 60000)
      
          setTimeout(function () {
            const speechInstance = new SpeechSynthesisUtterance('计时结束，请返回查看')
            speechSynthesis.speak(speechInstance)
          }, setTime * 60000)
        }
      }
  </script>`
    $('body').prepend(newButton)
})
