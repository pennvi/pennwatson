
function setupVideos() {
  for (const video of document.querySelectorAll('video')) {
    video.controls = false
    video.addEventListener('mouseover', () => { video.controls = 'controls' })
    video.addEventListener('mouseout', () => { video.controls = false })
  }
}
window.addEventListener('load', setupVideos, false)
