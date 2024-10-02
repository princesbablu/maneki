import { useState } from "react";
import { LuCopy, LuCopyCheck } from "react-icons/lu";

export default function Token({address="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"}) {
    const token = address;
    const [copied, setCopied] = useState(false);
    const copyHandle = () => {
        navigator.clipboard.writeText(token);
        setCopied(true);
        setTimeout(() => {
            setCopied(false)
        }, 3000)
    }
    return (
        <div className="token d-flex align-items-center justify-content-between position-relative z-1">
            <p><span>CA:</span> {token}</p>
            <button onClick={() => copyHandle()} className="p-0">
                {copied ? <LuCopyCheck /> : <LuCopy />}
            </button>
        </div>
    )
}
