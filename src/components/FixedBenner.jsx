import benner from '../assets/home/chef-service.jpg'

const FixedBenner = ({title, des, img}) => {
    return (
        <div style={{backgroundImage:` url(${img})`}} className='bg-fixed bg-cover bg-center md:p-24 p-7'>
        <div className=' text-black bg-white/70 text-center md:px-32 md:py-24 p-7'>
            <h2 className='md:text-4xl text-3xl mb-6 uppercase'>{title}</h2>
            <p>{des}</p>
        </div>
    </div>
    );
};

export default FixedBenner;