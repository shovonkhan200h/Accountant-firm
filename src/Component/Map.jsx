import React from 'react'

const Map = () => {
  return (
    <section className="container mx-auto">
    <div className="flex justify-center">
      <div className="w-full max-w-4xl h-[200px] border-2 border-gray-300 rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.063322034091!2d0.0217188777825575!3d51.54873787182268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487602bc86e01271%3A0xf95ba7893eb12df5!2sM%20N%20Accountancy%20%26%20Co!5e0!3m2!1sen!2suk!4v1726255112091!5m2!1sen!2suk"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        />
      </div>
    </div>
  </section>
  )
}

export default Map

