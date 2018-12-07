
export const update = (state, { iteration }) => {
  const d = state.imageData.data
  for(var i=0;i<d.length;i+=4){
   	d[i+1] = (Math.sin(iteration / 10) + 1) / 2 * 155
  }
}
