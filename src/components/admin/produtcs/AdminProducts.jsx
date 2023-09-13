import axios from "axios";
import React, { useState, useEffect } from "react";
import { Footer } from "../../Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "./AdminProducts.css";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../Navbar";

export const AdminProducts = () => {
  const [productosDestacados, setProductosDestacados] = useState([]);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const navigate = useNavigate();

  const [message, setMessage] = useState("");

  const [inputs, setInputs] = useState([]);
  const [photo, setPhoto] = useState("");

  // Create
  const [name, setName] = useState("");
  const [description, setdescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  // Edit
  const [editName, setEditName] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [editCategory, setEditCategory] = useState("");
  const [editImage, setEditImage] = useState("");

  // Edit
  const editProduct = async () => {
    console.log(image);
    const formData = new FormData();
    formData.append("_method", "PUT");
    formData.append("name", editName);
    formData.append("description", editDescription);
    formData.append("price", editPrice);
    formData.append("category", editCategory);
    formData.append("image", editImage);
    const responce = await axios.post(
      "https://api-toti-laravel-production-14ae.up.railway.app/api/productsupdate/" +
        selectedProduct.id,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    if (responce) {
      console.log(responce);
      setMessage(responce.message); //"message": "Product successfully created."
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  };

  const editSubmit = async (e) => {
    e.preventDefault();
    await editProduct();
  };

  //---------------------------------------
  //Create
  const createProduct = async () => {
    console.log(image);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("image", image);
    const responce = await axios.post(
      "https://api-toti-laravel-production-14ae.up.railway.app/api/products",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    if (responce) {
      console.log(responce);
      setMessage(responce.message); //"message": "Product successfully created."
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  };

  const createSubmit = async (e) => {
    e.preventDefault();
    await createProduct();
  };

  //------------------------------------

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const togglePreviewModal = (product) => {
    setSelectedProduct(product);
    setShowPreviewModal(!showPreviewModal);
  };

  const toggleCreateModal = () => {
    setShowCreateModal(!showCreateModal);
  };

  const toggleDeleteModal = (product) => {
    setSelectedProduct(product);
    setShowDeleteModal(!showDeleteModal);
  };

  useEffect(() => {
    fetch(
      "https://api-toti-laravel-production-14ae.up.railway.app/api/products"
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.products && Array.isArray(data.products)) {
          setProductosDestacados(data.products);
        } else {
          console.error(
            "La respuesta no contiene un arreglo de productos válidos."
          );
        }
      })
      .catch((error) => {
        console.error("Error al obtener productos destacados", error);
      });
  }, []);

  const deleteProduct = (id) => {
    axios
      .delete(
        "https://api-toti-laravel-production-14ae.up.railway.app/api/productdelete/" +
          id
      )
      .then(function (response) {
        console.log(response.data);
        window.location.reload();
      });
  };

  //-----------------------------------

  let counter = 1;
  return (
    <div>
      <Navbar />
      <div className="btn-c">
        <h2 className="fw-bold">Admin Product List</h2>
        <button onClick={() => toggleCreateModal()}>Criar Novo Produto</button>
      </div>
      <div style={{ maxHeight: "500px", overflowY: "auto" }}>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Preço</th>
              <th>Categoria</th>
              <th>Imagem</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {productosDestacados.map((e) => (
              <tr key={e.id}>
                <td>{counter++}</td>
                <td>{e.name}</td>
                <td>{e.description}</td>
                <td>{e.price}</td>
                <td>{e.category}</td>
                <td>
                  <img
                    style={{ height: "30px", width: "40px" }}
                    src={`https://api-toti-laravel-production-14ae.up.railway.app/storage/${e.image}`}
                    alt=""
                  />
                </td>
                <td className="td-icon">
                  <FontAwesomeIcon
                    cursor={"pointer"}
                    color="#2077d8"
                    icon={faPenToSquare}
                    onClick={() => togglePreviewModal(e)}
                  />
                  <FontAwesomeIcon
                    cursor={"pointer"}
                    color="#ff0f47"
                    icon={faTrashCan}
                    onClick={() => toggleDeleteModal(e)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Modal show={showPreviewModal} onHide={togglePreviewModal}>
          {selectedProduct && (
            <form onSubmit={editProduct} className="preview-modal">
              <h3>Editar Produto</h3>
              <img
                src={`https://api-toti-laravel-production-14ae.up.railway.app/storage/${selectedProduct.image}`}
                alt={selectedProduct.name}
              />

              <div className="input-container">
                <div className="input-div">
                  <span className="input-span">Nome</span>
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    onChange={(e) => setEditName(e.target.value)}
                  />
                </div>
                <div className="input-div">
                  <span className="input-span">Descrição</span>
                  <input
                    className="form-control"
                    type="text"
                    name="description"
                    onChange={(e) => setEditDescription(e.target.value)}
                  />
                </div>
                <div className="input-div">
                  <span className="input-span">Preço</span>
                  <input
                    style={{ width: "100%" }}
                    className="form-control"
                    type="number"
                    name="price"
                    onChange={(e) => setEditPrice(e.target.value)}
                  />
                </div>
                <div className="input-div">
                  <span className="input-span">Categoria</span>
                  <select
                    className="form-control"
                    onChange={(e) => setEditCategory(e.target.value)}
                    name="category"
                  >
                    <option value={"alimento"}>Alimento</option>
                    <option value={"brinquedo"}>Brinquedo</option>
                    <option value={"banho"}>Banho</option>
                  </select>
                </div>
                <div className="input-div">
                  <span className="input-span">Nova Imagem</span>
                  <input
                    className="form-control"
                    type="file"
                    id="formFile"
                    onChange={(e) => setEditImage(e.target.files[0])}
                  />
                </div>
              </div>

              <div className="save-btn">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value={"Salvar"}
                />
              </div>
            </form>
          )}
        </Modal>

        <Modal show={showCreateModal} onHide={toggleCreateModal}>
          <form onSubmit={createSubmit} className="preview-modal">
            <h3>Criar Produto</h3>

            <div className="input-container">
              <div className="input-div">
                <span className="input-span">Nome</span>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="input-div">
                <span className="input-span">Descrição</span>
                <input
                  className="form-control"
                  type="text"
                  name="description"
                  onChange={(e) => setdescription(e.target.value)}
                  required
                />
              </div>
              <div className="input-div">
                <span className="input-span">Preço</span>
                <input
                  style={{ width: "100%" }}
                  className="form-control"
                  type="number"
                  name="price"
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>
              <div className="input-div">
                <span className="input-span">Categoria</span>
                <select
                  className="form-control"
                  onChange={(e) => setCategory(e.target.value)}
                  name="category"
                  required
                >
                  <option value={"alimento"}>Alimento</option>
                  <option value={"brinquedo"}>Brinquedo</option>
                  <option value={"banho"}>Banho</option>
                </select>
              </div>
              <div className="input-div">
                <span className="input-span">Nova Imagem</span>
                <input
                  className="form-control"
                  type="file"
                  id="formFile"
                  onChange={(e) => setImage(e.target.files[0])}
                  required
                />
              </div>
            </div>

            <div className="save-btn">
              <input
                className="btn btn-primary"
                type="submit"
                value={"Criar"}
                required
              />
            </div>
          </form>
        </Modal>

        <Modal show={showDeleteModal} onHide={toggleDeleteModal}>
          {selectedProduct && (
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px",
              }}
            >
              <h3>Excluir</h3>
              <div
                style={{
                  width: "90%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "15px",
                }}
              >
                <span>Certeza que quer excluir este produto?</span>

                <h3>{selectedProduct.name}</h3>

                <img
                  src={`${selectedProduct.image}`}
                  alt="img"
                  width={300}
                  height={300}
                />
              </div>

              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "20px",
                }}
              >
                <button
                  style={{ width: "150px", backgroundColor: "red" }}
                  onClick={() => deleteProduct(selectedProduct.id)}
                >
                  Sim
                </button>
                <button
                  style={{ width: "150px" }}
                  onClick={toggleDeleteModal}
                  i
                >
                  Não
                </button>
              </div>
            </div>
          )}
        </Modal>
      </div>

      <Footer />
    </div>
  );
};
