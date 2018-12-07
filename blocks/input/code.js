export const run = (state, { domRoot }) => {
  state.video = document.createElement('video')
  state.vcanvas = document.createElement('canvas')
  state.vctx = state.vcanvas.getContext('2d')
  domRoot.appendChild(state.video)
 
  navigator.mediaDevices.getUserMedia({ video: { width: domRoot.clientWidth } })
		.then(function(stream) {
			state.video.srcObject = stream
  		state.video.addEventListener('loadedmetadata', function(e){
				state.vcanvas.width = state.video.videoWidth
 				state.vcanvas.height = state.video.videoHeight
        state.video.play()
        state.video.style.display = 'none';
  		})
		})
}

export const update = state => {
	state.vctx.drawImage(state.video, 0, 0, state.vcanvas.width, state.vcanvas.height)
  state.imageData = state.vctx.getImageData(0, 0, state.vcanvas.width, state.vcanvas.height)  
}
