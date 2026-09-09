/** Remove backend debug OTPs before any response reaches a browser or log. */
export function redactAuthResponse(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(redactAuthResponse);
  if (!value || typeof value !== 'object') return value;
  return Object.fromEntries(Object.entries(value).filter(([key]) =>
    !['_dev_otp', 'otp', 'otp_code', 'verification_code'].includes(key.toLowerCase())
  ).map(([key, item]) => [key, redactAuthResponse(item)]));
}
