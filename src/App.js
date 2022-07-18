import Button from './Button.js';
import Dice from './Dice.js';

function App() {
	return (
		<div>
			<div>
				<Button text="던지기" />
				<Button text="처음부터" />
			</div>
			<Dice color='blue' num ={2} />
		</div>
	);
}

export default App;