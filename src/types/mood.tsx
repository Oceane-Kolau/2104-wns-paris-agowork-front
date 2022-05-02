export type MoodType = {
  id: string;
  name: string;
  icon: string;
};

export type GetMoodsType = {
  getMoods: MoodType[];
};

export type MoodCreationValues = {
  name: string;
  icon: string;
};
