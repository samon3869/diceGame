import Button from './Button.js';
import Dice from './Dice.js';

function App() {
	return (
		<div>
			<div>
				<Button>던지기</Button>
				<Button>처음부터</Button>
			</div>
			<Dice color='blue' num ={2} />
		</div>
	);
}

export default App;