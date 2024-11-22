import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// @ts-ignore
import Slider from 'react-slick';
import useDeviceType from "@utils/get-device-type";


// Sample Testimonial Data
const testimonials = [
    {
        name: 'Amina & Mohammed',
        role: 'Newlyweds',
        message: "We couldn't be happier with the new home built by this amazing team! From the initial design to the final touches, every detail was handled with care and precision. The team listened to our needs, and they brought our dream home to life. The quality and craftsmanship exceeded our expectations, and we feel like we're living in a true masterpiece. Highly recommend!",
        image: 'https://via.placeholder.com/100x100', // Replace with actual image path
    },
    {
        name: 'John & Sarah',
        role: 'Homeowners',
        message: "We couldn't be happier with the new home built by this amazing team! From the initial design to the final touches, every detail was handled with care and precision. The team listened to our needs, and they brought our dream home to life. The quality and craftsmanship exceeded our expectations, and we feel like we're living in a true masterpiece. Highly recommend!",
        image: 'https://via.placeholder.com/100x100', // Replace with actual image path
    },
    {
        name: 'Oluwaseun',
        role: 'Business Owner',
        message: "We couldn't be happier with the new home built by this amazing team! From the initial design to the final touches, every detail was handled with care and precision. The team listened to our needs, and they brought our dream home to life. The quality and craftsmanship exceeded our expectations, and we feel like we're living in a true masterpiece. Highly recommend!",
        image: 'https://via.placeholder.com/100x100', // Replace with actual image path
    },
];


export default function TestimonialSlider() {
    const deviceType = useDeviceType();
    
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: deviceType === "phone" ? 1 : 3,
        slidesToScroll: 1,
        autoplay: true, // Auto-play for the slider
        autoplaySpeed: 3000, // Speed of auto-play (3 seconds)
    };

    return (
        <div className="testimonial-slider w-[90%] mx-auto py-[50px]">
            <Slider className="flex !gap-2" {...settings}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className={`${index % 2 !== 0 ? "bg-primary text-white" : "bg-grey text-black"}  p-5 flex flex-col rounded-lg`}>
                        <div className="flex items-center gap-2 pb-2">
                            <div className="w-14 h-14 rounded-full overflow-hidden items-center">
                                <img src={testimonial.image} alt={`${testimonial.name}'s testimonial`} />
                            </div>
                            <div className="testimonial-content">
                                <h3 className="text-md font-bold">{testimonial.name}</h3>
                                <p className="text-xs">{testimonial.role}</p>
                            </div>
                        </div>
                        <div className="text-sm">
                            <p>{testimonial.message}</p>
                            <hr className="my-4"/>
                            <button>Let's see {testimonial.name} Gallery</button>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};