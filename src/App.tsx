import bg from './assets/bg.jpg'
import roblox from './assets/roblox.png'
import './App.css'

export default function App() {
	return (
		<div class="app">
			<div
				class="background"
				style={{ "background-image": `url(${bg})` }}
			/>

			<div class="popup">
				<div class="popup-titlebar">
					<span>ned</span>
					<button class="close-button">×</button>
				</div>
				<div class="popup-content">
					<h1>hellloooo,</h1>
					<p>
						I'm Ned, a Roblox developer with 4+ years of experience.
					</p>
					<p>
						I mainly focus on scripting but also do some modeling
						when needed. I've worked on a variety of projects and
						enjoy building things that are fun and run smoothly.
					</p>
					<p>I also help with game management when it’s needed.</p>
					<p>
						If you're interested in my work, you can reach me on
						Discord 
						<b>(uhned)</b>
					</p>
					<a
						href="https://www.roblox.com/users/759570523/profile"
						target="_blank"
						rel="noopener noreferrer"
						class="roblox-icon"
						title="Roblox"
					>
						<img src={roblox} alt="Roblox" />
					</a>
				</div>
			</div>
		</div>
	);
}

