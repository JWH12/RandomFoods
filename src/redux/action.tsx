//********************* FoodStyle *********************

export const KOREA_FOODS = "KOREA_FOOD";
export const CHINESE_FOODS = "CHINESE_FOOD";
export const JAPANESE_FOODS = "JAPANESE_FOOD";
export const WESTERN_FOODS = "WESTERN_FOOD";

export const choiceKorea = () => ({
  type: KOREA_FOODS,
});

export const choiceChinese = () => ({
  type: CHINESE_FOODS,
});

export const choiceJapanese = () => ({
  type: JAPANESE_FOODS,
});

export const choiceWsetern = () => ({
  type: WESTERN_FOODS,
});

//********************* MainFood *********************

export const RICE_FOODS = "RICE_FOOD";
export const NOODEL_FOODS = "NOODEL_FOOD";
export const BREAD_FOODS = "BREAD_FOOD";
export const SNACK_FOODS = "SNACK_FOOD";

export const choiceRice = () => ({
  type: RICE_FOODS,
});

export const choiceNoodle = () => ({
  type: NOODEL_FOODS,
});

export const choiceBread = () => ({
  type: BREAD_FOODS,
});

export const choiceSnack = () => ({
  type: SNACK_FOODS,
});

//********************* Spicy *********************

export const SPICY = "SPICY_FOOD";
export const NOT_SPICY = "NOT_SPICY_FOOD";

export const choiceSpicy = () => ({
  type: SPICY,
});

export const choiceNotSpicy = () => ({
  type: NOT_SPICY,
});

//********************* HotIce *********************

export const HOT = "HOT_FOOD";
export const ICE = "ICE_FOOD";

export const choiceHot = () => ({
  type: HOT,
});

export const choiceIce = () => ({
  type: ICE,
});
