import axios from "axios";

const GET = "GET";

const callFetchProducts = () => {
  return axios({
    method: GET,
    url: "https://xebiascart.herokuapp.com/products"
  });
};

const callSearchProduct = ({ data }) => {
  return axios({
    method: GET,
    url: "https://xebiascart.herokuapp.com/products?title=" + data
  });
};

const callLogin = ({data}) => {
  return axios({
    method: GET,
    url: "https://xebiascart.herokuapp.com/users?username="+ data.username,
  })
}

const fetchFilterData = () => {
  return axios({
    method: GET,
    url: "https://xebiascart.herokuapp.com/filters"
  });
}

export { callFetchProducts, callSearchProduct, callLogin, fetchFilterData };
