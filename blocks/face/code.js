import '@tensorflow/tfjs-node'
import * as canvas from 'canvas'
import * as faceapi from 'face-api.js'

const { Canvas, Image, ImageData } = canvas
faceapi.env.monkeyPatch({ Canvas, Image, ImageData })

export const run = async state => {
  const MODEL_LOC = '/Volumes/Disco/Users/mattway/workspaces/webcam/blocks/face/weights/'
  await faceapi.nets.ssdMobilenetv1.loadFromDisk(MODEL_LOC)
}

export const update = state => {
  let fullFaceDescriptions = faceapi.detectAllFaces(state.vcanvas)//.withFaceLandmarks().withFaceDescriptors()
  
}
