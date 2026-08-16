export interface Schedule {
  id: number;
  time: string;
  title: string;
  memo?: string;
}

export interface Candidate {
  id: number;
  title: string;
  memo?: string;
}

export interface Trip {
  id: number;
  title: string;
  startDate: string | null;
  endDate: string | null;
  note: string | null;
  coverLabel: string;
  schedules: Schedule[];
  candidates: Candidate[];
}
