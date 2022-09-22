import { Link } from "react-router-dom";

export function Home() {
	return (
		<>
			<section className="flex flex-col justify-center">
				<h1 className="text-7xl pt-36 pl-36 w-2/3 font-semibold">
					Hi, I am Chirag Singal, and I am a front end developer*
				</h1>
				<h4 className="text-4xl w-1/2 relative p-6 pr-36 text-right self-end">
					Offering website and app developing service with focus on philosophy,
					and story sharing.
				</h4>
			</section>
		</>
	);
}
