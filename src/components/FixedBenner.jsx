import benner from '../assets/home/chef-service.jpg'

const FixedBenner = ({title, des, img, bg, height, text}) => {
    return (
        <div style={{backgroundImage:` url(${img})`}} className={`bg-fixed bg-cover flex justify-center items-center bg-center md:p-24 p-7 ${height} ${text || "text-black"}`}>
        <div className={` text-center md:px-32 md:py-24 p-7 ${bg || "bg-white/70"}`}>
            <h2 className='md:text-4xl text-3xl mb-6 uppercase'>{title}</h2>
            <p>{des}</p>
        </div>
    </div>
    );
};

export default FixedBenner;