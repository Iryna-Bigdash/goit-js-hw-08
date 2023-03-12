import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeEl = document.querySelector('#vimeo-player');
const player = new Player(iframeEl);

player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
  }, 1000)
);
currentTimeFn();

function currentTimeFn() {
  const array = JSON.parse(localStorage.getItem('videoplayer-current-time'));
  if (array) {
    const currentTime = array['seconds'];
    player.setCurrentTime(currentTime);
  }
}
