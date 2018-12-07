import Sobel from 'sobel'

export const update = state => {
  var sobelData = Sobel(state.imageData)
  state.imageData.data.set(sobelData)
}
