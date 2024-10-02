import Marquee from "react-fast-marquee"

export default function PageMarquee() {
  return (
    <div className="common-marquee bg-white">
        <Marquee autoFill={true} speed={60}>
            <h4 className="mb-0 text-uppercase me-3 me-lg-4">$MANEKI</h4>
        </Marquee>
    </div>
  )
}
