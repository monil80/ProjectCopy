import React from "react";
import arrow from "../images/arrow_drop_up.png";

const directors = [
  {
    name: "John Doe",
    din: "ABC123",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    stake: "10%",
    action: "Edit",
    online: true,
  },
  {
    name: "Jane Smith",
    din: "XYZ456HHGHYH",
    email: "janesmith@example.com",
    phone: "987-654-3210",
    stake: "15%",
    action: "Edit",
    online: false,
  },
  {
    name: "Jane Smith",
    din: "XYZ456",
    email: "janesmith@example.com",
    phone: "987-654-3210",
    stake: "15%",
    action: "Edit",
    online: false,
  },
  {
    name: "Jane Smith",
    din: "XYZ456",
    email: "janesmith@example.com",
    phone: "987-654-3210",
    stake: "15%",
    action: "Edit",
    online: true,
  },
  {
    name: "John Doe",
    din: "ABC123",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    stake: "10%",
    action: "Edit",
    online: true,
  },
  {
    name: "John Doe",
    din: "ABC123",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    stake: "10%",
    action: "Edit",
    online: true,
  },
  {
    name: "John Doe",
    din: "ABC123",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    stake: "10%",
    action: "Edit",
    online: true,
  },
  {
    name: "John Doe",
    din: "ABC123",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    stake: "10%",
    action: "Edit",
    online: true,
  },
  {
    name: "John Doe",
    din: "ABC123",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    stake: "10%",
    action: "Edit",
    online: true,
  },
  {
    name: "John Doe",
    din: "ABC123",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    stake: "10%",
    action: "Edit",
    online: true,
  },
  {
    name: "John Doe",
    din: "ABC123",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    stake: "10%",
    action: "Edit",
    online: true,
  },
  {
    name: "John Doe",
    din: "ABC123",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    stake: "10%",
    action: "Edit",
    online: true,
  },
  
];

const getInitials = (name) => {
  const nameArray = name.split(" ");
  const initials = nameArray
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase();
  return initials;
};

const Directorcomp = () => {
  return (
    <div className="ml-16">
      <div className="button-div mt-4 bg-white  h-[38px] flex items-center rounded-md shadow-md">
        <div className="button bg-[#FF0000] w-24 h-7 rounded  text-center ml-3">
          <button className="text-white font-medium font-monster text-xs">
            New Director
          </button>
        </div>
      </div>

      <div className="main-white mt-3 shadow-2xl bg-white h-[360px]  rounded-md xl:h-[515px] xl:w-[965px] overflow-y-auto "  style={{ boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.25)' }}>
        <div className="headings flex justify-between pt-3 font-monster ">
          <div className="w-[50%] bg-[#D9D9D9]">
            <div className="name-sorting flex justify-between items-center mx-2 font-semibold ">
              <p className="text-black">NAME</p>
              <img src={arrow} alt="error-arrow" className="w-2 h-1 "/>
            </div>
          </div>
          <div className="w-[40%]  border-l-2 border-[#B8B8B8] flex items-center">
            <h2 className="text-xs pl-5  text-[#B8B8B8]">DIN</h2>
          </div>
          <div className="w-[45%]  border-l-2 border-[#B8B8B8] flex items-center">
            <h2 className="text-xs pl-2 text-[#B8B8B8]">EMAIL</h2>
          </div>
          <div className="w-[32%]  border-l-2 border-[#B8B8B8] flex items-center">
            <h2 className="text-xs pl-2 text-[#B8B8B8]">PHONE</h2>
          </div>
          <div className="w-[18%]  border-l-2 border-[#B8B8B8] flex items-center">
            <h2 className="text-xs pl-2 text-[#B8B8B8] flex items-center">
              STAKE
            </h2>
          </div>
          <div className="w-[26%]  border-l-2 border-[#B8B8B8] flex items-center">
            <h2 className="text-xs pl-2 text-[#B8B8B8]">ACTION</h2>
          </div>
        </div>
        <hr className=" bg-[#B8B8B8]" />

        {directors.map((director, index) => (
        <div>
          <div

            key={index}
            className="director-row flex justify-between items-center py-2 font-monster"
          >
            <div className="w-[50%] flex items-center relative">
              <div className="initials bg-[#F5F5F5] text-[#B8B8B8] font-semibold rounded-full flex items-center justify-center mx-3 w-[37px] h-[37px]">
                {getInitials(director.name)}
              </div>
              <p className="text-[#5C5C5C]">{director.name}</p>
              {director.online ? (
                <span className="absolute right-[134px] bottom-[28px] bg-green-500 h-2 w-2 rounded-full xl:right-[180px] "></span>
              ) : (
                <span className="absolute right-[134px] bottom-[28px] bg-yellow-500 h-2 w-2 rounded-full xl:right-[180px]"></span>
              )}
            </div>
            <div className="w-[40%]">
              <h2 className="text-xs pl-5 text-[#5C5C5C] font-medium">
                {director.din}
              </h2>
            </div>
            <div className="w-[45%] ">
              <h2 className="text-xs pl- text-[#5C5C5C] font-medium">
                {director.email}
              </h2>
            </div>
            <div className="w-1/3">
              <h2 className="text-xs pl-3  text-[#5C5C5C] font-medium">
                {director.phone}
              </h2>
            </div>
            <div className="w-[18%] ">
              <h2 className="text-xs pl-2 text-[#5C5C5C] font-medium">
                {director.stake}
              </h2>
            </div>
            <div className="w-[26%] ">
              <select className="text-xs pl-2 text-[#FF0000] font-bold outline-none">
                <option value="Edit">Edit</option>
                <option value="Delete">Delete</option>  
              </select>
            </div>

           
          </div>
          <hr className="border-[1px] border-[#B8B8B8] w-auto"/>
        </div>
        ))}
      </div>

      <div className="button-right relative top-6 2xl:top-4 left-[96%] h-8 w-8 bg-[#FF0000] rounded-full flex justify-center items-center">
        <button className="text-white text-2xl pb-1">
        &#43;
        </button>
      </div>
    </div>
  );
};

export default Directorcomp;
