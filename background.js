chrome.runtime.onMessageExternal.addListener(function (message, sender, sendResponse) {
  reminder(message)
  return true
})

function reminder (setTime) {
  setTimeout(function () {
    const speechInstance = new SpeechSynthesisUtterance('计时结束，请返回查看')
    speechSynthesis.speak(speechInstance)
  }, setTime * 60000)
}