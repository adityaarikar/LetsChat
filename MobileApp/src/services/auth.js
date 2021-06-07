import axios from './axios';

const postUserRegistration = async data => {
  console.log('data', JSON.stringify(data));
  await axios
    .post('/auth/register', JSON.stringify(data))
    .then(function (response) {
      console.log('response', response);
    })
    .catch(error => {
      console.log('Api call error');
      alert(error.message);
    });
};

export {postUserRegistration};
