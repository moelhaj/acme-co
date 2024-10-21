export function parseMembers(str: string) {
	const cleanStr = str.slice(1, -1).split('),"');
	const result = cleanStr.map(item => {
		item = item.replace(")", "").replace(/["()]/g, "");
		const [id, name, email, password, title, avatar, type] = item.split(
			/,(?=(?:(?:[^"]*"){2})*[^"]*$)/
		);
		return {
			id,
			name: name.replace(/\\/g, ""),
			email,
			password,
			title: title.replace(/\\/g, ""),
			avatar,
			type,
		};
	});
	return result;
}
