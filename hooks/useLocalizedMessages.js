import { useCallback } from 'react';
import { useIntl } from 'react-intl';

/**
 * returns a message (string) with or without variable Hello {name}
 * ex localize('greeting', {name: John}) = 'Hello John'
 * @param {string} id Id of the message
 * @param {Object} props variables to show in string
 *
*/
export default function useLocalizedMessages() {
    let intl = useIntl();
    const localize = useCallback((id, props = {}) => (intl.formatMessage({ id }, { ...props })), [intl]);
    return localize;
}
