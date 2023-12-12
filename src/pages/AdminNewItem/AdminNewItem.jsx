import Button from "../../components/Button/Button";
import css from "./AdminNewItem.module.css";
import targetImg from "../../images/target.png";
import categoryArrowImg from "../../images/arrow-category.png";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import { addAdvert } from "../../redux/operations";
import { useDispatch } from "react-redux";
import closeIcon from "../../images/close.svg";

const NewItem = () => {
  const [isSizesOpen, setIsSizesOpen] = useState(false);
  const [zIndex, setZIndex] = useState(0);
  const [zIndexSizes, setZIndexSizes] = useState(0);
  const [isCategoryOpen, setIsCategoryModal] = useState(false);
  const [isSizesModalOpen, setIsSizesModalOpen] = useState(false);
  const [successRemovalModal, setSuccessRemovalModal] = useState(false);
  const [category, setCategory] = useState("");
  const [size, setSize] = useState("");
  const [image, setImage] = useState("");
  const [imageListOne, setImageListOne] = useState("");
  const [imageListTwo, setImageListTwo] = useState("");
  const [imageURL, setImageURL] = useState("");
  const dispatch = useDispatch();

  const categoryModalStyles = {
    top: "669px",
    left: "513px",
    transform: "translateY(0)",
  };

  const sizeNumModalStyles = {
    backgroundColor: "transparent",
    border: "none",
    top: "833px",
    left: "852px",
    transform: "translateY(0)",
  };

  const handleCategoryModalOpen = () => {
    if (zIndex === 1000) {
      setZIndex(0);
      setIsCategoryModal(false);
    } else {
      setZIndex(1000);
      setIsCategoryModal(true);
    }
  };

  const handleSizesModalOpen = () => {
    if (zIndexSizes === 1000) {
      setZIndexSizes(0);
    } else {
      setZIndexSizes(1000);
    }
    setIsSizesModalOpen(!isSizesModalOpen);
  };

  const handleCategoryClick = (e) => {
    e.preventDefault();
    handleCategoryModalOpen(false);
    setCategory(e.target.textContent);
    setZIndex(0);
    if (e.target.textContent === "Одяг та взуття") {
      setIsSizesOpen(true);
    } else {
      setIsSizesOpen(false);
    }
  };

  const handleSizesClick = (e) => {
    setSize(e.target.id);
    setZIndexSizes(0);
  };

  const handleAddedNewItemForm = (e) => {
    e.preventDefault();
    console.log(imageURL);
    const data = {};
    const formData = new FormData(e.target);
    formData.forEach((value, name) => (data[name] = value));
    dispatch(
      addAdvert({
        src: imageURL,
        color: data.color,
        alt: data.description,
        sale: false,
        new: true,
        material: data.material,
        brand: data.brand,
        description: `${data.description}. ${data.text} `,
        price: data.price,
        category: data.category,
        sizes: [],
        images: [imageListOne, imageListTwo],
      })
    );
    e.target.reset();
    setImage("");
    setImageListOne("");
    setCategory("");
    setImageListTwo("");
    setSuccessRemovalModal(true);
  };

  const onImageListOneChange = (e) => {
    setImageListOne(URL.createObjectURL(e.target.files[0]));
  };

  const onImageListTwoChange = (e) => {
    setImageListTwo(URL.createObjectURL(e.target.files[0]));
  };

  const handleSuccessRemovalModalClose = () => {
    setSuccessRemovalModal(false);
  };

  const onImageChange = async (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
    try {
      const formData = new FormData();
      formData.append("file", e.target.files[0]);
      formData.append("upload_preset", "ml_default");

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/dqyjr9t6r/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      setImageURL(data.url);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <>
      <div className={css.container}>
        <div className={css.breadcrumbs}>
          <span>Створити позицію</span>
        </div>
        <form className={css.contentWrapper} onSubmit={handleAddedNewItemForm}>
          <div>
            <label className={css.mainImageWrap}>
              <input
                className={css.hidden}
                type="file"
                name="imageMain"
                multiple
                accept="image/*"
                onChange={onImageChange}
              />
              {image ? (
                <img src={image} />
              ) : (
                <img src={targetImg} alt="" width={100} />
              )}
            </label>
            <ul className={css.imageList}>
              <li>
                <label>
                  <input
                    className={css.hidden}
                    type="file"
                    name="imageListOne"
                    multiple
                    accept="image/*"
                    onChange={onImageListOneChange}
                  />
                </label>
                {imageListOne ? (
                  <img src={imageListOne} />
                ) : (
                  <img src={targetImg} alt="" width={50} />
                )}
              </li>
              <li>
                <label>
                  <input
                    className={css.hidden}
                    type="file"
                    name="imageListOne"
                    multiple
                    accept="image/*"
                    onChange={onImageListTwoChange}
                  />
                </label>
                {imageListTwo ? (
                  <img src={imageListTwo} />
                ) : (
                  <img src={targetImg} alt="" width={50} />
                )}
              </li>
            </ul>
          </div>
          <div className={css.form}>
            <label>
              Назва
              <input required type="text" name="description" id="description" />
            </label>
            <label>
              Ціна
              <input required type="number" name="price" id="price" />
            </label>
            <label>
              Матеріал
              <input required type="text" name="material" id="material" />
            </label>
            <label>
              Виробник
              <input required type="text" name="brand" id="brand" />
            </label>
            <label>
              Категорія
              <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                style={{ zIndex: `${zIndex}` }}
                required
                type="text"
                name="category"
              />
              <img
                style={{ zIndex: `${zIndex}` }}
                onClick={() => {
                  handleCategoryModalOpen();
                }}
                className={css.arrow}
                src={categoryArrowImg}
                alt="Arrow"
                width={35}
              />
            </label>
            <label>
              Колір
              <input required name="color" />
            </label>
            {isSizesOpen && (
              <label>
                Які є розміри
                <input
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  style={{ zIndex: `${zIndexSizes}` }}
                  required
                  type="text"
                  name="sizes"
                />
                <img
                  style={{ zIndex: `${zIndexSizes}` }}
                  onClick={() => handleSizesModalOpen()}
                  className={css.arrow}
                  src={categoryArrowImg}
                  alt="Arrow"
                  width={35}
                />
              </label>
            )}
            <label className={css.textarea}>
              Опис
              <textarea required type="textarea" name="text" />
            </label>
            <div className={css.btnWrapper}>
              <Button title={"Створити позицію"} fontSize={"28"} />
            </div>
          </div>
        </form>
      </div>
      {isCategoryOpen && (
        <Modal
          handleModalClose={handleCategoryModalOpen}
          styles={categoryModalStyles}
        >
          <ul className={css.categoryList} onClick={handleCategoryClick}>
            <li className={css.category}>Одяг та взуття</li>
            <li className={css.category}>Іграшки</li>
            <li className={css.category}>Дитяча кімната</li>
            <li className={css.category}>Коляски</li>
            <li className={css.category}>Автокрісла</li>
            <li className={css.category}>Все для годування</li>
            <li className={css.category}>Догляд, гігієна та купання</li>
            <li className={css.category}>Дитячий транспорт</li>
          </ul>
        </Modal>
      )}
      {isSizesModalOpen && (
        <Modal
          handleModalClose={handleSizesModalOpen}
          styles={sizeNumModalStyles}
        >
          <div className={css.sizesListsWrapper}>
            <form className={css.sizesList} onClick={handleSizesClick}>
              <input
                className={css.checkbox}
                type="checkbox"
                name="size"
                id="120"
              />
              <label htmlFor="120" className={css.sizes}>
                120
              </label>
              <input
                className={css.checkbox}
                type="checkbox"
                name="size"
                id="128"
              />
              <label htmlFor="128" className={css.sizes}>
                128
              </label>
              <input
                className={css.checkbox}
                type="checkbox"
                name="size"
                id="132"
              />
              <label htmlFor="132" className={css.sizes}>
                132
              </label>
              <input
                className={css.checkbox}
                type="checkbox"
                name="size"
                id="136"
              />
              <label htmlFor="136" className={css.sizes}>
                136
              </label>
              <input
                className={css.checkbox}
                type="checkbox"
                name="size"
                id="144"
              />
              <label htmlFor="144" className={css.sizes}>
                144
              </label>
              <input
                className={css.checkbox}
                type="checkbox"
                name="size"
                id="156"
              />
              <label htmlFor="156" className={css.sizes}>
                156
              </label>
              <input
                className={css.checkbox}
                type="checkbox"
                name="size"
                id="160"
              />
              <label htmlFor="160" className={css.sizes}>
                160
              </label>
              <input
                className={css.checkbox}
                type="checkbox"
                name="size"
                id="172"
              />
              <label htmlFor="172" className={css.sizes}>
                172
              </label>
            </form>
            <form className={css.sizesList} onClick={handleSizesClick}>
              <input
                className={css.checkbox}
                type="checkbox"
                name="size"
                id="XXS"
              />
              <label htmlFor="XXS" className={css.sizes}>
                XXS
              </label>
              <input
                className={css.checkbox}
                type="checkbox"
                name="size"
                id="XS"
              />
              <label htmlFor="XS" className={css.sizes}>
                XS
              </label>
              <input
                className={css.checkbox}
                type="checkbox"
                name="size"
                id="S"
              />
              <label htmlFor="S" className={css.sizes}>
                S
              </label>
              <input
                className={css.checkbox}
                type="checkbox"
                name="size"
                id="M"
              />
              <label htmlFor="M" className={css.sizes}>
                M
              </label>
              <input
                className={css.checkbox}
                type="checkbox"
                name="size"
                id="L"
              />
              <label htmlFor="L" className={css.sizes}>
                L
              </label>
              <input
                className={css.checkbox}
                type="checkbox"
                name="size"
                id="X"
              />
              <label htmlFor="X" className={css.sizes}>
                X
              </label>
              <input
                className={css.checkbox}
                type="checkbox"
                name="size"
                id="XXL"
              />
              <label htmlFor="XXL" className={css.sizes}>
                XXL
              </label>
              <input
                className={css.checkbox}
                type="checkbox"
                name="size"
                id="XXXL"
              />
              <label htmlFor="XXXL" className={css.sizes}>
                XXXL
              </label>
            </form>
          </div>
        </Modal>
      )}
      {successRemovalModal && (
        <Modal handleModalClose={handleSuccessRemovalModalClose}>
          <div className={css.modalContainer}>
            <img
              className={css.closeIcon}
              src={closeIcon}
              alt="Close icon"
              onClick={handleSuccessRemovalModalClose}
            />
            <p className={css.removalTitle}>Товар успішно створений</p>
          </div>
        </Modal>
      )}
    </>
  );
};

export default NewItem;
