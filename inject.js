$(document).ready(function() {
    new_button = `
    <button style="border:1px solid;padding:3px 12px;font-size:18px;line-height:1.5;border-radius:10px;color:#fff;margin:9px;background-color:#007bff;border-color:#007bff;bottom:auto;left:auto;right:240px;z-index:9999;position:fixed;" onclick="start()">开始</button>
    <script>
    function start() {
        function getRandom(n, m) {
            var num = Math.floor(Math.random() * (m - n + 1) + n);
            return num;
        }
        var set_time = prompt("请设置时间，分钟单位。", "");
        var true_false = getRandom(0, 1);
        var p = window.document.getElementById("movie_player");
        p.setPlaybackQualityRange('hd1080');
        p.unMute();
        p.setVolume(100);

        if (set_time < 20) {
            setTimeout(function() {
                let speechInstance = new SpeechSynthesisUtterance('计时结束，请返回查看');
                speechSynthesis.speak(speechInstance);
            }, set_time * 60 + "000");
        }
        
        else if (set_time >= 20 && set_time < 30) {
            var video_time = getRandom(13, set_time - 5);
            if (true_false == "0") {
        
                setTimeout(function() {
                    p.pauseVideo();
                }, video_time * 60 + "000");
        
                setTimeout(function() {
                    p.playVideo();
                }, (video_time + getRandom(2, 5)) * 60 + "000");
        
                setTimeout(function() {
                    let speechInstance = new SpeechSynthesisUtterance('计时结束，请返回查看');
                    speechSynthesis.speak(speechInstance);
                }, set_time * 60 + "000");
            }
            else if (true_false == "1") {
                setTimeout(function() {
                    p.seekTo(p.getCurrentTime() + getRandom(-300, 240));
                }, video_time * 60 + "000");
        
                setTimeout(function() {
                    let speechInstance = new SpeechSynthesisUtterance('计时结束，请返回查看');
                    speechSynthesis.speak(speechInstance);
                }, set_time * 60 + "000");
            }
        }
        else if (set_time >= 30) {
            var video_early = getRandom(12, 20);
            var video_later = getRandom(20, set_time);
        
            setTimeout(function() {
                p.pauseVideo();
            }, video_early * 60 + "000");
        
            setTimeout(function() {
                p.playVideo();
            }, (video_early + getRandom(2, 5)) * 60 + "000");
        
            setTimeout(function() {
                p.seekTo(p.getCurrentTime() + getRandom(-360, 360));
            }, video_later * 60 + "000");
        
            setTimeout(function() {
                let speechInstance = new SpeechSynthesisUtterance('计时结束，请返回查看');
                speechSynthesis.speak(speechInstance);
            }, set_time * 60 + "000");
        }
    }
    </script>
    `;
    $("body").prepend(new_button);
});
