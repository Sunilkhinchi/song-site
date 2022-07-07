// initialize the varibles

let songIndex = 0;
let audioElement = new Audio("1.mp3");

let masterPlay = document.getElementById("masterPlay");

let myProgressBar = document.getElementById("myProgressBar");

let gif = document.getElementById("gif");

let songItems = Array.from(document.getElementsByClassName("songItem"));

let songItemPlay = Array.from(document.getElementsByClassName("songItemPlay"));

let masterSongName = document.getElementById("masterSongName");

let songs = [
  {
    songName: "songs no.1",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "songs no.2",
    filePath: "songs/2.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songName: "songs no.3",
    filePath: "songs/3.mp3",
    coverPath: "covers/3.jpg",
  },
  {
    songName: "songs no.4",
    filePath: "songs/4.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    songName: "songs no.5",
    filePath: "songs/5.mp3",
    coverPath: "covers/5.jpg",
  },
  {
    songName: "songs no.6",
    filePath: "songs/6.mp3",
    coverPath: "covers/6.jpg",
  },
  {
    songName: "songs no.7",
    filePath: "songs/7.mp3",
    coverPath: "covers/7.jpg",
  },
  {
    songName: "songs no.8",
    filePath: "songs/8.mp3",
    coverPath: "covers/8.jpg",
  },
  {
    songName: "songs no.9",
    filePath: "songs/9.mp3",
    coverPath: "covers/9.jpg",
  },
  {
    songName: "songs no.10",
    filePath: "songs/10.mp3",
    coverPath: "covers/10.jpg",
  },
];

songItems.forEach((element, i) => {
  // console.log(element, i)
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
  element.getElementsByClassName("songlistplay");
});

// audioElement.play();

// handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.add("fa-play-circle");
    masterPlay.classList.remove("fa-pause-circle");
    gif.style.opacity = 0;
  }
});

//listen to Events

audioElement.addEventListener("timeupdate", () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
  // console.log(progress);
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllplays = (e) => {
  songItemPlay.forEach((element) => {
    element.classList.add("fa-play-circle");
    element.classList.remove("fa-pause-circle");
  });
};

songItemPlay.forEach((element) => {
  element.addEventListener("click", (e) => {
    // console.log(element);
    let listElement = element;
    // makeAllplays();
    songIndex = parseInt(e.target.id);
    console.log(songIndex);
    // e.target.classList.add("fa-pause-circle");
    // e.target.classList.remove("fa-play-circle");
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    console.log(
      "aman check",
      listElement.classList,
      listElement.classList.contains("fa-pause-circle")
    );
    if (
      listElement.classList.contains("fa-play-circle") &&
      !listElement.classList.contains("fa-pause-circle")
      //    ||
      //   audioElement.currentTime == 0
    ) {
      let allEl = document.querySelectorAll(".songItemPlay");
      allEl.forEach((allElements) => {
        if (allElements.classList.contains("fa-pause-circle")) {
          allElements.classList.remove("fa-pause-circle");
          allElements.classList.add("fa-play-circle");
        }
      });

      audioElement.play();
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
      listElement.classList.add("fa-pause-circle");
      listElement.classList.remove("fa-play-circle");
      gif.style.opacity = 1;
    } else if (
      listElement.classList.contains("fa-pause-circle") &&
      !listElement.classList.contains("fa-play-circle")
    ) {
      listElement.classList.remove("fa-pause-circle");
      listElement.classList.add("fa-play-circle");
      audioElement.pause();
      masterPlay.classList.add("fa-play-circle");
      masterPlay.classList.remove("fa-pause-circle");
      gif.style.opacity = 0;
    }
    // audioElement.play();
    // masterPlay.classList.remove("fa-play-circle");
    // masterPlay.classList.add("fa-pause-circle");
    // gif.style.opacity = 1;
  });
});

// document.getElementById("next").addEventListener("click", () => {
//   if (songIndex >= 9) {
//     songIndex = 0;
//   } else {
//     songIndex += 1;
//   }
//   makeAllplays();
//   audioElement.src = `songs/${songIndex + 1}.mp3`;
//   masterSongName.innerText = songs[songIndex].songName;
//   audioElement.currentTime = 0;
//   masterPlay.classList.remove("fa-play-circle");
//   masterPlay.classList.add("fa-pause-circle");
//   gif.style.opacity = 1;
// });

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }

  makeAllplays();
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
  gif.style.opacity = 1;
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }

  makeAllplays();
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
  gif.style.opacity = 1;
});
