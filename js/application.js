// Wait till the browser is ready to render the game (avoids glitches)
var gameManager = null;

window.requestAnimationFrame(function () {
  gameManager = new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
});

function restart() {
	if (gameManager != null)
		gameManager.restart();
}