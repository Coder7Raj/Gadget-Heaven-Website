const Footer = () => {
  return (
    <div className="bg-white mt-6">
      <footer className="container mx-auto">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-center mb-3">Gadget Heaven</h1>
          <p className="text-center">
            Gadget Heaven is a premier online destination for the latest and
            most innovative tech gadgets, offering a wide range of products from
            smartphones and laptops to wearables and accessories. With a
            commitment to providing top-quality tech and so on.
          </p>
        </div>
        <div className="divider"></div>
        <div className="footer text-base-content p-6 lg:flex-row md:flex-row flex-col justify-around items-center">
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Customer Support</a>
            <a className="link link-hover">Fast Shipping</a>
            <a className="link link-hover">Expert Reviews</a>
            <a className="link link-hover">Product Sales</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
