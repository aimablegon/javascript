// https://runebook.dev/ko/docs/phaser/phaser.game 참고

var game = new Phaser.Game(480, 320, Phaser.CANVAS, null, {
// Phaser.Game라는 새로운 객체 생성 후 game에 담는다.
//canvas의  (width 480픽셀, height 320픽셀, 렌더링 방법(auto, canvas, WEBGL 중 하나), 

  preload: preload, create: create, update: update
});


// 시작전 로드
function preload() {}

// 로드 후 생성(한번 실행)
function create() {}

// 모든 프레임에서 시작
function update() {}