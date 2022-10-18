import styles from "./ProductCard.module.scss";
import DEFAULT_IMG_URL from "../assets/Image.jpg";
import EmptyHeart from "../assets/emptyFavoriteIcon.svg";
import FillHeart from "../assets/fillHeartIcon.svg";
import cn from "classnames";

export const ProductCard = ({
  bouquetHeight,
  bouquetWidth,
  currentPrice,
  flowersCount,
  id,
  imageUrl,
  isFavorite,
  isHit,
  isSale,
  oldPrice,
  title,
}) => {
  const imgSrc = imageUrl || DEFAULT_IMG_URL;
  const favoriteSrc = isFavorite ? FillHeart : EmptyHeart;
  return (
    <div className={styles.card} data-testid="product-card">
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={imgSrc} alt="букет" />
        <div className={styles.lable}>
          {isHit && <span className={styles.hit}>хит</span>}
          {isSale && <span className={styles.sale}>скидка</span>}
        </div>
        <img className={styles.favoriteIcon} src={favoriteSrc} alt="избраное" />
      </div>
      <div className={styles.textBlock}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.price}>
          <span className={styles.currentPrice}>{currentPrice}</span>
          <span className={styles.oldPrice}>{oldPrice}</span>
        </div>
        <div className={styles.description}>
          <span className={styles.flowersCount}>{flowersCount} шт.</span>
          <span className={styles.bouquetHeight}>{bouquetHeight} см</span>
          <span className={styles.flowersCount}>{bouquetWidth} см</span>
        </div>
      </div>
      <div className={styles.buttonGroup}>
        <button className={styles.cartBtn}>В корзину</button>
        <button className={styles.quickSaleBtn}>Купить сразу</button>
      </div>
    </div>
  );
};
