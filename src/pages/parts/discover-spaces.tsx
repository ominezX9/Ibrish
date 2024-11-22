import ClickableCard from "@components/shared/clickable-card";
import { Products } from "@services/api";


export default function DiscoverSpaces() {

    return (
        <div>
            <div className="pb-5">
                <h2 className="tracking-tighter text-3xl text-center pb-2">Discover Spaces Designed for Living <br />Working, and Thriving</h2>
                <p className="text-lightgrey text-md text-center">Explore our projects, from luxurious homes to cutting-edge commercial spaces.</p>
            </div>
            <div>
                <div className="cards flex justify-center flex-wrap gap-5">
                    {/* Add your cards here */}
                    {
                        Products.map((item, i) => (
                                <ClickableCard
                                    key={i}
                                    title={item.title}
                                    description={item.description}
                                    price={item.price}
                                    image={item.image}
                                    link={`/product/${item.id}`}
                                />
                            )
                        )
                    }
                </div>
            </div>
        </div>
    )
}
