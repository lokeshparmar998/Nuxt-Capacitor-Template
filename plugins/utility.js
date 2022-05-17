export default ({ app, store, $axios }) => {
  // set axios base url
  $axios.setBaseURL(process.env.BaseUrl);
};
