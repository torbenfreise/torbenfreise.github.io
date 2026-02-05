export interface ArticleMetadata {
	title: string;
	date: string;
	excerpt: string;
	published?: boolean;
}

export interface Article extends ArticleMetadata {
	slug: string;
}
