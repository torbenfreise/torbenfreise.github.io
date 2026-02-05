import type { PageLoad } from './$types';

export const load: PageLoad = ({url }) => {
	return {
		post: {
			secret: url.searchParams.get('secret') ?? 'ORXXEYTFNYXGM4TFNFZWKQDHNVQWS3BOMNXW2SCFJZHEORKDJBAUYTCFJZDUKMBQGQ======'
		}
	};
};
