export type CampusType = {
  id: string;
  name: string;
  phone: string;
  address: string;
};

export type GetCampusType = {
  getCampus: CampusType[];
};

export type CampusCreationValues = {
  name: string;
  address: string;
  phone: string;
};
