'use strict';

//이 파일은 Nuxt.js 프론트엔드의 일부 편의 기능을 구현하기 위해 사용됩니다.
//Nuxt.js 프레임워크를 사용하지는 없으니 혼동 없으시길 바랍니다.

document.addEventListener('keydown', (e) => {
  if(e.code === 'keyF'){
    location.href = '/'; //프론트엔드에서 대문 주소를 넘겨받는 기능이 없음
  }
});
