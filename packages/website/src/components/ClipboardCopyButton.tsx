import React, { useState } from 'react';

const ClipboardCopyButton = ({ copyText }) => {
    const [isCopied, setIsCopied] = useState(false);

    async function copyTextToClipboard(text) {
        if ('clipboard' in navigator) {
            return await navigator.clipboard.writeText(text);
        } else {
            return document.execCommand('copy', true, text);
        }
    }

    const handleCopyClick = () => {
        // Asynchronously call copyTextToClipboard
        copyTextToClipboard(copyText)
            .then(() => {
                // If successful, update the isCopied state value
                setIsCopied(true);
                setTimeout(() => {
                    setIsCopied(false);
                }, 1500);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <button
                onClick={handleCopyClick}
                className={`py-1 px-3 ${
                    isCopied ? 'bg-raidRed' : 'bg-stone-900'
                }  rounded text-xs hover:bg-stone-700`}
            >
                {isCopied ? 'Copied!' : 'Copy'}
            </button>
        </div>
    );
};

export default ClipboardCopyButton;
