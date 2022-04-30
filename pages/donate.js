/* eslint-disable @next/next/no-img-element */
import PTCHeader from "../components/PTCHeader";
import Image from "next/image";
import qrcode from '../public/paypal_donat.png'
export default function Donate() {
  return (
    <>
      <section className="donate-section">
    <h1>Donate</h1>
    <p>
      Donate to Patrick Tillman on Paypal
    </p>

      <form action="https://www.paypal.com/donate" method="post" target="_top">
<input type="hidden" name="business" value="8HZJ994B4QJ9Q" />
<input type="hidden" name="no_recurring" value="0" />
<input type="hidden" name="currency_code" value="USD" />
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
{/* // eslint-disable-next-line @next/next/no-img-element */}
<img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
</form>
<h2>Use Your Phone&apos;s camera to Donate</h2>
<p>Open your camera, scan the QR code below, and give online. </p>
<Image
              // layout="fill"
              width={250}
              height={250}
              // className="navLogo"
              src={qrcode}
              alt="Pat Tillman Logo"
            />

      </section>

      <style jsx>{`
        section.donate-section {
          padding: 2rem 0;

          display: block;
          text-align: center;
          max-width: 1200px;
          margin: auto;
        }
      `}</style>
    </>
  );
}
