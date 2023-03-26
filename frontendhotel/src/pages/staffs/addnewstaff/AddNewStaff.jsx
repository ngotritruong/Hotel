import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState, useRef } from "react";
import imagephong from "../../../images/imagephong.jpg"
import './addNewStaff.scss'
import axios from "axios";
const  AddNewStaff = ({ title }) => {
  const [file, setFile] = useState("");

  const [chucvu, setChucvu] = useState(0);
  const [ma_cv, setMa_cv] = useState(1);
  const [tenCv, setTenCv] = useState();
  const [errorlp, setErrorlp] = useState("");
  const [error, setError] = useState("");



  const tenNv = useRef();
  const ngaySinh = useRef();
  const email = useRef();
  const password = useRef();
  const [gioitinh, setGioitinh] = useState();

  const handleChangeGT = (e) => {
    setGioitinh(e.target.value);
  };

  const handleChangeCV = (e) => {
    setMa_cv(e.target.value);
  };

  useEffect(() => {
    const getChucVu = async () => {
      try {
        const allChucVu = await axios.get("/chucvu/all");
        setChucvu(allChucVu.data);
      } catch (err) {
        console.log(err);
      }
    };
    getChucVu();

  }, []);

  useEffect(() => {
    const getLp = () => {
      if (ma_cv) {
        if (chucvu[ma_cv - 1]) {
          setTenCv(chucvu[ma_cv - 1].ten_cv)
          setErrorlp("")
        } else {
          setErrorlp("Mã phong không tồn tại")
          setTenCv("")
        }

      }
    };
    getLp();
  }, [ma_cv]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/nhanvien/add", {
        id_cv: ma_cv,
        ten_nv: tenNv.current.value,
        ngay_sinh: ngaySinh.current.value,
        gioi_tinh: gioitinh,
        mat_khau: password.current.value,
        email: email.current.value
      });
      console.log(res.data)
      res.data && window.location.replace("/staffs");
    } catch (err) {
      setError("Some thing went wrong");
      console.log("lỗi")
    }
  };
  return (
    <div className="addNewRoom">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : imagephong
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              <div className="formInput">
                <label>Tên nhân viên</label>
                <input type="text" placeholder="Ngo Tri Truong" ref={tenNv} />
              </div>
              <div className="formInput">
                <label>Mã chức vụ</label>
                <select value={ma_cv} onChange={handleChangeCV} >
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select> 
              </div>
              <div className="formInput">
                <label>Ngày sinh</label>
                <input type="text" placeholder="2001/02/28" ref={ngaySinh} />
              </div>
              <div className="formInput">
                <label>Tên chức vụ</label>
                <input type="text" placeholder="9" min="0" defaultValue={tenCv} />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input type="email" placeholder="example@gmail.com" ref={email} />
              </div>
              <div className="formInput">
                <label>Giới Tính</label>
                <select value={gioitinh} onChange={handleChangeGT} >
                  <option value="0">Nữ</option>
                  <option value="1">Nam</option>
                </select>
              </div>
              <div className="formInput">
                <label>Mật khẩu</label>
                <input type="password" ref={password} />
              </div>
              <button onClick={handleSubmit}>Thêm nhân viên</button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AddNewStaff;
