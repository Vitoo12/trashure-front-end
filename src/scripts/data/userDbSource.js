import API_ENDPOINT from '../globals/api-endpoint';

class UserDbSource {
  static async getAllUser() {
    const response = await fetch(API_ENDPOINT.USERS);
    const responseJson = await response.json();
    return responseJson.data;
  }

  static async detailUser(id) {
    const response = await fetch(API_ENDPOINT.DETAIL_USER(id));
    const responseJson = await response.json();
    return responseJson.data;
  }

  static async updateUser(user, id) {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    };
    const response = await fetch(API_ENDPOINT.DETAIL_USER(id), options);
    return response;
  }

  static async registerUser(user) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    };
    const response = await fetch(API_ENDPOINT.REGISTER, options);
    return response;
  }

  static async loginUser(user) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    };
    const response = await fetch(API_ENDPOINT.LOGIN, options);
    const responseJson = await response.json();
    return responseJson.data;
  }
}

export default UserDbSource;
