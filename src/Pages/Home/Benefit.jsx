const BenefitsSection = () => {
    return (
        <section className='bg-gray-100 p-8 mt-5'>
            <h2 className='text-3xl font-bold mb-6 text-center '>Who Can Benefit from TaskHub?</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {/* Person Type 1: Developers */}
                <div className='text-center'>
                    <div className='mb-2 text-2xl'>👩‍💻 👨‍💻</div>
                    <p className='font-semibold'>Developers</p>
                    <p>Stay organized with your coding tasks and project deadlines.</p>
                </div>

                {/* Person Type 2: Corporate Professionals */}
                <div className='text-center'>
                    <div className='mb-2 text-2xl'>👔</div>
                    <p className='font-semibold'>Corporate Professionals</p>
                    <p>Effortlessly manage your work tasks and projects.</p>
                </div>

                {/* Person Type 3: Bankers */}
                <div className='text-center'>
                    <div className='mb-2 text-2xl'>🏦</div>
                    <p className='font-semibold'>Bankers</p>
                    <p>Organize your financial tasks and deadlines efficiently.</p>
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;
