export const update = (state, { io }) => {
  const d = state.imageData.data
  for(var i=0;i<d.length;i+=4){
    
  	d[i+io.pixel] = Math.random() * 255
  }
}
