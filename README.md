# League Of Legends Quiz (Optional)

## React + Styled Components

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Simple quiz application that is currently running a league of legends quiz based on the `data.json` file which can be switched for custom quiz.

Data and quiz will currently reset on reload.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## JSON Data Format

```json
{
	"questions": [
		{
			"question": "How many League of Legends Champions are there?",
			"imageUrl": "link to image",
			"answers": [152, 148, 170, 153],
			"correct": 152
		},
		{
			"question": "Which league of legends champion has the  most skins?",
			"imageUrl": "https://www.wallpapertip.com/wmimgs/83-831434_female-league-of-legends-champions.jpg",
			"answers": ["Ezreal", "Caitlyn", "Nidalee", "Volibear"],
			"correct": "Ezreal"
		}
	]
}
```
