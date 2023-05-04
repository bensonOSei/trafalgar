import "./App.css";
import { ArticlesSection } from "./components/sections/ArticlesSection";
import { Header } from "./components/sections/Header";
import { Main } from "./components/sections/Main";

function App() {
	return (
		<>
			<Header />
			<Main />
			<ArticlesSection />
		</>
	);
}

export default App;
