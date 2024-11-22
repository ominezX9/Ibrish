import CurrencyFormatter from "@utils/currency-formatter";
import { Link } from "react-router-dom";

type ClickableCardProps = {
    title: string,
    description: string,
    price: number,
    image: string,
    link: string,
}
export default function ClickableCard({
    title,
    description,
    price,
    image,
    link
} : ClickableCardProps) {
    return (
        <Link to={link} className="card basis-1/4">
            <div className="card-image relative bg-lightgrey rounded-lg overflow-hidden">
                <div className="inline absolute text-white py-2 px-5 price-tag bg-primary rounded-full top-5 left-3">
                    &#x20A6;{CurrencyFormatter(price)}/Month
                </div>
                <img src={image} alt="product_image" />
            </div>
            <div className="card-content">
                <h3 className="text-lg font-bold py-2">
                    {title}
                </h3>
                <p className="text-sm pr-3">
                    {description}
                </p>
            </div>
        </Link>
    )
}