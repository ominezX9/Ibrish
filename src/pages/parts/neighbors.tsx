import TestimonialSlider from "@components/shared/testimonial-slider";


export default function Neighbors() {
    return (
        <div>
            <h1 className="text-4xl text-center py-10 mb-5 leading-10">
                Meet the Neighbors - Discover Stories <br />
                from Our Happy Residents
            </h1>
            <div className="overflow-hidden">
                <TestimonialSlider />
            </div>
        </div>
    )
}
