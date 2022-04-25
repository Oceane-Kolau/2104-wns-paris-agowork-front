export type CampusType = {
  id: string;
  name: string;
  phone: string;
  address: string;
};

export type GetCampusType = {
  getCampus: CampusType[];
};
