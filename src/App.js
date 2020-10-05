import React, { useState } from 'react';
import Header from './components/Header'
import CampaignDataService from "./services/campaign";

const App = () => {
  const initialCampaignState = {
    first_name: "",
    last_name: "",
    email: "",
    age: "",
    salary_earner: "",
    state: "",
    phone: "",
    tin: "",
    accomodation_status: "",
    present_living: "",
  };

  const [campaign, setCampaign] = useState(initialCampaignState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCampaign({ ...campaign, [name]: value });
  };

  const saveCampaign = () => {
    var data = {
      first_name: campaign.first_name, 
      last_name: campaign.last_name,
      email: campaign.email,
      age: campaign.age,
      salary_earner: campaign.salary_earner,
      state: campaign.state,
      phone: campaign.phone,
      tin: campaign.tin,
      accomodation_status: campaign.accomodation_status,
      present_living: campaign.present_living
    };

    CampaignDataService.register(data)
      .then(response => {
        setCampaign({
          first_name: response.data.first_name, 
          last_name: response.data.last_name,
          email: response.data.email,
          age: response.data.age,
          salary_earner: response.data.salary_earner,
          state: response.data.state,
          phone: response.data.phone,
          tin: response.data.tin,
          accomodation_status: response.data.accomodation_status,
          present_living: response.data.present_living
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <>
      <Header />
      {submitted ? (<div>submitted</div>) : (
        <>
        <div className="container mx-auto">
 			<div className="flex justify-center pt-20 px-6 my-12">
 				{/* <!-- Row --> */}
 				<div className="w-full xl:w-3/4 lg:w-11/12 flex">
 					{/* <!-- Col --> */}
 					<div
						className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
						style={{ backgroundImage:`url(${'https://images.unsplash.com/photo-1511452885600-a3d2c9148a31'})`}}
					></div>
					{/* <!-- Col --> */}
					<div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
						<h2 className="pt-4 text-xl text-center text-blue-500">Join our Waitlist and be the first to know when we launch the App!</h2>
            {/* <h2
              className="text-center text-red-500 align-baseline hover:text-blue-800"
              
            >
              
              Join our Waitlist and be the first to know when we launch the App!
            </h2> */}
						<form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
							<div className="mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-700" for="username">
									First Name
								</label>
								<input
									className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="first_name"
                  required
                  type="text"
                  name="first_name"
                  value={campaign.first_name}
                  onChange={handleInputChange} 
									placeholder="First Name"
								/>
							</div>
							<div className="mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-700" for="password">
									Last Name
								</label>
								<input
									className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-grey-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="password"
                  type="text"
                  required
                  name="last_name"
                  value={campaign.last_name}
                  onChange={handleInputChange} 
									placeholder=""
								/>
								{/* <p className="text-xs italic text-red-500">Please choose a password.</p> */}
							</div>
              <div className="mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-700" for="password">
									Email
								</label>
								<input
									className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-grey-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="password"
                  type="text"
                  required
                  name="email"
                  value={campaign.email}
                  onChange={handleInputChange}
									placeholder=""
								/>
								{/* <p className="text-xs italic text-red-500">Please choose a password.</p> */}
							</div>
              <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                    Location
                  </label>
                  <div className="relative">
                    <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                      <option>Lagos</option>
                      <option>Abuja</option>
                      <option>Akwa Ibom</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                    Salary Earner
                  </label>
                  <div className="relative">
                    <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                  {/* <input 
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="end_date" 
                    type="text"
                    required
                    // value={campaign.end_date}
                    // onChange={handleInputChange} 
                    name="end_date" 
                    placeholder="" 
                  /> */}
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                  Accomodation Status
                </label>
                <div className="relative">
                  <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                    <option>I live with friends</option>
                    <option>I live with family</option>
                    <option>I pay rent for my own apartment</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                  Present Living
                </label>
                <div className="relative">
                  <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                    <option>I live in a flat</option>
                    <option>I live in a Self Contain or Mini Flat</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
                {/* <input 
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                  id="end_date" 
                  type="text"
                  required
                  // value={campaign.end_date}
                  // onChange={handleInputChange} 
                  name="end_date" 
                  placeholder="" 
                /> */}
              </div>
              </div>
							{/* <div className="mb-4">
								<input className="mr-2 leading-tight" type="checkbox" id="checkbox_id" />
								<label className="text-sm" for="checkbox_id">
									Remember Me
								</label>
							</div> */}
							<div className="mb-6 text-center">
								<button
									className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={saveCampaign}
								>
									Join Beta Program
								</button>
							</div>
							<hr className="mb-6 border-t" />
							{/* <div className="text-center">
								<a
									className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									href="./register.html"
								>
									Create an Account!
								</a>
							</div>
							<div className="text-center">
								<a
									className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									href="./forgot-password.html"
								>
									Forgot Password?
								</a>
							</div> */}
						</form>
					</div>
				</div>
			</div>
		</div>
   </>
      )}
  </>
  );
}

export default App;

