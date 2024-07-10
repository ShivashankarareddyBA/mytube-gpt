export const userProfilePhoto =
  "https://pbs.twimg.com/profile_images/1729909787029078016/dBjB3Fnr_400x400.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer"+ process.env.REACT_APP_TMDB,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const BG_IMG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_medium.jpg";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "kannada", name: "Kannada" },
  { identifier: "tamil", name: "Tamil" },
  { identifier: "telugu", name: "Telugu" },
];

export const OPENAI_KEY=process.env.REACT_APP_OPENAI_KEY
