export interface tableFormPerson {
  name: string;
  image: string;
  email: string;
  position: string;
  isSent: boolean;
  isDone: boolean;
}
export interface tableFormSentiments {
  person: string;
  hit: string;
  source: string;
}
export interface tableFormResearch {
  name: string;
  image?: string;
  Hit: string;
  Source: string;
}
export interface tableFormScreening {
  persons: string;
  Hit: string;
  Source: string;
}
