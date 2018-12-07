export const run = (state, { domRoot, io }) => {
  io.canvas = document.createElement('canvas')
  io.ctx = io.canvas.getContext('2d')
  domRoot.appendChild(io.canvas)
}

export const update = (state, { io }) => {
  const { canvas, ctx, imageData } = io
  const { width, height } = state.vcanvas
  if(canvas.width !== width || canvas.height !== height){
    canvas.width = width
    canvas.height = height
  }
	ctx.putImageData(imageData,0,0)
}
