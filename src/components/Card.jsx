import qr from '../assets/image-qr-code.png';

export default function Card() {
  return (
    <>
      <div className='card'>
        <div className='img'>
          <img
            className='qr'
            src={qr}
            alt='QR code with a link to re-sirect user to https://www.frontendmentor.io '
          />
        </div>
        <div className='content'>
          <div className='heading'>
            <h4>Improve your front-end skills by building projects</h4>
          </div>
          <div className='text'>
            <p>
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
