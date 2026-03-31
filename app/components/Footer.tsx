import Image from "next/image";

export default function Footer() {
  const currentDomain = process.env.NEXT_PUBLIC_WP_DOMAIN;

  return (
    <footer
      className="py-8 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("http://admin.voraevents.com/wp-content/uploads/2026/03/bg-footer-scaled.png")' }}>
      <div className="flex flex-col md:flex-row justify-between md:max-w-4xl mx-auto">
        <div className="pb-8 md:pb-0">
          <Image
            src={`${currentDomain}wp-content/uploads/2026/03/logo-vora.png`}
            alt="Logo footer"
            className="h-10 w-full object-contain"
            width={490}
            height={110}
          />
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
          <div className="flex gap-2 items-center">
            <img
              src={`${currentDomain}wp-content/uploads/2026/03/ico-wsp.png`}
              className="h-6"
              alt=""
            />
            <a href="#" className="font-medium text-white text-lg">321 439 2546</a>
          </div>
          <div className="flex items-center gap-6">
            <a href="#">
              <img
                src={`${currentDomain}wp-content/uploads/2026/03/ico-instagram.png`}
                className="h-6"
                alt=""
              />
            </a>
            <a href="#">
              <img
                src={`${currentDomain}wp-content/uploads/2026/03/ico-yt.png`}
                className="h-6"
                alt=""
              />
            </a>
            <a href="#">
              <img
                src={`${currentDomain}wp-content/uploads/2026/03/ico-fb.png`}
                className="h-6"
                alt=""
              />
            </a>
            <a href="#">
              <img
                src={`${currentDomain}wp-content/uploads/2026/03/ico-tiktok.png`}
                className="h-6"
                alt=""
              />
            </a>
          </div>
          <div>
            <span className="text-white font-medium text-lg">@vora_events</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
