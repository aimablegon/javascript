var game = new Phaser.Game(480, 320, Phaser.CANVAS, null, {
  preload: preload, create: create, update: update
});

var ball;

function preload() {
  game.scale.scaleMode = Phaser.ScaleManager.NO_SCALE;
  game.scale.pageAlignHorizontally = true;
  game.scale.pageAlignVertically = true;
  game.stage.backgroundColor = '#eee';
  game.load.image('ball', './img/ball.png');
}

function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE);
  ball = game.add.sprite(25, 25, 'ball');
  game.physics.enable(ball, Phaser.Physics.ARCADE);
  ball.body.velocity.set(100, 100);
  ball.body.collideWorldBounds = true;
  ball.body.bounce.set(1);
}

function update() {
 
}