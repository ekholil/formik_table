import React, { useRef, useState } from "react";
import { Formik, Field, Form } from "formik";
const MyForm = () => {
  const [data, setData] = useState([]);
  const formikRef = useRef();
  const onEsc = (e) => {
    e.preventDefault();
    if (e.keyCode == 27) {
      formikRef.current?.resetForm();
    }
  };
  document.addEventListener("keydown", onEsc);
  return (
    <div className="max-w-5xl mx-auto">
      <h1 class="mb-4 text-center mt-3 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 ">
          Sign Up
        </span>
      </h1>
      <Formik
        innerRef={formikRef}
        initialValues={{
          name: "",
          phone: "",
          birthDate: "",
          sex: "",
          nid: "",
          email: "",
          address: "",
          religion: "",
          maritalStatus: "",
          guardian: "",
        }}
        onSubmit={async (values, { resetForm }) => {
          await new Promise((r) => setTimeout(r, 500));
          setData((prev) => [...prev, values]);
          resetForm();
          console.log(data, users);
        }}
      >
        <Form>
          <div className="flex flex-wrap -mx-3 mb-5">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Name
              </label>
              <Field
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="name"
                name="name"
                type="text"
                placeholder="Jane"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Phone Number
              </label>
              <Field
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="phone"
                name="phone"
                type="number"
                placeholder="+8801958625365"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-city"
              >
                Birth Date
              </label>
              <Field
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="birthDate"
                name="birthDate"
                type="date"
                placeholder="Birth Date"
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="sex"
              >
                Sex
              </label>
              <div className="relative">
                <Field
                  as="select"
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="sex"
                  name="sex"
                >
                  <option>Select One</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Others</option>
                </Field>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-zip"
              >
                Address
              </label>
              <Field
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="address"
                name="address"
                type="text"
                placeholder="Address"
              />
            </div>
          </div>

          {/* NID AND Email */}

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                NID Number
              </label>
              <Field
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="nid"
                name="nid"
                type="number"
                placeholder="125012545225"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Email
              </label>
              <Field
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="phone"
                name="email"
                type="email"
                placeholder="jon@gmail.com"
              />
            </div>
          </div>
          {/* Religion and marital status */}

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="religion"
              >
                Religion
              </label>
              <div className="relative">
                <Field
                  as="select"
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="religion"
                  name="religion"
                >
                  <option>Select</option>
                  <option>Islam</option>
                  <option>Hindu</option>
                  <option>Chritian</option>
                </Field>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-state"
              >
                Marital Status
              </label>
              <div className="relative">
                <Field
                  as="select"
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="maritalStatus"
                  name="maritalStatus"
                >
                  <option>Select One</option>
                  <option>Married</option>
                  <option>Unmarried</option>
                  <option>Divorced</option>
                </Field>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="guardian"
              >
                Guardian Name
              </label>
              <Field
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="guardian"
                name="guardian"
                type="text"
                placeholder="Abdur Rahman"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button
              className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              type="reset"
              onKeyDown={onEsc}
            >
              Cancel
            </button>
            <button
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              type="submit"
            >
              Submit
            </button>
          </div>
        </Form>
      </Formik>

      {/* Show data on table */}

      {data.length > 0 && (
        <div class="overflow-x-auto relative shadow-md sm:rounded-lg mb-5">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="py-3 px-6">
                  Name
                </th>
                <th scope="col" class="py-3 px-6">
                  Sex
                </th>
                <th scope="col" class="py-3 px-6">
                  BirthDate
                </th>
                <th scope="col" class="py-3 px-6">
                  Phone
                </th>
                <th scope="col" class="py-3 px-6">
                  NID
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((user) => {
                return (
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th
                      scope="row"
                      class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {user.name}
                    </th>
                    <td class="py-4 px-6">{user.sex}</td>
                    <td class="py-4 px-6">{user.birthDate}</td>
                    <td class="py-4 px-6">{user.phone}</td>
                    <td class="py-4 px-6">{user.nid}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyForm;
