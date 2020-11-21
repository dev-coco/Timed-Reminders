var set_time = prompt("请设置时间，分钟单位。", "");
    setTimeout(function() {
        let speechInstance = new SpeechSynthesisUtterance('计时结束，请返回查看');
        speechSynthesis.speak(speechInstance);
    }, set_time * 60 + "000");
