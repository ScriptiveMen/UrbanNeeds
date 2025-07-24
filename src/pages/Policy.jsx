import React from "react";
import String from "../components/String";

const Policy = () => {
  return (
    <div className="min-h-screen w-full bg-black  pt-20 md:pt-30">
      <div className="flex flex-col items-start justify-center gap-5 pb-20 md:pb-30">
        <div className="left relative  w-full px-5 md:px-15  flex flex-col items-start gap-4">
          <p className="text-white font-thin text-sm md:text-xl">
            We believe in transparency. Explore how we work, protect, and serve.
          </p>
          <div className="main-head pb-20 md:pb-40">
            <h1 className="text-[12vw] md:text-[5vw] tracking-tight font-light leading-[1.1] text-white">
              Our policies <br /> Tailored for you
            </h1>
          </div>
          <div className="absolute bottom-0 w-[90%] md:w-full">
            <String />
          </div>
        </div>

        <div className="policies  w-full px-5 md:px-15 flex flex-col gap-3 md:gap-20">
          <div className="sec1 flex flex-col gap-2">
            <h1 className="capitalize text-2xl font-machina text-white md:text-4xl font-bold pb-2 md:pb-5">
              Refund Policy
            </h1>
            <div className="policy h-full w-full px-5 md:px-20 flex flex-col md:flex-row flex-wrap items-center text-white justify-center md:gap-y-10 md:gap-x-20">
              <div className="space-y-6 text-base text-white leading-relaxed">
                <p>
                  <strong>1. Exchanges Period:</strong> Exchanges are accepted
                  within 2 days of delivery. The items must be in new, unused
                  condition and properly packed before return is initiated.
                </p>

                <p>
                  <strong>2. Process:</strong> To initiate an exchange, kindly
                  contact us and share clear proof photos of the received items.
                  If applicable, exchange charges will be communicated to you. A
                  pickup will be scheduled within 2–3 working days. Once the
                  returned item reaches our warehouse and passes quality checks,
                  your exchange product will be shipped.
                </p>

                <p>
                  <strong>3. Conditions Applicable for Exchange:</strong> SALE
                  orders, as well as shades and accessories, are strictly
                  non-exchangeable and non-returnable. If you have received the
                  correct size as per your order but the fit is not right, an
                  exchange can still be done — however, charges will apply.
                </p>

                <p>
                  <strong>4. Cancellations:</strong> SALE items cannot be
                  cancelled under any circumstance. For regular orders, you can
                  contact us to cancel, but if your order has already been
                  shipped, cancellation may not be possible.
                </p>

                <p>
                  <strong>5. Refunds:</strong> We do not offer refunds. Only
                  exchanges are available in accordance with the above terms.
                </p>
              </div>
            </div>
          </div>

          <div className="sec2 flex flex-col gap-2">
            <h1 className="capitalize text-2xl font-machina text-white md:text-4xl font-bold pb-2 md:pb-5">
              Shipping Policy
            </h1>
            <div className="policy h-full w-full px-5 md:px-20 flex flex-col md:flex-row flex-wrap items-center text-white justify-center md:gap-y-10 md:gap-x-20">
              <div className="space-y-6 text-base text-white leading-relaxed">
                <p>
                  <strong>1. Is Shipping Free?</strong> Yes, shipping is
                  completely free on all orders — no hidden charges or minimum
                  cart value required.
                </p>

                <p>
                  <strong>2. When Will I Receive My Order?</strong> We process
                  and dispatch your orders directly from our warehouses. Due to
                  high demand, you can expect your delivery within 7 to 15 days.
                  Rest assured, we always aim to get your order to you as fast
                  as possible.
                </p>

                <p>
                  <strong>3. Can I Track My Order?</strong> Absolutely. Once
                  your order is placed, we’ll share an AWB (Air Waybill)
                  tracking number with you within 1–2 days. You can use it on
                  our <span className="underline">Tracking Page</span> to check
                  your shipment’s progress. Still confused? Reach out to us via
                  email or DM anytime.
                </p>

                <p>
                  <strong>
                    4. Why Is My Order Being Shipped in Different Packages?
                  </strong>{" "}
                  Sometimes, items in your order may be fulfilled by different
                  warehouses — depending on which one can ship the item fastest.
                  To avoid delays, we may split your order and ship items
                  separately. This ensures you get your products quicker without
                  waiting for everything to be in stock together.
                </p>

                <p>
                  <strong>5. What If My Order Gets Stuck or Lost?</strong> We
                  ship all our orders with insured delivery. While rare, if your
                  order gets lost, stuck, or returned during transit — don’t
                  worry. We’ll send a fresh replacement with faster shipping and
                  tracking at no extra cost. For more details, refer to our{" "}
                  <span className="underline">Returns & Exchange Policy</span>.
                </p>
              </div>
            </div>
          </div>

          <div className="sec3 flex flex-col gap-2">
            <h1 className="capitalize text-2xl font-machina text-white md:text-4xl font-bold pb-2 md:pb-5">
              Terms of service
            </h1>
            <div className="policy h-full w-full px-5 md:px-20 flex flex-col md:flex-row flex-wrap items-center text-white justify-center md:gap-y-10 md:gap-x-20">
              <div className="space-y-6 text-base text-white leading-relaxed">
                <p>
                  <strong>1.OVERVIEW</strong>
                  <br />
                  This website is operated by Urban Needs India. The terms “we”,
                  “us” and “our” refer to Urban Needs India. By visiting our
                  site and purchasing products, you agree to these Terms of
                  Service. Please review these carefully.
                </p>

                <p>
                  <strong>2.SECTION 1 - ONLINE STORE TERMS</strong>
                  <br />
                  By accessing our store, you confirm that you are of legal age
                  or have consent to use this site. Use of our products for
                  unlawful purposes or violation of any law is prohibited.
                </p>

                <p>
                  <strong>3.SECTION 2 - GENERAL CONDITIONS</strong>
                  <br />
                  We reserve the right to refuse service and may transfer
                  unencrypted content except for credit card information. You
                  must not reproduce, duplicate, or exploit our service.
                </p>

                <p>
                  <strong>4.SECTION 3 - ACCURACY OF INFORMATION</strong>
                  <br />
                  We are not liable if any information on the site is inaccurate
                  or outdated. You should consult primary sources for important
                  decisions.
                </p>

                <p>
                  <strong>5.SECTION 4 - MODIFICATIONS TO THE SERVICE</strong>
                  <br />
                  We may modify or discontinue services without notice and are
                  not liable for any changes.
                </p>

                <p>
                  <strong>6.SECTION 5 - PRODUCTS AND SERVICES</strong>
                  <br />
                  Products available online are subject to availability and
                  returns or exchanges are governed by our refund policy. We
                  reserve the right to limit sales and modify product
                  descriptions.
                </p>

                <p>
                  <strong>7.SECTION 6 - ACCURACY OF BILLING</strong>
                  <br />
                  We may refuse or cancel any order. You agree to provide
                  accurate and current information for all transactions.
                </p>

                <p>
                  <strong>8.SECTION 7 - THIRD-PARTY LINKS</strong>
                  <br />
                  Our website may contain third-party links, and we are not
                  responsible for their content or transactions.
                </p>

                <p>
                  <strong>9.SECTION 8 - USER COMMENTS</strong>
                  <br />
                  You agree that any comments submitted may be used by us
                  without restriction. We are not obligated to maintain or
                  compensate for comments.
                </p>

                <p>
                  <strong>10.SECTION 9 - PERSONAL INFORMATION</strong>
                  <br />
                  The submission of personal data is governed by our privacy
                  policy.
                </p>

                <p>
                  <strong>11.SECTION 10 - PROHIBITED USES</strong>
                  <br />
                  You are prohibited from using the site for unlawful purposes,
                  including but not limited to spamming, hacking, or infringing
                  on others' rights.
                </p>

                <p>
                  <strong>12.SECTION 11 - DISCLAIMER OF WARRANTIES</strong>
                  <br />
                  The service is provided "as is" without any warranties. We do
                  not guarantee that the service will be error-free or
                  uninterrupted.
                </p>

                <p>
                  <strong>13.SECTION 12 - LIMITATION OF LIABILITY</strong>
                  <br />
                  We are not liable for any damages arising from the use of the
                  service, including direct or indirect losses.
                </p>

                <p>
                  <strong>14.SECTION 13 - INDEMNIFICATION</strong>
                  <br />
                  You agree to indemnify and hold Urban Needs India harmless
                  from any claims arising from your use of the service.
                </p>

                <p>
                  <strong>15.SECTION 14 - SEVERABILITY</strong>
                  <br />
                  If any part of these terms is deemed unenforceable, the rest
                  will remain in full effect.
                </p>

                <p>
                  <strong>16.SECTION 15 - TERMINATION</strong>
                  <br />
                  These terms remain in effect unless terminated by either
                  party. If you breach any part of these terms, we may terminate
                  your access.
                </p>

                <p>
                  <strong>17.SECTION 16 - ENTIRE AGREEMENT</strong>
                  <br />
                  These terms constitute the entire agreement between you and
                  us.
                </p>

                <p>
                  <strong>18.SECTION 17 - GOVERNING LAW</strong>
                  <br />
                  These terms are governed by the laws of India.
                </p>

                <p>
                  <strong>19.SECTION 18 - CHANGES TO TERMS</strong>
                  <br />
                  We reserve the right to modify these terms, and it is your
                  responsibility to review them regularly.
                </p>
              </div>
            </div>
          </div>

          <div className="sec4 flex flex-col gap-2">
            <h1 className="capitalize text-2xl font-machina text-white md:text-4xl font-bold pb-2 md:pb-5">
              Privacy Policy
            </h1>
            <div className="policy h-full w-full px-5 md:px-20 flex flex-col md:flex-row flex-wrap items-center text-white justify-center md:gap-y-10 md:gap-x-20">
              <div className="space-y-6 text-base text-white leading-relaxed">
                <p>
                  <strong>1. OVERVIEW</strong>
                  <br />
                  This Privacy Policy describes how
                  urbanneedsindia.myshopify.com (the “Site” or “we”) collects,
                  uses, and discloses your Personal Information when you visit
                  or make a purchase from the Site.
                </p>

                <p>
                  <strong>2. CONTACT</strong>
                  <br />
                  After reviewing this policy, if you have additional questions,
                  want more information about our privacy practices, or would
                  like to make a complaint, please contact us by e-mail at{" "}
                  <a href="mailto:info@urbanneeds.in" className="underline">
                    info@urbanneeds.in
                  </a>{" "}
                  or by mail at:
                  <br />
                  BXB Social, Jain Colony, Sunder Nagar, Ludhiana, Punjab,
                  India. PIN-141008
                </p>

                <p>
                  <strong>3. COLLECTING PERSONAL INFORMATION</strong>
                  <br />
                  When you visit the Site, we collect certain information about
                  your device, your interaction with the Site, and information
                  necessary to process your purchases. We may also collect
                  additional information if you contact us for customer support.
                  This is referred to as “Personal Information”.
                </p>

                <p>
                  <strong>4. DEVICE INFORMATION</strong>
                  <br />
                  <u>Purpose of collection:</u> to load the Site accurately for
                  you, and to perform analytics on Site usage to optimize our
                  Site.
                  <br />
                  <u>Source of collection:</u> automatically collected using
                  cookies, log files, web beacons, tags, or pixels.
                  <br />
                  <u>Disclosure:</u> shared with Shopify and BXB Socials.
                  <br />
                  <u>Data collected:</u> browser version, IP address, time zone,
                  cookie info, pages viewed, search terms, interaction.
                </p>

                <p>
                  <strong>5. ORDER INFORMATION</strong>
                  <br />
                  <u>Purpose of collection:</u> to provide products, process
                  payments, arrange shipping, confirmations, and customer
                  service.
                  <br />
                  <u>Source of collection:</u> directly from you.
                  <br />
                  <u>Disclosure:</u> shared with Shopify, Shiprocket, Razorpay,
                  and BXB Social Enterprises.
                  <br />
                  <u>Data collected:</u> name, billing/shipping address, payment
                  info, email, phone number.
                </p>

                <p>
                  <strong>6. CUSTOMER SUPPORT INFORMATION</strong>
                  <br />
                  <u>Purpose of collection:</u> to provide customer support.
                  <br />
                  <u>Source of collection:</u> collected from you.
                  <br />
                  <u>Disclosure:</u> none.
                  <br />
                  <u>Data collected:</u> varies by support request.
                </p>

                <p>
                  <strong>7. SHARING PERSONAL INFORMATION</strong>
                  <br />
                  We share your data with service providers to fulfill
                  contracts. Shopify is our eCommerce platform. You can read
                  Shopify’s policy at{" "}
                  <a
                    href="https://www.shopify.com/legal/privacy"
                    className="underline"
                  >
                    shopify.com/legal/privacy
                  </a>
                  . We may also share info to comply with law or protect rights.
                </p>

                <p>
                  <strong>8. BEHAVIOURAL ADVERTISING</strong>
                  <br />
                  We use your info to show relevant ads. Tools we use include:
                  <br />• Google Analytics —{" "}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    className="underline"
                  >
                    opt out here
                  </a>
                  <br />
                  • Shopify Audiences
                  <br />
                  • You can opt out of targeted ads:
                  <br />
                  FACEBOOK -{" "}
                  <a
                    href="https://www.facebook.com/settings/?tab=ads"
                    className="underline"
                  >
                    facebook.com/settings
                  </a>
                  <br />
                  GOOGLE -{" "}
                  <a
                    href="https://www.google.com/settings/ads/anonymous"
                    className="underline"
                  >
                    google.com/settings
                  </a>
                  <br />
                  BING -{" "}
                  <a
                    href="https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads"
                    className="underline"
                  >
                    bingads.microsoft.com
                  </a>
                  <br />
                  Or visit{" "}
                  <a href="https://optout.aboutads.info/" className="underline">
                    optout.aboutads.info
                  </a>
                </p>

                <p>
                  <strong>9. USING PERSONAL INFORMATION</strong>
                  <br />
                  We use your Personal Information to offer products, process
                  transactions, ship orders, and notify you about services and
                  offers.
                </p>

                <p>
                  <strong>10. RETENTION</strong>
                  <br />
                  We retain your Personal Information unless you request
                  deletion. See “Your Rights” for more info on deletion.
                </p>

                <p>
                  <strong>11. AUTOMATIC DECISION-MAKING</strong>
                  <br />
                  If you're an EEA resident, you can object to decisions made
                  solely by automated processing. We don’t use full automation
                  that has legal effects, but Shopify may use limited automation
                  to prevent fraud (e.g., temporary IP blacklisting).
                </p>

                <p>
                  <strong>12. COOKIES</strong>
                  <br />
                  Cookies are used to enhance your browsing. We use functional,
                  performance, advertising, and social media cookies. Cookies
                  help remember preferences and collect site usage data. Visit
                  our cookie settings page to manage them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policy;
