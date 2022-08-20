export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' })
  }

  preload() {
  }

  create() {
    this.scene.start('IntroScene')

    /**
     * This is how you would dynamically import the introScene class (with code splitting),
     * add the introScene to the Scene Manager
     * and start the scene.
     * The name of the chunk would be 'introScene.chunk.js
     * Find more about code splitting here: https://webpack.js.org/guides/code-splitting/
     */
    // let someCondition = true
    // if (someCondition)
    //   import(/* webpackChunkName: "introScene" */ './introScene').then(introScene => {
    //     this.scene.add('IntroScene', introScene.default, true)
    //   })
    // else console.log('The introScene class will not even be loaded by the browser')
  }
}
