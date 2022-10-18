import styles from "./ProductCard.module.scss";
import DEFAULT_IMG_URL from "../assets/Image.jpg";
import EmptyHeart from "../assets/emptyFavoriteIcon.svg";
import FillHeart from "../assets/fillHeartIcon.svg";

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
  defaultImg = DEFAULT_IMG_URL,
}) => {
  const imgSrc = imageUrl || defaultImg;
  const favoriteSrc = isFavorite ? FillHeart : EmptyHeart;
  return (
    <div className={styles.card} data-testid="product-card">
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={imgSrc} alt="букет" />
        <div className={styles.lable}>
          {isHit && (
            <span className={styles.hit} data-testid="product-card__hit">
              хит
            </span>
          )}
          {isSale && (
            <span className={styles.sale} data-testid="product-card__sale">
              скидка
            </span>
          )}
        </div>
        <img className={styles.favoriteIcon} src={favoriteSrc} alt="избраное" />
      </div>
      <div className={styles.textBlock}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.price}>
          <span className={styles.currentPrice}>
            {currentPrice ? `${currentPrice} ₽` : ""}
          </span>
          <span
            className={styles.oldPrice}
            data-testid="product-card__oldPrice"
          >
            {oldPrice ? `${oldPrice} ₽` : ""}
          </span>
        </div>
        <div className={styles.description}>
          {flowersCount > 0 && (
            <span className={styles.flowersCount}>{flowersCount} шт.</span>
          )}
          {bouquetHeight > 0 && (
            <span className={styles.bouquetHeight}>{bouquetHeight} см</span>
          )}
          {bouquetWidth > 0 && (
            <span className={styles.flowersCount}>{bouquetWidth} см</span>
          )}
        </div>
      </div>
      <div className={styles.buttonGroup}>
        <button className={styles.cartBtn} disabled={flowersCount <= 0}>
          В корзину
        </button>
        <button className={styles.quickSaleBtn} disabled={flowersCount <= 0}>
          Купить сразу
        </button>
      </div>
    </div>
  );
};
