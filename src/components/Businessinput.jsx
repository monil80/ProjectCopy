import React, {useState, useRef} from "react";
import backup from "../images/backup_black.png";
import download from "../images/browser_updated.png";





const BusinessInput = () => {
  const [inputs, setInputs] = useState([
    { placeholder: "Company Name", value: "", label: "Business Entity Name" },
    { placeholder: "Select Company Type", value: "", label: "Business Type" },
    { placeholder: "dd-MMM-yyyy", value: "", label: "Date Of Incorporation" },
    { placeholder: "U74999GJ2021PTC127588", value: "", label: "CIN" },
    { placeholder: "Company Address", value: "", label: "Registered Address" },
  ]);

  const [rInputs, setRInputs] = useState([
    { placeholder: "GSTIN0109230930982398", value: "", label: "GST Number" },
    { placeholder: "AAIG775A", value: "", label: "PAN Number" },
    { placeholder: "GSTIN0109230930982398", value: "", label: "TAN Number" },
    { placeholder: "UDYAM-GJ-20932093", value: "", label: "Udyam Number" },
    { placeholder: "EPFO Number", value: "", label: "EPFO Number" },
  ]);

  const fileInputRef = useRef(null);
  const [currentInputIndex, setCurrentInputIndex] = useState(null); // Track the current input index
  const [fileNames, setFileNames] = useState(Array(rInputs.length).fill(""));
  const [uploadedFiles, setUploadedFiles] = useState(Array(rInputs.length).fill(null));

  const handleBackupClick = (index) => {
    setCurrentInputIndex(index);
      fileInputRef.current.click();
  };
  

  const handleFileSelect = (event) => {
    const file = event.target.files[0];

    if (currentInputIndex !== null) {
      const newRInputs = [...rInputs];
      const newFileNames = [...fileNames];

      if (file) {
        newRInputs[currentInputIndex].value = "";
        newFileNames[currentInputIndex] = file.name;

        const newUploadedFiles = [...uploadedFiles];
        newUploadedFiles[currentInputIndex] = file;

        setRInputs(newRInputs);
        setFileNames(newFileNames);
        setUploadedFiles(newUploadedFiles);
      }
    }
  };

   const handleDownload = async (index) => {
  const response = await fetch("https://firebasestorage.googleapis.com/v0/b/learning-e61ba.appspot.com/o/647427b415a45fdfad4015fc%2Fbusiness%2F2023-2024%2Fitreturn%2Ftitle%20change%202023-6-2%2012%3A7%3A24%200?alt=media&token=c3bb8885-9fba-472e-8e8e-c570c6c0fe2c&_gl=1*1wwdz3m*_ga*MzIxOTg5NjExLjE2ODA4NjA0MzA.*_ga_CW55HF8NVT*MTY4NTY4MjY2MS42NC4xLjE2ODU2ODc4NTQuMC4wLjA");
  const blob = await response.blob();
  const url = URL.createObjectURL(blob);
 // window.open(url, "_blank");
};


  const handleInputChange = (index, event, isRightDiv) => {
    if (isRightDiv) {
      const newRInputs = [...rInputs];
      newRInputs[index].value = event.target.value;
      setRInputs(newRInputs);
    } else {
      const newInputs = [...inputs];
      newInputs[index].value = event.target.value;
      setInputs(newInputs);
    }
  };

  return (
    <div>
      <div className="main flex justify-around">
        <div className="left w-92 ml-6">
          <div className="mt-5 font-monster flex flex-col xl:mt-[29px]">
            <label className="font-semibold text-xs pb-1">
              {inputs[0].label}
            </label>
            <input
              className="w-96 h-11 border-[1px] border-solid border-[#B8B8B8] rounded-[5px] px-4 bg-[#F5F5F5] text-xs  outline-none text-[#5C5C5C] "
              type="text"
              placeholder={inputs[0].placeholder}
              value={inputs[0].value}
              onChange={(event) => handleInputChange(0, event, false)}
            />
          </div>
          <div className="mt-8 font-monster flex flex-col">
            <label className="font-semibold text-xs pb-1">
              {inputs[1].label}
            </label>
            <select
              className="w-96 h-9 border-[1px] border-solid border-[#B8B8B8] rounded-[5px] px-4 bg-[#F5F5F5] text-xs  outline-none text-[#5C5C5C] "
              value={inputs[1].value}
              onChange={(event) => handleInputChange(1, event, false)}
            >
              <option value="" disabled>
                Select Company Type
              </option>
              <option value="type1">Private Limited</option>
              <option value="type2">LLP</option>
              <option value="type3">Proprietary</option>
              <option value="type4">Not Listed</option>
            </select>
          </div>
          <div className="mt-4 font-monster ">
            <div className="w-52">
              <label className="font-semibold text-xs pb-1">
                {inputs[2].label}
              </label>
              <input
                className="w-44 h-9 border-[1px] border-solid border-[#B8B8B8] rounded-[5px] px-4 bg-[#F5F5F5] text-xs  outline-none text-[#5C5C5C]"
                type="date"
                placeholder={inputs[2].placeholder}
                value={inputs[2].value}
                onChange={(event) => handleInputChange(2, event, false)}
              />
            </div>
            <div className="flex flex-col pt-5">
              <label className="font-semibold text-xs flex">
                {inputs[3].label}

                <div className="icons flex mb-1 ">
                  <img
                    src={backup}
                    alt="Icon 1"
                    className="w-5 h-4 ml-2 cursor-pointer"
                  />
                  <img
                    src={download}
                    alt="Icon 2"
                    className="w-4  h-4 ml-2 cursor-pointer"
                  />
                </div>
              </label>
              <input
                className="h-9  border-[1px] border-solid border-[#B8B8B8] rounded-[5px] px-4 bg-[#F5F5F5] text-xs  outline-none text-[#5C5C5C]"
                type="text"
                placeholder={inputs[3].placeholder}
                value={inputs[3].value}
                onChange={(event) => handleInputChange(3, event, false)}
              />
            </div>
          </div>
          <div className="mt-4 font-monster flex flex-col">
            <label className="font-semibold text-xs pb-1">
              {inputs[4].label}

              <input
                ref={fileInputRef}
                type="file"
                style={{ display: "none" }}
                onChange={handleFileSelect}
              />
            </label>
            <input
              className="w-96  border-[1px] border-solid border-[#B8B8B8] rounded-[5px] px-4 bg-[#F5F5F5] text-xs h-[102px]  outline-none text-[#5C5C5C]"
              type="text"
              placeholder={inputs[4].placeholder}
              value={inputs[4].value}
              onChange={(event) => handleInputChange(4, event, false)}
            />
          </div>
        </div>

        {/* Right Container */}

        <div className="right mr-6  xl:mt-2">
          {rInputs.map((rInput, index) => (
            <div className=" py-5 font-monster" key={index}>
              <label className="font-semibold text-xs flex justify-between">
                {rInput.label}
                <div className="icons flex mb-1">
                  <img
                    src={backup}
                    alt="Icon 1"
                    className="w-5 h-4 ml-2 cursor-pointer"
                    onClick={() => handleBackupClick(index)}
                  />
                  <img
                    src={download}
                    alt="Icon 2"
                    className="h-4 ml-2 cursor-pointer"
                    onClick={() => handleDownload(index)}
                  />
                </div>
              </label>
              <input
                className="flex flex-col w-72 h-9 border-[1px] border-solid border-[#B8B8B8] rounded-[5px] px-4 bg-[#F5F5F5] text-xs  outline-none text-[#5C5C5C]"
                type="text"
                placeholder={rInput.placeholder}
                value={rInput.value}
                onChange={(event) => handleInputChange(index, event, true)}
              />
              {fileNames[index] && (
                <span className="absolute text-[10px] text-[#5C5C5C] mt-1">
                  {fileNames[index]}
                </span>
              )}
            </div>
          ))}
          <input
            ref={fileInputRef}
            type="file"
            style={{ display: "none" }}
            onChange={handleFileSelect}
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessInput;



