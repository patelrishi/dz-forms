import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

const instance = axios.create({
  baseURL: baseUrl,
  timeout: 30000, // 30 secs
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  validateStatus: function (status) {
    return (
      (status >= 200 && status < 300) ||
      status === 401 ||
      status === 422 ||
      status === 400
    ); // default
  },
});

function getAccessTokenFromLocalStorage() {
  const { localStorage } = window;
  const token = localStorage.getItem("token");
  return token || "";
}

export async function login(url, paramObj, headers = {}) {
  delete instance.defaults.headers.common["Authorization"];

  return instance
    .post(url, paramObj)
    .then((response) => {
      switch (response.status) {
        case 200:
          return response.data;
        case 401:
          return response.data;
        case 422:
          return { status: false, message: response.data.message };
        default:
          return {
            status: false,
            message: "Something went wrong!",
            redirect_to_login: true,
          };
      }
    })
    .then((response) => {
      if (response.success) {
        return response.data;
      } else {
        return response;
      }
    })
    .catch((error) => {
      return {
        status: false,
        message: error.message || "Something went to wrong! Try again later",
      };
    });
}
function forgotPassword(url, paramObj, headers = {}) {
  delete instance.defaults.headers.common["Authorization"];

  return instance
    .post(url, paramObj)
    .then((response) => {
      switch (response.status) {
        case 200:
          return { status: false, message: response.data.message };
        case 401:
          return { status: false, message: response.data.description };
        default:
          return {
            status: false,
            message: "Something went wrong!",
          };
      }
    })
    .then((response) => {
      if (response.success) {
        return response.data;
      } else {
        return response;
      }
    })
    .catch((error) => {
      return {
        status: false,
        message: error.message || "Something went to wrong! Try again later",
      };
    });
}

function post(url, paramObj, headers = {}) {
  instance.defaults.headers.common["Authorization"] =
    "Bearer " + getAccessTokenFromLocalStorage();

  return instance
    .post(url, paramObj)
    .then((response) => {
      return response.data;
    })
    .then((response) => {
      if (response.success) {
        return response;
      } else {
        return response;
      }
    })
    .catch((error) => {
      return {
        status: false,
        message: error.message || "Something went to wrong! Try again later",
        response: error.response?.data,
      };
    });
}

function put(url, paramObj, headers = {}) {
  instance.defaults.headers.common["Authorization"] =
    "Bearer " + getAccessTokenFromLocalStorage();
  return instance
    .put(url, paramObj)
    .then((response) => {
      return response.data;
    })
    .then((response) => {
      if (response.success) {
        return response;
      } else {
        return response;
      }
    })
    .catch((error) => {
      return {
        status: false,
        message: error.message || "Something went to wrong! Try again later",
      };
    });
}

function get(url, paramObj = {}, headers = {}) {
  instance.defaults.headers.common["Authorization"] =
    "Bearer " + getAccessTokenFromLocalStorage();
  return instance
    .get(url, { params: paramObj })
    .then((response) => {
      if (response.status === 200 || response.status === 201) {
        return response.data;
      } else if (response.status === 201) {
        return response.data;
      } else if (response.status === 401) {
        return {
          status: false,
          response_status: response.status,
          unauthenticated: true,
          redirect_to_login: true,
        };
      }
      return {
        success: false,
        message: response.message || "Ill formed response!",
        redirect_to_login: true,
      };
    })
    .then((response) => {
      if (response.success) {
        return response;
      } else {
        return response;
      }
    })
    .catch((error) => {
      return {
        status: false,
        message: error.message || "Something went wrong! Try again later",
      };
    });
}
function deleteM(url, payload = {}, headers = {}) {
  instance.defaults.headers.common["Authorization"] =
    "Bearer " + getAccessTokenFromLocalStorage();
  return instance
    .delete(url, { data: payload })
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      } else if (response.status === 401) {
        return { status: false, unauthenticated: true };
      } else if (response.status === 201) {
        return response.data;
      }
      return {
        success: false,
        message: response.message || "Ill formed response!",
      };
    })
    .then((response) => {
      if (response.success) {
        return response;
      } else {
        return response;
      }
    })
    .catch((error) => {
      return {
        status: false,
        message: error.message || "Something went wrong! Try again later",
      };
    });
}

function urlSet(path) {
  return baseUrl + path.replace(/^\/*/, "/");
}

export default {
  login,
  forgotPassword,
  get,
  post,
  put,
  deleteM,
  urlSet,
};
