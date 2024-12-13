import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser =  () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: "",
        image: "",
    });

const handleChange = (name) => (e) => {
    const value = name === "image"?e.target.file[0]:e.target.value;
    setData({...data, [name]: value});
};

const handleSubmit = async () => {
    try{
        let formData = new FormData
        formData.append("image", data.image);
        formData.append("name", data.name);

        const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/order`, {method:"POST", body:formData,});
        if(res.ok) {
            setData({name: "", image: "",});
            navigate("/", {replace: true});
        }
    }
    catch(error) {
        console.log(error);
    }
};
    return (
        <div style={{ maxWidth: 500, margin: "auto" }}>
            <h2>Place Your Bento Order</h2>
            <div className="mb-3">
                <input
                    className="form-control"
                    placeholder="Enter Bento Name"
                    onChange={handleChange("name")}
                    type="text"
                    name="name"
                    value={data.name}
                />
            </div>
            <div className="mb-3">
                <input
                    className="form-control"
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleChange("image")}
                />
            </div>
            <div className="mb-3">
                <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                    Place Order
                </button>
            </div>
        </div>
    );
};

export default AddUser;