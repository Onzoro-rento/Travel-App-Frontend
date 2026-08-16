export interface TripMemberDetailResponse {
  user_id: string;
  name: string;
  avatar_url: string | null;
  role: string;
}

export interface TripListItemResponse {
  id: string;
  title: string;
  cover_photo_url: string | null;
  start_date: string | null;
  end_date: string | null;
  my_role: string;
  member_count: number;
  note: string | null;
}

export interface TripDetailResponse {
  id: string;
  title: string;
  cover_photo_url: string | null;
  start_date: string | null;
  end_date: string | null;
  invite_code: string | null;
  members: TripMemberDetailResponse[];
  created_at: string;
  updated_at: string;
  note: string | null;
}

export interface TripResponse {
  id: string;
  title: string;
  cover_photo_url: string | null;
  start_date: string | null;
  end_date: string | null;
  invite_code: string | null;
  created_at: string;
}

export interface PaginationResponse {
  page: number;
  per_page: number;
  total_count: number;
  total_pages: number;
}

export interface TripListResponse {
  data: TripListItemResponse[];
  pagination: PaginationResponse;
}
