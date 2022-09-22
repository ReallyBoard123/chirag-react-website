export function Footer() {
	const current = new Date();
	const date = `${current.getDate()}/${
		current.getMonth() + 1
	}/${current.getFullYear()}`;

	return (
		<>
			<footer className="absolute bottom-2 inset-x-0">
				<div className="flex justify-between p-8">
					<h1 className="text-3xl">{date}</h1>
					<h1 className="self-center">Copyright 2022</h1>
				</div>
			</footer>
		</>
	);
}
