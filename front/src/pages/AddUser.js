import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: "",
        username: "",
        email: "",
        company: "",
        address: "",
        zip: "",
        state: "",
        country: "",
        phone: "",
        photo: "",
    });

    const handleChange = (name) => (e) => {
        // 修正為 files[0] 來處理文件選擇
        const value = name === "image" ? e.target.files[0] : e.target.value;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = async () => {
        try {
            let formData = new FormData();
            formData.append("photo", data.photo);
            formData.append("name", data.name);
            formData.append("username", data.username);
            formData.append("email", data.email);
            formData.append("company", data.company);
            formData.append("address", data.address);
            formData.append("zip", data.zip);
            formData.append("state", data.state);
            formData.append("country", data.country);
            formData.append("phone", data.phone);

            const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/order`, {
                method: "POST",
                body: formData,
            });

            if (res.ok) {
                setData({ name: "",
                    username: "",
                    email: "",
                    company: "",
                    address: "",
                    zip: "",
                    state: "",
                    country: "",
                    phone: "",
                    photo: "", });
                navigate("/", { replace: true });
            } else {
                alert("Order failed. Please try again.");
            }
        } catch (error) {
            console.log("Error submitting form:", error);
        }
    };

    return (
        <div style={{ maxWidth: 500, margin: "auto" }}>
            <h2>Place Your Bento Order</h2>

            {/* Name input */}
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

            {/* Username input */}
            <div className="mb-3">
                <input
                className="form-control"
                placeholder="Enter Username"
                onChange={handleChange("username")}
                type="text"
                name="username"
                value={data.username}
                />
            </div>

            {/* Email input */}
            <div className="mb-3">
                <input
                className="form-control"
                placeholder="Enter Email"
                onChange={handleChange("email")}
                type="email"
                name="email"
                value={data.email}
                />
            </div>

            {/* Company input */}
            <div className="mb-3">
                <input
                className="form-control"
                placeholder="Enter Company"
                onChange={handleChange("company")}
                type="text"
                name="company"
                value={data.company}
                />
            </div>

            {/* Address input */}
            <div className="mb-3">
                <input
                className="form-control"
                placeholder="Enter Address"
                onChange={handleChange("address")}
                type="text"
                name="address"
                value={data.address}
                />
            </div>

            {/* Zip input */}
            <div className="mb-3">
                <input
                className="form-control"
                placeholder="Enter Zip Code"
                onChange={handleChange("zip")}
                type="text"
                name="zip"
                value={data.zip}
                />
            </div>

            {/* State input */}
            <div className="mb-3">
                <input
                className="form-control"
                placeholder="Enter State"
                onChange={handleChange("state")}
                type="text"
                name="state"
                value={data.state}
                />
            </div>

            {/* Country input */}
            <div className="mb-3">
                <input
                className="form-control"
                placeholder="Enter Country"
                onChange={handleChange("country")}
                type="text"
                name="country"
                value={data.country}
                />
            </div>

            {/* Phone input */}
            <div className="mb-3">
                <input
                className="form-control"
                placeholder="Enter Phone Number"
                onChange={handleChange("phone")}
                type="text"
                name="phone"
                value={data.phone}
                />
            </div>

            {/* Photo input */}
            <div className="mb-3">
                <input
                className="form-control"
                placeholder="Please upload photos with relevant information."
                type="file"
                name="photo"
                accept="image/*"
                onChange={handleChange("photo")}
                />
            </div>

            {/* Submit button */}
            <div className="mb-3">
                <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                Place Order
                </button>
            </div>
        </div>
    );
};

export default AddUser;
