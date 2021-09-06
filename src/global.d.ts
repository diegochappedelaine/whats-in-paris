type Link = {
  href: string;
  rel: string;
};

type LatLon = {
  lat: number;
  lon: number;
};

type Cover = {
  mimetype: string;
  format: string;
  url: string;
  color_summary: string[];
  filename: string;
  last_synchronized: string;
  width: number;
  etag: string;
  id: string;
  height: number;
  thumbnail: boolean;
};

type Record = {
  id: string;
  timestamp: Date;
  size: number;
  fields: EventFields;
};

type EventRecord = {
  links: Link[];
  record: Record;
};

export type EventFields = {
  blind: number;
  pmr: number;
  date_end: string;
  deaf: number;
  updated_at: string;
  access_type: string;
  occurrences: string;
  contact_name: string;
  address_street: string;
  id: string;
  transport: string;
  category: string;
  title: string;
  cover_alt: string;
  date_start: string;
  price_detail: string;
  access_link: string;
  lat_lon: LatLon;
  address_name: string;
  contact_twitter: string;
  contact_phone: string;
  contact_url: string;
  description: string;
  tags: string[];
  contact_mail: string;
  access_mail: string;
  lead_text: string;
  cover_url: string;
  contact_facebook: string;
  access_phone: string;
  cover_credit: string;
  address_city: string;
  programs: string;
  url: string;
  cover: Cover;
  price_type: string;
  date_description: string;
  address_zipcode: string;
};

export interface GetEventsWithSearchQuery {
  total_count: number;
  links: Link[];
  records: EventRecord[];
}

export interface GetEventByIdQuery {
  links: Link[];
  record: Record;
}
