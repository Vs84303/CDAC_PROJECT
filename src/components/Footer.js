// import React from 'react';
// import { Link } from 'react-router-dom';

// function Footer() {
//   const styles = {
//     footer: {
//       background: '#f8f9fa',
//       color: '#333',
//       padding: '1.5rem',
//       borderTop: '1px solid #ddd',
//       textAlign: 'center',
//       marginTop: 'auto'
//     },
//     brand: {
//       fontSize: '1.2rem',
//       fontWeight: 'bold',
//       color: '#0d6efd',
//       textDecoration: 'none'
//     },
//     link: {
//       display: 'block',
//       color: '#6c757d',
//       textDecoration: 'none',
//       fontSize: '0.95rem',
//       margin: '0.3rem 0'
//     }
//   };

//   return (
//     <footer style={styles.footer}>
//       <div>
//         <Link to="/" style={styles.brand}>
//           <span style={{ color: '#ff5722' }}>R</span>apid
//           <span style={{ color: '#ff5722' }}>R</span>each
//         </Link>
//       </div>
//       <div style={{ marginTop: '0.5rem' }}>
//         <Link to="/tracking" style={styles.link}>Tracking</Link>
//         <Link to="/shipping" style={styles.link}>Shipping</Link>
//         <Link to="/support" style={styles.link}>Support</Link>
//         <Link to="/aboutus" style={styles.link}>About Us</Link>
//         <Link to="/privacypolicy" style={styles.link}>Privacy Policy</Link>
//         <Link to="/termsandconditions" style={styles.link}>Terms & Conditions</Link>
//       </div>
//       <div style={{ fontSize: '0.85rem', marginTop: '0.7rem' }}>
//         © 2025 RapidReach, Inc. All rights reserved.
//       </div>
//     </footer>
//   );
// }
// export default Footer;

// import React from 'react';
// import './Footer.css';
// import { Link } from 'react-router-dom';

// const Footer = () => {
//   return (
//     <footer className="hlink text-white py-4">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-4 mb-3">
//             <h4 className="fw-bold">RapidReach</h4>
//           </div>
//           <div className="col-md-4 mb-3">
//             <h5>This Site</h5>
//             <ul className="list-unstyled">
//               <li><Link to="/tracking" className="text-white">Tracking</Link></li>
//               <li><Link to="/shipping" className="text-white">Shipping</Link></li>
//               <li><Link to="/support" className="text-white">Support</Link></li>
//             </ul>
//           </div>
//           <div className="col-md-4 mb-3">
//             <h5>Our Company</h5>
//             <ul className="list-unstyled">
//               <li><Link to="/aboutus" className="text-white">About Us</Link></li>
//               <li><Link to="/privacypolicy" className="text-white">Privacy Policy</Link></li>
//               <li><Link to="/termsandconditions" className="text-white">Terms and Conditions</Link></li>
//             </ul>
//           </div>
//         </div>
//         <hr className="border-light" />
//         <p className="text-center small mb-0">© 2025 RapidReach. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='container-fluid bg-info' data-bs-theme='light'>
      <div className='container'>
        <footer className='py-5'>
          <div className='row'>
            <h3 className='mb-4'><Link to={'/'} className='hlink p-0 text-black'><span>R</span>apid<span>R</span>each</Link></h3> 
            {/* <h3 className='mb-4'><Link to={'/'} className='hlink p-0 text-black'>RapidReach</Link></h3> */}
           
            <div className='col-6 col-md-2 mb-3'>
              <h5>This Site</h5>
              <ul className='nav flex-column'>
                {/* <li className='nav-item mb-2'><Link to={'/'} className='nav-link p-0 text-muted'>Home</Link></li> */}
                <li className='nav-item mb-2'><Link to={'/tracking'} className='nav-link p-0 text-muted'>Tracking</Link></li>
                <li className='nav-item mb-2'><Link to={'/shipping'} className='nav-link p-0 text-muted'>Shipping</Link></li>
                <li className='nav-item mb-2'><Link to={'/support'} className='nav-link p-0 text-muted'>Support</Link></li>
              </ul>
            </div>

            <div className='col-6 col-md-2 mb-3'>
              <h5>Our Company</h5>
              <ul className='nav flex-column'>
                <li className='nav-item mb-2'><Link to={'/aboutus'} className='nav-link p-0 text-muted'>About Us</Link></li>
                <li className='nav-item mb-2'><Link to={'/privacypolicy'} className='nav-link p-0 text-muted'>Privacy Policy</Link></li>
                <li className='nav-item mb-2'><Link to={'/termsandconditions'} className='nav-link p-0 text-muted'>Terms And Conditions</Link></li>
              </ul>
            </div>
          </div>

          <div className='d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top'>
            <p>© 2025 Company, Inc. All rights reserved.</p>
          </div>
        </footer>

        
      </div>
    </div>
  )
}

export default Footer
