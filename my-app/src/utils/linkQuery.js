export function linkQuery(sorted, search, link) {
	if (search) {
		return `${link}?title_like=${search}`;
	} else if (sorted) {
		return `${link}?_sort=title`;
	} else return link;
}
