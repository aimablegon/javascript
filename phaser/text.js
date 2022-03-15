// https://runebook.dev/ko/docs/phaser/phaser.game 참고

var game = new Phaser.Game(480, 320, Phaser.CANVAS, null, {
// Phaser.Game라는 새로운 객체 생성 후 game에 담는다.
//canvas의  (width 480픽셀, height 320픽셀, 렌더링 방법(auto, canvas, WEBGL 중 하나), 

  preload: preload, create: create, update: update
});

var ball; // ball 변수 선언
var paddle; // paddle 변수 선언


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
  // ball image 로드 image(key, value)

  game.load.image('paddle', 'img/paddle.png');
  // paddle image 로드 image(key, value)
}

// 로드 후 생성(한번 실행)
function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE);
  // Arcade Physics(물리시스템) 초기화 시키기

  game.physics.arcade.checkCollision.down = false;
  // 화면의 하단 가장자리와 공의 충돌을 비활성화

  // ball = game.add.sprite(50, 50, 'ball');
  // sprite(x좌표, y좌표, preload함수의 image에서 사용한key값과 같은것을 넣는다 <key:렌더링 되는 동안의텍스처 또는 이미지>)
  // x좌표: 50px, y좌표:50px에서 시작하는 'ball' 이라는 키워드을 ball변수에 담는다
  ball = game.add.sprite(game.world.width*0.5, game.world.height-25, 'ball');
  // x좌표: game.world(게임의 캔버스 전체 widht)*0.5 = 480*0.5 = 240
  // x좌표: game.world(게임의 캔버스 젙체 height)- 25 = 320 - 5 = 295
  // 240, 295에서 시작하는 'ball' 이라는 키워드을 ball변수에 담는다

  ball.anchor.set(0.5);
  // ball의 x축 포인터를 0.5로 설정
  // 마치 패들 위에서 시작하는 듯한 느깜
  
  game.physics.enable(ball, Phaser.Physics.ARCADE);
  // Arcade Physics(물리시스템)으로 변수ball 활성화 시키기

  // ball.body.velocity.set(150, 150);
  // 공의 속도 움직임 추가(x축, y축) => 한번 움직일때 x축으로 150, y축으로 150
  // 위의 코드 사용시 => update()의 ball.x, ball.y 삭제
  ball.body.velocity.set(150, -150);

  ball.body.collideWorldBounds = true;
  // body의 크기(캔버스의크기)를 벽으로 인식하게 한다 => 단 이것만 쓰면 벽에 두딪힌후 가장자리에서 구른다

  ball.body.bounce.set(1);
  // 가장자리에서 계속 머물지 않고 튕기게 하는 옵션

  ball.checkWorldBounds = true;
  // onOutOfBounds 이벤트를 실행하기 위해 필요한 필수 옵션
  
  ball.events.onOutOfBounds.add(function(){
    // ball에 onOutOfBounds 이벤트 추가 
    // onOutOfBounds => 영역 벗어났을때
      alert('Game over!');
      // 게임오버 
      location.reload();
      // 재실행
  }, this)



  paddle = game.add.sprite(game.world.width*0.5, game.world.height-5, 'paddle');
  // 캔버스의 크기가 480,320일 경우
  // x좌표: game.world(게임의 캔버스 전체 widht)*0.5 = 480*0.5 = 240
  // x좌표: game.world(게임의 캔버스 젙체 height)- 5 = 320 - 5 = 315
  // 240픽셀, 315픽셀에서 시작하는 'paddle'이라는 키워드를 paddle 변수에 담는다

  paddle.anchor.set(0.5,1);
  // paddle의 sprite 위치 설정
  // 스프라이트의 포인트를 설정합니다. 
  // 예를 들어 앵커를 0,0으로 설정하면 스프라이트의 왼쪽 위 모서리에 위치 지정이 적용됩니다. 
  // 앵커를 0.5,0.5로 설정하면 스프라이트 중간에 위치가 적용됩니다.

  game.physics.enable(paddle, Phaser.Physics.ARCADE);
  // Arcade Physics(물리시스템)으로 변수paddle 활성화 시키기

  paddle.body.immovable = true;
  // paddle을 immovable(움직이지 않겠다는) 옵션
  
}

// 모든 프레임에서 시작
function update() {
  // ball.x += 1;
  // // ball의 x 값에 1씩 추가 한다
  // ball.y += 1;
  // // ball의 y 값에 1씩 추가 한다

  game.physics.arcade.collide(ball, paddle);
  // collide는 충돌감지 함수
  // ball과 paddle의 충돌 간지를 알고 싶을 때 사용

  // paddle.x = game.input.x;
  // input으로 마우스, 터치 옵션을 받을 수 있다
  // input의 x 값을 paddle의 x값에 담는다
  paddle.x = game.input.x || game.world.width*0.5;
  // input의 x 값 또는 캔버스의 width값의 50%일 떄 addle의 x값에 담는다
}