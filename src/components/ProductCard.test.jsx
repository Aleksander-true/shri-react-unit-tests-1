import { render, screen, within } from "@testing-library/react";
import { queryByText } from "@testing-library/dom";
import { ProductCard } from "./ProductCard";

describe("Компонент «Карточка товара»", () => {
  it("Лэйбл хит отображается при isHit=true", () => {
    let bouquet = {
      isHit: true,
    };

    render(<ProductCard {...bouquet} />);

    expect(screen.queryByTestId("product-card__hit")).toBeInTheDocument();
  });

  it("Лэйбл хит НЕ отображается при isHit=false", () => {
    let bouquet = {
      isHit: false,
    };

    render(<ProductCard {...bouquet} />);

    expect(screen.queryByTestId("product-card__hit")).not.toBeInTheDocument();
  });

  it("Лэйбл СКИДКА отображается при isSale=true", () => {
    let bouquet = {
      isSale: true,
    };

    render(<ProductCard {...bouquet} />);

    expect(screen.queryByTestId("product-card__sale")).toBeInTheDocument();
  });

  it("Лэйбл СКИДКА НЕ отображается при isSale=false", () => {
    let bouquet = {
      isSale: false,
    };

    render(<ProductCard {...bouquet} />);

    expect(screen.queryByTestId("product-card__sale")).not.toBeInTheDocument();
  });

  it("Отображается старая цена при наличии oldPrice  ", () => {
    let bouquet = {
      oldPrice: 555,
    };

    render(<ProductCard {...bouquet} />);

    expect(screen.queryByTestId("product-card__oldPrice").textContent).toBe(
      "555 ₽"
    );
  });

  it("Не отображается старая цена при наличии oldPrice  ", () => {
    let bouquet = {
      oldPrice: undefined,
    };

    render(<ProductCard {...bouquet} />);

    expect(screen.queryByTestId("product-card__oldPrice").textContent).toBe("");
  });

  it("При отсутсвии imageUrl подставляется ссылка по умолчанию ", () => {
    let bouquet = {
      defaultImg: "/default-url",
      imageUrl: undefined,
    };

    render(<ProductCard {...bouquet} />);

    expect(screen.queryByAltText("букет").src).toMatch("/default-url");
  });

  it("Если количество товара отрцателен или ноль, блокируются кнопки Купить и Положить в Корзину ", () => {
    let bouquet = {
      flowersCount: 0,
    };

    render(<ProductCard {...bouquet} />);

    expect(screen.queryByText("В корзину").disabled).toBe(true);
    expect(screen.queryByText("Купить сразу").disabled).toBe(true);
  });
});
