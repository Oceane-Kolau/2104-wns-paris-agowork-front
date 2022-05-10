export type RessourceType = {
  id?: string;
  title: string;
  description: string;
  link: string;
  tags: [string];
  updatedAt: Date;
  author?: string;
};

export type GetRessourcesType = {
  getAllRessources: RessourceType[];
};

export type RessourceCreationValues = {
  title: string;
  link: string;
  description?: string;
  tags?: Array<string> | string;
};

export type Tags = {
  tags: [string]
}