let url = '';

const apiUrl = process.env.REACT_APP_API_URL;
if (apiUrl) {
  url = apiUrl;
} else {
  url = '';
}

export { url };
