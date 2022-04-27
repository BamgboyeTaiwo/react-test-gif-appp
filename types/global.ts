export interface PGif {
    type: string;
    id: string;
    slug: string;
    url: string;
    bitly_url: string;
    embed_url: string;
    username: string;
    source: string;
    rating: string;
    content_url: string;
    user: IUser;
    source_tld: string;
    source_post_url: string;
    update_datetime?: Date;
    create_datetime?: Date;
    import_datetime?: Date;
    trending_datetime?: Date;
    images: IGifImage;
    title: string;
  }