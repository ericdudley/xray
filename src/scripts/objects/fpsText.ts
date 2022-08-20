export default class FpsText extends Phaser.GameObjects.Text {
  constructor(scene) {
    super(scene, 1, 1, '', { color: '#ffffff', fontSize: '16px' })
    scene.add.existing(this)
    this.setOrigin(0, 0)
  }

  public update() {
    this.setText(`fps: ${Math.floor(this.scene.game.loop.actualFps)}`)
  }
}
