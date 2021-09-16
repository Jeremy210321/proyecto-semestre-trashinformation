//#region constantes
const URL_PATH = "http://25.49.227.156:5001/api";
export const URL_READ_RECOMENDATIONS =
  URL_PATH + "/recomendation/readRecomendations";
export const URL_READ_CONTACTS = URL_PATH + "/contact/readContacts";
export const URL_READ_VIDEOS = URL_PATH + "/video/readVideos";
export const URL_READ_NEWS = URL_PATH + "/new/readNews";
export const URL_READ_COMMENTS = URL_PATH + "/suggestion/readSuggestions";
export const URL_CREATE_COMMENTS = URL_PATH + "/suggestion/createSuggestion";
export const URL_LOGIN_USER = URL_PATH + "/user/loginUser";
export const CODIGOS = {
  codigoExito: "0000",
  codigoError: "0003",
  codigoClaveIncorrecta: "0050",
  codigoDebeRegistrar: "0051",
};
//#endregion
