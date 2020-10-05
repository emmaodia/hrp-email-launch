import Axios from "axios";

const campaign = JSON.parse(localStorage.getItem('campaign'));

console.log(campaign)
console.log("here")

const baseURL = `http://localhost:5000/api/v1/email-launch`;

const register = (
    first_name, 
    last_name,
    email,
    age,
    salary_earner,
    state,
    phone,
    tin,
    accomodation_status,
    present_living) => {
    return Axios
            .post(baseURL, {
                    first_name,
                    last_name,
                    email,
                    age,
                    salary_earner,
                    state,
                    phone,
                    tin,
                    accomodation_status,
                    present_living,
            })
}

export default {
    register,
  }