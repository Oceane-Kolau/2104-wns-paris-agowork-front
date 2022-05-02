export type RessourceType = {
  id?: string;
  title: string;
  description: string;
  link: string;
  tags: [string];
  updatedAt: Date;
  author?: string
};

export type GetRessourcesType = {
  getAllRessources: RessourceType[];
};
