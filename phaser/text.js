// https://runebook.dev/ko/docs/phaser/phaser.game 참고

var game = new Phaser.Game(480, 320, Phaser.CANVAS, null, {
// Phaser.Game라는 새로운 객체 생성 후 game에 담는다.
//canvas의  (width 480픽셀, height 320픽셀, 렌더링 방법(auto, canvas, WEBGL 중 하나), 

  preload: preload, create: create, update: update
});


// 시작전 로드
function preload() {
  // scale => canvas의 화면 크기 조절

  game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  // scaleMode = 크기 조절 옵션
  // NO_SCALE(아무것도 조정 안함) / EXACT_FIT(모든 공간 채움) / SHOW_ALL(비율 유지 하면서 크기 조절)
  // RESIZE(사용가능한 너비와 높이와 동일하게 ) / USER_SCALE (사용자 정의, 난 못하겠다 ㅋㅋㅋㅋ)
 
  game.scale.pageAlignHorizontally = true;
  // pageAlignHorizontally= ture 일 때, 상위 컨테이너에서 수평으로 정렬

  game.scale.pageAlignVertically = true;
   // pageAlignVertically= ture 일 때, 상위 컨테이너에서 수직으로 정렬

  game.stage.backgroundColor = '#eee'
  // canvas의 백그라운드 컬러값을 eee로 바꾼다

}

// 로드 후 생성(한번 실행)
function create() {}

// 모든 프레임에서 시작
function update() {}