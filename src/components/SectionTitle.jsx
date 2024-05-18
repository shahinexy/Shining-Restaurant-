
const SectionTitle = ({subTitle, title}) => {
    return (
        <div className="sm:flex justify-center text-center mb-20">
            <div className="sm:w-2/6 ">
            <p className="text-xl font-medium text-orange-400 pb-5 border-b-2 border-gray-300">---{subTitle}---</p>
            <h2 className="sm:text-4xl text-3xl font-bold py-5 border-b-2 border-gray-300 uppercase">{title}</h2>
            </div>
        </div>
    );
};

export default SectionTitle;