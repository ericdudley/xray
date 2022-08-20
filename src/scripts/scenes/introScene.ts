import FpsText from '../objects/fpsText'

export default class IntroScene extends Phaser.Scene {
  fpsText

  constructor() {
    super({ key: 'IntroScene' })
  }

  create() {
    this.fpsText = new FpsText(this)

    const baseTextStyle = {
      color: '#ffffff'
    }

    // display the Phaser.VERSION
    const logoText = this.add
      .text(this.cameras.main.width / 2, this.cameras.main.height / 2, `XRAY`, {
        ...baseTextStyle,
        fontSize: '48px'
      })
      .setOrigin(0.5, 0.5)
      .setResolution(4)
      .setAlpha(0.5)
      .setInteractive({ useHandCursor: true})

    this.add
      .text(this.cameras.main.width / 2, this.cameras.main.height - 16, `Built with Phaser v${Phaser.VERSION}`, {
        ...baseTextStyle,
        fontSize: '16px'
      })
      .setOrigin(0.5, 1)
      .setResolution(0.5)

    this.tweens.add({
      targets: [logoText],
      repeat: Infinity,
      yoyo: true,
      duration: 2000,
      scale: 1.1,
      alpha: 1,
      ease: 'Expo.easeOut'
    })

    logoText.on(
      'pointerover',
      pointer => {
        logoText.setBackgroundColor("#ffffff")
        logoText.setColor("#000000")
        
      },
      this
    )
    logoText.on(
      'pointerout',
      pointer => {
        logoText.setBackgroundColor("#000000")
        logoText.setColor("#ffffff")
      },
      this
    )
  }

  update() {
    this.fpsText.update()
  }
}
