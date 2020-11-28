const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
    try {
        // Prompt to select a media stream to be recorded
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        // Pass to video element
        videoElement.srcObject = mediaStream; //set src of videoElement to the mediaStream
        // Once the stream is loaded (.onloadedmetadata) play the video
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        console.log('error selecting the media stream',error);
    }
}

// Button click event for starting Picture in Picture 
button.addEventListener('click', async () => {
    // Disable button
    button.disabled = true;
    // Display video in Picture in Picture mode
    await videoElement.requestPictureInPicture();
    // Reset the button once Picture in Picture has started
    button.disabled = false;
});

// On load
selectMediaStream();