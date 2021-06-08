import axios from './axios';

const postUserRegistration = data => {
  console.log('data', JSON.stringify(data));
  axios
    .post('/auth/register', data)
    .then(function (response) {
      console.log('response', response);
    })
    .catch(err => {
      console.log(err);
    });
};

export {postUserRegistration};
