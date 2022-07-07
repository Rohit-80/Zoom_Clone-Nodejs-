
const videoGrid = document.getElementById('video-grid');
let myvideo = document.createElement('video');
let myvideoStream;

navigator.mediaDevices.getUserMedia({
    video:true,
    audio:true
}).then(stream =>{
    myvideoStream = stream;
    addVideoStream(myvideo,stream);
})


const addVideoStream = (video,stream) => {
    video.srcObject = stream;
    video.addEventListener('loadedmetadata',()=>{
        video.play();
    })
    videoGrid.append(video);
}

