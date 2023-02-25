import React, { useContext } from 'react';
import { BuilderContext } from '../../../contexts/BuilderContext';

function RenderHelpText({ helpText }) {
    const { isWhiteLabelEnabled } = useContext(BuilderContext);
    if (!helpText) return null;
    const refs = ['10m.io', 'dorik.io', 'dorik.com'];
    const hasDorikRef = refs.find((ref) => helpText.includes(ref));

    if (isWhiteLabelEnabled && hasDorikRef) {
        return null;
    }

    return (
        <div
            dangerouslySetInnerHTML={{
                __html: helpText,
            }}
        />
    );
}

export default RenderHelpText;
