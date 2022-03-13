// https://runebook.dev/ko/docs/phaser/phaser.game 참고

var game = new Phaser.Game(480, 320, Phaser.CANVAS, null, {
// Phaser.Game라는 새로운 객체 생성 후 game에 담는다.
//canvas의  (width 480픽셀, height 320픽셀, 렌더링 방법(auto, canvas, WEBGL 중 하나), 

  preload: preload, create: create, update: update
});

var ball; // ball 변수 선언

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

  game.stage.backgroundColor = '#eee';
  // canvas의 백그라운드 컬러값을 eee로 바꾼다

  game.load.image('ball', 'img/ball.png');
  // image 로드 image(key, value)

}

// 로드 후 생성(한번 실행)
function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE);
  // Arcade Physics(물리시스템) 초기화 시키기

  ball = game.add.sprite(50, 50, 'ball');
  // sprite(x좌표, y좌표, preload함수의 image에서 사용한key값과 같은것을 넣는다 <key:렌더링 되는 동안의텍스처 또는 이미지>)
  
  game.physics.enable(ball, Phaser.Physics.ARCADE);
  // Arcade Physics(물리시스템)으로 공 활성화 시키기

  ball.body.velocity.set(150, 150);
  // 공의 속도 움직임 추가(x축, y축) => 한번 움직일때 x축으로 150, y축으로 150
  // 위의 코드 사용시 => update()의 ball.x, ball.y 삭제

  ball.body.collideWorldBounds = true;
  // body의 크기(캔버스의크기)를 벽으로 인식하게 한다 => 단 이것만 쓰면 벽에 두딪힌후 가장자리에서 구른다

  ball.body.bounce.set(1);
  // 가장자리에서 계속 머물지 않고 튕기게 하는 옵션

}

// 모든 프레임에서 시작
function update() {
  // ball.x += 1;
  // // ball의 x 값에 1씩 추가 한다
  // ball.y += 1;
  // // ball의 y 값에 1씩 추가 한다
}