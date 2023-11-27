import Button from "../../components/Button/Button";
import css from "./AdminNewItem.module.css";
import targetImg from "../../images/target.png";
import categoryArrowImg from "../../images/arrow-category.png";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";

const NewItem = () => {
  const [isSizesOpen, setIsSizesOpen] = useState(false);
  const [zIndex, setZIndex] = useState(0);
  const [zIndexSizes, setZIndexSizes] = useState(0);
  const [isCategoryOpen, setIsCategoryModal] = useState(false);
  const [isSizesModalNumOpen, setIsSizesModalNumOpen] = useState(false);
  const [isSizesModalOpen, setIsSizesModalOpen] = useState(false);
  const [category, setCategory] = useState("");
  const [size, setSize] = useState([]);
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
    setIsSizesModalNumOpen(!isSizesModalNumOpen);
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
    // handleSizesModalOpen(false);
    setSize(e.target.textContent);
    // setZIndexSizes(0);
  };

  return (
    <>
      <div className={css.container}>
        <div className={css.breadcrumbs}>
          <span>Створити позицію</span>
        </div>
        <div className={css.contentWrapper}>
          <div>
            <div className={css.mainImageWrap}>
              <img src={targetImg} alt="Child on play" width={100} />
            </div>
            <ul className={css.imageList}>
              <li>
                <img src={targetImg} alt="Child on play" width={50} />
              </li>
              <li>
                <img src={targetImg} alt="Child on play" width={50} />
              </li>
            </ul>
          </div>
          <form className={css.form}>
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
                name="brand"
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
              <input required name="brand" />
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
                  name="brand"
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
              <textarea required type="textarea" name="brand" />
            </label>
            <div className={css.btnWrapper}>
              <Button title={"Створити позицію"} fontSize={"28"} />
            </div>
          </form>
        </div>
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
      {isSizesModalNumOpen && (
        <Modal
          handleModalClose={handleSizesModalOpen}
          styles={sizeNumModalStyles}
        >
          <div className={css.sizesListsWrapper}>
            <ul className={css.sizesList} onClick={handleSizesClick}>
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
            </ul>
            <ul className={css.sizesList} onClick={handleSizesClick}>
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
            </ul>
          </div>
        </Modal>
      )}
    </>
  );
};

export default NewItem;
