import { useState } from "react";
import { APIConfig } from "../../../api/APIConfig";
import { APIManager } from "../../../api/APIManager";
import { MySuccess } from "../../../components/MyAlert";
import scaleImage from "../../../utils/ImageConverter";

const buttonClass = "disabled px-4 py-2 m-3 bg-white bg-gray-600 text-gray-400 rounded-lg text-lg  focus:outline-none";
const buttonVisible = "px-4 py-2 m-3 bg-white bg-gray-800 text-white rounded-lg text-lg focus:outline-none";

const ProfileHome = (props: any) => {

  const api = new APIManager();

  const [buttonActive, setButtonActive] = useState(false);
  const [success, setSuccess] = useState(false);

  const [description, setDescription] = useState(props.user.description);
  const [image, setImage] = useState("");

  const getButtonClass = (): string => {
    return buttonActive ? buttonVisible : buttonClass;
  }

  const changeImage = (e: any) => {
    if (e.target.files && e.target.files[0])
      convertToBase64(e.target.files[0]);

    setButtonActive(true);
  }

  const convertToBase64 = (file: any) => {
    scaleImage(file, setImage, () => props.showError("Cannot load image, please retry!", "form"));
  }

  const handleCancel = () => {
    setDescription("");
    setImage("");
    setButtonActive(false);
  }

  const parseResult = (res: any) => {
    if (res.status === 200) {
      setSuccess(true);
      setTimeout(() => setSuccess(false), 2000);
    }
    else {
      res.json().then(() => {
        console.log("invalid")
      })
    }
  }

  const checkConstraints = () => {
    if (image === "" && description === "") {
      return false;
    }
    return true;
  }

  const handleSave = () => {
    if (!checkConstraints())
      return;

    console.log(description);

    const requestBody = {
      'email': props.user.email,
      'description': description,
      'image': image
    };

    api.post(APIConfig.PROFILEADDRESS, "/businessModify", requestBody)
      .then((res) => parseResult(res));
  }


  return (
    <div className="flex flex-row w-full">
      <MySuccess open={success} title="Profile Update" text="The changese have been saved!" />
      <div className="p-4 w-5/12">
        <h1 className="m-2 py-2 px-4 bg-gray-200 text-xl rounded-xl">Name: {props.user.name}</h1>
        <h1 className="m-2 py-2 px-4 bg-gray-200 text-xl rounded-xl">Email: {props.user.email}</h1>
        <h1 className="m-2 py-2 px-4 bg-gray-200 text-xl rounded-xl">Address: {props.user.address}</h1>
        <h1 className="m-2 py-2 px-4 bg-gray-200 text-xl rounded-xl">City: {props.user.city}</h1>
        <h1 className="m-2 py-2 px-4 bg-gray-200 text-xl rounded-xl">Owner: {props.user.owner}</h1>
        <h1 className="m-2 py-2 px-4 bg-gray-200 text-xl rounded-xl">Phone: {props.user.phone}</h1>
      </div>
      <div className="flex flex-col p-4 w-full">
        <label className="text-lg">Description:</label>
        <textarea
          value={description}
          placeholder="Add description"
          className="w-full h-56 my-2 p-2 border-2 rounded-xl focus:border-4 focus:border-gray-800 focus:outline-none resize-none"
          onChange={(ev) => {
            setButtonActive(true)
            setDescription(ev.target.value)
          }}
        />
        <label className="text-lg mt-4">Add Menu:</label>
        <input
          className="w-full my-2 p-2 border-2 rounded-xl focus:border-4 focus:border-gray-800 focus:outline-none resize-none"
          type="file"
          onChange={ev => changeImage(ev)}
        />
        <div className="flex flex-row space-x-6 mx-4 ml-auto">
          <button
            className={getButtonClass()}
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            className={getButtonClass()}
            onClick={handleSave}
          >
            Save
          </button>
        </div>

      </div>
    </div>
  )
}

export default ProfileHome