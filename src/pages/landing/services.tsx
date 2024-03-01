interface Hospital {
  name: string;
  address: string;
  logo: string;
}

const Services = () => {
  let hospitals: Hospital[] = [
    {
      name: 'Oxygen Klinika',
      address: 'Tebriz kucesi, Baki',
      logo: 'https://cdn.doctortap.az/uploads/clinic/clinic_20220827102536.jpg'
    },
    {
      name: 'Oxygen Klinika',
      address: 'Tebriz kucesi, Baki',
      logo: 'https://cdn.doctortap.az/uploads/clinic/clinic_20220827102536.jpg'
    },
    {
      name: 'Oxygen Klinika',
      address: 'Tebriz kucesi, Baki',
      logo: 'https://cdn.doctortap.az/uploads/clinic/clinic_20220827102536.jpg'
    }
  ]

  return <div className="bg-indigo-200 p-4">
    <h2 className="text-4xl font-bold text-black mb-4 flex justify-center">Access to services tailored for you</h2>
    <p className="text-lg mb-4 text-black flex justify-center">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a documen</p>

    <div className="hospital-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 m-8">
      {hospitals.map((hospital, i) => (
        <div key={i} className="bg-white p-4 shadow-lg rounded-md border border-primary">
          <img src={hospital.logo} className="mx-auto mb-2 max-w-full h-auto"/>
          <h3 className="text-primary font-bold text-lg mb-1">{hospital.name}</h3>
          <p className="text-text">{hospital.address}</p>
        </div>
      ))}
    </div>
  </div>;
};

export default Services;
