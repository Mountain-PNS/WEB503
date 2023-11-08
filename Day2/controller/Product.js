import axios from "axios";
let API = "http://localhost:3000/product";
export const getAllProduct = async (req, res) => {
  try {
    const { data } = await axios.get(API);
    console.log(data);
    if (data && data.length) {
      return res.status(200).json({
        message: "Lay danh sach thang cong",
        data: data,
      });
    }
    return res.status(404).json({
      message: "Khong tim thay san pham",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Loi server",
    });
  }
};

export const getProductId = async (req, res) => {
  try {
    const { data } = await axios.get(API);
    const id = req.params.id;
    const product = data.find((item) => item.id === id);
    if (product) {
      return res.status(200).json({
        message: "Lay danh sach thang cong",
        data: product,
      });
    }
    return res.status(404).json({
      message: "Khong tim thay san pham",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Loi sever",
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const { data } = await axios.get(API);
    console.log(id);
    const product = data.filter((item) => item.id != id);
    if (product) {
      return res.status(200).json({
        message: "Xóa sản phẩm thành công",
        product,
      });
    }
    return res.status(404).json({
      message: "Khong tim thay san pham",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Loi sever",
    });
  }
};
