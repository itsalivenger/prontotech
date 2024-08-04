import ImageText from './ImageText';
import ThinkStation from './ThinkStation'

const imgSrc = "./images/mockup.jpg";
const title = "Explore products at Lenovo";
const text = `The Legion Pro 7i Gen 9 gaming laptop is an esports beast, 
powered by the revolutionary LA-2Q + LA1 AI chip and Lenovo AI Engine+, 
making it smarter than ever.  In real-time, Lenovo AI Engine+ deploys a 
Smart Engine to optimize your game for maximum FPS by leveraging a host 
of system sensors across key components.  Further, Smart Engine gets better 
over time, ensuring your system can reach maximum performance to stay ahead 
of the competition, in and out of the arena, from the moment you unbox and 
for years to come.`;

function ProductOverview() {
    return (
        <div>
            <ThinkStation imageSrc={'./images/ThinkStation.jpg'} />
            <ImageText imageSrc={imgSrc} text={text} title={title} />
            <ThinkStation reverse={true} imageSrc={'./images/mockup2.webp'} />
        </div>
    );
}

export default ProductOverview;