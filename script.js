window.addEventListener('keydown', function(event){
  const key = event.keyCode
  const element = document.querySelectorAll(`[data-key="${key}"]`)
  console.log(element)
  const audio = element[1]
if (!audio) return 
audio.currentTime = 0
  audio.play()
  setTimeout(()=>{
    element[0].classList.toggle("playing")
  },500)
  element[0].classList.toggle("playing")
})